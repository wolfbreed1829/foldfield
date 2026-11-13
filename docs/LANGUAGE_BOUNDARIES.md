# Language boundaries

| Component | Actual responsibility | Why |
|---|---|---|
| `src/foldfield.kk` | Application entry point, source model, multi-shot gesture interpretation, history, validation, transaction ordering, persistence encoding | Effects express one intent with different continuations; immutable values make reversal explicit |
| `src/wave/main.pony` | Input validation, independent graph BFS actors, ordered completion barrier | Actor-local queues need no shared-memory locks; immutable messages cross the boundary |
| `src/field.ua` | Distance-to-wave transform, attenuation, signed superposition, normalization, output encoding | Whole-array arithmetic and row reduction directly express the field |
| `src/native.c` | Win32 events and GDI rendering, process/file IO, transfer-buffer validation, bitmap export | No mature common native graphics integration was established among the three toolchains; one narrow Windows adapter avoids replacing their application logic |

There is no fourth-language implementation of pathfinding, effects, history, or wave calculation. C stores only display buffers, OS handles, and input coordinates. Projection, colors, labels, and hit testing are rendering concerns. The test-only C section injects messages into the same window procedure and is excluded from the release.

Koka calls C through explicit context-bearing FFI declarations. Pony and Uiua communicate through process exit codes and UTF-8 files. Errors return as text to Koka and are displayed without committing a failed proposal. Workers preserve no durable state. The current Koka model is the only persisted domain state; the field is reproducible from it.

Removing any required language breaks a visible workflow: without Koka the app cannot interpret or commit input; without Pony no nonempty model can compute; without Uiua no valid interference field can be displayed. Missing-worker tests verify that both worker failures remain visible.
