# Delivery

Foldfield experimental release 0.1.0.

- Runtime folder: `dist/Foldfield/`
- Native entry point: `dist/Foldfield/Foldfield.exe`
- Runtime ZIP: `dist/Foldfield-windows-x64.zip`
- Complete project source ZIP: `dist/Foldfield-source.zip`
- Production source: `src/`
- Documentation and evidence: `docs/`
- Build/test tooling: `scripts/`, `tests/`; capability probes: `probes/`

Launch from the project root:

```powershell
.\dist\Foldfield\Foldfield.exe
```

The runtime package includes the Pony worker, Uiua interpreter and source, x64 MSVC runtime DLL, documentation, third-party licenses/notices, and SHA-256 manifest. It excludes toolchains, session data, exports, test drivers, debug symbols, and compiler intermediates.

The application and both workers compile/execute. Numerical/native suites pass 50 assertions, package startup passes 5 checks, and 5 repeated exports pass. Session restart is verified, and the exported native rendering was visually inspected. Package smoke verification uses the actual release executable after extraction. Desktop input automation remains unavailable; native event-path testing is the strongest runtime substitute used here. One prior intermittent export-test failure remains unexplained and is disclosed in LIMITATIONS.md.

The source archive includes the pinned bootstrap recipe and all authored source. Compiler binaries are external build dependencies, not source omissions. The full toolchains are already present in the local workspace and are intentionally excluded from the source archive.
