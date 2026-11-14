$ErrorActionPreference = 'Stop'
$root=Split-Path $PSScriptRoot -Parent
Push-Location $root
try {
  $required=@('Foldfield.exe','wave.exe','uiua.exe','vcruntime140.dll','field.ua')
  foreach($name in $required){if(!(Test-Path -LiteralPath (Join-Path 'dist\Foldfield' $name))){throw "Missing release file: $name"}}
  # Explicit staging excludes session files, debug outputs, and test data.
  $stage=Join-Path 'build' ('package-'+[Guid]::NewGuid().ToString('N'))
  $app=Join-Path $stage 'Foldfield'
  New-Item -ItemType Directory -Force $app | Out-Null
  foreach($name in $required){Copy-Item -LiteralPath (Join-Path 'dist\Foldfield' $name) -Destination $app}
  Copy-Item docs (Join-Path $app 'docs') -Recurse
  Copy-Item licenses (Join-Path $app 'licenses') -Recurse
  Copy-Item README.md $app
  $manifest=Get-ChildItem $app -File | Get-FileHash -Algorithm SHA256 | ForEach-Object { '{0}  {1}' -f $_.Hash.ToLower(),(Split-Path $_.Path -Leaf) }
  [IO.File]::WriteAllLines((Join-Path $app 'SHA256SUMS.txt'),$manifest,[Text.UTF8Encoding]::new($false))
  Compress-Archive -LiteralPath $app -DestinationPath dist\Foldfield-windows-x64.zip -Force
  New-Item -ItemType Directory -Force dist\Foldfield\docs,dist\Foldfield\licenses | Out-Null
  Copy-Item docs\* dist\Foldfield\docs -Recurse -Force
  Copy-Item licenses\* dist\Foldfield\licenses -Recurse -Force
  Copy-Item README.md dist\Foldfield -Force
  Copy-Item (Join-Path $app 'SHA256SUMS.txt') dist\Foldfield -Force
  $source=Join-Path $stage 'Foldfield-source'
  New-Item -ItemType Directory $source | Out-Null
  foreach($name in @('src','web','scripts','tests','docs','probes','licenses')){Copy-Item -LiteralPath $name -Destination $source -Recurse}
  Copy-Item README.md,.gitignore,.gitattributes $source
  Compress-Archive -LiteralPath $source -DestinationPath dist\Foldfield-source.zip -Force
  Get-Item dist\Foldfield-windows-x64.zip,dist\Foldfield-source.zip | Select-Object Name,Length
} finally { Pop-Location }
