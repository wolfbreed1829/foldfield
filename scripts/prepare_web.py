import pathlib,re,shutil
ROOT=pathlib.Path(__file__).resolve().parents[1]
entry=next((ROOT/'build'/'web-koka').rglob('web_core.mjs'))
target=ROOT/'web'/'dist'/'core';target.mkdir(parents=True,exist_ok=True)
pending=[entry.name];seen=set()
while pending:
    name=pending.pop()
    if name in seen:continue
    seen.add(name);source=entry.parent/name
    text=source.read_text(encoding='utf-8')
    pending.extend(re.findall(r"from ['\"]\./([^'\"]+\.mjs)['\"]",text))
    # Omit compiler intermediate-representation comments; retain normal notices.
    text='\n'.join(line for line in text.splitlines() if not line.lstrip().startswith('// //'))+'\n'
    (target/name).write_text(text,encoding='utf-8')
for name in ['index.html','style.css','app.mjs']:shutil.copy2(ROOT/'web'/name,ROOT/'web'/'dist'/name)
shutil.copy2(ROOT/'licenses'/'KOKA-LICENSE.txt',ROOT/'web'/'dist'/'KOKA-LICENSE.txt')
(ROOT/'web'/'dist'/'NOTICE.txt').write_text('Foldfield browser edition.\nIncludes Koka 3.2.9 generated runtime modules, Copyright Microsoft Corporation, licensed under Apache-2.0; see KOKA-LICENSE.txt.\nWave data generated with Pony 0.78.2 and Uiua 0.19.1.\nSource and further notices: https://github.com/wolfbreed1829/foldfield\n',encoding='utf-8')
(ROOT/'web'/'dist'/'.nojekyll').touch()
print('Prepared',len(seen),'Koka modules;',sum(p.stat().st_size for p in target.glob('*.mjs')),'bytes')
