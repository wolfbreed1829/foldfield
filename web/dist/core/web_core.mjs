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
 
 
export function _trmc_lift_pack_10262(_uniq_xs_10213, _acc) /* (list<src/domain/model>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10213 !== null) {
     
    var _trmc_x10274 = $src_domain.serialize(_uniq_xs_10213.head);
     
    var _trmc_x10275 = undefined;
     
    var _trmc_x10276 = $std_core_types.Cons(_trmc_x10274, _trmc_x10275);
    {
      // tail call
      var _x4 = $std_core_types._cctx_extend(_acc,_trmc_x10276,({obj: _trmc_x10276, field_name: "tail"}));
      _uniq_xs_10213 = _uniq_xs_10213.tail;
      _acc = _x4;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_pack_10262(_uniq_xs_10213_0) /* (list<src/domain/model>) -> list<string> */  {
  return _trmc_lift_pack_10262(_uniq_xs_10213_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_pack_10261(_uniq_xs_10208) /* (list<src/domain/model>) -> list<string> */  {
  if (_uniq_xs_10208 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_pack_10262(_uniq_xs_10208, $std_core_types._cctx_empty());
  }
}
 
 
export function _trmc_lift_pack_10264(_uniq_xs_10225, _acc) /* (list<src/domain/model>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10225 !== null) {
     
    var _trmc_x10277 = $src_domain.serialize(_uniq_xs_10225.head);
     
    var _trmc_x10278 = undefined;
     
    var _trmc_x10279 = $std_core_types.Cons(_trmc_x10277, _trmc_x10278);
    {
      // tail call
      var _x5 = $std_core_types._cctx_extend(_acc,_trmc_x10279,({obj: _trmc_x10279, field_name: "tail"}));
      _uniq_xs_10225 = _uniq_xs_10225.tail;
      _acc = _x5;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_pack_10264(_uniq_xs_10225_0) /* (list<src/domain/model>) -> list<string> */  {
  return _trmc_lift_pack_10264(_uniq_xs_10225_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_pack_10263(_uniq_xs_10220) /* (list<src/domain/model>) -> list<string> */  {
  if (_uniq_xs_10220 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_pack_10264(_uniq_xs_10220, $std_core_types._cctx_empty());
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
  var xs_10008 = _lift_pack_10261(_x7);
   
  var _x8 = h.future;
  var xs_0_10011 = _lift_pack_10263(_x8);
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
  return $std_core_types._lp__plus__plus__rp_("FOLDWEB1~", $std_core_types._lp__plus__plus__rp_($std_core_types._lp__plus__plus__rp_("FOLDFIELD1|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x6), $std_core_types._lp__plus__plus__rp_("|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x7), $std_core_types._lp__plus__plus__rp_("|", _x8))))), $std_core_types._lp__plus__plus__rp_("~", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_10008, "\t"), $std_core_types._lp__plus__plus__rp_("~", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_0_10011, "\t"), $std_core_types._lp__plus__plus__rp_("~", $std_core_int.show(_x9))))))));
}
 
 
export function _unroll_lift_model_list_4540_10000(xs) /* (xs : list<string>) -> maybe<list<src/domain/model>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    var _x10 = $src_domain.deserialize(xs.head);
    var _x11 = _unroll_lift_model_list_4540_10000(xs.tail);
    if (_x10 !== null && _x11 !== null) {
      return $std_core_types.Just($std_core_types.Cons(_x10.value, _x11.value));
    }
    else {
      return $std_core_types.Nothing;
    }
  }
}
 
 
export function _lift_model_list_4540(xs) /* (xs : list<string>) -> maybe<list<src/domain/model>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    return _unroll_lift_model_list_4540_10000(xs);
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
        return _unroll_lift_model_list_4540_10000(parts);
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
   
  var history_10023 = unpack(text);
   
  if (history_10023.current.sources === null) {
    var xs_10022 = $std_core_types.Nil;
  }
  else {
    var _x26 = history_10023.current.sources;
    var xs_10022 = $src_domain._lift_serialize_10208(_x26);
  }
  var _x26 = history_10023.current.topology;
  var _x27 = history_10023.current.rule;
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
             
            var _x29 = ($std_core_types._int_eq(event,1)) ? 1 : -1;
            var _x30 = m.rule;
            var extra = $src_domain.interpret(x, y, _x29, _x30);
             
            if (m.sources === null) {
              var x_0_10026 = 0;
            }
            else {
              var _x31 = m.sources;
              var x_0_10026 = $std_core_list._unroll_lift_length_6537_10000(_x31, 0);
            }
             
            if (extra === null) {
              var y_0_10027 = 0;
            }
            else {
              var y_0_10027 = $std_core_list._unroll_lift_length_6537_10000(extra, 0);
            }
            var _x29 = $std_core_types._int_gt(($std_core_types._int_add(x_0_10026,y_0_10027)),16);
            if (_x29) {
              var next = $std_core_types.Nothing;
            }
            else {
              var _x30 = m.topology;
              var _x31 = m.rule;
              if (m.sources === null) {
                var _x32 = extra;
              }
              else {
                var _x33 = m.sources;
                var _x32 = $std_core_list._unroll_append_10004(_x33, extra);
              }
              var next = $std_core_types.Just($src_domain.Model(_x30, _x31, _x32));
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
               
              var _x34 = ($std_core_types._int_eq(event,1)) ? 1 : -1;
              var _x35 = m.rule;
              var extra_0 = $src_domain.interpret(x, y, _x34, _x35);
               
              if (m.sources === null) {
                var x_1_10037 = 0;
              }
              else {
                var _x36 = m.sources;
                var x_1_10037 = $std_core_list._unroll_lift_length_6537_10000(_x36, 0);
              }
               
              if (extra_0 === null) {
                var y_1_10038 = 0;
              }
              else {
                var y_1_10038 = $std_core_list._unroll_lift_length_6537_10000(extra_0, 0);
              }
              var _x34 = $std_core_types._int_gt(($std_core_types._int_add(x_1_10037,y_1_10038)),16);
              if (_x34) {
                var next = $std_core_types.Nothing;
              }
              else {
                var _x35 = m.topology;
                var _x36 = m.rule;
                if (m.sources === null) {
                  var _x37 = extra_0;
                }
                else {
                  var _x38 = m.sources;
                  var _x37 = $std_core_list._unroll_append_10004(_x38, extra_0);
                }
                var next = $std_core_types.Just($src_domain.Model(_x35, _x36, _x37));
              }
            }
          }
        }
      }
    }
    else {
      if ($std_core_types._int_eq(event,84)) {
        var _x39 = m.topology;
        var _x40 = m.rule;
        var _x41 = m.sources;
        var next = $std_core_types.Just($src_domain.Model($std_core_types._int_mod(($std_core_types._int_add(_x39,1)),3), _x40, _x41));
      }
      else {
        if ($std_core_types._int_eq(event,77)) {
          var _x42 = m.topology;
          var _x43 = m.rule;
          var _x44 = m.sources;
          var next = $std_core_types.Just($src_domain.Model(_x42, $std_core_types._int_mod(($std_core_types._int_add(_x43,1)),3), _x44));
        }
        else {
          if ($std_core_types._int_eq(event,82)) {
            var _x45 = m.topology;
            var _x46 = m.rule;
            var next = $std_core_types.Just($src_domain.Model(_x45, _x46, $std_core_types.Nil));
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
    var _x29 = h.past;
    var _x30 = h.future;
    if ($std_core_types._int_eq(event,90)) {
      var _x31 = 2;
    }
    else {
      var _x31 = ($std_core_types._int_eq(event,89)) ? 3 : 4;
    }
    return pack(History(m, _x29, _x30, _x31));
  }
  else {
     
    if ($std_core_types._int_eq(event,90)) {
      var past = (h.past !== null) ? h.past.tail : $std_core_types.Nil;
    }
    else {
      var _x32 = h.past;
      var past = $std_core_list.take($std_core_types.Cons(m, _x32), 128);
    }
     
    if ($std_core_types._int_eq(event,90)) {
      var _x33 = h.future;
      var future = $std_core_types.Cons(m, _x33);
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
 
 
export function _trmc_lift_describe_10266(_uniq_xs_10237, _acc) /* (list<src/domain/source>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10237 !== null) {
     
    var _x32 = _uniq_xs_10237.head.x;
    var _x33 = _uniq_xs_10237.head.y;
    var _x34 = _uniq_xs_10237.head.sign;
    var _trmc_x10280 = $std_core_types._lp__plus__plus__rp_("[", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x32), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x33), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x34), "]"))))));
     
    var _trmc_x10281 = undefined;
     
    var _trmc_x10282 = $std_core_types.Cons(_trmc_x10280, _trmc_x10281);
    {
      // tail call
      var _x32 = $std_core_types._cctx_extend(_acc,_trmc_x10282,({obj: _trmc_x10282, field_name: "tail"}));
      _uniq_xs_10237 = _uniq_xs_10237.tail;
      _acc = _x32;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_describe_10266(_uniq_xs_10237_0) /* (list<src/domain/source>) -> list<string> */  {
  return _trmc_lift_describe_10266(_uniq_xs_10237_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_describe_10265(_uniq_xs_10232) /* (list<src/domain/source>) -> list<string> */  {
  if (_uniq_xs_10232 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_describe_10266(_uniq_xs_10232, $std_core_types._cctx_empty());
  }
}
 
export function describe(text) /* (text : string) -> string */  {
   
  var h = unpack(text);
   
  var _x33 = h.current.sources;
  var xs_10074 = _lift_describe_10265(_x33);
  var _x33 = h.current.topology;
  var _x34 = h.current.rule;
  if (h.past === null) {
    var _x35 = 0;
  }
  else {
    var _x36 = h.past;
    var _x35 = $std_core_list._unroll_lift_length_6537_10000(_x36, 0);
  }
  if (h.future === null) {
    var _x37 = 0;
  }
  else {
    var _x38 = h.future;
    var _x37 = $std_core_list._unroll_lift_length_6537_10000(_x38, 0);
  }
  var _x39 = h.notice;
  return $std_core_types._lp__plus__plus__rp_("{\"topology\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x33), $std_core_types._lp__plus__plus__rp_(",\"rule\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x34), $std_core_types._lp__plus__plus__rp_(",\"sources\":[", $std_core_types._lp__plus__plus__rp_($std_core_list.joinsep(xs_10074, ","), $std_core_types._lp__plus__plus__rp_("],\"undo\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x35), $std_core_types._lp__plus__plus__rp_(",\"redo\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x37), $std_core_types._lp__plus__plus__rp_(",\"notice\":", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x39), "}"))))))))))));
}
 
 
export function kernel(top, sy, dx, y) /* (top : int, sy : int, dx : int, y : int) -> ndet float64 */  {
  return globalThis.foldfieldKernels[((top*48+sy)*48+y)*64+dx];
}
 
