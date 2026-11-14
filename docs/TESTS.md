# Verification

Browser addition: 22 core assertions and 23 actual Playwright workflow checks passed. Independent BFS comparisons covered 92,160 cells; actual native Pony/Uiua comparisons covered another 18,432 cells, with a maximum absolute difference below 4.63e-8. Desktop/mobile screenshots and the PNG export were inspected. The shared-domain refactor also passed all 28 native integration assertions again. See [BROWSER.md](BROWSER.md) and the browser reports in `evidence/`.

Tests ran on Windows 11 x64 on 2026-11-13. Results below refer to executable computation, not mocked workers.

| Command | Result |
|---|---|
| `build/actors.exe` | Exit 0; `140` from eight concurrent actors |
| `build/effects.exe` | Exit 0; `[12,51]` from a multi-shot handler |
| `uiua run --no-format probes/arrays.ua` | Exit 0; sixteen computed sinusoidal values |
| `scripts/build.ps1 -Tests` | Release and instrumented native builds; checked compiler and test exit codes |
| `python tests/verify.py` | 22 assertions pass; numerical and process contracts |
| `python tests/ui_verify.py` | 28 assertions pass; native workflow, history, restart, errors, pointer controls, limits |
| `python tests/package_verify.py` | 5 checks pass; package extraction and actual release startup |
| `python tests/export_stability.py` | 5 consecutive native workflow/export runs pass |

The 22 numerical assertions cover all 3,072 independent BFS distances for two corner sources on every topology, ordered actor results, seven invalid requests, four simultaneous processes each with sixteen actors, deterministic completion, all-cell numerical agreement within 1e-12, exact opposing-wave cancellation, and malformed JSON rejection.

The 28 integration assertions cover the Koka core self-check, positive and negative placement, surface changes, multi-shot placement, undo, redo, clear/undo-clear, help, pointer export, byte-exact persistence, restart, corrupt-file preservation, missing Pony/Uiua workers, invalid field shape, stale-output rejection, every pointer control, a path containing spaces with a system-only PATH, the seventeenth-source limit, visible save failure, and clean process exits.

The native test binary injects messages into the real window procedure. It shares the release's Koka application, workers, renderer, hit testing, and IO code; only the timer driver and state logging are conditional. No actual desktop input provider was available. The renderer's exported bitmap was visually inspected; it is included under `evidence/`.

Machine-readable reports and the workflow log are under `docs/evidence/`. Assertion counts include process-exit checks and are not counts of independent user features. The release smoke test starts the actual shipped executable in an extracted folder, runs the packaged workers, and checks the reconstructed field without toolchain PATH entries. Its process is terminated by the harness after startup; clean window close is exercised by the integration suite.

## Failures found and repaired

- Initial toolchain transfers stalled/reset. Official ranged downloads completed; extracted Pony entries passed ZIP CRC validation; Koka/Uiua archive SHA-256 matched published metadata.
- Pony API/capability errors: replaced old Range construction with `Range.till`, gave split arrays explicit immutable capabilities, and transferred output as isolated strings.
- Koka handler and FFI errors: combined return/operation clauses into one handler, removed duplicate divergence effects, passed explicit runtime contexts, and avoided reserved identifiers.
- One initial Uiua invocation used the wrong working directory; fixed to the private worker directory.
- Python initially decoded one Uiua diagnostic with the Windows code page; changed to UTF-8 and reran.
- The UI test oracle initially counted the words `state retained` in an error as a state record. Replaced substring counting with line-prefix parsing; malformed-field rollback itself was already correct.
- Windows PowerShell treated redirected compiler progress on stderr as ErrorRecords. The build now checks native exit codes explicitly.
- Final audit added full repaint on resize, rejected embedded NULs in transfer/persistence input, and flushed GDI drawing before bitmap serialization.
- Fabric clipping keeps the maximum-source field inside the workspace. Background test windows now launch hidden to avoid desktop window-state interference with test geometry.
- One later export assertion failed in a full audit run. A focused native rerun, the integration suite, and five consecutive workflow/export repetitions passed afterward. Its root cause was not established; diagnostic logging is retained. This is an observed intermittent test failure, not a claim that every historical test invocation passed.
- A package-smoke teardown initially raced the Uiua process just after its output file appeared. The harness now waits for the inherited diagnostic handle to close before terminating the smoke GUI and cleaning its temporary directory. All five package checks then passed with a clean exit.

Not exhaustively tested: abrupt OS power loss, every display/DPI configuration, live physical input injection, arbitrary Unicode/long paths, screen readers, and other Windows editions. These are disclosed in LIMITATIONS.md.
