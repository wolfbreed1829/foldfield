// Koka generated module: src/domain, koka version: 3.2.9
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
 
// externals
 
// type declarations
 
 
export var reflect_fs__tag;
var reflect_fs__tag = "reflect@domain";
// type source
export function Source(x, y, sign) /* (x : int, y : int, sign : int) -> source */  {
  return { x: x, y: y, sign: sign };
}
// type model
export function Model(topology, rule, sources) /* (topology : int, rule : int, sources : list<source>) -> model */  {
  return { topology: topology, rule: rule, sources: sources };
}
// type reflect
export function _Hnd_reflect(_cfc, _ctl_reflect) /* forall<e,a> (int, hnd/clause0<bool,reflect,e,a>) -> reflect<e,a> */  {
  return { _cfc: _cfc, _ctl_reflect: _ctl_reflect };
}
 
// declarations
 
 
export function source_fs_x(source) /* (source : source) -> int */  {
  return source.x;
}
 
 
export function source_fs_y(source) /* (source : source) -> int */  {
  return source.y;
}
 
 
export function source_fs_sign(source) /* (source : source) -> int */  {
  return source.sign;
}
 
export function source_fs__copy(_this, x, y, sign) /* (source, x : ? int, y : ? int, sign : ? int) -> source */  {
  if (x !== undefined) {
    var _x0 = x;
  }
  else {
    var _x0 = _this.x;
  }
  if (y !== undefined) {
    var _x1 = y;
  }
  else {
    var _x1 = _this.y;
  }
  if (sign !== undefined) {
    var _x2 = sign;
  }
  else {
    var _x2 = _this.sign;
  }
  return Source(_x0, _x1, _x2);
}
 
 
export function model_fs_topology(model) /* (model : model) -> int */  {
  return model.topology;
}
 
 
export function model_fs_rule(model) /* (model : model) -> int */  {
  return model.rule;
}
 
 
export function model_fs_sources(model) /* (model : model) -> list<source> */  {
  return model.sources;
}
 
export function model_fs__copy(_this, topology, rule, sources) /* (model, topology : ? int, rule : ? int, sources : ? (list<source>)) -> model */  {
  if (topology !== undefined) {
    var _x3 = topology;
  }
  else {
    var _x3 = _this.topology;
  }
  if (rule !== undefined) {
    var _x4 = rule;
  }
  else {
    var _x4 = _this.rule;
  }
  if (sources !== undefined) {
    var _x5 = sources;
  }
  else {
    var _x5 = _this.sources;
  }
  return Model(_x3, _x4, _x5);
}
 
 
export function reflect_fs__cfc(reflect_0) /* forall<e,a> (reflect : reflect<e,a>) -> int */  {
  return reflect_0._cfc;
}
 
 
export function reflect_fs__ctl_reflect(reflect_0) /* forall<e,a> (reflect : reflect<e,a>) -> hnd/clause0<bool,reflect,e,a> */  {
  return reflect_0._ctl_reflect;
}
 
 
export function reflect_fs__handle(hnd, ret, action) /* forall<a,e,b> (hnd : reflect<e,b>, ret : (res : a) -> e b, action : () -> <reflect|e> a) -> e b */  {
  return $std_core_hnd._hhandle(reflect_fs__tag, hnd, ret, action);
}
 
 
export function reflect_fs__select(hnd) /* forall<e,a> (hnd : reflect<e,a>) -> hnd/clause0<bool,reflect,e,a> */  {
  return hnd._ctl_reflect;
}
 
 
export function reflect() /* () -> reflect bool */  {
   
  var ev_10245 = $std_core_hnd._evv_at(0);
  return ev_10245.hnd._ctl_reflect(ev_10245.marker, ev_10245);
}
 
 
export function _mlift_placement_10240(x, y, _c_x10223) /* (x : int, y : int, int) -> source */  {
  return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), _c_x10223);
}
 
 
export function _mlift_placement_10241(opposed, sign, x, y, _y_x10222) /* (opposed : bool, sign : int, x : int, y : int, bool) -> reflect source */  {
  if (_y_x10222) {
     
    var x_0_10247 = (opposed) ? $std_core_types._int_sub(0,sign) : sign;
     
    var next_10248 = function(_c_x10223 /* int */ ) {
      return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), _c_x10223);
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10248);
    }
    else {
      return next_10248(x_0_10247);
    }
  }
  else {
    return Source(x, y, sign);
  }
}
 
