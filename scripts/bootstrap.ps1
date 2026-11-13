# Downloads only official, pinned compiler/runtime releases into this project.
$ErrorActionPreference='Stop'
$root=Split-Path $PSScriptRoot -Parent
Push-Location $root
try {
  New-Item -ItemType Directory -Force toolchains | Out-Null
  $items=@(
    @{Name='pony';File='pony.zip';Url='https://github.com/ponylang/ponyc/releases/download/0.78.2/ponyc-x86-64-pc-windows-msvc.zip';Hash='dc2e9726e9c012cc20cfca321d6e9d24163564088dff281f10fe9903ff8365fc'},
    @{Name='koka';File='koka.tar.gz';Url='https://github.com/koka-lang/koka/releases/download/v3.2.9/koka-v3.2.9-windows-x64.tar.gz';Hash='dabee57131f1ddc8eb23282f10f43bfd9dc386803a46f4ff357ccf65fe98ea74'},
    @{Name='uiua';File='uiua.zip';Url='https://github.com/uiua-lang/uiua/releases/download/0.19.1/uiua-bin-x86_64-pc-windows-msvc.zip';Hash='76d33594c4acec0f1a3ee749981c0b675e99b70ca7d2523660842ddeca033702'}
  )
  foreach($item in $items){
    $archive=Join-Path 'toolchains' $item.File
    if(!(Test-Path $archive) -or (Get-FileHash $archive -Algorithm SHA256).Hash.ToLower() -ne $item.Hash){
      & curl.exe -L --fail --retry 3 --connect-timeout 30 --output $archive $item.Url
      if($LASTEXITCODE){throw "Download failed: $($item.Name)"}
    }
    if((Get-FileHash $archive -Algorithm SHA256).Hash.ToLower() -ne $item.Hash){throw "Checksum mismatch: $($item.Name)"}
    $destination=Join-Path 'toolchains' $item.Name
    New-Item -ItemType Directory -Force $destination | Out-Null
    if($item.File.EndsWith('.zip')){Expand-Archive -LiteralPath $archive -DestinationPath $destination -Force}
    else {& tar.exe -xzf $archive -C $destination;if($LASTEXITCODE){throw 'Koka extraction failed'}}
  }
} finally { Pop-Location }
