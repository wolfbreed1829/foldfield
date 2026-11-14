"""Build-time Pony + Uiua pipeline for a static browser wave atlas."""
import array,gzip,hashlib,json,pathlib,struct,subprocess,sys,tempfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
out=ROOT/'web'/'dist';out.mkdir(parents=True,exist_ok=True)
banks={name:array.array('f') for name in ['kernels','cosines']}
with tempfile.TemporaryDirectory(prefix='atlas-',dir=ROOT/'build') as tmp:
    work=pathlib.Path(tmp).resolve();assert work.is_relative_to((ROOT/'build').resolve())
    for top in range(3):
        for first in range(0,48,16):
            request=';'.join(f'0,{y},1' for y in range(first,first+16))
            p=subprocess.run([str(ROOT/'build'/'pony'/'wave.exe'),str(top),request],capture_output=True,timeout=30)
            assert p.returncode==0,p.stderr
            (work/'travel.json').write_bytes(p.stdout)
            u=subprocess.run([str(ROOT/'toolchains'/'uiua'/'uiua.exe'),'run','--no-format',str(ROOT/'web'/'kernels.ua')],cwd=work,capture_output=True,timeout=30)
            assert u.returncode==0,u.stderr
            for name,values in banks.items():
                rows=json.loads((work/f'{name}.json').read_text())
                assert len(rows)==16 and all(len(r)==3072 for r in rows)
                for row in rows:values.extend(row)
for name,values in banks.items():
    assert len(values)==3*48*3072
    if sys.byteorder!='little':values.byteswap()
    data=struct.pack('<4s4I',b'FFK1',1,3,48,3072)+values.tobytes()
    compressed=gzip.compress(data,compresslevel=9,mtime=0)
    (out/f'{name}.bin.gz').write_bytes(compressed)
    manifest={'format':'FFK1','basis':'sin' if name=='kernels' else 'cos','topologies':3,'canonical_source_rows':48,'cells_per_source':3072,'values':len(values),'float':'IEEE754 float32 little endian','uncompressed_bytes':len(data),'download_bytes':len(compressed),'sha256':hashlib.sha256(data).hexdigest(),'producer':'Pony 0.78.2 graph actors -> Uiua 0.19.1 wave arrays','index':'((topology*48+sourceY)*48+targetY)*64+abs(targetX-sourceX)'}
    (out/f'{name}.json').write_text(json.dumps(manifest,indent=2))
    print(name,json.dumps(manifest))
