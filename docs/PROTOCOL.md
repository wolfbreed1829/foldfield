# Protocol v1

The package binaries and `field.ua` are one versioned unit. There is no network protocol.

## Model and worker request

Session bytes: `FOLDFIELD1|topology|rule|x,y,sign;x,y,sign`.

Topology and rule are integers 0..2. Coordinates are integers `0<=x<64`, `0<=y<48`; sign is exactly -1 or 1. A model contains 0..16 sources. Files larger than 32 KiB are rejected. An empty final field represents no sources.

Pony invocation: `wave.exe topology "x,y,sign;..."`. Nonempty requests contain 1..16 sources. It validates the entire request before spawning actors. Exit 2 means invalid protocol; exit 3 means coordinator failure. Diagnostics go to stderr; stdout is reserved for data.

## Distance bank

Pony stdout becomes `.work/travel.json`: a rectangular JSON numeric array of shape `[source_count,3072]`. Cell order is `y*64+x`; rows retain request order. Each value is `sign*(shortest_path_distance+1)`. The offset preserves polarity at distance zero.

Uiua reads this file, transforms it, and writes `.work/field.json`, a flat array of 3,072 floats. Before launch, the adapter removes any previous field output. Successful exit without fresh valid output is an error. The adapter rejects incorrect length, invalid JSON structure, nonfinite values, trailing garbage, and magnitudes above sixteen.

## Transaction and failure behavior

No shell interprets worker arguments. Executable paths are resolved relative to the application. The work directory is package-local and exclusively locked. Workers run sequentially; only actors inside the Pony worker run concurrently.

Startup failure, nonzero exit, cancellation, timeout, or invalid output aborts the proposal. The previous model/history remain usable, and a diagnostic appears in the footer. Successful field validation precedes model commit. Save failure is reported separately and never described as saved. Shutdown during a worker wait terminates that worker before returning.
