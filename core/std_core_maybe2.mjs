// Koka generated module: std/core/maybe2, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function maybe2(m, onNothing, onJust) /* forall<a,b,c,e> (m : maybe2<a,b>, onNothing : c, onJust : (a, b) -> e c) -> e c */  {
  if (m._tag === 1) {
    return onNothing;
  }
  else {
    return onJust(m.fst, m.snd);
  }
}
 
 
export function $default(m, nothing) /* forall<a,b> (m : maybe2<a,b>, nothing : (a, b)) -> (a, b) */  {
  if (m._tag === 1) {
    return nothing;
  }
  else {
    return $std_core_types.Tuple2(m.fst, m.snd);
  }
}
 
 
export function unjust(m, _implicit_fs_kk_file_line) /* forall<a,b> (m : maybe2<a,b>, ?kk-file-line : string) -> exn (a, b) */  {
  if (m._tag === 2) {
    return $std_core_types.Tuple2(m.fst, m.snd);
  }
  else {
     
    var message_10000 = $std_core_types._lp__plus__plus__rp_("unexpected Nothing2 in ", _implicit_fs_kk_file_line);
     
    var ev_10132 = $std_core_hnd._evv_at(0);
    var _x0 = $std_core_exn.throw_exn_fs__select(ev_10132.hnd);
    var _x2 = undefined;
    var _x1 = (_x2 !== undefined) ? _x2 : $std_core_exn.ExnError;
    return _x0(ev_10132.marker, ev_10132, $std_core_exn.Exception(message_10000, _x1));
  }
}
 
 
export function expect(m, error_msg) /* forall<a,b> (m : maybe2<a,b>, error-msg : string) -> exn (a, b) */  {
  if (m._tag === 2) {
    return $std_core_types.Tuple2(m.fst, m.snd);
  }
  else {
     
    var ev_10135 = $std_core_hnd._evv_at(0);
    var _x3 = $std_core_exn.throw_exn_fs__select(ev_10135.hnd);
    var _x5 = undefined;
    var _x4 = (_x5 !== undefined) ? _x5 : $std_core_exn.ExnError;
    return _x3(ev_10135.marker, ev_10135, $std_core_exn.Exception(error_msg, _x4));
  }
}
 
 
export function _mlift_map_10127(_y_x10110) /* forall<a,b,e> ((a, b)) -> e maybe2<a,b> */  {
  return $std_core_types.Just2(_y_x10110.fst, _y_x10110.snd);
}
 
export function map(m, f) /* forall<a,b,c,d,e> (m : maybe2<a,b>, f : (a, b) -> e (c, d)) -> e maybe2<c,d> */  {
  if (m._tag === 1) {
    return $std_core_types.Nothing2;
  }
  else {
     
    var x_0_10138 = f(m.fst, m.snd);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10110 /* (437, 438) */ ) {
        return $std_core_types.Just2(_y_x10110.fst, _y_x10110.snd);
      });
    }
    else {
      return $std_core_types.Just2(x_0_10138.fst, x_0_10138.snd);
    }
  }
}
 
export function foreach(m, f) /* forall<a,b,e> (m : maybe2<a,b>, f : (a, b) -> e ()) -> e () */  {
  if (m._tag === 1) {
    return $std_core_types.Unit;
  }
  else {
    return f(m.fst, m.snd);
  }
}
 