export function placement(x, y, sign, opposed) /* (x : int, y : int, sign : int, opposed : bool) -> reflect source */  {
   
  var ev_10255 = $std_core_hnd._evv_at(0);
   
  var x_0_10252 = ev_10255.hnd._ctl_reflect(ev_10255.marker, ev_10255);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10222 /* bool */ ) {
      return _mlift_placement_10241(opposed, sign, x, y, _y_x10222);
    });
  }
  else {
    if (x_0_10252) {
       
      var x_1_10257 = (opposed) ? $std_core_types._int_sub(0,sign) : sign;
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_c_x10223 /* int */ ) {
          return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), _c_x10223);
        });
      }
      else {
        return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), x_1_10257);
      }
    }
    else {
      return Source(x, y, sign);
    }
  }
}
 
 
export function _mlift_interpret_10242(x, y, _c_x10226) /* (x : int, y : int, int) -> source */  {
  return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), _c_x10226);
}
 
 
export function _mlift_interpret_10243(opposed_10012, sign, x, y, _y_x10225) /* (opposed@10012 : bool, sign : int, x : int, y : int, bool) -> reflect source */  {
  if (_y_x10225) {
     
    var x_0_10263 = (opposed_10012) ? $std_core_types._int_sub(0,sign) : sign;
     
    var next_10264 = function(_c_x10226 /* int */ ) {
      return Source($std_core_types._int_sub(63,x), $std_core_types._int_sub(47,y), _c_x10226);
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10264);
    }
    else {
      return next_10264(x_0_10263);
    }
  }
  else {
    return Source(x, y, sign);
  }
}
 
