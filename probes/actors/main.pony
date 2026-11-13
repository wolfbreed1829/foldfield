use "collections"

actor Main
  let _env: Env
  var _count: USize = 0
  var _sum: U64 = 0
  new create(env: Env) =>
    _env = env
    for i in Range[U64].till(0, 8) do Worker(this, i) end
  be result(n: U64) =>
    _sum = _sum + n
    _count = _count + 1
    if _count == 8 then _env.out.print(_sum.string()) end

actor Worker
  new create(parent: Main, n: U64) => parent.result(n * n)
