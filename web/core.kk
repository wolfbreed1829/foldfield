import src/domain
import std/num/float64

struct history
  current : model
  past : list<model>
  future : list<model>
  notice : int

fun empty-history() : history
  History(Model(0,0,[]),[],[],0)

fun pack(h : history) : string
  "FOLDWEB1~" ++ serialize(h.current) ++ "~" ++ h.past.map(serialize).join("\t") ++ "~" ++ h.future.map(serialize).join("\t") ++ "~" ++ h.notice.show

fun model-list(text : string) : maybe<list<model>>
  fun parse-list(xs : list<string>) : maybe<list<model>>
    match xs
      [] -> Just([])
      Cons(x,tail) -> match (deserialize(x),parse-list(tail))
        (Just(m),Just(ms)) -> Just(Cons(m,ms))
        _ -> Nothing
  if text == "" then Just([]) else
    val parts = text.split("\t")
    if parts.length > 128 then Nothing else parse-list(parts)

fun unpack(text : string) : history
  match text.split("~")
    ["FOLDWEB1",m,p,f,n] -> match (deserialize(m),model-list(p),model-list(f),n.parse-int())
      (Just(mm),Just(pp),Just(ff),Just(nn)) -> History(mm,pp,ff,nn)
      _ -> History(Model(0,0,[]),[],[],5)
    _ -> History(Model(0,0,[]),[],[],5)

pub fun start() : string
  pack(empty-history())

pub fun restore(text : string) : string
  if text == "" then start() else pack(unpack(text))

pub fun from-link(text : string) : string
  match deserialize(text)
    Just(m) -> pack(History(m,[],[],6))
    _ -> pack(History(Model(0,0,[]),[],[],5))

pub fun share(text : string) : string
  serialize(unpack(text).current)

// A drag previews from the original snapshot; its final position commits once.
fun edit-sources(sources : list<source>, index : int, px : int, py : int, remove : bool) : list<source>
  match sources
    [] -> []
    Cons(s,rest) ->
      if index == 0 then
        if remove then rest else Cons(Source(px,py,s.sign),rest)
      else Cons(s,edit-sources(rest,index - 1,px,py,remove))

fun edit-source(text : string, index : int, px : int, py : int, remove : bool) : string
  val h = unpack(text)
  val m = h.current
  if index < 0 || index >= m.sources.length || px < 0 || px > 63 || py < 0 || py > 47 then text else
    val next = Model(m.topology,m.rule,edit-sources(m.sources,index,px,py,remove))
    if serialize(next) == serialize(m) then text else
      pack(History(next,Cons(m,h.past).take(128),[],1))

pub fun move-source(text : string, index : int, px : int, py : int) : string
  edit-source(text,index,px,py,False)

pub fun remove-source(text : string, index : int) : string
  edit-source(text,index,0,0,True)

pub fun dispatch(text : string, event : int, x : int, y : int) : string
  val h = unpack(text)
  val m = h.current
  val next = if event == 1 || event == 2 then
    if x < 0 || x > 63 || y < 0 || y > 47 then Nothing else
      val extra = interpret(x,y,if event == 1 then 1 else -1,m.rule)
      if m.sources.length + extra.length > 16 then Nothing
        else Just(Model(m.topology,m.rule,m.sources ++ extra))
  elif event == 84 then Just(Model((m.topology + 1) % 3,m.rule,m.sources))
  elif event == 77 then Just(Model(m.topology,(m.rule + 1) % 3,m.sources))
  elif event == 82 then Just(Model(m.topology,m.rule,[]))
  elif event == 90 then h.past.head
  elif event == 89 then h.future.head
  else Nothing
  match next
    Nothing -> pack(History(m,h.past,h.future,if event == 90 then 2 elif event == 89 then 3 else 4))
    Just(next-model) ->
      val past = if event == 90 then h.past.tail else Cons(m,h.past).take(128)
      val future = if event == 90 then Cons(m,h.future) elif event == 89 then h.future.tail else []
      pack(History(next-model,past,future,1))

pub fun describe(text : string) : string
  val h = unpack(text)
  val m = h.current
  "{\"topology\":" ++ m.topology.show ++ ",\"rule\":" ++ m.rule.show ++ ",\"sources\":[" ++
    m.sources.map(fn(s) "[" ++ s.x.show ++ "," ++ s.y.show ++ "," ++ s.sign.show ++ "]").join(",") ++
    "],\"undo\":" ++ h.past.length.show ++ ",\"redo\":" ++ h.future.length.show ++ ",\"notice\":" ++ h.notice.show ++ "}"

// Foreign access is only an indexed read of the immutable, validated asset.
extern kernel(top : int, sy : int, dx : int, y : int) : ndet float64
  js inline "globalThis.foldfieldKernels[((#1*48+#2)*48+#4)*64+#3]"

extern cosine-kernel(top : int, sy : int, dx : int, y : int) : ndet float64
  js inline "globalThis.foldfieldCosines[((#1*48+#2)*48+#4)*64+#3]"

fun amplitude(top : int, sources : list<source>, px : int, py : int) : ndet float64
  match sources
    [] -> 0.0
    Cons(s,rest) ->
      s.sign.float64 * kernel(top,s.y,(px - s.x).abs,py) + amplitude(top,rest,px,py)

pub fun values(text : string) : ndet vector<float64>
  val m = unpack(text).current
  val scale = (max(1,m.sources.length)).float64.sqrt
  vector-init(3072,fn(i) amplitude(m.topology,m.sources,i % 64,i / 64) / scale)

fun cosine-amplitude(top : int, sources : list<source>, px : int, py : int) : ndet float64
  match sources
    [] -> 0.0
    Cons(s,rest) ->
      s.sign.float64 * cosine-kernel(top,s.y,(px - s.x).abs,py) + cosine-amplitude(top,rest,px,py)

pub fun cosine-values(text : string) : ndet vector<float64>
  val m = unpack(text).current
  val scale = (max(1,m.sources.length)).float64.sqrt
  vector-init(3072,fn(i) cosine-amplitude(m.topology,m.sources,i % 64,i / 64) / scale)

// sin(k*d - phase) = sin(k*d)*cos(phase) - cos(k*d)*sin(phase).
// Superpose both bases only when sources change, then combine each frame here.
pub fun frame(sines : vector<float64>, cosines : vector<float64>, phase : float64) : exn vector<float64>
  val c = phase.cos
  val s = phase.sin
  vector-init(3072,fn(i) sines[i] * c - cosines[i] * s)

pub fun check-core() : bool
  test-core()