export function interpret(x, y, sign, rule) /* (x : int, y : int, sign : int, rule : int) -> list<source> */  {
  return reflect_fs__handle(_Hnd_reflect(3, $std_core_hnd.clause_control0(function(resume /* (bool) -> list<source> */ ) {
        if ($std_core_types._int_eq(rule,0)) {
          return resume(false);
        }
        else {
           
          var xs_10007 = resume(false);
           
          var ys_10008 = resume(true);
          if (xs_10007 === null) {
            return ys_10008;
          }
          else {
            return $std_core_list._unroll_append_10004(xs_10007, ys_10008);
          }
        }
      })), function(s /* source */ ) {
      return $std_core_types.Cons(s, $std_core_types.Nil);
    }, function() {
       
      var opposed_10012 = $std_core_types._int_eq(rule,2);
       
      var ev_10270 = $std_core_hnd._evv_at(0);
       
      var x_0_10268 = ev_10270.hnd._ctl_reflect(ev_10270.marker, ev_10270);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10225 /* bool */ ) {
          return _mlift_interpret_10243(opposed_10012, sign, x, y, _y_x10225);
        });
      }
      else {
        return _mlift_interpret_10243(opposed_10012, sign, x, y, x_0_10268);
      }
    });
}
 
 
export function _trmc_lift_encode_10206(_uniq_xs_10171, _acc) /* (list<source>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10171 !== null) {
     
    var _x6 = _uniq_xs_10171.head.x;
    var _x7 = _uniq_xs_10171.head.y;
    var _x8 = _uniq_xs_10171.head.sign;
    var _trmc_x10211 = $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x6), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x7), $std_core_types._lp__plus__plus__rp_(",", $std_core_int.show(_x8)))));
     
    var _trmc_x10212 = undefined;
     
    var _trmc_x10213 = $std_core_types.Cons(_trmc_x10211, _trmc_x10212);
    {
      // tail call
      var _x6 = $std_core_types._cctx_extend(_acc,_trmc_x10213,({obj: _trmc_x10213, field_name: "tail"}));
      _uniq_xs_10171 = _uniq_xs_10171.tail;
      _acc = _x6;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_encode_10206(_uniq_xs_10171_0) /* (list<source>) -> list<string> */  {
  return _trmc_lift_encode_10206(_uniq_xs_10171_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_encode_10205(_uniq_xs_10166) /* (list<source>) -> list<string> */  {
  if (_uniq_xs_10166 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_encode_10206(_uniq_xs_10166, $std_core_types._cctx_empty());
  }
}
 
export function encode(sources) /* (sources : list<source>) -> string */  {
   
  var xs_10013 = _lift_encode_10205(sources);
  if (xs_10013 === null) {
    return "";
  }
  if (xs_10013 !== null && xs_10013.tail === null) {
    return xs_10013.head;
  }
  if (xs_10013 !== null && xs_10013.tail !== null && xs_10013.tail.tail === null) {
    if ($std_core_string._lp__eq__eq__rp_(";", "")){
      return $std_core_types._lp__plus__plus__rp_(xs_10013.head, xs_10013.tail.head);
    }
  }
  return $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(xs_10013), ";");
}
 
 
export function _trmc_lift_serialize_10208(_uniq_xs_10184, _acc) /* (list<source>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10184 !== null) {
     
    var _x7 = _uniq_xs_10184.head.x;
    var _x8 = _uniq_xs_10184.head.y;
    var _x9 = _uniq_xs_10184.head.sign;
    var _trmc_x10214 = $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x7), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x8), $std_core_types._lp__plus__plus__rp_(",", $std_core_int.show(_x9)))));
     
    var _trmc_x10215 = undefined;
     
    var _trmc_x10216 = $std_core_types.Cons(_trmc_x10214, _trmc_x10215);
    {
      // tail call
      var _x7 = $std_core_types._cctx_extend(_acc,_trmc_x10216,({obj: _trmc_x10216, field_name: "tail"}));
      _uniq_xs_10184 = _uniq_xs_10184.tail;
      _acc = _x7;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_serialize_10208(_uniq_xs_10184_0) /* (list<source>) -> list<string> */  {
  return _trmc_lift_serialize_10208(_uniq_xs_10184_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_serialize_10207(_uniq_xs_10179) /* (list<source>) -> list<string> */  {
  if (_uniq_xs_10179 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_serialize_10208(_uniq_xs_10179, $std_core_types._cctx_empty());
  }
}
 
export function serialize(m) /* (m : model) -> string */  {
   
  var _x8 = m.sources;
  var xs_10022 = _lift_serialize_10207(_x8);
  var _x8 = m.topology;
  var _x9 = m.rule;
  return $std_core_types._lp__plus__plus__rp_("FOLDFIELD1|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x8), $std_core_types._lp__plus__plus__rp_("|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x9), $std_core_types._lp__plus__plus__rp_("|", $std_core_list.joinsep(xs_10022, ";"))))));
}
 
