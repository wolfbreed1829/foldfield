// Koka generated module: std/core/result, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function maybe(r) /* forall<a,b> (r : result<a,b>) -> maybe<a> */  {
  if (r._tag === 1) {
    return $std_core_types.Nothing;
  }
  else {
    return $std_core_types.Just(r.value);
  }
}
 
 
export function $default(r, def) /* forall<a,b> (r : result<a,b>, def : a) -> a */  {
  return (r._tag === 1) ? def : r.value;
}
 
 
export function either(r) /* forall<a,b> (r : result<a,b>) -> either<b,a> */  {
  if (r._tag === 1) {
    return $std_core_types.Left(r.error);
  }
  else {
    return $std_core_types.Right(r.value);
  }
}
 
 
export function _mlift_map_10110(_y_x10100) /* forall<a,b,e> (b) -> e result<b,a> */  {
  return $std_core_types.Ok(_y_x10100);
}
 
 
export function map(e, f) /* forall<a,b,c,e> (e : result<a,b>, f : (a) -> e c) -> e result<c,b> */  {
  if (e._tag === 2) {
     
    var x_0_10113 = f(e.value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10100 /* 292 */ ) {
        return $std_core_types.Ok(_y_x10100);
      });
    }
    else {
      return $std_core_types.Ok(x_0_10113);
    }
  }
  else {
    return $std_core_types.$Error(e.error);
  }
}
 
 
export function flatten(rr) /* forall<a,b,e> (rr : result<result<a,b>,b>) -> e result<a,b> */  {
  if (rr._tag === 2) {
    if (rr.value._tag === 2) {
      return $std_core_types.Ok(rr.value.value);
    }
    else {
      return $std_core_types.$Error(rr.value.error);
    }
  }
  else {
    return $std_core_types.$Error(rr.error);
  }
}
 
 
export function _lp__eq__eq__rp_(e1, e2, _implicit_fs_ok_fs__lp__eq__eq__rp_, _implicit_fs_error_fs__lp__eq__eq__rp_) /* forall<a,b,e> (e1 : result<a,b>, e2 : result<a,b>, ?ok/(==) : (a, a) -> e bool, ?error/(==) : (b, b) -> e bool) -> e bool */  {
  if (e1._tag === 1) {
    if (e2._tag === 1) {
      return _implicit_fs_error_fs__lp__eq__eq__rp_(e1.error, e2.error);
    }
    else {
      return false;
    }
  }
  else {
    if (e2._tag === 2) {
      return _implicit_fs_ok_fs__lp__eq__eq__rp_(e1.value, e2.value);
    }
    else {
      return false;
    }
  }
}
 
 
export function _mlift_show_10111(_y_x10107) /* forall<e> (string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("Ok(", $std_core_types._lp__plus__plus__rp_(_y_x10107, ")"));
}
 
 
export function _mlift_show_10112(_y_x10108) /* forall<e> (string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("Error(", $std_core_types._lp__plus__plus__rp_(_y_x10108, ")"));
}
 
 
export function show(e, _implicit_fs_ok_fs_show, _implicit_fs_error_fs_show) /* forall<a,b,e> (e : result<a,b>, ?ok/show : (a) -> e string, ?error/show : (b) -> e string) -> e string */  {
  if (e._tag === 2) {
     
    var x_0_10117 = _implicit_fs_ok_fs_show(e.value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10107 /* string */ ) {
        return $std_core_types._lp__plus__plus__rp_("Ok(", $std_core_types._lp__plus__plus__rp_(_y_x10107, ")"));
      });
    }
    else {
      return $std_core_types._lp__plus__plus__rp_("Ok(", $std_core_types._lp__plus__plus__rp_(x_0_10117, ")"));
    }
  }
  else {
     
    var x_1_10121 = _implicit_fs_error_fs_show(e.error);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10108 /* string */ ) {
        return $std_core_types._lp__plus__plus__rp_("Error(", $std_core_types._lp__plus__plus__rp_(_y_x10108, ")"));
      });
    }
    else {
      return $std_core_types._lp__plus__plus__rp_("Error(", $std_core_types._lp__plus__plus__rp_(x_1_10121, ")"));
    }
  }
}
