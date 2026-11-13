// Koka is the application runtime. The native adapter owns no domain state.
import std/os/env

extern import
  c { file = "native.c"; syslib = "user32;gdi32" }

extern native-open() : io int
  c inline "native_open(kk_context())"
extern native-event() : io int
  c inline "native_event(kk_context())"
extern native-coord(n : int) : io int
  c inline "native_coord(#1,kk_context())"
extern native-status(text : string) : io ()
  c inline "native_status(#1,kk_context())"
extern native-present(sources : string, top : int, rule : int, undo : int, redo : int) : io ()
  c inline "native_present(#1,#2,#3,#4,#5,kk_context())"
extern native-help() : io ()
  c inline "native_help(kk_context())"
extern native-process(kind : int, args : string) : io string
  c inline "native_process(#1,#2,kk_context())"
extern native-field() : io bool
  c inline "native_field(kk_context())"
extern native-load() : io string
  c inline "native_load(kk_context())"
extern native-save(data : string) : io string
  c inline "native_save(#1,kk_context())"
extern native-export() : io string
  c inline "native_export(kk_context())"
extern native-close() : io ()
  c inline "native_close(kk_context())"

struct source
  x : int
  y : int
  sign : int

struct model
  topology : int
  rule : int
  sources : list<source>

// A gesture requests an interpretation. Handlers determine how many
// continuations exist and their polarity; no mutation happens in the handler.
effect ctl reflect() : bool

fun placement(x : int, y : int, sign : int, opposed : bool) : reflect source
  if reflect() then Source(63 - x,47 - y,if opposed then 0 - sign else sign)
               else Source(x,y,sign)

fun interpret(x : int, y : int, sign : int, rule : int) : list<source>
  handle(fn() placement(x,y,sign,rule == 2))
    return(s) [s]
    ctl reflect()
      if rule == 0 then resume(False)
      else resume(False) ++ resume(True)

fun encode(sources : list<source>) : string
  sources.map(fn(s) s.x.show ++ "," ++ s.y.show ++ "," ++ s.sign.show).join(";")

fun serialize(m : model) : string
  "FOLDFIELD1|" ++ m.topology.show ++ "|" ++ m.rule.show ++ "|" ++ encode(m.sources)

fun parse-source(s : string) : maybe<source>
  match s.split(",")
    [sx,sy,ss] -> match (sx.parse-int(),sy.parse-int(),ss.parse-int())
      (Just(x),Just(y),Just(sign)) ->
        if x >= 0 && x < 64 && y >= 0 && y < 48 && (sign == 1 || sign == -1)
          then Just(Source(x,y,sign)) else Nothing
      _ -> Nothing
    _ -> Nothing

fun parse-sources(xs : list<string>) : maybe<list<source>>
  match xs
    [] -> Just([])
    Cons(x,rest) -> match (parse-source(x),parse-sources(rest))
      (Just(s),Just(tail)) -> Just(Cons(s,tail))
      _ -> Nothing

fun deserialize(s : string) : maybe<model>
  match s.split("|")
    ["FOLDFIELD1",st,sr,body] -> match (st.parse-int(),sr.parse-int())
      (Just(t),Just(r)) ->
        if t < 0 || t > 2 || r < 0 || r > 2 then Nothing else
          match (if body == "" then Just([]) else parse-sources(body.split(";")))
            Just(ss) -> if ss.length <= 16 then Just(Model(t,r,ss)) else Nothing
            _ -> Nothing
      _ -> Nothing
    _ -> Nothing

fun calculate(m : model) : io string
  if m.sources.is-empty then "" else
    val a = native-process(0,m.topology.show ++ " \"" ++ encode(m.sources) ++ "\"")
    if a != "" then a else
      val b = native-process(1,"")
      if b != "" then b else
        if native-field() then "" else "Uiua returned an invalid field; previous state retained."

fun present(m : model, past : list<model>, future : list<model>) : io ()
  native-present(encode(m.sources),m.topology,m.rule,past.length,future.length)

fun commit(m : model, past : list<model>, future : list<model>) : io ()
  present(m,past,future)
  val error = native-save(serialize(m))
  native-status(if error == "" then "Saved.  Click to add a source; T folds the surface; Z undoes." else error)

fun loop(current : model, past : list<model>, future : list<model>) : io ()
  val event = native-event()
  if event < 0 then native-close() else
    if event == 72 then
      native-help()
      loop(current,past,future)
    elif event == 69 then
      native-status(native-export())
      loop(current,past,future)
    else
      val next = if event == 1 || event == 2 then
        val x = native-coord(0)
        val y = native-coord(1)
        val extra = interpret(x,y,if event == 1 then 1 else -1,current.rule)
        if current.sources.length + extra.length > 16 then Nothing
          else Just(Model(current.topology,current.rule,current.sources ++ extra))
      elif event == 84 then Just(Model((current.topology + 1) % 3,current.rule,current.sources))
      elif event == 77 then Just(Model(current.topology,(current.rule + 1) % 3,current.sources))
      elif event == 82 then Just(Model(current.topology,current.rule,[]))
      elif event == 90 then past.head
      elif event == 89 then future.head
      else Nothing
      match next
        Nothing ->
          native-status(if event == 90 then "No earlier state." elif event == 89 then "No later state." else "Source limit reached (16). Undo or clear to continue.")
          loop(current,past,future)
        Just(m) ->
          val error = calculate(m)
          if error != "" then
            native-status(error)
            loop(current,past,future)
          else
            val p = if event == 90 then past.tail else Cons(current,past).take(128)
            val f = if event == 90 then Cons(current,future) elif event == 89 then future.tail else []
            commit(m,p,f)
            loop(m,p,f)

fun test-core() : bool
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

fun main() : io ()
  if get-args().contains("--check-core") then
    println(if test-core() then "CORE PASS" else "CORE FAIL")
  elif not(test-core()) then println("Koka core invariant failed") else
    if native-open() == 1 then
      val saved = native-load()
      val parsed = deserialize(saved)
      val initial = parsed.default(Model(0,0,[]))
      val error = calculate(initial)
      if error == "" then
        present(initial,[],[])
        native-status(if saved == "" then "Click the fabric to create the first wave." elif parsed.is-nothing then "Saved session is invalid; opened an empty sheet. Original file retained until the next edit." else "Restored your saved surface.")
        loop(initial,[],[])
      else
        present(Model(0,0,[]),[],[])
        native-status(error)
        loop(Model(0,0,[]),[],[])
