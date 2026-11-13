param([switch]$Tests,[string]$VCRuntimeDll)
$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
Push-Location $root
try {
  $pony = Join-Path $root 'toolchains\pony\bin\ponyc.exe'
  $koka = Join-Path $root 'toolchains\koka\bin\koka.exe'
  $uiua = Join-Path $root 'toolchains\uiua\uiua.exe'
  foreach ($tool in @($pony,$koka,$uiua)) {
    if (!(Test-Path -LiteralPath $tool)) { throw "Missing pinned toolchain: $tool. See docs/BUILD.md." }
  }
  Get-Command clang -ErrorAction Stop | Out-Null
  New-Item -ItemType Directory -Force build\pony,dist\Foldfield | Out-Null
  # Windows PowerShell 5 treats redirected native stderr as ErrorRecords.
  # ponyc writes build progress there; use explicit exit-code checks below.
  $ErrorActionPreference = 'Continue'
  & $pony --cpu=x86-64 --strip -o build\pony -b wave src\wave
  if ($LASTEXITCODE) { throw "Pony build failed: $LASTEXITCODE" }
  Copy-Item -LiteralPath build\pony\wave.exe -Destination dist\Foldfield\wave.exe -Force -ErrorAction Stop
  & $koka -O2 --cc=clang '--ccopts=-march=x86-64 -mtune=generic' '--cclinkopts=-mwindows -s' '--cclib=user32;gdi32' -o dist\Foldfield\Foldfield.exe src\foldfield.kk
  if ($LASTEXITCODE) { throw "Koka/native build failed: $LASTEXITCODE" }
  Copy-Item -LiteralPath $uiua -Destination dist\Foldfield\uiua.exe -Force
  Copy-Item -LiteralPath src\field.ua -Destination dist\Foldfield\field.ua -Force
  if ($VCRuntimeDll) { Copy-Item -LiteralPath $VCRuntimeDll -Destination dist\Foldfield\vcruntime140.dll -Force -ErrorAction Stop }
  elseif (!(Test-Path dist\Foldfield\vcruntime140.dll)) {
    $redist = Get-ChildItem "${env:ProgramFiles(x86)}\Microsoft Visual Studio" -Filter vcruntime140.dll -Recurse -ErrorAction SilentlyContinue |
      Where-Object { $_.FullName -match '\\Redist\\MSVC\\[^\\]+\\x64\\Microsoft.VC\d+\.CRT\\' } | Sort-Object FullName -Descending | Select-Object -First 1
    if (!$redist) { throw 'Provide -VCRuntimeDll with an official x64 MSVC redistributable vcruntime140.dll.' }
    Copy-Item -LiteralPath $redist.FullName -Destination dist\Foldfield\vcruntime140.dll -ErrorAction Stop
  }
  if ($Tests) {
    & $koka -O2 --cc=clang '--ccopts=-DFOLDFIELD_TEST -march=x86-64 -mtune=generic' '--cclib=user32;gdi32' -o build\Foldfield-test.exe src\foldfield.kk
    if ($LASTEXITCODE) { throw "Test build failed: $LASTEXITCODE" }
    python tests\verify.py
    if ($LASTEXITCODE) { throw "Numerical tests failed: $LASTEXITCODE" }
    python tests\ui_verify.py
    if ($LASTEXITCODE) { throw "Integration tests failed: $LASTEXITCODE" }
  }
} finally { Pop-Location }
