# Interaction model

The fabric is the workspace. Header labels are surface and gesture controls; footer text is actionable and has keyboard equivalents. No pages or navigation hierarchy exist.

| Input | Reads / changes | Feedback and reversal |
|---|---|---|
| Left / right click on fabric | Current rule and source list; adds positive / negative source or pair | Markers and recomputed cloth; undoable; saved |
| Surface label / T | Cycles open, cylinder, Mobius topology | Edge arrows and entire field change; undoable; saved |
| Gesture label / M | Cycles single, mirror pair, opposed pair for future placements | Header label changes; undoable; saved |
| Undo / Z | Moves to the previous immutable model | Cloth and labels restored; redoable; resulting model saved |
| Redo / Y | Moves to a future model | Restored result; undoable; saved |
| Clear / R | Replaces source list with empty list | Intentional empty sheet; undoable; saved |
| Export / E | Reads current rendering | Creates a unique timestamped BMP under `exports`; success/failure footer; does not change model |
| Help / H | Toggles guide visibility | Overlay; H, Escape, or a click closes it; no model mutation |
| Window close | Ends event loop; cancels an active worker if necessary | Controlled handle cleanup; last successful save remains |

Clicks are mapped onto the unperturbed coordinate sheet. Sources are shown at their base coordinates, not at the lifted line position. Sixteen is a hard source limit; a pair that would exceed it is rejected as a whole. Empty undo/redo reports the boundary. A new edit after undo discards the redo branch. Up to 128 prior models are retained in memory.

Only the current model survives restart. A computation failure does not alter history. A persistence failure leaves the current computed model visible and shows an explicit error. Bitmap exports are external artifacts and are not part of undo.

Automated pointer tests invoke the actual native hit-testing path using Windows messages. Live desktop input could not be tested because the desktop automation service was unavailable.