export function _unroll_amplitude_10001(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    var _x40 = sources.head.sign;
    var _x41 = sources.head.y;
    var _x42 = sources.head.x;
    return (((($std_core_types._int_to_double(_x40)) * (kernel(top, _x41, $std_core_types._int_abs(($std_core_types._int_sub(px,_x42))), py)))) + (_unroll_amplitude_10001(top, sources.tail, px, py)));
  }
}
 
 
export function amplitude(top, sources, px, py) /* (top : int, sources : list<src/domain/source>, px : int, py : int) -> ndet float64 */  {
  if (sources === null) {
    return 0.0;
  }
  else {
    return _unroll_amplitude_10001(top, sources, px, py);
  }
}
 
 
export function _lift_values_10268(_uniq_v_10248, history_10090, scale, _uniq_n_10254, _uniq_i_10255) /* (vector<float64>, history@10090 : history, scale : float64, ssize_t, ssize_t) -> ndet () */  { tailcall: while(1)
{
  if ((_uniq_i_10255 < _uniq_n_10254)) {
     
    var i_0_10252 = $std_core_types._int_from_int32(_uniq_i_10255);
     
    var px_10097 = $std_core_types._int_mod(i_0_10252,64);
     
    var py_10098 = $std_core_types._int_div(i_0_10252,64);
     
    if (history_10090.current.sources === null) {
      var _x43 = 0.0;
    }
    else {
      var _x44 = history_10090.current.topology;
      var _x45 = history_10090.current.sources;
      var _x43 = _unroll_amplitude_10001(_x44, _x45, px_10097, py_10098);
    }
    var _null_ = (_uniq_v_10248)[_uniq_i_10255] = ((_x43 / scale));
     
    var _uniq_i_0_10003_10257 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10255);
    {
      // tail call
      _uniq_i_10255 = _uniq_i_0_10003_10257;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_values_10267(history_10090, scale, _uniq_n_10245) /* (history@10090 : history, scale : float64, int) -> ndet vector<float64> */  {
   
  var _uniq_len_10247 = $std_core_int.ssize__t(_uniq_n_10245);
   
  var _uniq_v_10248 = Array(_uniq_len_10247);
   
  var _uniq_i_10249 = 0;
   
  var _null_ = _lift_values_10268(_uniq_v_10248, history_10090, scale, _uniq_len_10247, _uniq_i_10249);
  return _uniq_v_10248;
}
 
export function values(text) /* (text : string) -> ndet vector<float64> */  {
   
  var history_10090 = unpack(text);
   
  if (history_10090.current.sources === null) {
    var j_10092 = 0;
  }
  else {
    var _x43 = history_10090.current.sources;
    var j_10092 = $std_core_list._unroll_lift_length_6537_10000(_x43, 0);
  }
   
  var _x44 = ($std_core_types._int_ge(1,j_10092)) ? 1 : j_10092;
  var scale = Math.sqrt(($std_core_types._int_to_double(_x44)));
  return _lift_values_10267(history_10090, scale, 3072);
}
 
export function check_core() /* () -> bool */  {
  return $src_domain.test_core();
}
