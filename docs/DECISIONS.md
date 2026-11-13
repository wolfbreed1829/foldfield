# Decision log

| Decision | Reason and tradeoff |
|---|---|
| Native Windows release | Actual host has Windows SDK, MSVC, and LLVM-MinGW; avoids unavailable graphics wrappers |
| Koka owns the executable | Effect interpretation and immutable history are the application, not peripheral helpers |
| Source actors, not cell actors | Bounded local BFS avoids distributed termination detection while retaining real concurrency |
| Process boundary for Pony and Uiua | Verified executable interoperability; no assumed common ABI or embedded runtime |
| JSON arrays and a compact versioned model | Inspectable numeric contracts; no database is needed for sixteen source records |
| Commit after computation | Component failure cannot silently become a successful model edit |
| Three topologies, three gesture laws | Both change mathematical behavior; broader tools would dilute the complete release |
| Static interference instrument | Repeatable output and independent numerical tests; this is not a time-dependent PDE solver |
| Native C adapter only | Required for drawing and OS access; all domain decisions remain in mandated languages |
| Portable folder | No installer or network service; requires a writable path and companion files |
| In-process UI verification | Desktop automation native pipe was unavailable; real message-handler tests and shared-render export inspection remain feasible |

Familiar defaults were challenged explicitly: no REST layer, web frontend, dashboard, database, generic event bus, or service/repository/controller hierarchy is present. A linear worker pipeline was retained because each proposed model is a finite transaction, despite the spatial and reversible interaction model.

Toolchain corrections: Pony 0.78.2 uses `Range.till`; split results require explicit shareable capabilities for iteration. Koka multi-shot return/operation clauses must belong to the same handler. Its `io` alias already includes divergence. Native FFI calls explicitly pass `kk_context()`. These were compiler-evidenced corrections, not changes to the language allocation.
