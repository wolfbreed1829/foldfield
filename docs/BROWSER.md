# Browser edition

Play: https://wolfbreed1829.github.io/foldfield/

The user explicitly allowed changing the original no-web constraints to make Foldfield browser-playable. The native edition remains intact. The browser edition is a static website, with no API keys, account, database, analytics, or application backend.

## Computation

`src/domain.kk` shares the model, serialization, validation, and multi-shot gesture effect between editions. `web/core.kk` compiles with Koka 3.2.9 to JavaScript and owns browser state transitions, bounded history, and signed wave superposition. `web/app.mjs` handles browser events, canvas rendering, asset IO, storage, clipboard, and downloads.

Pony and Uiua run **during the browser build**, not inside the visitor's browser. `scripts/build_atlas.py` asks the actual Pony graph actors for 48 canonical source rows on each of three surfaces. `web/kernels.ua` applies the actual Uiua wave transform. This produces 442,368 Float32 values. The binary is 1,769,492 bytes before gzip and 20,376 bytes compressed.

For each target cell, the lookup index is `((topology*48+sourceY)*48+targetY)*64+abs(targetX-sourceX)`. Shortest horizontal travel uses either the direct displacement or the seam crossing. A Mobius seam reflects the source row. Accordingly the wave depends on absolute horizontal displacement and both rows, with no need to store all 3,072 source positions. Tests check translated sources against independent BFS rather than assuming this reduction is correct.

Compiled Koka sums signed source values and divides by the square root of the source count. Float32 storage introduces a small difference from the native Float64 pipeline: the measured maximum difference over 18,432 native comparison cells is 4.63e-8. The browser validates dimensions, finiteness, and SHA-256 before enabling editing. The checksum detects accidental mismatches; it is not a signature from an independent authority.

## Interaction and persistence

- Tap or click to place the selected polarity. Right click always places a negative source.
- Surface and gesture controls cycle through the same three choices as the native edition.
- Undo and redo retain up to 128 states; clear is reversible. Sixteen sources is a hard limit, and paired gestures are atomic.
- Focus the canvas, move with arrows, and place with Enter or Space. Shift + Enter places a negative source.
- Edits and history save under `foldfield.browser.v1` in localStorage on this origin. Storage failures are visible. Browser data clearing removes saved work.
- Export downloads a PNG. Share pattern encodes the current model in the URL fragment; it excludes history. Anyone with that link can inspect and change the composition.
- Editing a linked pattern removes the old fragment from the current address, allowing reload to restore the newer saved state. Generate a new share link to share your edits.

## Build and serve

Install the pinned Pony, Koka, and Uiua toolchains using the native bootstrap instructions, then run:

```powershell
.\scripts\build_web.ps1
python -m http.server 4179 --bind 127.0.0.1 --directory web\dist
```

Open http://127.0.0.1:4179/. Do not open `index.html` as a file: browser modules and asset fetch require HTTP. `web/dist/` is the complete static artifact, including compiled Koka modules and its license. It is committed so hosting does not need the compilers. Authored source remains in `src/`, `web/`, and `scripts/`.

The deployment branch contains only `web/dist/`. From a clean committed main branch, `git subtree push --prefix web/dist origin gh-pages` updates GitHub Pages. Pages is configured for `gh-pages`, root directory.

## Verification and limits

`node tests/web_core.mjs` passes 22 assertions. It checks effects, model validation, saved state, sharing, atomic limits, history bounds, cancellation, 92,160 independently computed cells, and 18,432 cells through the actual native Pony/Uiua pipeline. That comparison test requires the native distribution in `dist/Foldfield/`.

`tests/browser_verify.cjs` is an async Playwright page function used with `browser_run_code_unsafe`. It passes 23 checks using actual browser clicks and keyboard events: loading, both polarities, surfaces, mirror/opposed gestures, clear/undo/redo, sharing, reload, download, help, mobile viewport, corrupt asset rejection/retry, and corrupt saved state. Screenshots at 1440x1000 and 390x844 were visually inspected. The exported PNG was separately decoded and inspected.

Verified in Chrome 146 on Windows. A mobile-sized viewport was tested; physical iOS and Android devices and screen readers were not. A current browser with JavaScript modules, Canvas, Web Crypto, and DecompressionStream is required. The site needs network access to load, and provides no offline service worker. Sixteen sources and the fixed 64x48 graph remain deliberate bounds. This is a mathematical instrument, not a physical wave solver.
