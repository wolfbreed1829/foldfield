"""Release verification. Python is build/test tooling only, never an app runtime."""
import collections, concurrent.futures, json, math, pathlib, subprocess, sys, tempfile, time

ROOT=pathlib.Path(__file__).resolve().parents[1]
DIST=ROOT/'dist'/'Foldfield'
checks=[]
def check(name, condition):
    if not condition: raise AssertionError(name)
    checks.append(name)
    print('PASS',name,flush=True)

def run_wave(top,sources):
    return subprocess.run([str(DIST/'wave.exe'),str(top),sources],capture_output=True,text=True,timeout=20)

def reference(top,x,y):
    d=[-1]*3072; d[y*64+x]=0; queue=collections.deque([y*64+x])
    while queue:
        v=queue.popleft(); xx=v%64; yy=v//64; neighbors=[]
        if xx:neighbors.append(v-1)
        elif top:neighbors.append((47-yy if top==2 else yy)*64+63)
        if xx<63:neighbors.append(v+1)
        elif top:neighbors.append((47-yy if top==2 else yy)*64)
        if yy:neighbors.append(v-64)
        if yy<47:neighbors.append(v+64)
        for n in neighbors:
            if d[n]<0:d[n]=d[v]+1;queue.append(n)
    return d

def transform(bank,folder):
    (folder/'travel.json').write_text(json.dumps(bank),encoding='utf-8')
    p=subprocess.run([str(DIST/'uiua.exe'),'run','--no-format',str(DIST/'field.ua')],cwd=folder,capture_output=True,text=True,timeout=20)
    if p.returncode:raise AssertionError(p.stderr)
    return json.loads((folder/'field.json').read_text())

started=time.time()
for top in range(3):
    result=run_wave(top,'0,0,1;63,47,-1')
    check(f'Pony topology {top} process exit',result.returncode==0)
    bank=json.loads(result.stdout)
    check(f'Pony topology {top} source ordering and shape',len(bank)==2 and all(len(r)==3072 for r in bank))
    expected=[[v+1 for v in reference(top,0,0)],[-(v+1) for v in reference(top,63,47)]]
    check(f'Pony topology {top} all geodesics match independent BFS',bank==expected)

for top,sources in [('3','0,0,1'),('0','64,0,1'),('0','0,48,1'),('0','0,0,0'),('0','bad'),('0',''),('0',';'.join(['0,0,1']*17))]:
    result=run_wave(top,sources)
    check(f'Invalid message {top}/{sources[:24]}',result.returncode==2 and not result.stdout.strip() and 'E_PROTOCOL' in result.stderr)

source=';'.join(f'{i*4},{i*3},{1 if i%2 else -1}' for i in range(16))
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
    results=list(ex.map(lambda _:run_wave(2,source),range(4)))
check('Four concurrent worker processes with sixteen isolated source actors',all(p.returncode==0 for p in results))
check('Actor completion order does not affect output',len({p.stdout for p in results})==1)

with tempfile.TemporaryDirectory(prefix='foldfield-tests-',dir=ROOT/'build') as tmp:
    folder=pathlib.Path(tmp)
    assert folder.resolve().is_relative_to((ROOT/'build').resolve())
    bank=json.loads(run_wave(2,'12,8,1;51,39,-1').stdout)
    field=transform(bank,folder)
    expected=[sum((1 if row[i]>0 else -1)*math.sin(.55*(abs(row[i])-1))/(1+.035*abs(row[i])) for row in bank)/math.sqrt(len(bank)) for i in range(3072)]
    check('Uiua shape and finite bounds',len(field)==3072 and all(math.isfinite(v) and abs(v)<=2 for v in field))
    check('Uiua superposition matches independent scalar reference',max(abs(a-b) for a,b in zip(field,expected))<1e-12)
    cancelled=transform(json.loads(run_wave(0,'20,20,1;20,20,-1').stdout),folder)
    check('Equal opposing waves cancel exactly',max(abs(v) for v in cancelled)==0)
    (folder/'travel.json').write_text('not-json')
    invalid=subprocess.run([str(DIST/'uiua.exe'),'run','--no-format',str(DIST/'field.ua')],cwd=folder,capture_output=True,text=True,encoding='utf-8',timeout=20)
    check('Uiua rejects malformed input',invalid.returncode!=0)

report={'passed':len(checks),'checks':checks,'seconds':round(time.time()-started,3)}
(ROOT/'build'/'test-results.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
