# Architecture

`Foldfield.exe` is compiled from Koka and a C native adapter. It owns the Windows message loop through FFI and retains the current model plus immutable history lists. It launches two local workers only when a nonempty model needs recomputation.

```text
Win32 event -> Koka gesture effect -> proposed immutable model
  -> Pony source actors -> ordered distance bank
  -> Uiua array transform -> validated scalar field
  -> Koka commits model/history -> native render + atomic session save
```

Pony creates up to sixteen actors. Each owns its BFS queue and distance array over 3,072 vertices. No mutable graph state crosses actors. A coordinator stores immutable row strings by source index and emits only after all results arrive.

The grid has four-neighbor edges. Vertical boundaries are always open. Horizontal boundaries are open, join the same row (cylinder), or join row `47-y` (Mobius). The displayed rectangle is a cut-open coordinate chart, not a 3D embedding of the physical strip.

Uiua receives the signed distance bank through a private work file. For source j and cell i, with distance d and sign s:

`field[i] = sum_j(s * sin(0.55*d) / (1 + 0.035*(d+1))) / sqrt(source_count)`.

The native adapter validates exactly 3,072 finite values before replacing the displayed buffer. Koka commits the proposed model only after both workers succeed and the field validates. A failed proposal leaves current model and history unchanged. Save errors are shown explicitly; the computed in-memory state remains available.

The adapter pumps Windows events during worker execution, allowing repaint and close. New editing inputs are disabled during computation. Workers have a 15-second deadline and are terminated on cancellation or timeout. Their handles are closed after exit. A lock file prevents two instances using one package's session directory.

The current model is saved by writing, flushing, and atomically replacing `session.ff`. History is deliberately session-local. Startup validates saved data before recomputation; corrupt data is preserved until a subsequent successful edit replaces it.
