// Koka generated module: web/core, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
import * as $std_core_bool from './std_core_bool.mjs';
import * as $std_core_order from './std_core_order.mjs';
import * as $std_core_char from './std_core_char.mjs';
import * as $std_core_int from './std_core_int.mjs';
import * as $std_core_vector from './std_core_vector.mjs';
import * as $std_core_bytes from './std_core_bytes.mjs';
import * as $std_core_bslice from './std_core_bslice.mjs';
import * as $std_core_string from './std_core_string.mjs';
import * as $std_core_sslice from './std_core_sslice.mjs';
import * as $std_core_list from './std_core_list.mjs';
import * as $std_core_maybe from './std_core_maybe.mjs';
import * as $std_core_maybe2 from './std_core_maybe2.mjs';
import * as $std_core_either from './std_core_either.mjs';
import * as $std_core_result from './std_core_result.mjs';
import * as $std_core_tuple from './std_core_tuple.mjs';
import * as $std_core_lazy from './std_core_lazy.mjs';
import * as $std_core_show from './std_core_show.mjs';
import * as $std_core_debug from './std_core_debug.mjs';
import * as $std_core_delayed from './std_core_delayed.mjs';
import * as $std_core_console from './std_core_console.mjs';
import * as $std_core from './std_core.mjs';
import * as $src_domain from './src_domain.mjs';
import * as $std_num_float64 from './std_num_float64.mjs';
 
// externals
 
// type declarations
// type history
export function History(current, past, future, notice) /* (current : src/domain/model, past : list<src/domain/model>, future : list<src/domain/model>, notice : int) -> history */  {
  return { current: current, past: past, future: future, notice: notice };
}
 
// declarations
 
 
export function history_fs_current(history) /* (history : history) -> src/domain/model */  {
  return history.current;
}
 
 
export function history_fs_past(history) /* (history : history) -> list<src/domain/model> */  {
  return history.past;
}
 
 
export function history_fs_future(history) /* (history : history) -> list<src/domain/model> */  {
  return history.future;
}
 
 
export function history_fs_notice(history) /* (history : history) -> int */  {
  return history.notice;
}
 
export function history_fs__copy(_this, current, past, future, notice) /* (history, current : ? src/domain/model, past : ? (list<src/domain/model>), future : ? (list<src/domain/model>), notice : ? int) -> history */  {
  if (current !== undefined) {
    var _x0 = current;
  }
  else {
    var _x0 = _this.current;
  }
  if (past !== undefined) {
    var _x1 = past;
  }
  else {
    var _x1 = _this.past;
  }
  if (future !== undefined) {
    var _x2 = future;
  }
  else {
    var _x2 = _this.future;
  }
  if (notice !== undefined) {
    var _x3 = notice;
  }
  else {
    var _x3 = _this.notice;
  }
  return History(_x0, _x1, _x2, _x3);
}
 
