use "collections"

actor Main
  let _env: Env
  let _rows: Array[String val] = Array[String val]
  var _pending: USize = 0
  new create(env: Env) =>
    _env = env
    try
      if env.args.size() != 3 then error end
      let topology = env.args(1)?.usize()?
      if topology > 2 then error end
      let sources: Array[String] val = env.args(2)?.split(";")
      if (sources.size() == 0) or (sources.size() > 16) then error end
      // Validate the complete request before spawning any actors.
      let xs = Array[USize]
      let ys = Array[USize]
      let signs = Array[I64]
      for source in sources.values() do
        let parts: Array[String] val = source.split(",")
        if parts.size() != 3 then error end
        let x = parts(0)?.usize()?
        let y = parts(1)?.usize()?
        let sign = parts(2)?.i64()?
        if (x >= 64) or (y >= 48) or ((sign != 1) and (sign != -1)) then error end
        xs.push(x); ys.push(y); signs.push(sign)
        _rows.push("")
      end
      _pending = xs.size()
      for i in Range[USize].till(0, xs.size()) do
        Wave(this, i, xs(i)?, ys(i)?, signs(i)?, topology)
      end
    else
      env.err.print("E_PROTOCOL: expected topology 0..2 and 1..16 x,y,sign sources; x<64 y<48 sign=+/-1")
      env.exitcode(2)
    end

  be result(id: USize, row: String val) =>
    try
      _rows(id)? = row
      _pending = _pending - 1
      if _pending == 0 then
        let output = recover iso String end
        output.append("[")
        for i in Range[USize].till(0, _rows.size()) do
          if i > 0 then output.append(",") end
          output.append(_rows(i)?)
        end
        output.append("]")
        _env.out.print(consume output)
      end
    else
      _env.err.print("E_INTERNAL: invalid actor result")
      _env.exitcode(3)
    end

actor Wave
  new create(parent: Main, id: USize, x: USize, y: USize, sign: I64, topology: USize) =>
    let distances = Array[I64].init(-1, 3072)
    let queue = Array[USize]
    let origin = (y * 64) + x
    try
      distances(origin)? = 0
      queue.push(origin)
      var head: USize = 0
      while head < queue.size() do
        let cell = queue(head)?
        head = head + 1
        let cx = cell % 64
        let cy = cell / 64
        let next = distances(cell)? + 1
        if cx > 0 then
          _visit(cell - 1, next, distances, queue)?
        elseif topology > 0 then
          let sy = if topology == 2 then 47 - cy else cy end
          _visit((sy * 64) + 63, next, distances, queue)?
        end
        if cx < 63 then
          _visit(cell + 1, next, distances, queue)?
        elseif topology > 0 then
          let sy = if topology == 2 then 47 - cy else cy end
          _visit(sy * 64, next, distances, queue)?
        end
        if cy > 0 then _visit(cell - 64, next, distances, queue)? end
        if cy < 47 then _visit(cell + 64, next, distances, queue)? end
      end
      let row = recover iso String(16000) end
      row.append("[")
      for i in Range[USize].till(0, 3072) do
        if i > 0 then row.append(",") end
        row.append(((distances(i)? + 1) * sign).string())
      end
      row.append("]")
      parent.result(id, consume row)
    else
      parent.result(id, "[]")
    end

  fun _visit(cell: USize, distance: I64, distances: Array[I64] ref, queue: Array[USize] ref) ? =>
    if distances(cell)? == -1 then
      distances(cell)? = distance
      queue.push(cell)
    end
