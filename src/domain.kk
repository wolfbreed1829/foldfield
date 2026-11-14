// Shared immutable model and algebraic gesture effects.
pub struct source
  x : int
  y : int
  sign : int

pub struct model
  topology : int
  rule : int
  sources : list<source>

// A gesture requests an interpretation. Handlers determine how many
// continuations exist and their polarity; no mutation happens in the handler.
pub effect ctl reflect() : bool

pub fun placement(x : int, y : int, sign : int, opposed : bool) : reflect source
  if reflect() then Source(63 - x,47 - y,if opposed then 0 - sign else sign)
               else Source(x,y,sign)

pub fun interpret(x : int, y : int, sign : int, rule : int) : list<source>
  handle(fn() placement(x,y,sign,rule == 2))
    return(s) [s]
    ctl reflect()
      if rule == 0 then resume(False)
      else resume(False) ++ resume(True)

pub fun encode(sources : list<source>) : string
  sources.map(fn(s) s.x.show ++ "," ++ s.y.show ++ "," ++ s.sign.show).join(";")

pub fun serialize(m : model) : string
  "FOLDFIELD1|" ++ m.topology.show ++ "|" ++ m.rule.show ++ "|" ++ encode(m.sources)

pub fun parse-source(s : string) : maybe<source>
  match s.split(",")
    [sx,sy,ss] -> match (sx.parse-int(),sy.parse-int(),ss.parse-int())
      (Just(x),Just(y),Just(sign)) ->
        if x >= 0 && x < 64 && y >= 0 && y < 48 && (sign == 1 || sign == -1)
          then Just(Source(x,y,sign)) else Nothing
      _ -> Nothing
    _ -> Nothing

pub fun parse-sources(xs : list<string>) : maybe<list<source>>
  match xs
    [] -> Just([])
    Cons(x,rest) -> match (parse-source(x),parse-sources(rest))
      (Just(s),Just(tail)) -> Just(Cons(s,tail))
      _ -> Nothing

pub fun deserialize(s : string) : maybe<model>
  match s.split("|")
    ["FOLDFIELD1",st,sr,body] -> match (st.parse-int(),sr.parse-int())
      (Just(t),Just(r)) ->
        if t < 0 || t > 2 || r < 0 || r > 2 then Nothing else
          val parts = body.split(";")
          match (if body == "" then Just([]) elif parts.length > 16 then Nothing else parse-sources(parts))
            Just(ss) -> if ss.length <= 16 then Just(Model(t,r,ss)) else Nothing
            _ -> Nothing
      _ -> Nothing
    _ -> Nothing

pub fun test-core() : bool
  val a = interpret(12,8,1,0)
  val b = interpret(12,8,1,1)
  val c = interpret(12,8,1,2)
  a.length == 1 && b.length == 2 && c.length == 2 &&
    encode(a) == "12,8,1" && encode(b) == "12,8,1;51,39,1" &&
    encode(c) == "12,8,1;51,39,-1" &&
    deserialize("FOLDFIELD1|0|0|64,0,1").is-nothing &&
    deserialize("FOLDFIELD1|3|0|").is-nothing &&
    deserialize("bad").is-nothing &&
    deserialize(serialize(Model(2,1,b))).is-just

