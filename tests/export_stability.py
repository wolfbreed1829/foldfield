"""Targeted follow-up for an intermittent export assertion during audit."""
import json,pathlib,shutil,subprocess,tempfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
results=[]
with tempfile.TemporaryDirectory(prefix='export-stability-',dir=ROOT/'build') as tmp:
    folder=pathlib.Path(tmp).resolve()
    assert folder.is_relative_to((ROOT/'build').resolve())
    for i in range(5):
        p=folder/str(i);p.mkdir()
        for name in ['wave.exe','uiua.exe','field.ua','vcruntime140.dll']:shutil.copy2(ROOT/'dist'/'Foldfield'/name,p/name)
        shutil.copy2(ROOT/'build'/'Foldfield-test.exe',p/'Foldfield.exe')
        si=subprocess.STARTUPINFO();si.dwFlags|=subprocess.STARTF_USESHOWWINDOW;si.wShowWindow=0
        proc=subprocess.run([str(p/'Foldfield.exe'),'--self-test'],capture_output=True,timeout=45,startupinfo=si)
        log=(p/'ui-test.log').read_text()
        images=list((p/'exports').glob('*.bmp'))
        result={'run':i+1,'exit':proc.returncode,'files':[(b.name,b.stat().st_size) for b in images],'export_success':'Bitmap saved in the exports folder' in log}
        results.append(result)
        assert proc.returncode==0 and len(images)==1 and images[0].read_bytes()[:2]==b'BM' and images[0].stat().st_size>1000000 and result['export_success'],result
        print('PASS repeated native export',i+1,flush=True)
(ROOT/'build'/'export-stability-results.json').write_text(json.dumps({'passed':len(results),'runs':results},indent=2))
