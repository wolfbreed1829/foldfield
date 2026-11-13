# Isolated capability probes

- `actors/main.pony`: eight actors return squares to one coordinator; observed output `140`.
- `effects.kk`: one placement computation resumed under two interpretations; observed output `[12,51]`.
- `arrays.ua`: a sixteen-element sinusoidal array transformation; executed with Uiua 0.19.1.
- `native-probe.c`: Win32 graphics harness with test-only Koka type shims. It compiles the same renderer; it is not part of the release application.

Example commands from the project root:

```powershell
.\toolchains\pony\bin\ponyc.exe -o build -b actors probes\actors
.\build\actors.exe
.\toolchains\koka\bin\koka.exe -O2 --cc=clang -o build\effects.exe probes\effects.kk
.\build\effects.exe
.\toolchains\uiua\uiua.exe run --no-format probes\arrays.ua
clang probes\native-probe.c -o build\native-probe.exe -mwindows -luser32 -lgdi32 -O2
```

The larger actor/array prototype was promoted into `src/wave/main.pony` and `src/field.ua` after validation. `tests/verify.py` reproduces its mathematical experiments; `tests/ui_verify.py` reproduces the transactional native prototype. No abandoned production implementation or downloaded reference source is retained here.
