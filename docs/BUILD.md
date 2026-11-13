# Build

## Verified toolchain

| Dependency | Version / role |
|---|---|
| Pony | 0.78.2 official Windows x64 compiler; bundled LLVM 23.1.3 |
| Koka | 3.2.9 official Windows x64 compiler; native C target |
| Uiua | 0.19.1 official Windows x64 interpreter |
| LLVM-MinGW | 20260224 UCRT x86_64 distribution; `clang` C backend |
| MSVC | 14.44.35207 tools and Windows SDK available for Pony linking |
| MSVC runtime | x64 vcruntime140.dll from redistributable 14.44.35112; included app-local |
| Python | 3.14 used only for tests and initial download tooling |
| PowerShell | Windows PowerShell 5.1 build/package tooling |

The runtime is Windows 11 x64 plus the files in the delivered folder. No compiler, Python, JavaScript, HTML, WebView, or network service is involved at runtime. The official Uiua binary brings a broad upstream feature set; the app invokes only file IO and numerical operations.

## Reproduce

1. Install MSVC C++ Build Tools with the Windows SDK, and put an LLVM-MinGW UCRT `clang.exe` on PATH. The build was verified with the version above.
2. Run `scripts/bootstrap.ps1` to fetch pinned official releases into `toolchains`. SHA-256 checks are embedded. This step can be skipped in the delivered workspace, where the toolchains already exist.
3. Run `scripts/build.ps1 -Tests`. It checks every compiler exit code, builds both release and instrumented test executables, and runs the numerical and native integration tests.
4. Run `scripts/package.ps1` to produce the runtime and source ZIP files.

The script locates an installed official x64 MSVC redistributable. An explicit path can be supplied with `-VCRuntimeDll`. Builds use baseline x86-64 code-generation flags for the application and Pony worker. Koka's generated C includes the native adapter directly and links user32/gdi32. The release has a Windows GUI subsystem and stripped debug information.

Pony's initial official archive transfer was too slow. The build session fetched the compiler, linker, runtime, and package ZIP entries using byte ranges and verified their ZIP CRCs on extraction. Koka and Uiua whole-archive SHA-256 values were checked against GitHub's release metadata. The bootstrap script uses complete archives and pins their published hashes.

Generated compiler files stay under `build/` and `.koka/`. Only explicit runtime files enter the package. `SHA256SUMS.txt` records the shipped executable and runtime hashes.

The full bootstrap download was not rerun after successful local toolchain preparation. Build and packaging commands were executed in the supplied environment; this is not a claim of byte-identical builds on arbitrary machines.