export function empty_history() /* () -> history */  {
  return History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 0);
}
 
 
export function _trmc_lift_pack_10327(_uniq_xs_10246, _acc) /* (list<src/domain/model>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10246 !== null) {
     
    var _trmc_x10353 = $src_domain.serialize(_uniq_xs_10246.head);
     
    var _trmc_x10354 = undefined;
     
    var _trmc_x10355 = $std_core_types.Cons(_trmc_x10353, _trmc_x10354);
    {
      // tail call
      var _x4 = $std_core_types._cctx_extend(_acc,_trmc_x10355,({obj: _trmc_x10355, field_name: "tail"}));
      _uniq_xs_10246 = _uniq_xs_10246.tail;
      _acc = _x4;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_pack_10327(_uniq_xs_10246_0) /* (list<src/domain/model>) -> list<string> */  {
  return _trmc_lift_pack_10327(_uniq_xs_10246_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_pack_10326(_uniq_xs_10241) /* (list<src/domain/model>) -> list<string> */  {
  if (_uniq_xs_10241 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_pack_10327(_uniq_xs_10241, $std_core_types._cctx_empty());
  }
}
 
 
export function _trmc_lift_pack_10329(_uniq_xs_10258, _acc) /* (list<src/domain/model>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10258 !== null) {
     
    var _trmc_x10356 = $src_domain.serialize(_uniq_xs_10258.head);
     
    var _trmc_x10357 = undefined;
     
    var _trmc_x10358 = $std_core_types.Cons(_trmc_x10356, _trmc_x10357);
    {
      // tail call
      var _x5 = $std_core_types._cctx_extend(_acc,_trmc_x10358,({obj: _trmc_x10358, field_name: "tail"}));
      _uniq_xs_10258 = _uniq_xs_10258.tail;
      _acc = _x5;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_pack_10329(_uniq_xs_10258_0) /* (list<src/domain/model>) -> list<string> */  {
  return _trmc_lift_pack_10329(_uniq_xs_10258_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_pack_10328(_uniq_xs_10253) /* (list<src/domain/model>) -> list<string> */  {
  if (_uniq_xs_10253 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_pack_10329(_uniq_xs_10253, $std_core_types._cctx_empty());
  }
}
 
export function pack(h) /* (h : history) -> string */  {
   
  if (h.current.sources === null) {
    var xs_10022 = $std_core_types.Nil;
  }
  else {
    var _x6 = h.current.sources;
    var xs_10022 = $src_domain._lift_serialize_10208(_x6);
  }
   
  var _x7 = h.past;
  var xs_10010 = _lift_pack_10326(_x7);
   
  var _x8 = h.future;
  var xs_0_10013 = _lift_pack_10328(_x8);
  var _x6 = h.current.topology;
  var _x7 = h.current.rule;
  match: {
    if (xs_10022 === null) {
      var _x8 = "";
      break match;
    }
    if (xs_10022 !== null && xs_10022.tail === null) {
      var _x8 = xs_10022.head;
      break match;
    }
    if (xs_10022 !== null && xs_10022.tail !== null && xs_10022.tail.tail === null) {
      if ($std_core_string._lp__eq__eq__rp_(";", "")){
        var _x8 = $std_core_types._lp__plus__plus__rp_(xs_10022.head, xs_10022.tail.head);
        break match;
      }
    }
    var _x8 = $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(xs_10022), ";");
  }
  var _x9 = h.notice;
  return $std_core_types._lp__plus__plus__rp_("FOLDWEB1~", $std_core_types._lp__plus__plus__rp_($std_core_types._lp__plus__plus__rp_("FOLDFIELD1|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x6), $std_core_types._lp__plus__plus__rp_("|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x7), $std_core_types._lp__plus__plus__rp_("|", _x8))))), $std_core_types._lp__plus__plus__rp_("~", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_10010, "\t"), $std_core_types._lp__plus__plus__rp_("~", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_0_10013, "\t"), $std_core_types._lp__plus__plus__rp_("~", $std_core_int.show(_x9))))))));
}
 
 
export function _unroll_lift_model_list_5504_10000(xs) /* (xs : list<string>) -> maybe<list<src/domain/model>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    var _x10 = $src_domain.deserialize(xs.head);
    var _x11 = _unroll_lift_model_list_5504_10000(xs.tail);
    if (_x10 !== null && _x11 !== null) {
      return $std_core_types.Just($std_core_types.Cons(_x10.value, _x11.value));
    }
    else {
      return $std_core_types.Nothing;
    }
  }
}
 
 
export function _lift_model_list_5504(xs) /* (xs : list<string>) -> maybe<list<src/domain/model>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    return _unroll_lift_model_list_5504_10000(xs);
  }
}
 
export function model_list(text) /* (text : string) -> maybe<list<src/domain/model>> */  {
  var _x12 = $std_core_string._lp__eq__eq__rp_(text, "");
  if (_x12) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
     
    var v_10019 = $std_core_string.splitv(text, "\t");
     
    var parts = $std_core_vector.vlist(v_10019);
    if (parts === null) {
      var _x14 = 0;
    }
    else {
      var _x14 = $std_core_list._unroll_lift_length_6537_10000(parts, 0);
    }
    var _x13 = $std_core_types._int_gt(_x14,128);
    if (_x13) {
      return $std_core_types.Nothing;
    }
    else {
      if (parts === null) {
        return $std_core_types.Just($std_core_types.Nil);
      }
      else {
        return _unroll_lift_model_list_5504_10000(parts);
      }
    }
  }
}
 
