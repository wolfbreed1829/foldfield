$ErrorActionPreference='Stop'
$root=Split-Path $PSScriptRoot -Parent
Push-Location $root
try {
  New-Item -ItemType Directory -Force build\pony | Out-Null
  $ErrorActionPreference='Continue'
  & .\toolchains\pony\bin\ponyc.exe --cpu=x86-64 --strip -o build\pony -b wave src\wave
  if($LASTEXITCODE){throw 'Pony atlas producer compilation failed'}
  python scripts\build_atlas.py
  if($LASTEXITCODE){throw 'Pony/Uiua wave atlas build failed'}
  $ErrorActionPreference='Continue'
  & .\toolchains\koka\bin\koka.exe --target=js -O2 --library --builddir=build\web-koka web\core.kk
  if($LASTEXITCODE){throw 'Koka browser compilation failed'}
  python scripts\prepare_web.py
  if($LASTEXITCODE){throw 'Browser packaging failed'}
} finally {Pop-Location}
