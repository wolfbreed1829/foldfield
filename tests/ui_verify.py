"""Tests the real Win32 window procedure through an instrumented Koka build.
No desktop automation provider is required. Never writes to the user's session.
"""
import json, os, pathlib, shutil, subprocess, tempfile, time
ROOT=pathlib.Path(__file__).resolve().parents[1]
DIST=ROOT/'dist'/'Foldfield'
checks=[]
def state_count(log):
    return sum(line.startswith('state ') for line in log.splitlines())
def check(label, value):
    if not value:raise AssertionError(label)
    checks.append(label);print('PASS',label,flush=True)
def run(folder,arg):
    # Keep background test windows independent of desktop snapping/minimization.
    si=subprocess.STARTUPINFO();si.dwFlags|=subprocess.STARTF_USESHOWWINDOW;si.wShowWindow=0
    p=subprocess.run([str(folder/'Foldfield.exe'),arg],cwd=ROOT,capture_output=True,text=True,encoding='utf-8',timeout=45,env=dict(os.environ,PATH=r'C:\Windows\System32'),startupinfo=si)
    check(arg+' exits cleanly',p.returncode==0)
    return (folder/'ui-test.log').read_text()
def fresh(parent,name):
    p=parent/name;p.mkdir()
    for name in ['wave.exe','uiua.exe','field.ua','vcruntime140.dll']:shutil.copy2(DIST/name,p/name)
    shutil.copy2(ROOT/'build'/'Foldfield-test.exe',p/'Foldfield.exe')
    return p

started=time.time()
with tempfile.TemporaryDirectory(prefix='ui-validation-',dir=ROOT/'build') as tmp:
    temp=pathlib.Path(tmp)
    assert temp.resolve().is_relative_to((ROOT/'build').resolve())
    p=fresh(temp,'normal')
    core=subprocess.run([str(p/'Foldfield.exe'),'--check-core'],capture_output=True,text=True,timeout=10)
    check('Koka handlers, bounds, protocol round trip',core.returncode==0 and core.stdout.strip()=='CORE PASS')
    log=run(p,'--self-test')
    states=[line for line in log.splitlines() if line.startswith('state ')]
    expected=['state 0 0 0 0 0','state 0 0 1 1 0','state 0 0 2 2 0','state 1 0 2 3 0','state 2 0 2 4 0','state 2 1 2 5 0','state 2 1 4 6 0','state 2 1 2 5 1','state 2 1 4 6 0','state 2 1 0 7 0','state 2 1 4 6 1']
    check('Pointer placement, topology button, effect mode, undo, redo, clear and undo-clear',states==expected)
    check('Help opens and closes without changing domain state',log.count('event 72')==2 and len(states)==11)
    bmps=list((p/'exports').glob('*.bmp'))
    if len(bmps)!=1 or bmps[0].read_bytes()[:2]!=b'BM' or bmps[0].stat().st_size<=1000000:
        (ROOT/'build'/'export-failure.log').write_text(log+'\nBITMAPS '+repr([(b.name,b.stat().st_size,b.read_bytes()[:14]) for b in bmps]))
    check('Pointer export produces a real bitmap',len(bmps)==1 and bmps[0].read_bytes()[:2]==b'BM' and bmps[0].stat().st_size>1000000)
    shutil.copy2(bmps[0],ROOT/'build'/'verified-render.bmp')
    expected_save='FOLDFIELD1|2|1|18,15,1;43,29,-1;29,22,1;34,25,1'
    check('Persisted state exactly matches gestures',(p/'session.ff').read_text()==expected_save)
    restart=run(p,'--test-restart')
    check('Restart recomputes and restores the saved model','state 2 1 4 0 0' in restart and 'Restored your saved surface.' in restart)
    check('Restart preserves exact state bytes',(p/'session.ff').read_text()==expected_save)
    (p/'session.ff').write_text('corrupt-session')
    corrupt=run(p,'--test-restart')
    check('Corrupt persistence is reported and preserved','Saved session is invalid' in corrupt and (p/'session.ff').read_text()=='corrupt-session')
    for component in ['wave.exe','uiua.exe']:
        q=fresh(temp,'missing-'+component)
        (q/component).rename(q/(component+'.disabled'))
        failure=run(q,'--test-failure')
        check('Missing '+component+' is reported','Cannot launch' in failure)
        check('Missing '+component+' cannot commit or save',state_count(failure)==1 and not (q/'session.ff').exists())
    q=fresh(temp,'malformed-field')
    (q/'field.ua').write_text('&fwa "field.json" "[1,2,3]"',encoding='utf-8')
    malformed=run(q,'--test-failure')
    check('Malformed field shape cannot enter application state','invalid field' in malformed and state_count(malformed)==1)
    q=fresh(temp,'stale-field')
    (q/'.work').mkdir();(q/'.work'/'field.json').write_text(json.dumps([0]*3072))
    (q/'field.ua').write_text('&p "no field produced"',encoding='utf-8')
    stale=run(q,'--test-failure')
    check('Successful process without fresh output cannot reuse stale field','invalid field' in stale and state_count(stale)==1)
    q=fresh(temp,'relocated package with spaces')
    pointers=run(q,'--test-pointer')
    check('Every pointer control reaches the same state as its keyboard action',[s for s in pointers.splitlines() if s.startswith('state ')]==expected)
    check('Relocated package runs without compiler or runtime entries in PATH',(q/'session.ff').read_text()==expected_save)
    q=fresh(temp,'source-limit')
    limit=run(q,'--test-limit')
    check('Seventeenth source is rejected with visible feedback','Source limit reached (16)' in limit and 'state 0 0 16 16 0' in limit and state_count(limit)==17)
    limit_images=list((q/'exports').glob('*.bmp'))
    if limit_images:shutil.copy2(limit_images[0],ROOT/'build'/'maximum-source-render.bmp')
    q=fresh(temp,'save-failure')
    (q/'session.ff.tmp').mkdir()
    save=run(q,'--test-failure')
    check('Persistence failure is visible and cannot claim success','Session could not be saved' in save and 'status Saved.' not in save and not (q/'session.ff').exists())
    (ROOT/'build'/'ui-workflow.log').write_text(log)

result={'passed':len(checks),'checks':checks,'seconds':round(time.time()-started,3),'method':'in-process Win32 event messages; no live desktop input'}
(ROOT/'build'/'ui-test-results.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2))
