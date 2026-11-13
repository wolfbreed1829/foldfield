# User guide

1. Extract the entire package into a writable folder and open `Foldfield.exe`.
2. Click the fabric to place a positive source. Right click elsewhere to place a negative source.
3. Press T to join the horizontal edges into a cylinder, then again to twist the join into a Mobius strip. The same sources produce different fields.
4. Press M to select mirror-pair or opposed-pair placement, then click again. A pair counts as two of the sixteen available sources.
5. Use Z and Y to compare earlier and later states. R clears the sheet; Z reverses the clear.
6. Press E to save the current native rendering as a BMP in the adjacent `exports` folder. H opens the guide.

The gold and green threads encode signed interference. Raised or lowered lines are a visual encoding of amplitude, not the physical shape of the surface. The source markers sit on the base coordinate sheet.

The current sources, topology, and gesture rule save automatically after successful edits. Restart restores that model and recomputes the field. Undo history does not survive restart. Keep the full package folder together when moving it.

If computation fails, read the footer. Check that `wave.exe`, `uiua.exe`, and `field.ua` remain beside the app, then retry the action. If saving fails, move the whole package to a writable folder after closing it. A failed edit is not committed; a failed save is explicitly reported.
