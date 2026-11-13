effect ctl mirror() : bool

fun gesture(x : int) : mirror int
  if mirror() then 63 - x else x

fun interpretations(x : int) : list<int>
  handle(fn() gesture(x))
    return(v) [v]
    ctl mirror() resume(False) ++ resume(True)

fun main()
  println(interpretations(12).show)