export function parse_source(s) /* (s : string) -> maybe<source> */  {
   
  var v_10019 = $std_core_string.splitv(s, ",");
  var _x10 = $std_core_vector.vlist(v_10019);
  if (_x10 !== null && _x10.tail !== null && _x10.tail.tail !== null && _x10.tail.tail.tail === null) {
    var _x13 = undefined;
    var _x12 = (_x13 !== undefined) ? _x13 : false;
    var _x11 = $std_core_int.xparse(_x10.head, _x12);
    var _x16 = undefined;
    var _x15 = (_x16 !== undefined) ? _x16 : false;
    var _x14 = $std_core_int.xparse(_x10.tail.head, _x15);
    var _x19 = undefined;
    var _x18 = (_x19 !== undefined) ? _x19 : false;
    var _x17 = $std_core_int.xparse(_x10.tail.tail.head, _x18);
    if (_x11 !== null && _x14 !== null && _x17 !== null) {
      if ($std_core_types._int_ge((_x11.value),0)) {
        if ($std_core_types._int_lt((_x11.value),64)) {
          if ($std_core_types._int_ge((_x14.value),0)) {
            if ($std_core_types._int_lt((_x14.value),48)) {
              if ($std_core_types._int_eq((_x17.value),1)) {
                return $std_core_types.Just(Source(_x11.value, _x14.value, _x17.value));
              }
              else {
                if ($std_core_types._int_eq((_x17.value),(-1))) {
                  return $std_core_types.Just(Source(_x11.value, _x14.value, _x17.value));
                }
                else {
                  return $std_core_types.Nothing;
                }
              }
            }
            else {
              return $std_core_types.Nothing;
            }
          }
          else {
            return $std_core_types.Nothing;
          }
        }
        else {
          return $std_core_types.Nothing;
        }
      }
      else {
        return $std_core_types.Nothing;
      }
    }
    else {
      return $std_core_types.Nothing;
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
export function _unroll_parse_sources_10000(xs) /* (xs : list<string>) -> maybe<list<source>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    var _x20 = parse_source(xs.head);
    var _x21 = _unroll_parse_sources_10000(xs.tail);
    if (_x20 !== null && _x21 !== null) {
      return $std_core_types.Just($std_core_types.Cons(_x20.value, _x21.value));
    }
    else {
      return $std_core_types.Nothing;
    }
  }
}
 
 
export function parse_sources(xs) /* (xs : list<string>) -> maybe<list<source>> */  {
  if (xs === null) {
    return $std_core_types.Just($std_core_types.Nil);
  }
  else {
    return _unroll_parse_sources_10000(xs);
  }
}
 
export function deserialize(s) /* (s : string) -> maybe<model> */  {
   
  var v_10019 = $std_core_string.splitv(s, "|");
  var _x22 = $std_core_vector.vlist(v_10019);
  if (_x22 !== null && _x22.head === "FOLDFIELD1" && _x22.tail !== null && _x22.tail.tail !== null && _x22.tail.tail.tail !== null && _x22.tail.tail.tail.tail === null) {
    var _x25 = undefined;
    var _x24 = (_x25 !== undefined) ? _x25 : false;
    var _x23 = $std_core_int.xparse(_x22.tail.head, _x24);
    var _x28 = undefined;
    var _x27 = (_x28 !== undefined) ? _x28 : false;
    var _x26 = $std_core_int.xparse(_x22.tail.tail.head, _x27);
    if (_x23 !== null && _x26 !== null) {
      if ($std_core_types._int_lt((_x23.value),0)) {
        return $std_core_types.Nothing;
      }
      else {
        if ($std_core_types._int_gt((_x23.value),2)) {
          return $std_core_types.Nothing;
        }
        else {
          if ($std_core_types._int_lt((_x26.value),0)) {
            return $std_core_types.Nothing;
          }
          else {
            if ($std_core_types._int_gt((_x26.value),2)) {
              return $std_core_types.Nothing;
            }
            else {
               
              var v_10019_0 = $std_core_string.splitv(_x22.tail.tail.tail.head, ";");
               
              var parts = $std_core_vector.vlist(v_10019_0);
              var _x29 = $std_core_string._lp__eq__eq__rp_(_x22.tail.tail.tail.head, "");
              if (_x29) {
                var _x32 = $std_core_types.Nil;
                if (_x32 === null) {
                  var _x31 = 0;
                }
                else {
                  var _x31 = $std_core_list._unroll_lift_length_6537_10000($std_core_types.Nil, 0);
                }
                var _x30 = $std_core_types._int_le(_x31,16);
                if (_x30) {
                  return $std_core_types.Just(Model(_x23.value, _x26.value, $std_core_types.Nil));
                }
                else {
                  return $std_core_types.Nothing;
                }
              }
              else {
                if (parts === null) {
                  var _x35 = 0;
                }
                else {
                  var _x35 = $std_core_list._unroll_lift_length_6537_10000(parts, 0);
                }
                var _x34 = $std_core_types._int_gt(_x35,16);
                if (_x34) {
                  var _x33 = $std_core_types.Nothing;
                }
                else {
                  if (parts === null) {
                    var _x33 = $std_core_types.Just($std_core_types.Nil);
                  }
                  else {
                    var _x33 = _unroll_parse_sources_10000(parts);
                  }
                }
                if (_x33 !== null) {
                  if (_x33.value === null) {
                    var _x37 = 0;
                  }
                  else {
                    var _x37 = $std_core_list._unroll_lift_length_6537_10000(_x33.value, 0);
                  }
                  var _x36 = $std_core_types._int_le(_x37,16);
                  if (_x36) {
                    return $std_core_types.Just(Model(_x23.value, _x26.value, _x33.value));
                  }
                  else {
                    return $std_core_types.Nothing;
                  }
                }
                else {
                  return $std_core_types.Nothing;
                }
              }
            }
          }
        }
      }
    }
    else {
      return $std_core_types.Nothing;
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _trmc_lift_test_core_10210(_uniq_xs_10197, _acc) /* (list<source>, ctx<list<string>>) -> list<string> */  { tailcall: while(1)
{
  if (_uniq_xs_10197 !== null) {
     
    var _x38 = _uniq_xs_10197.head.x;
    var _x39 = _uniq_xs_10197.head.y;
    var _x40 = _uniq_xs_10197.head.sign;
    var _trmc_x10217 = $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x38), $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x39), $std_core_types._lp__plus__plus__rp_(",", $std_core_int.show(_x40)))));
     
    var _trmc_x10218 = undefined;
     
    var _trmc_x10219 = $std_core_types.Cons(_trmc_x10217, _trmc_x10218);
    {
      // tail call
      var _x38 = $std_core_types._cctx_extend(_acc,_trmc_x10219,({obj: _trmc_x10219, field_name: "tail"}));
      _uniq_xs_10197 = _uniq_xs_10197.tail;
      _acc = _x38;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _lift_test_core_10210(_uniq_xs_10197_0) /* (list<source>) -> list<string> */  {
  return _trmc_lift_test_core_10210(_uniq_xs_10197_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_test_core_10209(_uniq_xs_10192) /* (list<source>) -> list<string> */  {
  if (_uniq_xs_10192 === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_lift_test_core_10210(_uniq_xs_10192, $std_core_types._cctx_empty());
  }
}
 
export function test_core() /* () -> bool */  {
   
  var a = reflect_fs__handle(_Hnd_reflect(3, $std_core_hnd.clause_control0(function(resume /* (bool) -> list<source> */ ) {
        if ($std_core_types._int_eq(0,0)) {
          return resume(false);
        }
        else {
           
          var xs_10007 = resume(false);
           
          var ys_10008 = resume(true);
          if (xs_10007 === null) {
            return ys_10008;
          }
          else {
            return $std_core_list._unroll_append_10004(xs_10007, ys_10008);
          }
        }
      })), function(s /* source */ ) {
      return $std_core_types.Cons(s, $std_core_types.Nil);
    }, function() {
       
      var opposed_10012 = $std_core_types._int_eq(0,2);
       
      var ev_10270 = $std_core_hnd._evv_at(0);
       
      var x_0_10268 = ev_10270.hnd._ctl_reflect(ev_10270.marker, ev_10270);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10225 /* bool */ ) {
          return _mlift_interpret_10243(opposed_10012, 1, 12, 8, _y_x10225);
        });
      }
      else {
        return _mlift_interpret_10243(opposed_10012, 1, 12, 8, x_0_10268);
      }
    });
   
  var b = reflect_fs__handle(_Hnd_reflect(3, $std_core_hnd.clause_control0(function(resume_0 /* (bool) -> list<source> */ ) {
        if ($std_core_types._int_eq(1,0)) {
          return resume_0(false);
        }
        else {
           
          var xs_10007_0 = resume_0(false);
           
          var ys_10008_0 = resume_0(true);
          if (xs_10007_0 === null) {
            return ys_10008_0;
          }
          else {
            return $std_core_list._unroll_append_10004(xs_10007_0, ys_10008_0);
          }
        }
      })), function(s_0 /* source */ ) {
      return $std_core_types.Cons(s_0, $std_core_types.Nil);
    }, function() {
       
      var opposed_10012_0 = $std_core_types._int_eq(1,2);
       
      var ev_10270_0 = $std_core_hnd._evv_at(0);
       
      var x_0_10268_0 = ev_10270_0.hnd._ctl_reflect(ev_10270_0.marker, ev_10270_0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10225_0 /* bool */ ) {
          return _mlift_interpret_10243(opposed_10012_0, 1, 12, 8, _y_x10225_0);
        });
      }
      else {
        return _mlift_interpret_10243(opposed_10012_0, 1, 12, 8, x_0_10268_0);
      }
    });
   
  var c = reflect_fs__handle(_Hnd_reflect(3, $std_core_hnd.clause_control0(function(resume_1 /* (bool) -> list<source> */ ) {
        if ($std_core_types._int_eq(2,0)) {
          return resume_1(false);
        }
        else {
           
          var xs_10007_1 = resume_1(false);
           
          var ys_10008_1 = resume_1(true);
          if (xs_10007_1 === null) {
            return ys_10008_1;
          }
          else {
            return $std_core_list._unroll_append_10004(xs_10007_1, ys_10008_1);
          }
        }
      })), function(s_1 /* source */ ) {
      return $std_core_types.Cons(s_1, $std_core_types.Nil);
    }, function() {
       
      var opposed_10012_1 = $std_core_types._int_eq(2,2);
       
      var ev_10270_1 = $std_core_hnd._evv_at(0);
       
      var x_0_10268_1 = ev_10270_1.hnd._ctl_reflect(ev_10270_1.marker, ev_10270_1);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10225_1 /* bool */ ) {
          return _mlift_interpret_10243(opposed_10012_1, 1, 12, 8, _y_x10225_1);
        });
      }
      else {
        return _mlift_interpret_10243(opposed_10012_1, 1, 12, 8, x_0_10268_1);
      }
    });
  if (a === null) {
    var _x40 = 0;
  }
  else {
    var _x40 = $std_core_list._unroll_lift_length_6537_10000(a, 0);
  }
  var _x39 = $std_core_types._int_eq(_x40,1);
  if (_x39) {
    if (b === null) {
      var _x42 = 0;
    }
    else {
      var _x42 = $std_core_list._unroll_lift_length_6537_10000(b, 0);
    }
    var _x41 = $std_core_types._int_eq(_x42,2);
    if (_x41) {
      if (c === null) {
        var _x44 = 0;
      }
      else {
        var _x44 = $std_core_list._unroll_lift_length_6537_10000(c, 0);
      }
      var _x43 = $std_core_types._int_eq(_x44,2);
      if (_x43) {
        var _x45 = $std_core_string._lp__eq__eq__rp_(encode(a), "12,8,1");
        if (_x45) {
          var _x46 = $std_core_string._lp__eq__eq__rp_(encode(b), "12,8,1;51,39,1");
          if (_x46) {
            var _x47 = $std_core_string._lp__eq__eq__rp_(encode(c), "12,8,1;51,39,-1");
            if (_x47) {
               
              var maybe_10050 = deserialize("FOLDFIELD1|0|0|64,0,1");
              if (maybe_10050 === null) {
                 
                var maybe_0_10051 = deserialize("FOLDFIELD1|3|0|");
                if (maybe_0_10051 === null) {
                   
                  var maybe_1_10052 = deserialize("bad");
                  if (maybe_1_10052 === null) {
                     
                    var m_10054 = Model(2, 1, b);
                     
                    var _x48 = m_10054.sources;
                    var xs_2_10059 = _lift_test_core_10209(_x48);
                     
                    var _x49 = m_10054.topology;
                    var _x50 = m_10054.rule;
                    var maybe_2_10053 = deserialize($std_core_types._lp__plus__plus__rp_("FOLDFIELD1|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x49), $std_core_types._lp__plus__plus__rp_("|", $std_core_types._lp__plus__plus__rp_($std_core_int.show(_x50), $std_core_types._lp__plus__plus__rp_("|", $std_core_list.joinsep(xs_2_10059, ";")))))));
                    return (maybe_2_10053 !== null);
                  }
                  else {
                    return false;
                  }
                }
                else {
                  return false;
                }
              }
              else {
                return false;
              }
            }
            else {
              return false;
            }
          }
          else {
            return false;
          }
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
