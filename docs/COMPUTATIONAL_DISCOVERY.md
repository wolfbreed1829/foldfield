# Computational discovery

## Language findings

Pony actors execute asynchronous behaviors with isolated mutable state. Reference capabilities control what crosses actor boundaries; immutable results can be shared safely. Actor-local garbage collection favors bounded computations. The release uses one actor per source, rather than thousands of communicating grid-cell actors, because each bounded BFS has a simple completion condition. Sources run concurrently; indexed fan-in makes their output deterministic. [Reference capabilities](https://tutorial.ponylang.io/reference-capabilities/reference-capabilities.html), [runtime lifecycle](https://tutorial.ponylang.io/runtime-basics/program-lifecycle.html).

Koka combines static effect typing, algebraic data types, handlers, and reference-counted native C output. Multi-shot handlers can resume one computation with different answers. That suggested changing the interpretation of a placement instead of adding conventional tool panels. The compiler distinguishes total model functions from IO; the native adapter explicitly receives the Koka runtime context. Its asynchronous ecosystem is still developing, so subprocess lifecycle uses Win32 directly. [Koka book](https://koka-lang.github.io/koka/doc/book.html).

Uiua is a stack-based array language. Pervasive arithmetic transforms an entire source-by-cell bank; reduction combines its rows. This made a dense interference field a natural output, rather than attaching an incidental numeric helper. Its interpreter is distributed locally and executes the included UTF-8 source. JSON is the tested boundary; no shared runtime or direct Pony/Koka/Uiua FFI is assumed. [Uiua repository](https://github.com/uiua-lang/uiua), [row reduction](https://www.uiua.org/blog/uiua-0.11.0-html.html).

## Executed architectural experiments

1. **Isolated computation into ordered arrays.** `probes/actors` ran eight actors and returned the exact sum 140. The field prototype then sent separate source BFS results through ordered fan-in to Uiua. Independent BFS checked every cell for all three seam laws. Finding: source actors give useful concurrency without a distributed quiescence protocol.
2. **One intent, multiple continuations.** `probes/effects.kk` returned `[12,51]` from a single reflected-position computation. Integrated handlers later produced exact single, mirrored, and opposed source records. Finding: the same gesture program can branch without duplicating placement logic.
3. **Snapshot transactions across native processes.** The native prototype ran placement, topology changes, multi-shot placement, undo, redo, export, clear, and undo-clear through all three languages. Its final model was `FOLDFIELD1|2|1|18,15,1;43,29,-1;29,22,1;34,25,1`. Finding: finite immutable models support deterministic recomputation and rollback across process boundaries. This was the final selection gate, before release packaging.

Native graphics were separately compiled and rendered through `probes/native-probe.c`. Uiua's scalar transform was checked against an independent implementation. Prototype defects were repaired before promotion; see TESTS.md.

## Concepts considered

| Concept | Strength | Reason to select or reject |
|---|---|---|
| Clock choir: explore competing actor arrival orders | Strong concurrency and temporal interaction | Meaningful audio would require a larger OS adapter; array work and deterministic tests were less direct |
| Proof garden: spatially unfold nondeterministic searches | Strong multi-shot effect story | Useful search semantics and native navigation exceeded a small complete release; visual identity was uncertain |
| Foldfield: sew the domain of signed waves | Every language governs visible behavior; unusual spatial interaction; compact complete scope | Selected after the three experiments; all numerical boundaries have independent test oracles |

Originality and visual potential favored Foldfield. Feasibility, testability, maintainability, and meaningful use of all three languages favored bounded source actors, a small immutable model, and an array pipeline. No candidate was claimed to be a completed product before implementation.
