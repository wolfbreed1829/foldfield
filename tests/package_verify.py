"""Smoke-test the actual released binaries after ZIP extraction."""
import ctypes, json, math, os, pathlib, subprocess, tempfile, time, zipfile
from ctypes import wintypes
ROOT=pathlib.Path(__file__).resolve().parents[1]
checks=[]
def check(name,value):
    if not value:raise AssertionError(name)
    checks.append(name);print('PASS',name,flush=True)
with tempfile.TemporaryDirectory(prefix='packaged-release-',dir=ROOT/'build') as tmp:
    folder=pathlib.Path(tmp).resolve()
    assert folder.is_relative_to((ROOT/'build').resolve())
    with zipfile.ZipFile(ROOT/'dist'/'Foldfield-windows-x64.zip') as z:
        names=z.namelist()
        check('Archive contains no session, scratch files, or compiler outputs',not any(pathlib.PurePosixPath(n).name in ['session.ff','ui-test.log'] or '/.work/' in n or n.endswith(('.pdb','.bc','.obj')) for n in names))
        for item in names:assert (folder/item).resolve().is_relative_to(folder)
        z.extractall(folder)
    app=folder/'Foldfield'
    env=dict(os.environ,PATH=r'C:\Windows\System32')
    core=subprocess.run([str(app/'Foldfield.exe'),'--check-core'],capture_output=True,text=True,timeout=10,env=env)
    check('Shipped native executable core self-check',core.returncode==0 and core.stdout.strip()=='CORE PASS')
    (app/'session.ff').write_text('FOLDFIELD1|2|2|7,9,1;56,38,-1')
    si=subprocess.STARTUPINFO();si.dwFlags|=subprocess.STARTF_USESHOWWINDOW;si.wShowWindow=0
    p=subprocess.Popen([str(app/'Foldfield.exe')],cwd=ROOT,env=env,startupinfo=si)
    try:
        deadline=time.monotonic()+25
        field=app/'.work'/'field.json'
        while time.monotonic()<deadline and p.poll() is None:
            if field.exists():
                try:
                    data=json.loads(field.read_text())
                    if len(data)==3072:break
                except (OSError,ValueError):pass
            time.sleep(.1)
        else:raise AssertionError('Release did not reconstruct the field')
        # A worker can finish writing JSON just before it exits. Wait for its
        # inherited diagnostic handle to close before terminating the smoke GUI.
        kernel=ctypes.WinDLL('kernel32',use_last_error=True)
        kernel.CreateFileW.argtypes=[wintypes.LPCWSTR,wintypes.DWORD,wintypes.DWORD,wintypes.LPVOID,wintypes.DWORD,wintypes.DWORD,wintypes.HANDLE]
        kernel.CreateFileW.restype=wintypes.HANDLE
        kernel.CloseHandle.argtypes=[wintypes.HANDLE]
        handle_deadline=time.monotonic()+5
        while time.monotonic()<handle_deadline:
            handle=kernel.CreateFileW(str(app/'.work'/'error.log'),0x80000000,0,None,3,0,None)
            if handle!=ctypes.c_void_p(-1).value:
                kernel.CloseHandle(handle);break
            time.sleep(.05)
        else:raise AssertionError('Worker did not release its diagnostic handle')
        check('Shipped GUI launches and runs both packaged workers',p.poll() is None and len(data)==3072 and (app/'.work'/'travel.json').exists())
        check('Packaged field is finite and nontrivial',all(math.isfinite(x) for x in data) and max(abs(x) for x in data)>.1)
        check('Release preserves persisted source bytes',(app/'session.ff').read_text()=='FOLDFIELD1|2|2|7,9,1;56,38,-1')
    finally:
        if p.poll() is None:p.terminate()
        p.wait(timeout=5)
(ROOT/'build'/'package-test-results.json').write_text(json.dumps({'passed':len(checks),'checks':checks,'note':'Smoke process terminated by harness after startup; controlled close is verified by the integration suite.'},indent=2))