export function unpack(text) /* (text : string) -> history */  {
   
  var v_10019 = $std_core_string.splitv(text, "~");
  var _x15 = $std_core_vector.vlist(v_10019);
  if (_x15 !== null && _x15.head === "FOLDWEB1" && _x15.tail !== null && _x15.tail.tail !== null && _x15.tail.tail.tail !== null && _x15.tail.tail.tail.tail !== null && _x15.tail.tail.tail.tail.tail === null) {
    var _x16 = $src_domain.deserialize(_x15.tail.head);
    var _x17 = model_list(_x15.tail.tail.head);
    var _x18 = model_list(_x15.tail.tail.tail.head);
    var _x21 = undefined;
    var _x20 = (_x21 !== undefined) ? _x21 : false;
    var _x19 = $std_core_int.xparse(_x15.tail.tail.tail.tail.head, _x20);
    if (_x16 !== null && _x17 !== null && _x18 !== null && _x19 !== null) {
      return History(_x16.value, _x17.value, _x18.value, _x19.value);
    }
    else {
      return History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 5);
    }
  }
  else {
    return History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 5);
  }
}
 
export function start() /* () -> string */  {
  return pack(History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 0));
}
 
export function restore(text) /* (text : string) -> string */  {
  var _x23 = $std_core_string._lp__eq__eq__rp_(text, "");
  if (_x23) {
    var _x22 = History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 0);
  }
  else {
    var _x22 = unpack(text);
  }
  return pack(_x22);
}
 
export function from_link(text) /* (text : string) -> string */  {
  var _x25 = $src_domain.deserialize(text);
  if (_x25 !== null) {
    var _x24 = History(_x25.value, $std_core_types.Nil, $std_core_types.Nil, 6);
  }
  else {
    var _x24 = History($src_domain.Model(0, 0, $std_core_types.Nil), $std_core_types.Nil, $std_core_types.Nil, 5);
  }
  return pack(_x24);
}
 