export function _lp__bar__bar__rp_(m1, m2) /* forall<a,b> (m1 : maybe2<a,b>, m2 : maybe2<a,b>) -> maybe2<a,b> */  {
  return (m1._tag === 1) ? m2 : m1;
}
 
 
export function _lp__at_mlift_x10128_eq__eq__rp_(_implicit_fs_snd_fs__lp__eq__eq__rp_, b, y, _y_x10114) /* forall<a,e> (?snd/(==) : (a, a) -> e bool, b : a, y : a, bool) -> e bool */  {
  if (_y_x10114) {
    return _implicit_fs_snd_fs__lp__eq__eq__rp_(y, b);
  }
  else {
    return false;
  }
}
 
 
export function _lp__eq__eq__rp_(mb1, mb2, _implicit_fs_fst_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_) /* forall<a,b,e> (mb1 : maybe2<a,b>, mb2 : maybe2<a,b>, ?fst/(==) : (a, a) -> e bool, ?snd/(==) : (b, b) -> e bool) -> e bool */  {
  if (mb1._tag === 2) {
    if (mb2._tag === 2) {
       
      var x_0_10142 = _implicit_fs_fst_fs__lp__eq__eq__rp_(mb1.fst, mb2.fst);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10114 /* bool */ ) {
          if (_y_x10114) {
            return _implicit_fs_snd_fs__lp__eq__eq__rp_(mb1.snd, mb2.snd);
          }
          else {
            return false;
          }
        });
      }
      else {
        if (x_0_10142) {
          return _implicit_fs_snd_fs__lp__eq__eq__rp_(mb1.snd, mb2.snd);
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
  else {
    return (mb2._tag === 1);
  }
}
 
 
export function _mlift_cmp_10129(b, _implicit_fs_snd_fs_cmp, y, _y_x10119) /* forall<a,e> (b : a, ?snd/cmp : (a, a) -> e order, y : a, order) -> e order */  {
  if (_y_x10119 === 2) {
    return _implicit_fs_snd_fs_cmp(y, b);
  }
  else {
    return _y_x10119;
  }
}
 
 
export function cmp(mb1, mb2, _implicit_fs_fst_fs_cmp, _implicit_fs_snd_fs_cmp) /* forall<a,b,e> (mb1 : maybe2<a,b>, mb2 : maybe2<a,b>, ?fst/cmp : (a, a) -> e order, ?snd/cmp : (b, b) -> e order) -> e order */  {
  if (mb1._tag === 2) {
    if (mb2._tag === 2) {
       
      var x_0_10149 = _implicit_fs_fst_fs_cmp(mb1.fst, mb2.fst);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10119 /* order */ ) {
          if (_y_x10119 === 2) {
            return _implicit_fs_snd_fs_cmp(mb1.snd, mb2.snd);
          }
          else {
            return _y_x10119;
          }
        });
      }
      else {
        if (x_0_10149 === 2) {
          return _implicit_fs_snd_fs_cmp(mb1.snd, mb2.snd);
        }
        else {
          return x_0_10149;
        }
      }
    }
    else {
      return $std_core_types.Gt;
    }
  }
  else {
    return (mb2._tag === 1) ? $std_core_types.Eq : $std_core_types.Lt;
  }
}
 
 
export function _mlift_show_10130(_y_x10124, _y_x10125) /* forall<e> (string, string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("Just2(", $std_core_types._lp__plus__plus__rp_(_y_x10124, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10125, ")"))));
}
 
 
export function _mlift_show_10131(_implicit_fs_snd_fs_show, y, _y_x10124) /* forall<a,e> (?snd/show : (a) -> e string, y : a, string) -> e string */  {
   
  var x_10156 = _implicit_fs_snd_fs_show(y);
   
  function next_10157(_y_x10125) /* (string) -> 812 string */  {
    return $std_core_types._lp__plus__plus__rp_("Just2(", $std_core_types._lp__plus__plus__rp_(_y_x10124, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10125, ")"))));
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(next_10157);
  }
  else {
    return next_10157(x_10156);
  }
}
 
 
export function show(mb, _implicit_fs_fst_fs_show, _implicit_fs_snd_fs_show) /* forall<a,b,e> (mb : maybe2<a,b>, ?fst/show : (a) -> e string, ?snd/show : (b) -> e string) -> e string */  {
  if (mb._tag === 2) {
     
    var x_0_10160 = _implicit_fs_fst_fs_show(mb.fst);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10124 /* string */ ) {
        return _mlift_show_10131(_implicit_fs_snd_fs_show, mb.snd, _y_x10124);
      });
    }
    else {
       
      var x_1_10163 = _implicit_fs_snd_fs_show(mb.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10125 /* string */ ) {
          return $std_core_types._lp__plus__plus__rp_("Just2(", $std_core_types._lp__plus__plus__rp_(x_0_10160, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10125, ")"))));
        });
      }
      else {
        return $std_core_types._lp__plus__plus__rp_("Just2(", $std_core_types._lp__plus__plus__rp_(x_0_10160, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_1_10163, ")"))));
      }
    }
  }
  else {
    return "Nothing2";
  }
}
 
 
export function bool(mb) /* forall<a,b> (mb : maybe2<a,b>) -> bool */  {
  return (mb._tag === 2);
}
