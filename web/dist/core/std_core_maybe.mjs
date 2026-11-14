// Koka generated module: std/core/maybe, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function maybe(m, onNothing, onJust) /* forall<a,b,e> (m : maybe<a>, onNothing : b, onJust : (a) -> e b) -> e b */  {
  if (m === null) {
    return onNothing;
  }
  else {
    return onJust(m.value);
  }
}
 
 
export function $default(m, nothing) /* forall<a> (m : maybe<a>, nothing : a) -> a */  {
  return (m === null) ? nothing : m.value;
}
 
 
export function unjust(m, _implicit_fs_kk_file_line) /* forall<a> (m : maybe<a>, ?kk-file-line : string) -> exn a */  {
  if (m !== null) {
    return m.value;
  }
  else {
     
    var message_10000 = $std_core_types._lp__plus__plus__rp_("unexpected Nothing in ", _implicit_fs_kk_file_line);
     
    var ev_10128 = $std_core_hnd._evv_at(0);
    var _x0 = $std_core_exn.throw_exn_fs__select(ev_10128.hnd);
    var _x2 = undefined;
    var _x1 = (_x2 !== undefined) ? _x2 : $std_core_exn.ExnError;
    return _x0(ev_10128.marker, ev_10128, $std_core_exn.Exception(message_10000, _x1));
  }
}
 
 
export function expect(m, error_msg) /* forall<a> (m : maybe<a>, error-msg : string) -> exn a */  {
  if (m !== null) {
    return m.value;
  }
  else {
     
    var ev_10131 = $std_core_hnd._evv_at(0);
    var _x3 = $std_core_exn.throw_exn_fs__select(ev_10131.hnd);
    var _x5 = undefined;
    var _x4 = (_x5 !== undefined) ? _x5 : $std_core_exn.ExnError;
    return _x3(ev_10131.marker, ev_10131, $std_core_exn.Exception(error_msg, _x4));
  }
}
 
 
export function _mlift_map_10125(_y_x10110) /* forall<a,e> (a) -> e maybe<a> */  {
  return $std_core_types.Just(_y_x10110);
}
 
export function map(m, f) /* forall<a,b,e> (m : maybe<a>, f : (a) -> e b) -> e maybe<b> */  {
  if (m === null) {
    return $std_core_types.Nothing;
  }
  else {
     
    var x_0_10134 = f(m.value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10110 /* 280 */ ) {
        return $std_core_types.Just(_y_x10110);
      });
    }
    else {
      return $std_core_types.Just(x_0_10134);
    }
  }
}
 
export function foreach(m, f) /* forall<a,e> (m : maybe<a>, f : (a) -> e ()) -> e () */  {
  if (m === null) {
    return $std_core_types.Unit;
  }
  else {
    return f(m.value);
  }
}
 
export function _lp__bar__bar__rp_(m1, m2) /* forall<a> (m1 : maybe<a>, m2 : maybe<a>) -> maybe<a> */  {
  return (m1 === null) ? m2 : m1;
}
 
export function flatten(mm) /* forall<a> (mm : maybe<maybe<a>>) -> maybe<a> */  {
  if (mm !== null && mm.value !== null) {
    return $std_core_types.Just(mm.value.value);
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _lp__eq__eq__rp_(mb1, mb2, _implicit_fs__lp__eq__eq__rp_) /* forall<a,e> (mb1 : maybe<a>, mb2 : maybe<a>, ?(==) : (a, a) -> e bool) -> e bool */  {
  if (mb1 !== null) {
    if (mb2 !== null) {
      return _implicit_fs__lp__eq__eq__rp_(mb1.value, mb2.value);
    }
    else {
      return false;
    }
  }
  else {
    return (mb2 === null);
  }
}
 
 
export function cmp(mb1, mb2, _implicit_fs_cmp) /* forall<a,e> (mb1 : maybe<a>, mb2 : maybe<a>, ?cmp : (a, a) -> e order) -> e order */  {
  if (mb1 !== null) {
    if (mb2 !== null) {
      return _implicit_fs_cmp(mb1.value, mb2.value);
    }
    else {
      return $std_core_types.Gt;
    }
  }
  else {
    return (mb2 === null) ? $std_core_types.Eq : $std_core_types.Lt;
  }
}
 
 
export function _mlift_order2_10126(_y_x10120) /* forall<a,e> (order2<a>) -> e order2<maybe<a>> */  {
  if (_y_x10120._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Just(_y_x10120.eq));
  }
  else if (_y_x10120._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Just(_y_x10120.lt), $std_core_types.Just(_y_x10120.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Just(_y_x10120.lt), $std_core_types.Just(_y_x10120.gt));
  }
}
 
 
export function order2(mb1, mb2, _implicit_fs_order2) /* forall<a,e> (mb1 : maybe<a>, mb2 : maybe<a>, ?order2 : (a, a) -> e order2<a>) -> e order2<maybe<a>> */  {
  if (mb1 !== null) {
    if (mb2 !== null) {
       
      var x_0_10138 = _implicit_fs_order2(mb1.value, mb2.value);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10120 /* order2<659> */ ) {
          return _mlift_order2_10126(_y_x10120);
        });
      }
      else {
        if (x_0_10138._tag === 2) {
          return $std_core_types.Eq2($std_core_types.Just(x_0_10138.eq));
        }
        else if (x_0_10138._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Just(x_0_10138.lt), $std_core_types.Just(x_0_10138.gt));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Just(x_0_10138.lt), $std_core_types.Just(x_0_10138.gt));
        }
      }
    }
    else {
      return $std_core_types.Gt2($std_core_types.Nothing, $std_core_types.Just(mb1.value));
    }
  }
  else {
    return $std_core_types.Lt2($std_core_types.Nothing, mb2);
  }
}
 
 
export function _mlift_show_10127(_y_x10123) /* forall<e> (string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("Just(", $std_core_types._lp__plus__plus__rp_(_y_x10123, ")"));
}
 
 
export function show(mb, _implicit_fs_show) /* forall<a,e> (mb : maybe<a>, ?show : (a) -> e string) -> e string */  {
  if (mb !== null) {
     
    var x_0_10141 = _implicit_fs_show(mb.value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10123 /* string */ ) {
        return $std_core_types._lp__plus__plus__rp_("Just(", $std_core_types._lp__plus__plus__rp_(_y_x10123, ")"));
      });
    }
    else {
      return $std_core_types._lp__plus__plus__rp_("Just(", $std_core_types._lp__plus__plus__rp_(x_0_10141, ")"));
    }
  }
  else {
    return "Nothing";
  }
}
 
 
export function bool(mb) /* forall<a> (mb : maybe<a>) -> bool */  {
  return (mb !== null);
}