export function share(text) /* (text : string) -> string */  {
   
  var history_10025 = unpack(text);
   
  if (history_10025.current.sources === null) {
    var xs_10022 = $std_core_types.Nil;
  }
  else {
    var _x26 = history_10025.current.sources;
    var xs_10022 = $src_domain._lift_serialize_10208(_x26);
  }
  var _x26 = history_10025.current.topology;
  var _x27 = history_10025.current.rule;
  match: {
    if (xs_10022 === null) {
      var _x28 = "";
      break match;
    }
    if (xs_10022 !== null && xs_10022.tail === null) {
      var _x28 = xs_10022.head;
      break match;
    }
    if (xs_10022 !== null && xs_10022.tail !== null && xs_10022.tail.tail === null) {
      if ($std_core_string._lp__eq__eq__rp_(";", "")){
        var _x28 = $std_core_types._lp__plus__plus__rp_(xs_10022.head, xs_10022.tail.head);
        break match;
      }
    }
    var _x28 = $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(xs_10022), ";");
  }
  return $std_core_types._lp__plus__plus__rp_("FOLDFIELD1|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x26), $std_core_types._lp__plus__plus__rp_("|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x27), $std_core_types._lp__plus__plus__rp_("|", _x28)))));
}
 
 
export function _trmc_unroll_edit_sources_10001(sources, index, px, py, remove, _acc) /* (sources : list<src/domain/source>, index : int, px : int, py : int, remove : bool, ctx<list<src/domain/source>>) -> list<src/domain/source> */  { tailcall: while(1)
{
  if (sources === null) {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
  else {
    if ($std_core_types._int_eq(index,0)) {
      if (remove) {
        return $std_core_types._cctx_apply(_acc,(sources.tail));
      }
      else {
        var _x29 = sources.head.sign;
        return $std_core_types._cctx_apply(_acc,($std_core_types.Cons($src_domain.Source(px, py, _x29), sources.tail)));
      }
    }
    else {
       
      var _trmc_x10359 = undefined;
       
      var _trmc_x10360 = $std_core_types.Cons(sources.head, _trmc_x10359);
      {
        // tail call
        var _x30 = $std_core_types._int_sub(index,1);
        var _x31 = $std_core_types._cctx_extend(_acc,_trmc_x10360,({obj: _trmc_x10360, field_name: "tail"}));
        sources = sources.tail;
        index = _x30;
        _acc = _x31;
        continue tailcall;
      }
    }
  }
}}
 
 
export function _unroll_edit_sources_10001(sources_0, index_0, px_0, py_0, remove_0) /* (sources : list<src/domain/source>, index : int, px : int, py : int, remove : bool) -> list<src/domain/source> */  {
  return _trmc_unroll_edit_sources_10001(sources_0, index_0, px_0, py_0, remove_0, $std_core_types._cctx_empty());
}
 
 
export function edit_sources(sources, index, px, py, remove) /* (sources : list<src/domain/source>, index : int, px : int, py : int, remove : bool) -> list<src/domain/source> */  {
  if (sources === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_unroll_edit_sources_10001(sources, index, px, py, remove, $std_core_types._cctx_empty());
  }
}
 
export function edit_source(text, index, px, py, remove) /* (text : string, index : int, px : int, py : int, remove : bool) -> string */  {
   
  var h = unpack(text);
  if ($std_core_types._int_lt(index,0)) {
    return text;
  }
  else {
    if (h.current.sources === null) {
      var _x33 = 0;
    }
    else {
      var _x34 = h.current.sources;
      var _x33 = $std_core_list._unroll_lift_length_6537_10000(_x34, 0);
    }
    var _x32 = $std_core_types._int_ge(index,_x33);
    if (_x32) {
      return text;
    }
    else {
      if ($std_core_types._int_lt(px,0)) {
        return text;
      }
      else {
        if ($std_core_types._int_gt(px,63)) {
          return text;
        }
        else {
          if ($std_core_types._int_lt(py,0)) {
            return text;
          }
          else {
            if ($std_core_types._int_gt(py,47)) {
              return text;
            }
            else {
               
              var _x35 = h.current.topology;
              var _x36 = h.current.rule;
              if (h.current.sources === null) {
                var _x37 = $std_core_types.Nil;
              }
              else {
                var _x38 = h.current.sources;
                var _x37 = _trmc_unroll_edit_sources_10001(_x38, index, px, py, remove, $std_core_types._cctx_empty());
              }
              var next = $src_domain.Model(_x35, _x36, _x37);
              var _x36 = h.current;
              var _x35 = $std_core_string._lp__eq__eq__rp_($src_domain.serialize(next), $src_domain.serialize(_x36));
              if (_x35) {
                return text;
              }
              else {
                var _x37 = h.current;
                var _x38 = h.past;
                return pack(History(next, $std_core_list.take($std_core_types.Cons(_x37, _x38), 128), $std_core_types.Nil, 1));
              }
            }
          }
        }
      }
    }
  }
}
 
export function move_source(text, index, px, py) /* (text : string, index : int, px : int, py : int) -> string */  {
  return edit_source(text, index, px, py, false);
}
 
export function remove_source(text, index) /* (text : string, index : int) -> string */  {
  return edit_source(text, index, 0, 0, true);
}
 
export function dispatch(text, event, x, y) /* (text : string, event : int, x : int, y : int) -> string */  {
   
  var h = unpack(text);
   
  var m = h.current;
   
  if ($std_core_types._int_eq(event,1)) {
    if ($std_core_types._int_lt(x,0)) {
      var next = $std_core_types.Nothing;
    }
    else {
      if ($std_core_types._int_gt(x,63)) {
        var next = $std_core_types.Nothing;
      }
      else {
        if ($std_core_types._int_lt(y,0)) {
          var next = $std_core_types.Nothing;
        }
        else {
          if ($std_core_types._int_gt(y,47)) {
            var next = $std_core_types.Nothing;
          }
          else {
             
            var _x39 = ($std_core_types._int_eq(event,1)) ? 1 : -1;
            var _x40 = m.rule;
            var extra = $src_domain.interpret(x, y, _x39, _x40);
             
            if (m.sources === null) {
              var x_0_10043 = 0;
            }
            else {
              var _x41 = m.sources;
              var x_0_10043 = $std_core_list._unroll_lift_length_6537_10000(_x41, 0);
            }
             
            if (extra === null) {
              var y_0_10044 = 0;
            }
            else {
              var y_0_10044 = $std_core_list._unroll_lift_length_6537_10000(extra, 0);
            }
            var _x39 = $std_core_types._int_gt(($std_core_types._int_add(x_0_10043,y_0_10044)),16);
            if (_x39) {
              var next = $std_core_types.Nothing;
            }
            else {
              var _x40 = m.topology;
              var _x41 = m.rule;
              if (m.sources === null) {
                var _x42 = extra;
              }
              else {
                var _x43 = m.sources;
                var _x42 = $std_core_list._unroll_append_10004(_x43, extra);
              }
              var next = $std_core_types.Just($src_domain.Model(_x40, _x41, _x42));
            }
          }
        }
      }
    }
  }
  else {
    if ($std_core_types._int_eq(event,2)) {
      if ($std_core_types._int_lt(x,0)) {
        var next = $std_core_types.Nothing;
      }
      else {
        if ($std_core_types._int_gt(x,63)) {
          var next = $std_core_types.Nothing;
        }
        else {
          if ($std_core_types._int_lt(y,0)) {
            var next = $std_core_types.Nothing;
          }
          else {
            if ($std_core_types._int_gt(y,47)) {
              var next = $std_core_types.Nothing;
            }
            else {
               
              var _x44 = ($std_core_types._int_eq(event,1)) ? 1 : -1;
              var _x45 = m.rule;
              var extra_0 = $src_domain.interpret(x, y, _x44, _x45);
               
              if (m.sources === null) {
                var x_1_10054 = 0;
              }
              else {
                var _x46 = m.sources;
                var x_1_10054 = $std_core_list._unroll_lift_length_6537_10000(_x46, 0);
              }
               
              if (extra_0 === null) {
                var y_1_10055 = 0;
              }
              else {
                var y_1_10055 = $std_core_list._unroll_lift_length_6537_10000(extra_0, 0);
              }
              var _x44 = $std_core_types._int_gt(($std_core_types._int_add(x_1_10054,y_1_10055)),16);
              if (_x44) {
                var next = $std_core_types.Nothing;
              }
              else {
                var _x45 = m.topology;
                var _x46 = m.rule;
                if (m.sources === null) {
                  var _x47 = extra_0;
                }
                else {
                  var _x48 = m.sources;
                  var _x47 = $std_core_list._unroll_append_10004(_x48, extra_0);
                }
                var next = $std_core_types.Just($src_domain.Model(_x45, _x46, _x47));
              }
            }
          }
        }
      }
    }
    else {
      if ($std_core_types._int_eq(event,84)) {
        var _x49 = m.topology;
        var _x50 = m.rule;
        var _x51 = m.sources;
        var next = $std_core_types.Just($src_domain.Model($std_core_types._int_mod(($std_core_types._int_add(_x49,1)),3), _x50, _x51));
      }
      else {
        if ($std_core_types._int_eq(event,77)) {
          var _x52 = m.topology;
          var _x53 = m.rule;
          var _x54 = m.sources;
          var next = $std_core_types.Just($src_domain.Model(_x52, $std_core_types._int_mod(($std_core_types._int_add(_x53,1)),3), _x54));
        }
        else {
          if ($std_core_types._int_eq(event,82)) {
            var _x55 = m.topology;
            var _x56 = m.rule;
            var next = $std_core_types.Just($src_domain.Model(_x55, _x56, $std_core_types.Nil));
          }
          else {
            if ($std_core_types._int_eq(event,90)) {
              if (h.past !== null) {
                var next = $std_core_types.Just(h.past.head);
              }
              else {
                var next = $std_core_types.Nothing;
              }
            }
            else {
              if ($std_core_types._int_eq(event,89)) {
                if (h.future !== null) {
                  var next = $std_core_types.Just(h.future.head);
                }
                else {
                  var next = $std_core_types.Nothing;
                }
              }
              else {
                var next = $std_core_types.Nothing;
              }
            }
          }
        }
      }
    }
  }
  if (next === null) {
    var _x39 = h.past;
    var _x40 = h.future;
    if ($std_core_types._int_eq(event,90)) {
      var _x41 = 2;
    }
    else {
      var _x41 = ($std_core_types._int_eq(event,89)) ? 3 : 4;
    }
    return pack(History(m, _x39, _x40, _x41));
  }
  else {
     
    if ($std_core_types._int_eq(event,90)) {
      var past = (h.past !== null) ? h.past.tail : $std_core_types.Nil;
    }
    else {
      var _x42 = h.past;
      var past = $std_core_list.take($std_core_types.Cons(m, _x42), 128);
    }
     
    if ($std_core_types._int_eq(event,90)) {
      var _x43 = h.future;
      var future = $std_core_types.Cons(m, _x43);
    }
    else {
      if ($std_core_types._int_eq(event,89)) {
        var future = (h.future !== null) ? h.future.tail : $std_core_types.Nil;
      }
      else {
        var future = $std_core_types.Nil;
      }
    }
    return pack(History(next.value, past, future, 1));
  }
}
 
 
export function _trmc_lift_describe_10331(_uniq_xs_10270, _acc) /* (list<src/domain/source>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10270 !== null) {
     
    var _x42 = _uniq_xs_10270.head.x;
    var _x43 = _uniq_xs_10270.head.y;
    var _x44 = _uniq_xs_10270.head.sign;
    var _trmc_x10361 = $std_core_types._lp__plus__plus__rp_("[", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x42), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x43), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x44), "]"))))));
     
    var _trmc_x10362 = undefined;
     
    var _trmc_x10363 = $std_core_types.Cons(_trmc_x10361, _trmc_x10362);
    {
      // tail call
      var _x42 = $std_core_types._cctx_extend(_acc,_trmc_x10363,({obj: _trmc_x10363, field_name: "tail"}));
      _uniq_xs_10270 = _uniq_xs_10270.tail;
      _acc = _x42;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_describe_10331(_uniq_xs_10270_0) /* (list<src/domain/source>) -> list<string> */  {
  return _trmc_lift_describe_10331(_uniq_xs_10270_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_describe_10330(_uniq_xs_10265) /* (list<src/domain/source>) -> list<string> */  {
  if (_uniq_xs_10265 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_describe_10331(_uniq_xs_10265, $std_core_types._cctx_empty());
  }
}
 
export function describe(text) /* (text : string) -> string */  {
   
  var h = unpack(text);
   
  var _x43 = h.current.sources;
  var xs_10091 = _lift_describe_10330(_x43);
  var _x43 = h.current.topology;
  var _x44 = h.current.rule;
  if (h.past === null) {
    var _x45 = 0;
  }
  else {
    var _x46 = h.past;
    var _x45 = $std_core_list._unroll_lift_length_6537_10000(_x46, 0);
  }
  if (h.future === null) {
    var _x47 = 0;
  }
  else {
    var _x48 = h.future;
    var _x47 = $std_core_list._unroll_lift_length_6537_10000(_x48, 0);
  }
  var _x49 = h.notice;
  return $std_core_types._lp__plus__plus__rp_("{\"topology\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x43), $std_core_types._lp__plus__plus__rp_(",\"rule\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x44), $std_core_types._lp__plus__plus__rp_(",\"sources\":[", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_10091, ","), $std_core_types._lp__plus__plus__rp_("],\"undo\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x45), $std_core_types._lp__plus__plus__rp_(",\"redo\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x47), $std_core_types._lp__plus__plus__rp_(",\"notice\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x49), "}"))))))))))));
}
 
 
export function kernel(top, sy, dx, y) /* (top : int, sy : int, dx : int, y : int) -> ndet float64 */  {
  return globalThis.foldfieldKernels[((top*48+sy)*48+y)*64+dx];
}
 
export function cosine_kernel(top, sy, dx, y) /* (top : int, sy : int, dx : int, y : int) -> ndet float64 */  {
  return globalThis.foldfieldCosines[((top*48+sy)*48+y)*64+dx];
}
 
export function _unroll_amplitude_10002(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    var _x50 = sources.head.sign;
    var _x51 = sources.head.y;
    var _x52 = sources.head.x;
    return (((($std_core_types._int_to_double(_x50)) * (kernel(top, _x51, $std_core_types._int_abs(($std_core_types._int_sub(px,_x52))), py)))) + (_unroll_amplitude_10002(top, sources.tail, px, py)));
  }
}
 
 
export function amplitude(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    return _unroll_amplitude_10002(top, sources, px, py);
  }
}
 
 
export function _lift_values_10333(_uniq_v_10281, history_10107, scale, _uniq_n_10287, _uniq_i_10288) /* (vector<float64>, history@10107 : history, scale : float64, ssize_t, ssize_t) -> ndet () */  { tailcall: while(1)
{
  if ((_uniq_i_10288 < _uniq_n_10287)) {
     
    var i_0_10285 = $std_core_types._int_from_int32(_uniq_i_10288);
     
    var px_10114 = $std_core_types._int_mod(i_0_10285,64);
     
    var py_10115 = $std_core_types._int_div(i_0_10285,64);
     
    if (history_10107.current.sources === null) {
      var _x53 = 0.0;
    }
    else {
      var _x54 = history_10107.current.topology;
      var _x55 = history_10107.current.sources;
      var _x53 = _unroll_amplitude_10002(_x54, _x55, px_10114, py_10115);
    }
    var _null_ = (_uniq_v_10281)[_uniq_i_10288] = ((_x53 / scale));
     
    var _uniq_i_0_10003_10290 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10288);
    {
      // tail call
      _uniq_i_10288 = _uniq_i_0_10003_10290;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_values_10332(history_10107, scale, _uniq_n_10278) /* (history@10107 : history, scale : float64, int) -> ndet vector<float64> */  {
   
  var _uniq_len_10280 = $std_core_int.ssize__t(_uniq_n_10278);
   
  var _uniq_v_10281 = Array(_uniq_len_10280);
   
  var _uniq_i_10282 = 0;
   
  var _null_ = _lift_values_10333(_uniq_v_10281, history_10107, scale, _uniq_len_10280, _uniq_i_10282);
  return _uniq_v_10281;
}
 
export function values(text) /* (text : string) -> ndet vector<float64> */  {
   
  var history_10107 = unpack(text);
   
  if (history_10107.current.sources === null) {
    var j_10109 = 0;
  }
  else {
    var _x53 = history_10107.current.sources;
    var j_10109 = $std_core_list._unroll_lift_length_6537_10000(_x53, 0);
  }
   
  var _x54 = ($std_core_types._int_ge(1,j_10109)) ? 1 : j_10109;
  var scale = Math.sqrt(($std_core_types._int_to_double(_x54)));
  return _lift_values_10332(history_10107, scale, 3072);
}
 
export function _unroll_cosine_amplitude_10003(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    var _x53 = sources.head.sign;
    var _x54 = sources.head.y;
    var _x55 = sources.head.x;
    return (((($std_core_types._int_to_double(_x53)) * (cosine_kernel(top, _x54, $std_core_types._int_abs(($std_core_types._int_sub(px,_x55))), py)))) + (_unroll_cosine_amplitude_10003(top, sources.tail, px, py)));
  }
}
 
 
export function cosine_amplitude(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    return _unroll_cosine_amplitude_10003(top, sources, px, py);
  }
}
 
 
export function _lift_cosine_values_10335(_uniq_v_10297, history_10123, scale, _uniq_n_10303, _uniq_i_10304) /* (vector<float64>, history@10123 : history, scale : float64, ssize_t, ssize_t) -> ndet () */  { tailcall: while(1)
{
  if ((_uniq_i_10304 < _uniq_n_10303)) {
     
    var i_0_10301 = $std_core_types._int_from_int32(_uniq_i_10304);
     
    var px_10130 = $std_core_types._int_mod(i_0_10301,64);
     
    var py_10131 = $std_core_types._int_div(i_0_10301,64);
     
    if (history_10123.current.sources === null) {
      var _x56 = 0.0;
    }
    else {
      var _x57 = history_10123.current.topology;
      var _x58 = history_10123.current.sources;
      var _x56 = _unroll_cosine_amplitude_10003(_x57, _x58, px_10130, py_10131);
    }
    var _null_ = (_uniq_v_10297)[_uniq_i_10304] = ((_x56 / scale));
     
    var _uniq_i_0_10003_10306 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10304);
    {
      // tail call
      _uniq_i_10304 = _uniq_i_0_10003_10306;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_cosine_values_10334(history_10123, scale, _uniq_n_10294) /* (history@10123 : history, scale : float64, int) -> ndet vector<float64> */  {
   
  var _uniq_len_10296 = $std_core_int.ssize__t(_uniq_n_10294);
   
  var _uniq_v_10297 = Array(_uniq_len_10296);
   
  var _uniq_i_10298 = 0;
   
  var _null_ = _lift_cosine_values_10335(_uniq_v_10297, history_10123, scale, _uniq_len_10296, _uniq_i_10298);
  return _uniq_v_10297;
}
 
export function cosine_values(text) /* (text : string) -> ndet vector<float64> */  {
   
  var history_10123 = unpack(text);
   
  if (history_10123.current.sources === null) {
    var j_10125 = 0;
  }
  else {
    var _x56 = history_10123.current.sources;
    var j_10125 = $std_core_list._unroll_lift_length_6537_10000(_x56, 0);
  }
   
  var _x57 = ($std_core_types._int_ge(1,j_10125)) ? 1 : j_10125;
  var scale = Math.sqrt(($std_core_types._int_to_double(_x57)));
  return _lift_cosine_values_10334(history_10123, scale, 3072);
}
 
 
export function _mlift_lift_frame_10337_10370(_uniq_i_10320, _uniq_n_10319, _uniq_v_10313, _y_x10364, c, cosines, s, sines, _y_x10365) /* (ssize_t, ssize_t, vector<float64>, float64, c : float64, cosines : vector<float64>, s : float64, sines : vector<float64>, float64) -> exn () */  {
   
  var _null_ = (_uniq_v_10313)[_uniq_i_10320] = ((((_y_x10364 * c)) - ((_y_x10365 * s))));
   
  var _uniq_i_0_10003_10322 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10320);
  return _lift_frame_10337(_uniq_v_10313, c, cosines, s, sines, _uniq_n_10319, _uniq_i_0_10003_10322);
}
 
 
export function _mlift_lift_frame_10337_10371(_uniq_i_10320_0, _uniq_n_10319_0, _uniq_v_10313_0, c_0, cosines_0, i_10317, s_0, sines_0, _y_x10364_0) /* (ssize_t, ssize_t, vector<float64>, c : float64, cosines : vector<float64>, i@10317 : int, s : float64, sines : vector<float64>, float64) -> exn () */  {
   
  var x_10386 = $std_core_vector._index(cosines_0, i_10317);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10365_0 /* float64 */ ) {
      return _mlift_lift_frame_10337_10370(_uniq_i_10320_0, _uniq_n_10319_0, _uniq_v_10313_0, _y_x10364_0, c_0, cosines_0, s_0, sines_0, _y_x10365_0);
    });
  }
  else {
    return _mlift_lift_frame_10337_10370(_uniq_i_10320_0, _uniq_n_10319_0, _uniq_v_10313_0, _y_x10364_0, c_0, cosines_0, s_0, sines_0, x_10386);
  }
}
 
 
export function _lift_frame_10337(_uniq_v_10313_1, c_1, cosines_1, s_1, sines_1, _uniq_n_10319_1, _uniq_i_10320_1) /* (vector<float64>, c : float64, cosines : vector<float64>, s : float64, sines : vector<float64>, ssize_t, ssize_t) -> exn () */  { tailcall: while(1)
{
  if ((_uniq_i_10320_1 < _uniq_n_10319_1)) {
     
    var i_10317_0 = $std_core_types._int_from_int32(_uniq_i_10320_1);
     
    var x_0_10388 = $std_core_vector._index(sines_1, i_10317_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10364_1 /* float64 */ ) {
        return _mlift_lift_frame_10337_10371(_uniq_i_10320_1, _uniq_n_10319_1, _uniq_v_10313_1, c_1, cosines_1, i_10317_0, s_1, sines_1, _y_x10364_1);
      });
    }
    else {
       
      var x_1_10391 = $std_core_vector._index(cosines_1, i_10317_0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10365_1 /* float64 */ ) {
          return _mlift_lift_frame_10337_10370(_uniq_i_10320_1, _uniq_n_10319_1, _uniq_v_10313_1, x_0_10388, c_1, cosines_1, s_1, sines_1, _y_x10365_1);
        });
      }
      else {
         
        var _null_ = (_uniq_v_10313_1)[_uniq_i_10320_1] = ((((x_0_10388 * c_1)) - ((x_1_10391 * s_1))));
         
        var _uniq_i_0_10003_10322_0 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10320_1);
        {
          // tail call
          _uniq_i_10320_1 = _uniq_i_0_10003_10322_0;
          continue tailcall;
        }
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _mlift_lift_frame_10336_10372(_uniq_v_10313, _null_) /* (vector<float64>, ()) -> exn vector<float64> */  {
  return _uniq_v_10313;
}
 
 
export function _lift_frame_10336(c, cosines, s, sines, _uniq_n_10310) /* (c : float64, cosines : vector<float64>, s : float64, sines : vector<float64>, int) -> exn vector<float64> */  {
   
  var _uniq_len_10312 = $std_core_int.ssize__t(_uniq_n_10310);
   
  var _uniq_v_10313_0 = Array(_uniq_len_10312);
   
  var _uniq_i_10314 = 0;
   
  var x_10394 = _lift_frame_10337(_uniq_v_10313_0, c, cosines, s, sines, _uniq_len_10312, _uniq_i_10314);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_null_ /* () */ ) {
      return _mlift_lift_frame_10336_10372(_uniq_v_10313_0, _null_);
    });
  }
  else {
    return _uniq_v_10313_0;
  }
}
 
 
export function frame(sines, cosines, phase) /* (sines : vector<float64>, cosines : vector<float64>, phase : float64) -> exn vector<float64> */  {
   
  var c = Math.cos(phase);
   
  var s = Math.sin(phase);
   
  var _uniq_len_10312 = 3072;
   
  var _uniq_v_10313 = Array(_uniq_len_10312);
   
  var _uniq_i_10314 = 0;
   
  var x_10402 = _lift_frame_10337(_uniq_v_10313, c, cosines, s, sines, _uniq_len_10312, _uniq_i_10314);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_null_ /* () */ ) {
      return _uniq_v_10313;
    });
  }
  else {
    return _uniq_v_10313;
  }
}
 
export function check_core() /* () -> bool */  {
  return $src_domain.test_core();
}
