# Limitations

- Verified on Windows 11 x64. Other operating systems are unsupported. Windows N editions may need the Media Feature Pack for the upstream Uiua binary.
- Live desktop mouse/keyboard automation was unavailable: both available computer-use paths reported a missing native pipe. Actual Win32 handlers were tested with in-process messages, and the shared renderer's BMP output was visually inspected. This does not verify physical input injection or screen-reader behavior.
- The native adapter uses ANSI Win32 paths. Use a short, writable path containing characters supported by the Windows system code page; ASCII paths are the portable choice. Long paths and arbitrary Unicode paths are unsupported.
- This is a 64 by 48 graph-distance interference instrument, not a physically accurate wave solver. Only horizontal seam topology varies; vertical boundaries are open.
- Maximum sixteen sources and 128 undo states. Only the current model persists; no saved project browser, multiple documents, or branching history visualization is provided.
- Editing waits for the current transaction. Rendering and close remain responsive; a worker exceeding fifteen seconds is terminated.
- BMP is the only export format. Rendering uses native raster lines without antialiasing. No screen-reader tree, high-contrast theme, or keyboard-only placement cursor is provided.
- A save error leaves the in-memory result available but unsaved. Corrupt startup state is preserved until the next successful edit. Atomic replacement protects the previous file from interrupted writes, but exhaustive power-loss testing was not performed.
- Koka is an upstream research language. This is an experimental local release, not a claim of production certification.
- An export assertion failed once during final audit and did not recur in the focused rerun, full integration rerun, or five repeated workflow/export tests. The cause remains unexplained; see TESTS.md.
