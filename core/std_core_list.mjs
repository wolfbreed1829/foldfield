// Koka generated module: std/core/list, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_undiv from './std_core_undiv.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
import * as $std_core_char from './std_core_char.mjs';
import * as $std_core_string from './std_core_string.mjs';
import * as $std_core_int from './std_core_int.mjs';
import * as $std_core_vector from './std_core_vector.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function maybe_fs_head(xs) /* forall<a> (xs : list<a>) -> maybe<a> */  {
  if (xs !== null) {
    return $std_core_types.Just(xs.head);
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function head(xs, $default) /* forall<a> (xs : list<a>, default : a) -> a */  {
  return (xs !== null) ? xs.head : $default;
}
 
 
export function tail(xs) /* forall<a> (xs : list<a>) -> list<a> */  {
  return (xs !== null) ? xs.tail : $std_core_types.Nil;
}
 
 
export function is_empty(xs) /* forall<a> (xs : list<a>) -> bool */  {
  return (xs === null);
}
 
 
export function single(x) /* forall<a> (x : a) -> list<a> */  {
  return $std_core_types.Cons(x, $std_core_types.Nil);
}
 
 
export function _unroll_lift_length_6537_10000(ys, acc) /* forall<a> (ys : list<a>, acc : int) -> int */  { tailcall: while(1)
{
  if (ys !== null) {
    {
      // tail call
      var _x0 = $std_core_types._int_add(acc,1);
      ys = ys.tail;
      acc = _x0;
      continue tailcall;
    }
  }
  else {
    return acc;
  }
}}
 
 
export function _lift_length_6537(ys, acc) /* forall<a> (ys : list<a>, acc : int) -> int */  {
  if (ys === null) {
    return acc;
  }
  else {
    return _unroll_lift_length_6537_10000(ys, acc);
  }
}
 
 
export function length(xs) /* forall<a> (xs : list<a>) -> int */  {
  if (xs === null) {
    return 0;
  }
  else {
    return _unroll_lift_length_6537_10000(xs, 0);
  }
}
 
 
export function _lp__at_mlift_x10835unroll_x10001_eq__eq__rp_(_implicit_fs__lp__eq__eq__rp_, xx, yy, _y_x10466) /* forall<a,e> (?(==) : (a, a) -> e bool, xx : list<a>, yy : list<a>, bool) -> e bool */  {
  if (_y_x10466) {
    return _lp__at_unroll_x10001_eq__eq__rp_(xx, yy, _implicit_fs__lp__eq__eq__rp_);
  }
  else {
    return false;
  }
}
 
 
export function _lp__at_unroll_x10001_eq__eq__rp_(xs, ys, _implicit_fs__lp__at_x0_eq__eq__rp_) /* forall<a,e> (xs : list<a>, ys : list<a>, ?(==) : (a, a) -> e bool) -> e bool */  { tailcall: while(1)
{
  if (xs !== null) {
    if (ys === null) {
      return false;
    }
    else {
       
      var x_0_10887 = _implicit_fs__lp__at_x0_eq__eq__rp_(xs.head, ys.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10466_0 /* bool */ ) {
          return _lp__at_mlift_x10835unroll_x10001_eq__eq__rp_(_implicit_fs__lp__at_x0_eq__eq__rp_, xs.tail, ys.tail, _y_x10466_0);
        });
      }
      else {
        if (x_0_10887) {
          {
            // tail call
            xs = xs.tail;
            ys = ys.tail;
            continue tailcall;
          }
        }
        else {
          return false;
        }
      }
    }
  }
  else {
    return (ys === null);
  }
}}
 
 
export function _lp__eq__eq__rp_(xs, ys, _implicit_fs__lp__eq__eq__rp_) /* forall<a,e> (xs : list<a>, ys : list<a>, ?(==) : (a, a) -> e bool) -> e bool */  {
  if (xs === null) {
    return (ys === null);
  }
  else {
    return _lp__at_unroll_x10001_eq__eq__rp_(xs, ys, _implicit_fs__lp__eq__eq__rp_);
  }
}
 
 
export function _mlift_unroll_cmp_10002_10836(_implicit_fs_cmp, xx, yy, _y_x10473) /* forall<a,e> (?cmp : (a, a) -> e order, xx : list<a>, yy : list<a>, order) -> e order */  {
  if (_y_x10473 === 2) {
    return _unroll_cmp_10002(xx, yy, _implicit_fs_cmp);
  }
  else {
    return _y_x10473;
  }
}
 
 
export function _unroll_cmp_10002(xs, ys, _implicit_fs_cmp_0) /* forall<a,e> (xs : list<a>, ys : list<a>, ?cmp : (a, a) -> e order) -> e order */  { tailcall: while(1)
{
  if (xs !== null) {
    if (ys === null) {
      return $std_core_types.Gt;
    }
    else {
       
      var x_0_10890 = _implicit_fs_cmp_0(xs.head, ys.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10473_0 /* order */ ) {
          return _mlift_unroll_cmp_10002_10836(_implicit_fs_cmp_0, xs.tail, ys.tail, _y_x10473_0);
        });
      }
      else {
        if (x_0_10890 === 2) {
          {
            // tail call
            xs = xs.tail;
            ys = ys.tail;
            continue tailcall;
          }
        }
        else {
          return x_0_10890;
        }
      }
    }
  }
  else {
    return (ys === null) ? $std_core_types.Eq : $std_core_types.Lt;
  }
}}
 
 
export function cmp(xs, ys, _implicit_fs_cmp) /* forall<a,e> (xs : list<a>, ys : list<a>, ?cmp : (a, a) -> e order) -> e order */  {
  if (xs === null) {
    return (ys === null) ? $std_core_types.Eq : $std_core_types.Lt;
  }
  else {
    return _unroll_cmp_10002(xs, ys, _implicit_fs_cmp);
  }
}
 
 
export function _trmc_take(xs, n, _acc) /* forall<a> (xs : list<a>, n : int, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
    if ($std_core_types._int_gt(n,0)){
       
      var _trmc_x10367 = undefined;
       
      var _trmc_x10368 = $std_core_types.Cons(xs.head, _trmc_x10367);
      {
        // tail call
        var _x1 = $std_core_types._int_sub(n,1);
        var _x2 = $std_core_types._cctx_extend(_acc,_trmc_x10368,({obj: _trmc_x10368, field_name: "tail"}));
        xs = xs.tail;
        n = _x1;
        _acc = _x2;
        continue tailcall;
      }
    }
  }
  return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
}}
 
 
export function take(xs_0, n_0) /* forall<a> (xs : list<a>, n : int) -> list<a> */  {
  return _trmc_take(xs_0, n_0, $std_core_types._cctx_empty());
}
 
 
export function drop(xs, n) /* forall<a> (xs : list<a>, n : int) -> list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
    if ($std_core_types._int_gt(n,0)){
      {
        // tail call
        var _x3 = $std_core_types._int_sub(n,1);
        xs = xs.tail;
        n = _x3;
        continue tailcall;
      }
    }
  }
  return xs;
}}
 
export function _unroll_reverse_acc_10003(acc, ys) /* forall<a> (acc : list<a>, ys : list<a>) -> list<a> */  { tailcall: while(1)
{
  if (ys !== null) {
    {
      // tail call
      var _x4 = $std_core_types.Cons(ys.head, acc);
      acc = _x4;
      ys = ys.tail;
      continue tailcall;
    }
  }
  else {
    return acc;
  }
}}
 
 
export function reverse_acc(acc, ys) /* forall<a> (acc : list<a>, ys : list<a>) -> list<a> */  {
  if (ys === null) {
    return acc;
  }
  else {
    return _unroll_reverse_acc_10003(acc, ys);
  }
}
 
 
export function reverse_append(xs, tl) /* forall<a> (xs : list<a>, tl : list<a>) -> list<a> */  {
  if (xs === null) {
    return tl;
  }
  else {
    return _unroll_reverse_acc_10003(tl, xs);
  }
}
 
 
export function reverse(xs) /* forall<a> (xs : list<a>) -> list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_reverse_acc_10003($std_core_types.Nil, xs);
  }
}
 
 
export function _trmc_unroll_append_10004(xs, ys, _acc) /* forall<a> (xs : list<a>, ys : list<a>, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var _trmc_x10369 = undefined;
     
    var _trmc_x10370 = $std_core_types.Cons(xs.head, _trmc_x10369);
    {
      // tail call
      var _x5 = $std_core_types._cctx_extend(_acc,_trmc_x10370,({obj: _trmc_x10370, field_name: "tail"}));
      xs = xs.tail;
      _acc = _x5;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,ys);
  }
}}
 
 
export function _unroll_append_10004(xs_0, ys_0) /* forall<a> (xs : list<a>, ys : list<a>) -> list<a> */  {
  return _trmc_unroll_append_10004(xs_0, ys_0, $std_core_types._cctx_empty());
}
 
 
export function append(xs, ys) /* forall<a> (xs : list<a>, ys : list<a>) -> list<a> */  {
  if (xs === null) {
    return ys;
  }
  else {
    return _trmc_unroll_append_10004(xs, ys, $std_core_types._cctx_empty());
  }
}
 
 
export function _lp__plus__plus__rp_(xs, ys) /* forall<a> (xs : list<a>, ys : list<a>) -> list<a> */  {
  if (xs === null) {
    return ys;
  }
  else {
    return _trmc_unroll_append_10004(xs, ys, $std_core_types._cctx_empty());
  }
}
 
 
export function _mlift_unroll_foldl_10005_10837(f, xx, _y_x10480) /* forall<a,b,e> (f : (b, a) -> e b, xx : list<a>, b) -> e b */  {
  return _unroll_foldl_10005(xx, _y_x10480, f);
}
 
 
export function _unroll_foldl_10005(xs, z, f_0) /* forall<a,b,e> (xs : list<a>, z : b, f : (b, a) -> e b) -> e b */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_10897 = f_0(z, xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10480_0 /* 1256 */ ) {
        return _mlift_unroll_foldl_10005_10837(f_0, xs.tail, _y_x10480_0);
      });
    }
    else {
      {
        // tail call
        xs = xs.tail;
        z = x_0_10897;
        continue tailcall;
      }
    }
  }
  else {
    return z;
  }
}}
 
 
export function foldl(xs, z, f) /* forall<a,b,e> (xs : list<a>, z : b, f : (b, a) -> e b) -> e b */  {
  if (xs === null) {
    return z;
  }
  else {
    return _unroll_foldl_10005(xs, z, f);
  }
}
 
 
export function _mlift_lift_foldr_10351_10838(_uniq_xx_10276, f, _uniq_z_10272_0_10361) /* forall<a,b,e> (list<a>, f : (a, b) -> e b, b) -> e b */  {
  return _lift_foldr_10351(f, _uniq_xx_10276, _uniq_z_10272_0_10361);
}
 
 
export function _lift_foldr_10351(f_0, _uniq_xs_10271, _uniq_z_10272) /* forall<a,b,e> (f : (a, b) -> e b, list<a>, b) -> e b */  { tailcall: while(1)
{
  if (_uniq_xs_10271 !== null) {
     
    var x_10900 = f_0(_uniq_xs_10271.head, _uniq_z_10272);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_z_10272_0_10361_0 /* 1309 */ ) {
        return _mlift_lift_foldr_10351_10838(_uniq_xs_10271.tail, f_0, _uniq_z_10272_0_10361_0);
      });
    }
    else {
      {
        // tail call
        _uniq_xs_10271 = _uniq_xs_10271.tail;
        _uniq_z_10272 = x_10900;
        continue tailcall;
      }
    }
  }
  else {
    return _uniq_z_10272;
  }
}}
 
 
export function foldr(xs, z, f) /* forall<a,b,e> (xs : list<a>, z : b, f : (a, b) -> e b) -> e b */  {
   
  if (xs === null) {
    var xs_0_10049 = $std_core_types.Nil;
  }
  else {
    var xs_0_10049 = _unroll_reverse_acc_10003($std_core_types.Nil, xs);
  }
  if (xs_0_10049 === null) {
    return z;
  }
  else {
    return _lift_foldr_10351(f, xs_0_10049, z);
  }
}
 
export function foldl1(xs, f) /* forall<a,e> (xs : list<a>, f : (a, a) -> <exn|e> a) -> <exn|e> a */  {
  if (xs !== null) {
    if (xs.tail === null) {
      return xs.head;
    }
    else {
      return _unroll_foldl_10005(xs.tail, xs.head, f);
    }
  }
  else {
     
    var i_10903 = $std_core_hnd._evv_index($std_core_exn.exn_fs__tag);
     
    var w = $std_core_hnd._evv_swap_create1(i_10903);
     
    var ev_10907 = $std_core_hnd._evv_at(0);
     
    var _x6 = $std_core_exn.throw_exn_fs__select(ev_10907.hnd);
    var _x8 = undefined;
    var _x7 = (_x8 !== undefined) ? _x8 : $std_core_exn.ExnError;
    var y = _x6(ev_10907.marker, ev_10907, $std_core_exn.Exception("unexpected Nil in std/core/foldl1", _x7));
     
    $std_core_hnd._evv_set(w);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_cont(function(cont /* (10878) -> <exn|1367> 1366 */ , res /* 10878 */ ) {
        return $std_core_hnd.open_at1(i_10903, cont, res);
      });
    }
    else {
      return y;
    }
  }
}
 
export function foldr1(xs, f) /* forall<a,e> (xs : list<a>, f : (a, a) -> <exn|e> a) -> <exn|e> a */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  if (xs === null) {
    var x = $std_core_types.Nil;
  }
  else {
    var x = _unroll_reverse_acc_10003($std_core_types.Nil, xs);
  }
   
  var keep = $std_core_hnd._evv_set(w);
  if (x !== null) {
    if (x.tail === null) {
      return x.head;
    }
    else {
      return _unroll_foldl_10005(x.tail, x.head, f);
    }
  }
  else {
     
    var i_10912 = $std_core_hnd._evv_index($std_core_exn.exn_fs__tag);
     
    var w_0 = $std_core_hnd._evv_swap_create1(i_10912);
     
    var ev_10916 = $std_core_hnd._evv_at(0);
     
    var _x6 = $std_core_exn.throw_exn_fs__select(ev_10916.hnd);
    var _x8 = undefined;
    var _x7 = (_x8 !== undefined) ? _x8 : $std_core_exn.ExnError;
    var y = _x6(ev_10916.marker, ev_10916, $std_core_exn.Exception("unexpected Nil in std/core/foldl1", _x7));
     
    $std_core_hnd._evv_set(w_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_cont(function(cont /* (10878) -> <exn|1403> 1402 */ , res /* 10878 */ ) {
        return $std_core_hnd.open_at1(i_10912, cont, res);
      });
    }
    else {
      return y;
    }
  }
}
 
 
export function split(xs, n) /* forall<a> (xs : list<a>, n : int) -> (list<a>, list<a>) */  {
  return $std_core_types.Tuple2(_trmc_take(xs, n, $std_core_types._cctx_empty()), drop(xs, n));
}
 
 
export function _mlift_unroll_drop_while_10006_10839(predicate, xs, xx, _y_x10500) /* forall<a,e> (predicate : (a) -> e bool, xs : list<a>, xx : list<a>, bool) -> e list<a> */  {
  if (_y_x10500) {
    return _unroll_drop_while_10006(xx, predicate);
  }
  else {
    return xs;
  }
}
 
 
export function _unroll_drop_while_10006(xs_0, predicate_0) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
     
    var x_0_10921 = predicate_0(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10500_0 /* bool */ ) {
        return _mlift_unroll_drop_while_10006_10839(predicate_0, xs_0, xs_0.tail, _y_x10500_0);
      });
    }
    else {
      if (x_0_10921) {
        {
          // tail call
          xs_0 = xs_0.tail;
          continue tailcall;
        }
      }
      else {
        return xs_0;
      }
    }
  }
  else {
    return $std_core_types.Nil;
  }
}}
 
 
export function drop_while(xs, predicate) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_drop_while_10006(xs, predicate);
  }
}
 
 
export function _mlift_trmc_unroll_filter_10007_10840(_acc, pred, x, xx, _y_x10506) /* forall<a,e> (ctx<list<a>>, pred : (a) -> e bool, x : a, xx : list<a>, bool) -> e list<a> */  {
  if (_y_x10506) {
     
    var _trmc_x10371 = undefined;
     
    var _trmc_x10372 = $std_core_types.Cons(x, _trmc_x10371);
    return _trmc_unroll_filter_10007(xx, pred, $std_core_types._cctx_extend(_acc,_trmc_x10372,({obj: _trmc_x10372, field_name: "tail"})));
  }
  else {
    return _trmc_unroll_filter_10007(xx, pred, _acc);
  }
}
 
 
export function _mlift_trmcm_unroll_filter_10007_10841(_accm, pred_0, x_0, xx_0, _y_x10511) /* forall<a,e> ((list<a>) -> list<a>, pred : (a) -> e bool, x : a, xx : list<a>, bool) -> e list<a> */  {
  if (_y_x10511) {
    return _trmcm_unroll_filter_10007(xx_0, pred_0, function(_trmc_x10374 /* list<1557> */ ) {
        return _accm($std_core_types.Cons(x_0, _trmc_x10374));
      });
  }
  else {
    return _trmcm_unroll_filter_10007(xx_0, pred_0, _accm);
  }
}
 
 
export function _trmc_unroll_filter_10007(xs, pred_1, _acc_0) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, ctx<list<a>>) -> e list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_2_10924 = pred_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10506_0 /* bool */ ) {
        return _mlift_trmc_unroll_filter_10007_10840(_acc_0, pred_1, xs.head, xs.tail, _y_x10506_0);
      });
    }
    else {
      if (x_2_10924) {
         
        var _trmc_x10371_0 = undefined;
         
        var _trmc_x10372_0 = $std_core_types.Cons(xs.head, _trmc_x10371_0);
        {
          // tail call
          var _x6 = $std_core_types._cctx_extend(_acc_0,_trmc_x10372_0,({obj: _trmc_x10372_0, field_name: "tail"}));
          xs = xs.tail;
          _acc_0 = _x6;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_filter_10007(xs_0, pred_2, _accm_0) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, (list<a>) -> list<a>) -> e list<a> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
     
    var x_4_10927 = pred_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10511_0 /* bool */ ) {
        return _mlift_trmcm_unroll_filter_10007_10841(_accm_0, pred_2, xs_0.head, xs_0.tail, _y_x10511_0);
      });
    }
    else {
      if (x_4_10927) {
        {
          // tail call
          var _x9 = function(__at_accm_07 /* (list<1557>) -> list<1557> */ , _x_38 /* 1557 */ ) {
            return function(_trmc_x10374_0 /* list<1557> */ ) {
              return __at_accm_07($std_core_types.Cons(_x_38, _trmc_x10374_0));
            };
          }(_accm_0, xs_0.head);
          xs_0 = xs_0.tail;
          _accm_0 = _x9;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          xs_0 = xs_0.tail;
          continue tailcall;
        }
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_filter_10007(xs_1, pred_3) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e list<a> */  {
  var _x10 = $std_core_hnd._evv_is_affine();
  if (_x10) {
    return _trmc_unroll_filter_10007(xs_1, pred_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_filter_10007(xs_1, pred_3, function(_trmc_x10373 /* list<1557> */ ) {
        return _trmc_x10373;
      });
  }
}
 
 
export function filter(xs, pred) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_filter_10007(xs, pred);
  }
}
 
 
export function _mlift_trmc_unroll_filter_map_10008_10842(_acc, pred, xx, _y_x10521) /* forall<a,b,e> (ctx<list<b>>, pred : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10521 === null) {
    return _trmc_unroll_filter_map_10008(xx, pred, _acc);
  }
  else {
     
    var _trmc_x10375 = undefined;
     
    var _trmc_x10376 = $std_core_types.Cons(_y_x10521.value, _trmc_x10375);
    return _trmc_unroll_filter_map_10008(xx, pred, $std_core_types._cctx_extend(_acc,_trmc_x10376,({obj: _trmc_x10376, field_name: "tail"})));
  }
}
 
 
export function _mlift_trmcm_unroll_filter_map_10008_10843(_accm, pred_0, xx_0, _y_x10526) /* forall<a,b,e> ((list<b>) -> list<b>, pred : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10526 === null) {
    return _trmcm_unroll_filter_map_10008(xx_0, pred_0, _accm);
  }
  else {
    return _trmcm_unroll_filter_map_10008(xx_0, pred_0, function(_trmc_x10378 /* list<1641> */ ) {
        return _accm($std_core_types.Cons(_y_x10526.value, _trmc_x10378));
      });
  }
}
 
 
export function _trmc_unroll_filter_map_10008(xs, pred_1, _acc_0) /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
  else {
     
    var x_0_10930 = pred_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10521_0 /* maybe<1641> */ ) {
        return _mlift_trmc_unroll_filter_map_10008_10842(_acc_0, pred_1, xs.tail, _y_x10521_0);
      });
    }
    else {
      if (x_0_10930 === null) {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
      else {
         
        var _trmc_x10375_0 = undefined;
         
        var _trmc_x10376_0 = $std_core_types.Cons(x_0_10930.value, _trmc_x10375_0);
        {
          // tail call
          var _x11 = $std_core_types._cctx_extend(_acc_0,_trmc_x10376_0,({obj: _trmc_x10376_0, field_name: "tail"}));
          xs = xs.tail;
          _acc_0 = _x11;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function _trmcm_unroll_filter_map_10008(xs_0, pred_2, _accm_0) /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (xs_0 === null) {
    return _accm_0($std_core_types.Nil);
  }
  else {
     
    var x_2_10933 = pred_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10526_0 /* maybe<1641> */ ) {
        return _mlift_trmcm_unroll_filter_map_10008_10843(_accm_0, pred_2, xs_0.tail, _y_x10526_0);
      });
    }
    else {
      if (x_2_10933 === null) {
        {
          // tail call
          xs_0 = xs_0.tail;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          var _x14 = function(__at_accm_012 /* (list<1641>) -> list<1641> */ , _y_213 /* 1641 */ ) {
            return function(_trmc_x10378_0 /* list<1641> */ ) {
              return __at_accm_012($std_core_types.Cons(_y_213, _trmc_x10378_0));
            };
          }(_accm_0, x_2_10933.value);
          xs_0 = xs_0.tail;
          _accm_0 = _x14;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function _unroll_filter_map_10008(xs_1, pred_3) /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>) -> e list<b> */  {
  var _x15 = $std_core_hnd._evv_is_affine();
  if (_x15) {
    return _trmc_unroll_filter_map_10008(xs_1, pred_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_filter_map_10008(xs_1, pred_3, function(_trmc_x10377 /* list<1641> */ ) {
        return _trmc_x10377;
      });
  }
}
 
 
export function filter_map(xs, pred) /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_filter_map_10008(xs, pred);
  }
}
 
 
export function _unroll_contains_10009(xs, y, _implicit_fs__lp__eq__eq__rp_) /* forall<a> (xs : list<a>, y : a, ?(==) : (a, a) -> bool) -> bool */  { tailcall: while(1)
{
  if (xs !== null) {
    var _x16 = _implicit_fs__lp__eq__eq__rp_(xs.head, y);
    if (_x16) {
      return true;
    }
    else {
      {
        // tail call
        xs = xs.tail;
        continue tailcall;
      }
    }
  }
  else {
    return false;
  }
}}
 
 
export function contains(xs, y, _implicit_fs__lp__eq__eq__rp_) /* forall<a> (xs : list<a>, y : a, ?(==) : (a, a) -> bool) -> bool */  {
  if (xs === null) {
    return false;
  }
  else {
    return _unroll_contains_10009(xs, y, _implicit_fs__lp__eq__eq__rp_);
  }
}
 
 
export function _mlift_unroll_foreach_while_10010_10844(action, xx, _y_x10536) /* forall<a,b,e> (action : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e maybe<b> */  {
  if (_y_x10536 === null) {
    return _unroll_foreach_while_10010(xx, action);
  }
  else {
    return _y_x10536;
  }
}
 
 
export function _unroll_foreach_while_10010(xs, action_0) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e maybe<b> */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
     
    var x_0_10936 = action_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10536_0 /* maybe<1777> */ ) {
        return _mlift_unroll_foreach_while_10010_10844(action_0, xs.tail, _y_x10536_0);
      });
    }
    else {
      if (x_0_10936 === null) {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
      else {
        return x_0_10936;
      }
    }
  }
}}
 
 
export function foreach_while(xs, action) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e maybe<b> */  {
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
    return _unroll_foreach_while_10010(xs, action);
  }
}
 
 
export function _mlift_lift_find_10352_10845(_uniq_x_10285, _uniq_xx_10286, pred, _y_x10542) /* forall<a,e> (a, list<a>, pred : (a) -> e bool, bool) -> e maybe<a> */  {
  if (_y_x10542) {
    return $std_core_types.Just(_uniq_x_10285);
  }
  else {
    var _x17 = $std_core_types.Nothing;
    if (_x17 === null) {
      return _lift_find_10352(pred, _uniq_xx_10286);
    }
    else {
      return _x17;
    }
  }
}
 
 
export function _lift_find_10352(pred_0, _uniq_xs_10281) /* forall<a,e> (pred : (a) -> e bool, list<a>) -> e maybe<a> */  { tailcall: while(1)
{
  if (_uniq_xs_10281 === null) {
    return $std_core_types.Nothing;
  }
  else {
     
    var x_10939 = pred_0(_uniq_xs_10281.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10542_0 /* bool */ ) {
        return _mlift_lift_find_10352_10845(_uniq_xs_10281.head, _uniq_xs_10281.tail, pred_0, _y_x10542_0);
      });
    }
    else {
      if (x_10939) {
        return $std_core_types.Just(_uniq_xs_10281.head);
      }
      else {
        var _x18 = $std_core_types.Nothing;
        if (_x18 === null) {
          {
            // tail call
            _uniq_xs_10281 = _uniq_xs_10281.tail;
            continue tailcall;
          }
        }
        else {
          return _x18;
        }
      }
    }
  }
}}
 
 
export function find(xs, pred) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e maybe<a> */  {
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
    return _lift_find_10352(pred, xs);
  }
}
 
 
export function find_maybe(xs, pred) /* forall<a,b,e> (xs : list<a>, pred : (a) -> e maybe<b>) -> e maybe<b> */  {
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
    return _unroll_foreach_while_10010(xs, pred);
  }
}
 
 
export function maybe_fs_list(m) /* forall<a> (m : maybe<a>) -> list<a> */  {
  if (m === null) {
    return $std_core_types.Nil;
  }
  else {
    return $std_core_types.Cons(m.value, $std_core_types.Nil);
  }
}
 
 
export function range_fs__trmc_list(lo, hi, _acc) /* (lo : int, hi : int, ctx<list<int>>) -> list<int> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo,hi)) {
     
    var _trmc_x10379 = undefined;
     
    var _trmc_x10380 = $std_core_types.Cons(lo, _trmc_x10379);
    {
      // tail call
      var _x19 = $std_core_types._int_add(lo,1);
      var _x20 = $std_core_types._cctx_extend(_acc,_trmc_x10380,({obj: _trmc_x10380, field_name: "tail"}));
      lo = _x19;
      _acc = _x20;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function range_fs_list(lo_0, hi_0) /* (lo : int, hi : int) -> list<int> */  {
  return range_fs__trmc_list(lo_0, hi_0, $std_core_types._cctx_empty());
}
 
 
export function _mlift_trmc_unroll_map_10011_10846(_acc, f, xx, _trmc_x10381) /* forall<a,b,e> (ctx<list<b>>, f : (a) -> e b, xx : list<a>, b) -> e list<b> */  {
   
  var _trmc_x10382 = undefined;
   
  var _trmc_x10383 = $std_core_types.Cons(_trmc_x10381, _trmc_x10382);
  return _trmc_unroll_map_10011(xx, f, $std_core_types._cctx_extend(_acc,_trmc_x10383,({obj: _trmc_x10383, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_map_10011_10847(_accm, f_0, xx_0, _trmc_x10386) /* forall<a,b,e> ((list<b>) -> list<b>, f : (a) -> e b, xx : list<a>, b) -> e list<b> */  {
  return _trmcm_unroll_map_10011(xx_0, f_0, function(_trmc_x10385 /* list<2356> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10386, _trmc_x10385));
    });
}
 
 
export function _trmc_unroll_map_10011(xs, f_1, _acc_0) /* forall<a,b,e> (xs : list<a>, f : (a) -> e b, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_10942 = f_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10381_0 /* 2356 */ ) {
        return _mlift_trmc_unroll_map_10011_10846(_acc_0, f_1, xs.tail, _trmc_x10381_0);
      });
    }
    else {
       
      var _trmc_x10382_0 = undefined;
       
      var _trmc_x10383_0 = $std_core_types.Cons(x_0_10942, _trmc_x10382_0);
      {
        // tail call
        var _x21 = $std_core_types._cctx_extend(_acc_0,_trmc_x10383_0,({obj: _trmc_x10383_0, field_name: "tail"}));
        xs = xs.tail;
        _acc_0 = _x21;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_map_10011(xs_0, f_2, _accm_0) /* forall<a,b,e> (xs : list<a>, f : (a) -> e b, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
     
    var x_2_10945 = f_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10386_0 /* 2356 */ ) {
        return _mlift_trmcm_unroll_map_10011_10847(_accm_0, f_2, xs_0.tail, _trmc_x10386_0);
      });
    }
    else {
      {
        // tail call
        var _x24 = function(__at_accm_022 /* (list<2356>) -> list<2356> */ , _x_2_1094523 /* 2356 */ ) {
          return function(_trmc_x10385_0 /* list<2356> */ ) {
            return __at_accm_022($std_core_types.Cons(_x_2_1094523, _trmc_x10385_0));
          };
        }(_accm_0, x_2_10945);
        xs_0 = xs_0.tail;
        _accm_0 = _x24;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_map_10011(xs_1, f_3) /* forall<a,b,e> (xs : list<a>, f : (a) -> e b) -> e list<b> */  {
  var _x25 = $std_core_hnd._evv_is_affine();
  if (_x25) {
    return _trmc_unroll_map_10011(xs_1, f_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_map_10011(xs_1, f_3, function(_trmc_x10384 /* list<2356> */ ) {
        return _trmc_x10384;
      });
  }
}
 
 
export function map(xs, f) /* forall<a,b,e> (xs : list<a>, f : (a) -> e b) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_map_10011(xs, f);
  }
}
 
 
export function char_fs__trmc_lift_list_10353(_uniq_xs_10291, _acc) /* (list<int>, ctx<list<char>>) -> list<char> */  { tailcall: while(1)
{
  if (_uniq_xs_10291 !== null) {
     
    var _trmc_x10387 = ((_uniq_xs_10291.head));
     
    var _trmc_x10388 = undefined;
     
    var _trmc_x10389 = $std_core_types.Cons(_trmc_x10387, _trmc_x10388);
    {
      // tail call
      var _x26 = $std_core_types._cctx_extend(_acc,_trmc_x10389,({obj: _trmc_x10389, field_name: "tail"}));
      _uniq_xs_10291 = _uniq_xs_10291.tail;
      _acc = _x26;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function char_fs__lift_list_10353(_uniq_xs_10291_0) /* (list<int>) -> list<char> */  {
  return char_fs__trmc_lift_list_10353(_uniq_xs_10291_0, $std_core_types._cctx_empty());
}
 
 
export function char_fs_list(lo, hi) /* (lo : char, hi : char) -> list<char> */  {
   
  var lo_0_10948 = lo;
   
  var hi_0_10949 = hi;
   
  var xs_10073 = range_fs__trmc_list(lo_0_10948, hi_0_10949, $std_core_types._cctx_empty());
  if (xs_10073 === null) {
    return $std_core_types.Nil;
  }
  else {
    return char_fs__trmc_lift_list_10353(xs_10073, $std_core_types._cctx_empty());
  }
}
 
 
export function function_fs__mlift_trmc_list_10848(_acc, f, hi, lo, _trmc_x10390) /* forall<a,e> (ctx<list<a>>, f : (int) -> e a, hi : int, lo : int, a) -> e list<a> */  {
   
  var _trmc_x10391 = undefined;
   
  var _trmc_x10392 = $std_core_types.Cons(_trmc_x10390, _trmc_x10391);
  return function_fs__trmc_list($std_core_types._int_add(lo,1), hi, f, $std_core_types._cctx_extend(_acc,_trmc_x10392,({obj: _trmc_x10392, field_name: "tail"})));
}
 
 
export function function_fs__mlift_trmcm_list_10849(_accm, f_0, hi_0, lo_0, _trmc_x10395) /* forall<a,e> ((list<a>) -> list<a>, f : (int) -> e a, hi : int, lo : int, a) -> e list<a> */  {
  return function_fs__trmcm_list($std_core_types._int_add(lo_0,1), hi_0, f_0, function(_trmc_x10394 /* list<2056> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10395, _trmc_x10394));
    });
}
 
 
export function function_fs__trmc_list(lo_1, hi_1, f_1, _acc_0) /* forall<a,e> (lo : int, hi : int, f : (int) -> e a, ctx<list<a>>) -> e list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo_1,hi_1)) {
     
    var x_10951 = f_1(lo_1);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10390_0 /* 2056 */ ) {
        return function_fs__mlift_trmc_list_10848(_acc_0, f_1, hi_1, lo_1, _trmc_x10390_0);
      });
    }
    else {
       
      var _trmc_x10391_0 = undefined;
       
      var _trmc_x10392_0 = $std_core_types.Cons(x_10951, _trmc_x10391_0);
      {
        // tail call
        var _x27 = $std_core_types._int_add(lo_1,1);
        var _x28 = $std_core_types._cctx_extend(_acc_0,_trmc_x10392_0,({obj: _trmc_x10392_0, field_name: "tail"}));
        lo_1 = _x27;
        _acc_0 = _x28;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function function_fs__trmcm_list(lo_2, hi_2, f_2, _accm_0) /* forall<a,e> (lo : int, hi : int, f : (int) -> e a, (list<a>) -> list<a>) -> e list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo_2,hi_2)) {
     
    var x_0_10954 = f_2(lo_2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10395_0 /* 2056 */ ) {
        return function_fs__mlift_trmcm_list_10849(_accm_0, f_2, hi_2, lo_2, _trmc_x10395_0);
      });
    }
    else {
      {
        // tail call
        var _x31 = $std_core_types._int_add(lo_2,1);
        var _x32 = function(__at_accm_029 /* (list<2056>) -> list<2056> */ , _x_0_1095430 /* 2056 */ ) {
          return function(_trmc_x10394_0 /* list<2056> */ ) {
            return __at_accm_029($std_core_types.Cons(_x_0_1095430, _trmc_x10394_0));
          };
        }(_accm_0, x_0_10954);
        lo_2 = _x31;
        _accm_0 = _x32;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function function_fs_list(lo_3, hi_3, f_3) /* forall<a,e> (lo : int, hi : int, f : (int) -> e a) -> e list<a> */  {
  var _x33 = $std_core_hnd._evv_is_affine();
  if (_x33) {
    return function_fs__trmc_list(lo_3, hi_3, f_3, $std_core_types._cctx_empty());
  }
  else {
    return function_fs__trmcm_list(lo_3, hi_3, f_3, function(_trmc_x10393 /* list<2056> */ ) {
        return _trmc_x10393;
      });
  }
}
 
 
export function stride_fs__trmc_list(lo, hi, stride, _acc) /* (lo : int, hi : int, stride : int, ctx<list<int>>) -> list<int> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo,hi)) {
     
    var _trmc_x10396 = undefined;
     
    var _trmc_x10397 = $std_core_types.Cons(lo, _trmc_x10396);
    {
      // tail call
      var _x34 = $std_core_types._int_add(lo,stride);
      var _x35 = $std_core_types._cctx_extend(_acc,_trmc_x10397,({obj: _trmc_x10397, field_name: "tail"}));
      lo = _x34;
      _acc = _x35;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function stride_fs_list(lo_0, hi_0, stride_0) /* (lo : int, hi : int, stride : int) -> list<int> */  {
  return stride_fs__trmc_list(lo_0, hi_0, stride_0, $std_core_types._cctx_empty());
}
 
 
export function stridefunction_fs__mlift_trmc_list_10850(_acc, f, hi, lo, stride, _trmc_x10398) /* forall<a,e> (ctx<list<a>>, f : (int) -> e a, hi : int, lo : int, stride : int, a) -> e list<a> */  {
   
  var _trmc_x10399 = undefined;
   
  var _trmc_x10400 = $std_core_types.Cons(_trmc_x10398, _trmc_x10399);
  return stridefunction_fs__trmc_list($std_core_types._int_add(lo,stride), hi, stride, f, $std_core_types._cctx_extend(_acc,_trmc_x10400,({obj: _trmc_x10400, field_name: "tail"})));
}
 
 
export function stridefunction_fs__mlift_trmcm_list_10851(_accm, f_0, hi_0, lo_0, stride_0, _trmc_x10403) /* forall<a,e> ((list<a>) -> list<a>, f : (int) -> e a, hi : int, lo : int, stride : int, a) -> e list<a> */  {
  return stridefunction_fs__trmcm_list($std_core_types._int_add(lo_0,stride_0), hi_0, stride_0, f_0, function(_trmc_x10402 /* list<2236> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10403, _trmc_x10402));
    });
}
 
 
export function stridefunction_fs__trmc_list(lo_1, hi_1, stride_1, f_1, _acc_0) /* forall<a,e> (lo : int, hi : int, stride : int, f : (int) -> e a, ctx<list<a>>) -> e list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo_1,hi_1)) {
     
    var x_10957 = f_1(lo_1);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10398_0 /* 2236 */ ) {
        return stridefunction_fs__mlift_trmc_list_10850(_acc_0, f_1, hi_1, lo_1, stride_1, _trmc_x10398_0);
      });
    }
    else {
       
      var _trmc_x10399_0 = undefined;
       
      var _trmc_x10400_0 = $std_core_types.Cons(x_10957, _trmc_x10399_0);
      {
        // tail call
        var _x36 = $std_core_types._int_add(lo_1,stride_1);
        var _x37 = $std_core_types._cctx_extend(_acc_0,_trmc_x10400_0,({obj: _trmc_x10400_0, field_name: "tail"}));
        lo_1 = _x36;
        _acc_0 = _x37;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function stridefunction_fs__trmcm_list(lo_2, hi_2, stride_2, f_2, _accm_0) /* forall<a,e> (lo : int, hi : int, stride : int, f : (int) -> e a, (list<a>) -> list<a>) -> e list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(lo_2,hi_2)) {
     
    var x_0_10960 = f_2(lo_2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10403_0 /* 2236 */ ) {
        return stridefunction_fs__mlift_trmcm_list_10851(_accm_0, f_2, hi_2, lo_2, stride_2, _trmc_x10403_0);
      });
    }
    else {
      {
        // tail call
        var _x40 = $std_core_types._int_add(lo_2,stride_2);
        var _x41 = function(__at_accm_038 /* (list<2236>) -> list<2236> */ , _x_0_1096039 /* 2236 */ ) {
          return function(_trmc_x10402_0 /* list<2236> */ ) {
            return __at_accm_038($std_core_types.Cons(_x_0_1096039, _trmc_x10402_0));
          };
        }(_accm_0, x_0_10960);
        lo_2 = _x40;
        _accm_0 = _x41;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function stridefunction_fs_list(lo_3, hi_3, stride_3, f_3) /* forall<a,e> (lo : int, hi : int, stride : int, f : (int) -> e a) -> e list<a> */  {
  var _x42 = $std_core_hnd._evv_is_affine();
  if (_x42) {
    return stridefunction_fs__trmc_list(lo_3, hi_3, stride_3, f_3, $std_core_types._cctx_empty());
  }
  else {
    return stridefunction_fs__trmcm_list(lo_3, hi_3, stride_3, f_3, function(_trmc_x10401 /* list<2236> */ ) {
        return _trmc_x10401;
      });
  }
}
 
 
export function string_fs_map(s, f) /* forall<e> (s : string, f : (char) -> e char) -> e string */  {
   
  var xs_10077 = $std_core_string.list(s);
   
  if (xs_10077 === null) {
    var x_10963 = $std_core_types.Nil;
  }
  else {
    var x_10963 = _unroll_map_10011(xs_10077, f);
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10963);
  }
}
 
 
export function _mlift_unroll_order2_10012_10852(z, _y_x10583) /* forall<a,e> (z : a, order2<list<a>>) -> e order2<list<a>> */  {
  if (_y_x10583._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Cons(z, _y_x10583.eq));
  }
  else if (_y_x10583._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Cons(z, _y_x10583.lt), $std_core_types.Cons(z, _y_x10583.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Cons(z, _y_x10583.lt), $std_core_types.Cons(z, _y_x10583.gt));
  }
}
 
 
export function _mlift_unroll_order2_10012_10853(_implicit_fs_order2, xx, yy, _y_x10582) /* forall<a,e> (?order2 : (a, a) -> e order2<a>, xx : list<a>, yy : list<a>, order2<a>) -> e order2<list<a>> */  {
  if (_y_x10582._tag === 2) {
     
    var x_10965 = _unroll_order2_10012(xx, yy, _implicit_fs_order2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10583_0 /* order2<list<2646>> */ ) {
        return _mlift_unroll_order2_10012_10852(_y_x10582.eq, _y_x10583_0);
      });
    }
    else {
      return _mlift_unroll_order2_10012_10852(_y_x10582.eq, x_10965);
    }
  }
  else if (_y_x10582._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Cons(_y_x10582.lt, xx), $std_core_types.Cons(_y_x10582.gt, yy));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Cons(_y_x10582.lt, yy), $std_core_types.Cons(_y_x10582.gt, xx));
  }
}
 
 
export function _unroll_order2_10012(xs, ys, _implicit_fs_order2_0) /* forall<a,e> (xs : list<a>, ys : list<a>, ?order2 : (a, a) -> e order2<a>) -> e order2<list<a>> */  {
  if (xs === null) {
    if (ys === null) {
      return $std_core_types.Eq2($std_core_types.Nil);
    }
    else {
      return $std_core_types.Lt2($std_core_types.Nil, ys);
    }
  }
  else {
    if (ys === null) {
      return $std_core_types.Gt2($std_core_types.Nil, $std_core_types.Cons(xs.head, xs.tail));
    }
    else {
       
      var x_1_10967 = _implicit_fs_order2_0(xs.head, ys.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10582_0 /* order2<2646> */ ) {
          return _mlift_unroll_order2_10012_10853(_implicit_fs_order2_0, xs.tail, ys.tail, _y_x10582_0);
        });
      }
      else {
        if (x_1_10967._tag === 2) {
           
          var x_2_10970 = _unroll_order2_10012(xs.tail, ys.tail, _implicit_fs_order2_0);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10583_1 /* order2<list<2646>> */ ) {
              return _mlift_unroll_order2_10012_10852(x_1_10967.eq, _y_x10583_1);
            });
          }
          else {
            if (x_2_10970._tag === 2) {
              return $std_core_types.Eq2($std_core_types.Cons(x_1_10967.eq, x_2_10970.eq));
            }
            else if (x_2_10970._tag === 1) {
              return $std_core_types.Lt2($std_core_types.Cons(x_1_10967.eq, x_2_10970.lt), $std_core_types.Cons(x_1_10967.eq, x_2_10970.gt));
            }
            else {
              return $std_core_types.Gt2($std_core_types.Cons(x_1_10967.eq, x_2_10970.lt), $std_core_types.Cons(x_1_10967.eq, x_2_10970.gt));
            }
          }
        }
        else if (x_1_10967._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Cons(x_1_10967.lt, xs.tail), $std_core_types.Cons(x_1_10967.gt, ys.tail));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Cons(x_1_10967.lt, ys.tail), $std_core_types.Cons(x_1_10967.gt, xs.tail));
        }
      }
    }
  }
}
 
 
export function order2(xs, ys, _implicit_fs_order2) /* forall<a,e> (xs : list<a>, ys : list<a>, ?order2 : (a, a) -> e order2<a>) -> e order2<list<a>> */  {
  if (xs === null) {
    if (ys === null) {
      return $std_core_types.Eq2($std_core_types.Nil);
    }
    else {
      return $std_core_types.Lt2($std_core_types.Nil, ys);
    }
  }
  else {
    return _unroll_order2_10012(xs, ys, _implicit_fs_order2);
  }
}
 
 
export function _mlift_trmc_unroll_lift_map_indexed_6538_10013_10854(_acc, f, i_0_10080, yy, _trmc_x10404) /* forall<a,b,e> (ctx<list<b>>, f : (idx : int, value : a) -> e b, i@0@10080 : int, yy : list<a>, b) -> e list<b> */  {
   
  var _trmc_x10405 = undefined;
   
  var _trmc_x10406 = $std_core_types.Cons(_trmc_x10404, _trmc_x10405);
  return _trmc_unroll_lift_map_indexed_6538_10013(f, yy, i_0_10080, $std_core_types._cctx_extend(_acc,_trmc_x10406,({obj: _trmc_x10406, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_lift_map_indexed_6538_10013_10855(_accm, f_0, i_0_10080_0, yy_0, _trmc_x10409) /* forall<a,b,e> ((list<b>) -> list<b>, f : (idx : int, value : a) -> e b, i@0@10080 : int, yy : list<a>, b) -> e list<b> */  {
  return _trmcm_unroll_lift_map_indexed_6538_10013(f_0, yy_0, i_0_10080_0, function(_trmc_x10408 /* list<2722> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10409, _trmc_x10408));
    });
}
 
 
export function _trmc_unroll_lift_map_indexed_6538_10013(f_1, ys, i, _acc_0) /* forall<a,b,e> (f : (idx : int, value : a) -> e b, ys : list<a>, i : int, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var i_0_10080_1 = $std_core_types._int_add(i,1);
     
    var x_10973 = f_1(i, ys.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10404_0 /* 2722 */ ) {
        return _mlift_trmc_unroll_lift_map_indexed_6538_10013_10854(_acc_0, f_1, i_0_10080_1, ys.tail, _trmc_x10404_0);
      });
    }
    else {
       
      var _trmc_x10405_0 = undefined;
       
      var _trmc_x10406_0 = $std_core_types.Cons(x_10973, _trmc_x10405_0);
      {
        // tail call
        var _x43 = $std_core_types._cctx_extend(_acc_0,_trmc_x10406_0,({obj: _trmc_x10406_0, field_name: "tail"}));
        ys = ys.tail;
        i = i_0_10080_1;
        _acc_0 = _x43;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_lift_map_indexed_6538_10013(f_2, ys_0, i_0, _accm_0) /* forall<a,b,e> (f : (idx : int, value : a) -> e b, ys : list<a>, i : int, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (ys_0 !== null) {
     
    var i_0_10080_2 = $std_core_types._int_add(i_0,1);
     
    var x_0_10976 = f_2(i_0, ys_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10409_0 /* 2722 */ ) {
        return _mlift_trmcm_unroll_lift_map_indexed_6538_10013_10855(_accm_0, f_2, i_0_10080_2, ys_0.tail, _trmc_x10409_0);
      });
    }
    else {
      {
        // tail call
        var _x46 = function(__at_accm_044 /* (list<2722>) -> list<2722> */ , _x_0_1097645 /* 2722 */ ) {
          return function(_trmc_x10408_0 /* list<2722> */ ) {
            return __at_accm_044($std_core_types.Cons(_x_0_1097645, _trmc_x10408_0));
          };
        }(_accm_0, x_0_10976);
        ys_0 = ys_0.tail;
        i_0 = i_0_10080_2;
        _accm_0 = _x46;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_lift_map_indexed_6538_10013(f_3, ys_1, i_1) /* forall<a,b,e> (f : (idx : int, value : a) -> e b, ys : list<a>, i : int) -> e list<b> */  {
  var _x47 = $std_core_hnd._evv_is_affine();
  if (_x47) {
    return _trmc_unroll_lift_map_indexed_6538_10013(f_3, ys_1, i_1, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_lift_map_indexed_6538_10013(f_3, ys_1, i_1, function(_trmc_x10407 /* list<2722> */ ) {
        return _trmc_x10407;
      });
  }
}
 
 
export function _lift_map_indexed_6538(f, ys, i) /* forall<a,b,e> (f : (idx : int, value : a) -> e b, ys : list<a>, i : int) -> e list<b> */  {
  if (ys === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_lift_map_indexed_6538_10013(f, ys, i);
  }
}
 
 
export function map_indexed(xs, f) /* forall<a,b,e> (xs : list<a>, f : (idx : int, value : a) -> e b) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    var _x48 = $std_core_hnd._evv_is_affine();
    if (_x48) {
      return _trmc_unroll_lift_map_indexed_6538_10013(f, xs, 0, $std_core_types._cctx_empty());
    }
    else {
      return _trmcm_unroll_lift_map_indexed_6538_10013(f, xs, 0, function(_trmc_x10407 /* list<2722> */ ) {
          return _trmc_x10407;
        });
    }
  }
}
 
 
export function _mlift_trmc_unroll_lift_map_peek_6539_10014_10856(_acc, f, yy, _trmc_x10410) /* forall<a,b,e> (ctx<list<b>>, f : (value : a, rest : list<a>) -> e b, yy : list<a>, b) -> e list<b> */  {
   
  var _trmc_x10411 = undefined;
   
  var _trmc_x10412 = $std_core_types.Cons(_trmc_x10410, _trmc_x10411);
  return _trmc_unroll_lift_map_peek_6539_10014(f, yy, $std_core_types._cctx_extend(_acc,_trmc_x10412,({obj: _trmc_x10412, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_lift_map_peek_6539_10014_10857(_accm, f_0, yy_0, _trmc_x10415) /* forall<a,b,e> ((list<b>) -> list<b>, f : (value : a, rest : list<a>) -> e b, yy : list<a>, b) -> e list<b> */  {
  return _trmcm_unroll_lift_map_peek_6539_10014(f_0, yy_0, function(_trmc_x10414 /* list<2784> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10415, _trmc_x10414));
    });
}
 
 
export function _trmc_unroll_lift_map_peek_6539_10014(f_1, ys, _acc_0) /* forall<a,b,e> (f : (value : a, rest : list<a>) -> e b, ys : list<a>, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var x_10982 = f_1(ys.head, ys.tail);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10410_0 /* 2784 */ ) {
        return _mlift_trmc_unroll_lift_map_peek_6539_10014_10856(_acc_0, f_1, ys.tail, _trmc_x10410_0);
      });
    }
    else {
       
      var _trmc_x10411_0 = undefined;
       
      var _trmc_x10412_0 = $std_core_types.Cons(x_10982, _trmc_x10411_0);
      {
        // tail call
        var _x49 = $std_core_types._cctx_extend(_acc_0,_trmc_x10412_0,({obj: _trmc_x10412_0, field_name: "tail"}));
        ys = ys.tail;
        _acc_0 = _x49;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_lift_map_peek_6539_10014(f_2, ys_0, _accm_0) /* forall<a,b,e> (f : (value : a, rest : list<a>) -> e b, ys : list<a>, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (ys_0 !== null) {
     
    var x_0_10985 = f_2(ys_0.head, ys_0.tail);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10415_0 /* 2784 */ ) {
        return _mlift_trmcm_unroll_lift_map_peek_6539_10014_10857(_accm_0, f_2, ys_0.tail, _trmc_x10415_0);
      });
    }
    else {
      {
        // tail call
        var _x52 = function(__at_accm_050 /* (list<2784>) -> list<2784> */ , _x_0_1098551 /* 2784 */ ) {
          return function(_trmc_x10414_0 /* list<2784> */ ) {
            return __at_accm_050($std_core_types.Cons(_x_0_1098551, _trmc_x10414_0));
          };
        }(_accm_0, x_0_10985);
        ys_0 = ys_0.tail;
        _accm_0 = _x52;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_lift_map_peek_6539_10014(f_3, ys_1) /* forall<a,b,e> (f : (value : a, rest : list<a>) -> e b, ys : list<a>) -> e list<b> */  {
  var _x53 = $std_core_hnd._evv_is_affine();
  if (_x53) {
    return _trmc_unroll_lift_map_peek_6539_10014(f_3, ys_1, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_lift_map_peek_6539_10014(f_3, ys_1, function(_trmc_x10413 /* list<2784> */ ) {
        return _trmc_x10413;
      });
  }
}
 
 
export function _lift_map_peek_6539(f, ys) /* forall<a,b,e> (f : (value : a, rest : list<a>) -> e b, ys : list<a>) -> e list<b> */  {
  if (ys === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_lift_map_peek_6539_10014(f, ys);
  }
}
 
 
export function map_peek(xs, f) /* forall<a,b,e> (xs : list<a>, f : (value : a, rest : list<a>) -> e b) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_lift_map_peek_6539_10014(f, xs);
  }
}
 
 
export function _mlift_trmc_unroll_lift_map_indexed_peek_6540_10015_10858(_acc, f, i_0_10088, yy, _trmc_x10416) /* forall<a,b,e> (ctx<list<b>>, f : (idx : int, value : a, rest : list<a>) -> e b, i@0@10088 : int, yy : list<a>, b) -> e list<b> */  {
   
  var _trmc_x10417 = undefined;
   
  var _trmc_x10418 = $std_core_types.Cons(_trmc_x10416, _trmc_x10417);
  return _trmc_unroll_lift_map_indexed_peek_6540_10015(f, yy, i_0_10088, $std_core_types._cctx_extend(_acc,_trmc_x10418,({obj: _trmc_x10418, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_lift_map_indexed_peek_6540_10015_10859(_accm, f_0, i_0_10088_0, yy_0, _trmc_x10421) /* forall<a,b,e> ((list<b>) -> list<b>, f : (idx : int, value : a, rest : list<a>) -> e b, i@0@10088 : int, yy : list<a>, b) -> e list<b> */  {
  return _trmcm_unroll_lift_map_indexed_peek_6540_10015(f_0, yy_0, i_0_10088_0, function(_trmc_x10420 /* list<2855> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10421, _trmc_x10420));
    });
}
 
 
export function _trmc_unroll_lift_map_indexed_peek_6540_10015(f_1, ys, i, _acc_0) /* forall<a,b,e> (f : (idx : int, value : a, rest : list<a>) -> e b, ys : list<a>, i : int, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var i_0_10088_1 = $std_core_types._int_add(i,1);
     
    var x_10988 = f_1(i, ys.head, ys.tail);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10416_0 /* 2855 */ ) {
        return _mlift_trmc_unroll_lift_map_indexed_peek_6540_10015_10858(_acc_0, f_1, i_0_10088_1, ys.tail, _trmc_x10416_0);
      });
    }
    else {
       
      var _trmc_x10417_0 = undefined;
       
      var _trmc_x10418_0 = $std_core_types.Cons(x_10988, _trmc_x10417_0);
      {
        // tail call
        var _x54 = $std_core_types._cctx_extend(_acc_0,_trmc_x10418_0,({obj: _trmc_x10418_0, field_name: "tail"}));
        ys = ys.tail;
        i = i_0_10088_1;
        _acc_0 = _x54;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_lift_map_indexed_peek_6540_10015(f_2, ys_0, i_0, _accm_0) /* forall<a,b,e> (f : (idx : int, value : a, rest : list<a>) -> e b, ys : list<a>, i : int, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (ys_0 !== null) {
     
    var i_0_10088_2 = $std_core_types._int_add(i_0,1);
     
    var x_0_10991 = f_2(i_0, ys_0.head, ys_0.tail);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_trmc_x10421_0 /* 2855 */ ) {
        return _mlift_trmcm_unroll_lift_map_indexed_peek_6540_10015_10859(_accm_0, f_2, i_0_10088_2, ys_0.tail, _trmc_x10421_0);
      });
    }
    else {
      {
        // tail call
        var _x57 = function(__at_accm_055 /* (list<2855>) -> list<2855> */ , _x_0_1099156 /* 2855 */ ) {
          return function(_trmc_x10420_0 /* list<2855> */ ) {
            return __at_accm_055($std_core_types.Cons(_x_0_1099156, _trmc_x10420_0));
          };
        }(_accm_0, x_0_10991);
        ys_0 = ys_0.tail;
        i_0 = i_0_10088_2;
        _accm_0 = _x57;
        continue tailcall;
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_lift_map_indexed_peek_6540_10015(f_3, ys_1, i_1) /* forall<a,b,e> (f : (idx : int, value : a, rest : list<a>) -> e b, ys : list<a>, i : int) -> e list<b> */  {
  var _x58 = $std_core_hnd._evv_is_affine();
  if (_x58) {
    return _trmc_unroll_lift_map_indexed_peek_6540_10015(f_3, ys_1, i_1, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_lift_map_indexed_peek_6540_10015(f_3, ys_1, i_1, function(_trmc_x10419 /* list<2855> */ ) {
        return _trmc_x10419;
      });
  }
}
 
 
export function _lift_map_indexed_peek_6540(f, ys, i) /* forall<a,b,e> (f : (idx : int, value : a, rest : list<a>) -> e b, ys : list<a>, i : int) -> e list<b> */  {
  if (ys === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_lift_map_indexed_peek_6540_10015(f, ys, i);
  }
}
 
 
export function map_indexed_peek(xs, f) /* forall<a,b,e> (xs : list<a>, f : (idx : int, value : a, rest : list<a>) -> e b) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    var _x59 = $std_core_hnd._evv_is_affine();
    if (_x59) {
      return _trmc_unroll_lift_map_indexed_peek_6540_10015(f, xs, 0, $std_core_types._cctx_empty());
    }
    else {
      return _trmcm_unroll_lift_map_indexed_peek_6540_10015(f, xs, 0, function(_trmc_x10419 /* list<2855> */ ) {
          return _trmc_x10419;
        });
    }
  }
}
 
 
export function _trmc_replicate(x, n, _acc) /* forall<a> (x : a, n : int, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_gt(n,0)) {
     
    var _trmc_x10422 = undefined;
     
    var _trmc_x10423 = $std_core_types.Cons(x, _trmc_x10422);
    {
      // tail call
      var _x60 = $std_core_types._int_sub(n,1);
      var _x61 = $std_core_types._cctx_extend(_acc,_trmc_x10423,({obj: _trmc_x10423, field_name: "tail"}));
      n = _x60;
      _acc = _x61;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function replicate(x_0, n_0) /* forall<a> (x : a, n : int) -> list<a> */  {
  return _trmc_replicate(x_0, n_0, $std_core_types._cctx_empty());
}
 
 
export function _mlift_trmc_lift_remove_10354_10860(_acc, _uniq_x_10301, _uniq_xx_10302, pred, _y_x10628) /* forall<a,e> (ctx<list<a>>, a, list<a>, pred : (a) -> e bool, bool) -> e list<a> */  {
  if (_y_x10628) {
    return _trmc_lift_remove_10354(pred, _uniq_xx_10302, _acc);
  }
  else {
     
    var _trmc_x10424 = undefined;
     
    var _trmc_x10425 = $std_core_types.Cons(_uniq_x_10301, _trmc_x10424);
    return _trmc_lift_remove_10354(pred, _uniq_xx_10302, $std_core_types._cctx_extend(_acc,_trmc_x10425,({obj: _trmc_x10425, field_name: "tail"})));
  }
}
 
 
export function _mlift_trmcm_lift_remove_10354_10861(_accm, _uniq_x_10301_0, _uniq_xx_10302_0, pred_0, _y_x10633) /* forall<a,e> ((list<a>) -> list<a>, a, list<a>, pred : (a) -> e bool, bool) -> e list<a> */  {
  if (_y_x10633) {
    return _trmcm_lift_remove_10354(pred_0, _uniq_xx_10302_0, _accm);
  }
  else {
    return _trmcm_lift_remove_10354(pred_0, _uniq_xx_10302_0, function(_trmc_x10427 /* list<2954> */ ) {
        return _accm($std_core_types.Cons(_uniq_x_10301_0, _trmc_x10427));
      });
  }
}
 
 
export function _trmc_lift_remove_10354(pred_1, _uniq_xs_10298, _acc_0) /* forall<a,e> (pred : (a) -> e bool, list<a>, ctx<list<a>>) -> e list<a> */  { tailcall: while(1)
{
  if (_uniq_xs_10298 !== null) {
     
    var x_10997 = pred_1(_uniq_xs_10298.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10628_0 /* bool */ ) {
        return _mlift_trmc_lift_remove_10354_10860(_acc_0, _uniq_xs_10298.head, _uniq_xs_10298.tail, pred_1, _y_x10628_0);
      });
    }
    else {
      if (x_10997) {
        {
          // tail call
          _uniq_xs_10298 = _uniq_xs_10298.tail;
          continue tailcall;
        }
      }
      else {
         
        var _trmc_x10424_0 = undefined;
         
        var _trmc_x10425_0 = $std_core_types.Cons(_uniq_xs_10298.head, _trmc_x10424_0);
        {
          // tail call
          var _x62 = $std_core_types._cctx_extend(_acc_0,_trmc_x10425_0,({obj: _trmc_x10425_0, field_name: "tail"}));
          _uniq_xs_10298 = _uniq_xs_10298.tail;
          _acc_0 = _x62;
          continue tailcall;
        }
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_lift_remove_10354(pred_2, _uniq_xs_10298_0, _accm_0) /* forall<a,e> (pred : (a) -> e bool, list<a>, (list<a>) -> list<a>) -> e list<a> */  { tailcall: while(1)
{
  if (_uniq_xs_10298_0 !== null) {
     
    var x_0_11000 = pred_2(_uniq_xs_10298_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10633_0 /* bool */ ) {
        return _mlift_trmcm_lift_remove_10354_10861(_accm_0, _uniq_xs_10298_0.head, _uniq_xs_10298_0.tail, pred_2, _y_x10633_0);
      });
    }
    else {
      if (x_0_11000) {
        {
          // tail call
          _uniq_xs_10298_0 = _uniq_xs_10298_0.tail;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          var _x65 = function(__at_accm_063 /* (list<2954>) -> list<2954> */ , __at_uniq_x_10301_264 /* 2954 */ ) {
            return function(_trmc_x10427_0 /* list<2954> */ ) {
              return __at_accm_063($std_core_types.Cons(__at_uniq_x_10301_264, _trmc_x10427_0));
            };
          }(_accm_0, _uniq_xs_10298_0.head);
          _uniq_xs_10298_0 = _uniq_xs_10298_0.tail;
          _accm_0 = _x65;
          continue tailcall;
        }
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _lift_remove_10354(pred_3, _uniq_xs_10298_1) /* forall<a,e> (pred : (a) -> e bool, list<a>) -> e list<a> */  {
  var _x66 = $std_core_hnd._evv_is_affine();
  if (_x66) {
    return _trmc_lift_remove_10354(pred_3, _uniq_xs_10298_1, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_lift_remove_10354(pred_3, _uniq_xs_10298_1, function(_trmc_x10426 /* list<2954> */ ) {
        return _trmc_x10426;
      });
  }
}
 
 
export function remove(xs, pred) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _lift_remove_10354(pred, xs);
  }
}
 
 
export function _mlift_unroll_partition_acc_10016_10862(acc1, acc2, pred, x, xx, _y_x10643) /* forall<a,e> (acc1 : ctx<list<a>>, acc2 : ctx<list<a>>, pred : (a) -> e bool, x : a, xx : list<a>, bool) -> e (list<a>, list<a>) */  {
  if (_y_x10643) {
     
    var _cctx_x3057 = $std_core_types.Cons(x, undefined);
     
    var _cctx_x3058 = {obj: _cctx_x3057, field_name: "tail"};
    return _unroll_partition_acc_10016(xx, pred, $std_core_types._cctx_compose(acc1,($std_core_types._cctx_create(_cctx_x3057,_cctx_x3058))), acc2);
  }
  else {
     
    var _cctx_x3104 = $std_core_types.Cons(x, undefined);
     
    var _cctx_x3105 = {obj: _cctx_x3104, field_name: "tail"};
    return _unroll_partition_acc_10016(xx, pred, acc1, $std_core_types._cctx_compose(acc2,($std_core_types._cctx_create(_cctx_x3104,_cctx_x3105))));
  }
}
 
export function _unroll_partition_acc_10016(xs, pred_0, acc1_0, acc2_0) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, acc1 : ctx<list<a>>, acc2 : ctx<list<a>>) -> e (list<a>, list<a>) */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1_0,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_0,($std_core_types.Nil)));
  }
  else {
     
    var x_1_11003 = pred_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10643_0 /* bool */ ) {
        return _mlift_unroll_partition_acc_10016_10862(acc1_0, acc2_0, pred_0, xs.head, xs.tail, _y_x10643_0);
      });
    }
    else {
      if (x_1_11003) {
         
        var _cctx_x3057_0 = $std_core_types.Cons(xs.head, undefined);
         
        var _cctx_x3058_0 = {obj: _cctx_x3057_0, field_name: "tail"};
        {
          // tail call
          var _x67 = $std_core_types._cctx_compose(acc1_0,($std_core_types._cctx_create(_cctx_x3057_0,_cctx_x3058_0)));
          xs = xs.tail;
          acc1_0 = _x67;
          continue tailcall;
        }
      }
      else {
         
        var _cctx_x3104_0 = $std_core_types.Cons(xs.head, undefined);
         
        var _cctx_x3105_0 = {obj: _cctx_x3104_0, field_name: "tail"};
        {
          // tail call
          var _x68 = $std_core_types._cctx_compose(acc2_0,($std_core_types._cctx_create(_cctx_x3104_0,_cctx_x3105_0)));
          xs = xs.tail;
          acc2_0 = _x68;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function partition_acc(xs, pred, acc1, acc2) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, acc1 : ctx<list<a>>, acc2 : ctx<list<a>>) -> e (list<a>, list<a>) */  {
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)));
  }
  else {
    return _unroll_partition_acc_10016(xs, pred, acc1, acc2);
  }
}
 
 
export function partition(xs, pred) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e (list<a>, list<a>) */  {
   
  var acc1_10097 = $std_core_types._cctx_empty();
   
  var acc2_10098 = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1_10097,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_10098,($std_core_types.Nil)));
  }
  else {
    return _unroll_partition_acc_10016(xs, pred, acc1_10097, acc2_10098);
  }
}
 
 
export function _mlift_unroll_partition_map_acc_10017_10863(acc1, acc2, pred, xx, _y_x10652) /* forall<a,b,c,e> (acc1 : ctx<list<b>>, acc2 : ctx<list<c>>, pred : (a) -> e either<b,c>, xx : list<a>, either<b,c>) -> e (list<b>, list<c>) */  {
  if (_y_x10652._tag === 1) {
     
    var _cctx_x3280 = $std_core_types.Cons(_y_x10652.left, undefined);
     
    var _cctx_x3281 = {obj: _cctx_x3280, field_name: "tail"};
    return _unroll_partition_map_acc_10017(xx, pred, $std_core_types._cctx_compose(acc1,($std_core_types._cctx_create(_cctx_x3280,_cctx_x3281))), acc2);
  }
  else {
     
    var _cctx_x3338 = $std_core_types.Cons(_y_x10652.right, undefined);
     
    var _cctx_x3339 = {obj: _cctx_x3338, field_name: "tail"};
    return _unroll_partition_map_acc_10017(xx, pred, acc1, $std_core_types._cctx_compose(acc2,($std_core_types._cctx_create(_cctx_x3338,_cctx_x3339))));
  }
}
 
export function _unroll_partition_map_acc_10017(xs, pred_0, acc1_0, acc2_0) /* forall<a,b,c,e> (xs : list<a>, pred : (a) -> e either<b,c>, acc1 : ctx<list<b>>, acc2 : ctx<list<c>>) -> e (list<b>, list<c>) */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1_0,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_0,($std_core_types.Nil)));
  }
  else {
     
    var x_0_11006 = pred_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10652_0 /* either<3360,3361> */ ) {
        return _mlift_unroll_partition_map_acc_10017_10863(acc1_0, acc2_0, pred_0, xs.tail, _y_x10652_0);
      });
    }
    else {
      if (x_0_11006._tag === 1) {
         
        var _cctx_x3280_0 = $std_core_types.Cons(x_0_11006.left, undefined);
         
        var _cctx_x3281_0 = {obj: _cctx_x3280_0, field_name: "tail"};
        {
          // tail call
          var _x69 = $std_core_types._cctx_compose(acc1_0,($std_core_types._cctx_create(_cctx_x3280_0,_cctx_x3281_0)));
          xs = xs.tail;
          acc1_0 = _x69;
          continue tailcall;
        }
      }
      else {
         
        var _cctx_x3338_0 = $std_core_types.Cons(x_0_11006.right, undefined);
         
        var _cctx_x3339_0 = {obj: _cctx_x3338_0, field_name: "tail"};
        {
          // tail call
          var _x70 = $std_core_types._cctx_compose(acc2_0,($std_core_types._cctx_create(_cctx_x3338_0,_cctx_x3339_0)));
          xs = xs.tail;
          acc2_0 = _x70;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function partition_map_acc(xs, pred, acc1, acc2) /* forall<a,b,c,e> (xs : list<a>, pred : (a) -> e either<b,c>, acc1 : ctx<list<b>>, acc2 : ctx<list<c>>) -> e (list<b>, list<c>) */  {
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)));
  }
  else {
    return _unroll_partition_map_acc_10017(xs, pred, acc1, acc2);
  }
}
 
 
export function partition_map(xs, pred) /* forall<a,b,c,e> (xs : list<a>, pred : (a) -> e either<b,c>) -> e (list<b>, list<c>) */  {
   
  var acc1_10101 = $std_core_types._cctx_empty();
   
  var acc2_10102 = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1_10101,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_10102,($std_core_types.Nil)));
  }
  else {
    return _unroll_partition_map_acc_10017(xs, pred, acc1_10101, acc2_10102);
  }
}
 
 
export function _mlift_lift_lookup_10355_10864(_uniq_x_10312, _uniq_xx_10313, pred, _y_x10661) /* forall<a,b,e> ((a, b), list<(a, b)>, pred : (a) -> e bool, bool) -> e maybe<b> */  {
  if (_y_x10661) {
    var _x71 = _uniq_x_10312.snd;
    return $std_core_types.Just(_x71);
  }
  else {
    var _x72 = $std_core_types.Nothing;
    if (_x72 === null) {
      return _lift_lookup_10355(pred, _uniq_xx_10313);
    }
    else {
      return _x72;
    }
  }
}
 
 
export function _lift_lookup_10355(pred_0, _uniq_xs_10308) /* forall<a,b,e> (pred : (a) -> e bool, list<(a, b)>) -> e maybe<b> */  { tailcall: while(1)
{
  if (_uniq_xs_10308 === null) {
    return $std_core_types.Nothing;
  }
  else {
     
    var _x73 = _uniq_xs_10308.head.fst;
    var x_11009 = pred_0(_x73);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10661_0 /* bool */ ) {
        return _mlift_lift_lookup_10355_10864(_uniq_xs_10308.head, _uniq_xs_10308.tail, pred_0, _y_x10661_0);
      });
    }
    else {
      if (x_11009) {
        var _x73 = _uniq_xs_10308.head.snd;
        return $std_core_types.Just(_x73);
      }
      else {
        var _x74 = $std_core_types.Nothing;
        if (_x74 === null) {
          {
            // tail call
            _uniq_xs_10308 = _uniq_xs_10308.tail;
            continue tailcall;
          }
        }
        else {
          return _x74;
        }
      }
    }
  }
}}
 
 
export function lookup(xs, pred) /* forall<a,b,e> (xs : list<(a, b)>, pred : (a) -> e bool) -> e maybe<b> */  {
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
    return _lift_lookup_10355(pred, xs);
  }
}
 
 
export function _mlift_unroll_index_of_acc_10018_10865(idx, pred, xx, _y_x10668) /* forall<a,e> (idx : int, pred : (a) -> e bool, xx : list<a>, bool) -> e int */  {
  if (_y_x10668) {
    return idx;
  }
  else {
    return _unroll_index_of_acc_10018(xx, pred, $std_core_types._int_add(idx,1));
  }
}
 
export function _unroll_index_of_acc_10018(xs, pred_0, idx_0) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, idx : int) -> e int */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_11012 = pred_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10668_0 /* bool */ ) {
        return _mlift_unroll_index_of_acc_10018_10865(idx_0, pred_0, xs.tail, _y_x10668_0);
      });
    }
    else {
      if (x_0_11012) {
        return idx_0;
      }
      else {
        {
          // tail call
          var _x75 = $std_core_types._int_add(idx_0,1);
          xs = xs.tail;
          idx_0 = _x75;
          continue tailcall;
        }
      }
    }
  }
  else {
    return -1;
  }
}}
 
 
export function index_of_acc(xs, pred, idx) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool, idx : int) -> e int */  {
  if (xs === null) {
    return -1;
  }
  else {
    return _unroll_index_of_acc_10018(xs, pred, idx);
  }
}
 
 
export function index_of(xs, pred) /* forall<a,e> (xs : list<a>, pred : (a) -> e bool) -> e int */  {
  if (xs === null) {
    return -1;
  }
  else {
    return _unroll_index_of_acc_10018(xs, pred, 0);
  }
}
 
 
export function _mlift_unroll_foreach_10019_10866(action, xx, wild) /* forall<a,e> (action : (a) -> e (), xx : list<a>, wild : ()) -> e () */  {
  return _unroll_foreach_10019(xx, action);
}
 
 
export function _unroll_foreach_10019(xs, action_0) /* forall<a,e> (xs : list<a>, action : (a) -> e ()) -> e () */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_11015 = action_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return _mlift_unroll_foreach_10019_10866(action_0, xs.tail, wild_0);
      });
    }
    else {
      {
        // tail call
        xs = xs.tail;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function foreach(xs, action) /* forall<a,e> (xs : list<a>, action : (a) -> e ()) -> e () */  {
  if (xs === null) {
    return $std_core_types.Unit;
  }
  else {
    return _unroll_foreach_10019(xs, action);
  }
}
 
 
export function _mlift_trmc_unroll_map_while_10020_10867(_acc, action, xx, _y_x10681) /* forall<a,b,e> (ctx<list<b>>, action : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10681 !== null) {
     
    var _trmc_x10428 = undefined;
     
    var _trmc_x10429 = $std_core_types.Cons(_y_x10681.value, _trmc_x10428);
    return _trmc_unroll_map_while_10020(xx, action, $std_core_types._cctx_extend(_acc,_trmc_x10429,({obj: _trmc_x10429, field_name: "tail"})));
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}
 
 
export function _mlift_trmcm_unroll_map_while_10020_10868(_accm, action_0, xx_0, _y_x10685) /* forall<a,b,e> ((list<b>) -> list<b>, action : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10685 !== null) {
    return _trmcm_unroll_map_while_10020(xx_0, action_0, function(_trmc_x10431 /* list<3789> */ ) {
        return _accm($std_core_types.Cons(_y_x10685.value, _trmc_x10431));
      });
  }
  else {
    return _accm($std_core_types.Nil);
  }
}
 
 
export function _trmc_unroll_map_while_10020(xs, action_1, _acc_0) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
  else {
     
    var x_0_11018 = action_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10681_0 /* maybe<3789> */ ) {
        return _mlift_trmc_unroll_map_while_10020_10867(_acc_0, action_1, xs.tail, _y_x10681_0);
      });
    }
    else {
      if (x_0_11018 !== null) {
         
        var _trmc_x10428_0 = undefined;
         
        var _trmc_x10429_0 = $std_core_types.Cons(x_0_11018.value, _trmc_x10428_0);
        {
          // tail call
          var _x76 = $std_core_types._cctx_extend(_acc_0,_trmc_x10429_0,({obj: _trmc_x10429_0, field_name: "tail"}));
          xs = xs.tail;
          _acc_0 = _x76;
          continue tailcall;
        }
      }
      else {
        return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
      }
    }
  }
}}
 
 
export function _trmcm_unroll_map_while_10020(xs_0, action_2, _accm_0) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (xs_0 === null) {
    return _accm_0($std_core_types.Nil);
  }
  else {
     
    var x_2_11021 = action_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10685_0 /* maybe<3789> */ ) {
        return _mlift_trmcm_unroll_map_while_10020_10868(_accm_0, action_2, xs_0.tail, _y_x10685_0);
      });
    }
    else {
      if (x_2_11021 !== null) {
        {
          // tail call
          var _x79 = function(__at_accm_077 /* (list<3789>) -> list<3789> */ , _y_278 /* 3789 */ ) {
            return function(_trmc_x10431_0 /* list<3789> */ ) {
              return __at_accm_077($std_core_types.Cons(_y_278, _trmc_x10431_0));
            };
          }(_accm_0, x_2_11021.value);
          xs_0 = xs_0.tail;
          _accm_0 = _x79;
          continue tailcall;
        }
      }
      else {
        return _accm_0($std_core_types.Nil);
      }
    }
  }
}}
 
 
export function _unroll_map_while_10020(xs_1, action_3) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e list<b> */  {
  var _x80 = $std_core_hnd._evv_is_affine();
  if (_x80) {
    return _trmc_unroll_map_while_10020(xs_1, action_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_map_while_10020(xs_1, action_3, function(_trmc_x10430 /* list<3789> */ ) {
        return _trmc_x10430;
      });
  }
}
 
 
export function map_while(xs, action) /* forall<a,b,e> (xs : list<a>, action : (a) -> e maybe<b>) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_map_while_10020(xs, action);
  }
}
 
 
export function _mlift_lift_foreach_indexed_10356_10869(_uniq_xx_10322, action, i, _uniq_x___10323) /* forall<h,a,e> (list<a>, action : (int, a) -> e (), i : local-var<h,int>, ()) -> <local<h>|e> () */  {
  return _lift_foreach_indexed_10356(action, i, _uniq_xx_10322);
}
 
 
export function _mlift_lift_foreach_indexed_10356_10870(_uniq_xx_10322_0, action_0, i_0, _y_x10697) /* forall<h,a,e> (list<a>, action : (int, a) -> e (), i : local-var<h,int>, int) -> <local<h>|e> () */  {
   
  var x_11024 = ((i_0).value = ($std_core_types._int_add(_y_x10697,1)));
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_uniq_x___10323_0 /* () */ ) {
      return _mlift_lift_foreach_indexed_10356_10869(_uniq_xx_10322_0, action_0, i_0, _uniq_x___10323_0);
    });
  }
  else {
    return _mlift_lift_foreach_indexed_10356_10869(_uniq_xx_10322_0, action_0, i_0, x_11024);
  }
}
 
 
export function _mlift_lift_foreach_indexed_10356_10871(_uniq_xx_10322_1, action_1, i_1, wild) /* forall<h,a,e> (list<a>, action : (int, a) -> e (), i : local-var<h,int>, wild : ()) -> <local<h>|e> () */  {
   
  var x_0_11026 = ((i_1).value);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10697_0 /* int */ ) {
      return _mlift_lift_foreach_indexed_10356_10870(_uniq_xx_10322_1, action_1, i_1, _y_x10697_0);
    });
  }
  else {
    return _mlift_lift_foreach_indexed_10356_10870(_uniq_xx_10322_1, action_1, i_1, x_0_11026);
  }
}
 
 
export function _mlift_lift_foreach_indexed_10356_10872(_uniq_x_10321, _uniq_xx_10322_2, action_2, i_2, j) /* forall<h,a,e> (a, list<a>, action : (int, a) -> e (), i : local-var<h,int>, j : int) -> <local<h>|e> () */  {
   
  var x_1_11028 = action_2(j, _uniq_x_10321);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
      return _mlift_lift_foreach_indexed_10356_10871(_uniq_xx_10322_2, action_2, i_2, wild_0);
    });
  }
  else {
    return _mlift_lift_foreach_indexed_10356_10871(_uniq_xx_10322_2, action_2, i_2, x_1_11028);
  }
}
 
 
export function _lift_foreach_indexed_10356(action_4, i_3, _uniq_xs_10318) /* forall<h,a,e> (action : (int, a) -> e (), i : local-var<h,int>, list<a>) -> <local<h>|e> () */  { tailcall: while(1)
{
  if (_uniq_xs_10318 !== null) {
     
    var x_2_11031 = ((i_3).value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(j_0 /* int */ ) {
        return _mlift_lift_foreach_indexed_10356_10872(_uniq_xs_10318.head, _uniq_xs_10318.tail, action_4, i_3, j_0);
      });
    }
    else {
       
      var x_3_11034 = action_4(x_2_11031, _uniq_xs_10318.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(wild_1 /* () */ ) {
          return _mlift_lift_foreach_indexed_10356_10871(_uniq_xs_10318.tail, action_4, i_3, wild_1);
        });
      }
      else {
         
        var x_4_11038 = ((i_3).value);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10697_1 /* int */ ) {
            return _mlift_lift_foreach_indexed_10356_10870(_uniq_xs_10318.tail, action_4, i_3, _y_x10697_1);
          });
        }
        else {
           
          var x_5_11041 = ((i_3).value = ($std_core_types._int_add(x_4_11038,1)));
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_uniq_x___10323_1 /* () */ ) {
              return _mlift_lift_foreach_indexed_10356_10869(_uniq_xs_10318.tail, action_4, i_3, _uniq_x___10323_1);
            });
          }
          else {
            {
              // tail call
              _uniq_xs_10318 = _uniq_xs_10318.tail;
              continue tailcall;
            }
          }
        }
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function foreach_indexed(xs, action) /* forall<a,e> (xs : list<a>, action : (int, a) -> e ()) -> e () */  {
  return function() {
     
    var loc = { value: 0 };
     
    if (xs === null) {
      var res = $std_core_types.Unit;
    }
    else {
      var res = _lift_foreach_indexed_10356(action, loc, xs);
    }
    return $std_core_hnd.prompt_local_var(loc, res);
  }();
}
 
 
export function _trmc_unroll_lift_intersperse_6541_10021(sep, ys, _acc) /* forall<a> (sep : a, ys : list<a>, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _trmc_x10432 = $std_core_types.Cons(ys.head, undefined);
    {
      // tail call
      var _x81 = $std_core_types._cctx_extend(_acc,($std_core_types.Cons(sep, _trmc_x10432)),({obj: _trmc_x10432, field_name: "tail"}));
      ys = ys.tail;
      _acc = _x81;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _unroll_lift_intersperse_6541_10021(sep_0, ys_0) /* forall<a> (sep : a, ys : list<a>) -> list<a> */  {
  return _trmc_unroll_lift_intersperse_6541_10021(sep_0, ys_0, $std_core_types._cctx_empty());
}
 
 
export function _lift_intersperse_6541(sep, ys) /* forall<a> (sep : a, ys : list<a>) -> list<a> */  {
  if (ys === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_unroll_lift_intersperse_6541_10021(sep, ys, $std_core_types._cctx_empty());
  }
}
 
 
export function intersperse(xs, sep) /* forall<a> (xs : list<a>, sep : a) -> list<a> */  {
  if (xs !== null) {
    if (xs.tail === null) {
      var _x82 = $std_core_types.Nil;
    }
    else {
      var _x82 = _trmc_unroll_lift_intersperse_6541_10021(sep, xs.tail, $std_core_types._cctx_empty());
    }
    return $std_core_types.Cons(xs.head, _x82);
  }
  else {
    return $std_core_types.Nil;
  }
}
 
 
export function joinsep(xs, sep) /* (xs : list<string>, sep : string) -> string */  {
  if (xs === null) {
    return "";
  }
  if (xs !== null && xs.tail === null) {
    return xs.head;
  }
  if (xs !== null && xs.tail !== null && xs.tail.tail === null) {
    if ($std_core_string._lp__eq__eq__rp_(sep, "")){
      return $std_core_types._lp__plus__plus__rp_(xs.head, xs.tail.head);
    }
  }
  return $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(xs), sep);
}
 
 
export function concat_fs_join(xs) /* (xs : list<string>) -> string */  {
  if (xs === null) {
    return "";
  }
  else if (xs !== null && xs.tail === null) {
    return xs.head;
  }
  else if (xs !== null && xs.tail !== null && xs.tail.tail === null) {
    return $std_core_types._lp__plus__plus__rp_(xs.head, xs.tail.head);
  }
  else {
    return $std_core_string.vector_fs_join($std_core_vector.unvlist(xs));
  }
}
 
 
export function joinsep_fs_join(xs, sep) /* (xs : list<string>, sep : string) -> string */  {
  return joinsep(xs, sep);
}
 
 
export function _mlift_show_10873(_c_x10706) /* (list<string>) -> string */  {
  match: {
    if (_c_x10706 === null) {
      var _x83 = "";
      break match;
    }
    if (_c_x10706 !== null && _c_x10706.tail === null) {
      var _x83 = _c_x10706.head;
      break match;
    }
    if (_c_x10706 !== null && _c_x10706.tail !== null && _c_x10706.tail.tail === null) {
      if ($std_core_string._lp__eq__eq__rp_(",", "")){
        var _x83 = $std_core_types._lp__plus__plus__rp_(_c_x10706.head, _c_x10706.tail.head);
        break match;
      }
    }
    var _x83 = $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(_c_x10706), ",");
  }
  return $std_core_types._lp__plus__plus__rp_("[", $std_core_types._lp__plus__plus__rp_(_x83, "]"));
}
 
 
export function show(xs, _implicit_fs_show) /* forall<a,e> (xs : list<a>, ?show : (a) -> e string) -> e string */  {
   
  if (xs === null) {
    var x_11050 = $std_core_types.Nil;
  }
  else {
    var x_11050 = _unroll_map_10011(xs, _implicit_fs_show);
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_show_10873);
  }
  else {
    match: {
      if (x_11050 === null) {
        var _x84 = "";
        break match;
      }
      if (x_11050 !== null && x_11050.tail === null) {
        var _x84 = x_11050.head;
        break match;
      }
      if (x_11050 !== null && x_11050.tail !== null && x_11050.tail.tail === null) {
        if ($std_core_string._lp__eq__eq__rp_(",", "")){
          var _x84 = $std_core_types._lp__plus__plus__rp_(x_11050.head, x_11050.tail.head);
          break match;
        }
      }
      var _x84 = $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(x_11050), ",");
    }
    return $std_core_types._lp__plus__plus__rp_("[", $std_core_types._lp__plus__plus__rp_(_x84, "]"));
  }
}
 
 
export function show_list(xs, show_elem) /* forall<a,e> (xs : list<a>, show-elem : (a) -> e string) -> e string */  {
  return show(xs, show_elem);
}
 
 
export function _trmc_unroll_zip_10022(xs, ys, _acc) /* forall<a,b> (xs : list<a>, ys : list<b>, ctx<list<(a, b)>>) -> list<(a, b)> */  { tailcall: while(1)
{
  if (xs !== null) {
    if (ys !== null) {
       
      var _trmc_x10434 = undefined;
       
      var _trmc_x10435 = $std_core_types.Cons($std_core_types.Tuple2(xs.head, ys.head), _trmc_x10434);
      {
        // tail call
        var _x85 = $std_core_types._cctx_extend(_acc,_trmc_x10435,({obj: _trmc_x10435, field_name: "tail"}));
        xs = xs.tail;
        ys = ys.tail;
        _acc = _x85;
        continue tailcall;
      }
    }
    else {
      return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _unroll_zip_10022(xs_0, ys_0) /* forall<a,b> (xs : list<a>, ys : list<b>) -> list<(a, b)> */  {
  return _trmc_unroll_zip_10022(xs_0, ys_0, $std_core_types._cctx_empty());
}
 
 
export function zip(xs, ys) /* forall<a,b> (xs : list<a>, ys : list<b>) -> list<(a, b)> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_unroll_zip_10022(xs, ys, $std_core_types._cctx_empty());
  }
}
 
 
export function _mlift_trmc_unroll_zipwith_10023_10874(_acc, f, xx, yy, _trmc_x10436) /* forall<a,b,c,e> (ctx<list<c>>, f : (a, b) -> e c, xx : list<a>, yy : list<b>, c) -> e list<c> */  {
   
  var _trmc_x10437 = undefined;
   
  var _trmc_x10438 = $std_core_types.Cons(_trmc_x10436, _trmc_x10437);
  return _trmc_unroll_zipwith_10023(xx, yy, f, $std_core_types._cctx_extend(_acc,_trmc_x10438,({obj: _trmc_x10438, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_zipwith_10023_10875(_accm, f_0, xx_0, yy_0, _trmc_x10441) /* forall<a,b,c,e> ((list<c>) -> list<c>, f : (a, b) -> e c, xx : list<a>, yy : list<b>, c) -> e list<c> */  {
  return _trmcm_unroll_zipwith_10023(xx_0, yy_0, f_0, function(_trmc_x10440 /* list<4409> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10441, _trmc_x10440));
    });
}
 
 
export function _trmc_unroll_zipwith_10023(xs, ys, f_1, _acc_0) /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (a, b) -> e c, ctx<list<c>>) -> e list<c> */  { tailcall: while(1)
{
  if (xs !== null) {
    if (ys !== null) {
       
      var x_0_11055 = f_1(xs.head, ys.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_trmc_x10436_0 /* 4409 */ ) {
          return _mlift_trmc_unroll_zipwith_10023_10874(_acc_0, f_1, xs.tail, ys.tail, _trmc_x10436_0);
        });
      }
      else {
         
        var _trmc_x10437_0 = undefined;
         
        var _trmc_x10438_0 = $std_core_types.Cons(x_0_11055, _trmc_x10437_0);
        {
          // tail call
          var _x86 = $std_core_types._cctx_extend(_acc_0,_trmc_x10438_0,({obj: _trmc_x10438_0, field_name: "tail"}));
          xs = xs.tail;
          ys = ys.tail;
          _acc_0 = _x86;
          continue tailcall;
        }
      }
    }
    else {
      return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_zipwith_10023(xs_0, ys_0, f_2, _accm_0) /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (a, b) -> e c, (list<c>) -> list<c>) -> e list<c> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
    if (ys_0 !== null) {
       
      var x_2_11058 = f_2(xs_0.head, ys_0.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_trmc_x10441_0 /* 4409 */ ) {
          return _mlift_trmcm_unroll_zipwith_10023_10875(_accm_0, f_2, xs_0.tail, ys_0.tail, _trmc_x10441_0);
        });
      }
      else {
        {
          // tail call
          var _x89 = function(__at_accm_087 /* (list<4409>) -> list<4409> */ , _x_2_1105888 /* 4409 */ ) {
            return function(_trmc_x10440_0 /* list<4409> */ ) {
              return __at_accm_087($std_core_types.Cons(_x_2_1105888, _trmc_x10440_0));
            };
          }(_accm_0, x_2_11058);
          xs_0 = xs_0.tail;
          ys_0 = ys_0.tail;
          _accm_0 = _x89;
          continue tailcall;
        }
      }
    }
    else {
      return _accm_0($std_core_types.Nil);
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_zipwith_10023(xs_1, ys_1, f_3) /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (a, b) -> e c) -> e list<c> */  {
  var _x90 = $std_core_hnd._evv_is_affine();
  if (_x90) {
    return _trmc_unroll_zipwith_10023(xs_1, ys_1, f_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_zipwith_10023(xs_1, ys_1, f_3, function(_trmc_x10439 /* list<4409> */ ) {
        return _trmc_x10439;
      });
  }
}
 
 
export function zipwith(xs, ys, f) /* forall<a,b,c,e> (xs : list<a>, ys : list<b>, f : (a, b) -> e c) -> e list<c> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_zipwith_10023(xs, ys, f);
  }
}
 
 
export function _mlift_trmc_unroll_zipwith_iter_10024_10876(_acc, f, i, xx, yy, _trmc_x10442) /* forall<a,b,c,d,e> (ctx<list<a>>, f : (int, b, c) -> e d, i : int, xx : list<b>, yy : list<c>, d) -> e list<d> */  {
   
  var _trmc_x10443 = undefined;
   
  var _trmc_x10444 = $std_core_types.Cons(_trmc_x10442, _trmc_x10443);
  return _trmc_unroll_zipwith_iter_10024($std_core_types._int_add(i,1), xx, yy, f, $std_core_types._cctx_extend(_acc,_trmc_x10444,({obj: _trmc_x10444, field_name: "tail"})));
}
 
 
export function _mlift_trmcm_unroll_zipwith_iter_10024_10877(_accm, f_0, i_0, xx_0, yy_0, _trmc_x10447) /* forall<a,b,c,d,e> ((list<a>) -> list<a>, f : (int, b, c) -> e d, i : int, xx : list<b>, yy : list<c>, d) -> e list<d> */  {
  return _trmcm_unroll_zipwith_iter_10024($std_core_types._int_add(i_0,1), xx_0, yy_0, f_0, function(_trmc_x10446 /* list<4495> */ ) {
      return _accm($std_core_types.Cons(_trmc_x10447, _trmc_x10446));
    });
}
 
export function _trmc_unroll_zipwith_iter_10024(i_1, xs, ys, f_1, _acc_0) /* forall<a,b,c,e> (i : int, xs : list<a>, ys : list<b>, f : (int, a, b) -> e c, ctx<list<c>>) -> e list<c> */  { tailcall: while(1)
{
  if (xs !== null) {
    if (ys !== null) {
       
      var x_0_11061 = f_1(i_1, xs.head, ys.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_trmc_x10442_0 /* 4495 */ ) {
          return _mlift_trmc_unroll_zipwith_iter_10024_10876(_acc_0, f_1, i_1, xs.tail, ys.tail, _trmc_x10442_0);
        });
      }
      else {
         
        var _trmc_x10443_0 = undefined;
         
        var _trmc_x10444_0 = $std_core_types.Cons(x_0_11061, _trmc_x10443_0);
        {
          // tail call
          var _x91 = $std_core_types._int_add(i_1,1);
          var _x92 = $std_core_types._cctx_extend(_acc_0,_trmc_x10444_0,({obj: _trmc_x10444_0, field_name: "tail"}));
          i_1 = _x91;
          xs = xs.tail;
          ys = ys.tail;
          _acc_0 = _x92;
          continue tailcall;
        }
      }
    }
    else {
      return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
export function _trmcm_unroll_zipwith_iter_10024(i_2, xs_0, ys_0, f_2, _accm_0) /* forall<a,b,c,e> (i : int, xs : list<a>, ys : list<b>, f : (int, a, b) -> e c, (list<c>) -> list<c>) -> e list<c> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
    if (ys_0 !== null) {
       
      var x_2_11064 = f_2(i_2, xs_0.head, ys_0.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_trmc_x10447_0 /* 4495 */ ) {
          return _mlift_trmcm_unroll_zipwith_iter_10024_10877(_accm_0, f_2, i_2, xs_0.tail, ys_0.tail, _trmc_x10447_0);
        });
      }
      else {
        {
          // tail call
          var _x95 = $std_core_types._int_add(i_2,1);
          var _x96 = function(__at_accm_093 /* (list<4491>) -> list<4491> */ , _x_2_1106494 /* 4495 */ ) {
            return function(_trmc_x10446_0 /* list<4495> */ ) {
              return __at_accm_093($std_core_types.Cons(_x_2_1106494, _trmc_x10446_0));
            };
          }(_accm_0, x_2_11064);
          i_2 = _x95;
          xs_0 = xs_0.tail;
          ys_0 = ys_0.tail;
          _accm_0 = _x96;
          continue tailcall;
        }
      }
    }
    else {
      return _accm_0($std_core_types.Nil);
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
export function _unroll_zipwith_iter_10024(i_3, xs_1, ys_1, f_3) /* forall<a,b,c,e> (i : int, xs : list<a>, ys : list<b>, f : (int, a, b) -> e c) -> e list<c> */  {
  var _x97 = $std_core_hnd._evv_is_affine();
  if (_x97) {
    return _trmc_unroll_zipwith_iter_10024(i_3, xs_1, ys_1, f_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_zipwith_iter_10024(i_3, xs_1, ys_1, f_3, function(_trmc_x10445 /* list<4495> */ ) {
        return _trmc_x10445;
      });
  }
}
 
 
export function zipwith_iter(i, xs, ys, f) /* forall<a,b,c,e> (i : int, xs : list<a>, ys : list<b>, f : (int, a, b) -> e c) -> e list<c> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_zipwith_iter_10024(i, xs, ys, f);
  }
}
 
 
export function zipwith_indexed(xs0, ys0, f) /* forall<a,b,c,e> (xs0 : list<a>, ys0 : list<b>, f : (int, a, b) -> e c) -> e list<c> */  {
  if (xs0 === null) {
    return $std_core_types.Nil;
  }
  else {
    var _x98 = $std_core_hnd._evv_is_affine();
    if (_x98) {
      return _trmc_unroll_zipwith_iter_10024(0, xs0, ys0, f, $std_core_types._cctx_empty());
    }
    else {
      return _trmcm_unroll_zipwith_iter_10024(0, xs0, ys0, f, function(_trmc_x10445 /* list<4538> */ ) {
          return _trmc_x10445;
        });
    }
  }
}
 
 
export function _unroll_lift_unzip_6542_10025(ys, acc1, acc2) /* forall<a,b,c,d> (ys : list<(a, b)>, acc1 : cctx<c,list<a>>, acc2 : cctx<d,list<b>>) -> (c, d) */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _cctx_x4599 = $std_core_types.Cons(ys.head.fst, undefined);
     
    var _cctx_x4600 = {obj: _cctx_x4599, field_name: "tail"};
     
    var _cctx_x4642 = $std_core_types.Cons(ys.head.snd, undefined);
     
    var _cctx_x4643 = {obj: _cctx_x4642, field_name: "tail"};
    {
      // tail call
      var _x99 = $std_core_types._cctx_compose(acc1,($std_core_types._cctx_create(_cctx_x4599,_cctx_x4600)));
      var _x100 = $std_core_types._cctx_compose(acc2,($std_core_types._cctx_create(_cctx_x4642,_cctx_x4643)));
      ys = ys.tail;
      acc1 = _x99;
      acc2 = _x100;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)));
  }
}}
 
 
export function _lift_unzip_6542(ys, acc1, acc2) /* forall<a,b,c,d> (ys : list<(a, b)>, acc1 : cctx<c,list<a>>, acc2 : cctx<d,list<b>>) -> (c, d) */  {
  if (ys === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip_6542_10025(ys, acc1, acc2);
  }
}
 
 
export function unzip(xs) /* forall<a,b> (xs : list<(a, b)>) -> (list<a>, list<b>) */  {
   
  var acc1_10158 = $std_core_types._cctx_empty();
   
  var acc2_10159 = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc1_10158,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_10159,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip_6542_10025(xs, acc1_10158, acc2_10159);
  }
}
 
 
export function _unroll_lift_unzip3_6543_10026(ys, acc1, acc2, acc3) /* forall<a,b,c,d,a1,b1> (ys : list<(a, b, c)>, acc1 : cctx<d,list<a>>, acc2 : cctx<a1,list<b>>, acc3 : cctx<b1,list<c>>) -> (d, a1, b1) */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _cctx_x4815 = $std_core_types.Cons(ys.head.fst, undefined);
     
    var _cctx_x4816 = {obj: _cctx_x4815, field_name: "tail"};
     
    var _cctx_x4858 = $std_core_types.Cons(ys.head.snd, undefined);
     
    var _cctx_x4859 = {obj: _cctx_x4858, field_name: "tail"};
     
    var _cctx_x4901 = $std_core_types.Cons(ys.head.thd, undefined);
     
    var _cctx_x4902 = {obj: _cctx_x4901, field_name: "tail"};
    {
      // tail call
      var _x101 = $std_core_types._cctx_compose(acc1,($std_core_types._cctx_create(_cctx_x4815,_cctx_x4816)));
      var _x102 = $std_core_types._cctx_compose(acc2,($std_core_types._cctx_create(_cctx_x4858,_cctx_x4859)));
      var _x103 = $std_core_types._cctx_compose(acc3,($std_core_types._cctx_create(_cctx_x4901,_cctx_x4902)));
      ys = ys.tail;
      acc1 = _x101;
      acc2 = _x102;
      acc3 = _x103;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Tuple3($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3,($std_core_types.Nil)));
  }
}}
 
 
export function _lift_unzip3_6543(ys, acc1, acc2, acc3) /* forall<a,b,c,d,a1,b1> (ys : list<(a, b, c)>, acc1 : cctx<d,list<a>>, acc2 : cctx<a1,list<b>>, acc3 : cctx<b1,list<c>>) -> (d, a1, b1) */  {
  if (ys === null) {
    return $std_core_types.Tuple3($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip3_6543_10026(ys, acc1, acc2, acc3);
  }
}
 
 
export function unzip3(xs) /* forall<a,b,c> (xs : list<(a, b, c)>) -> (list<a>, list<b>, list<c>) */  {
   
  var acc1_10161 = $std_core_types._cctx_empty();
   
  var acc2_10162 = $std_core_types._cctx_empty();
   
  var acc3_10163 = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple3($std_core_types._cctx_apply(acc1_10161,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_10162,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3_10163,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip3_6543_10026(xs, acc1_10161, acc2_10162, acc3_10163);
  }
}
 
 
export function _unroll_lift_unzip4_6544_10027(ys, acc1, acc2, acc3, acc4) /* forall<a,b,c,d,a1,b1,c1,d1> (ys : list<(a, b, c, d)>, acc1 : cctx<a1,list<a>>, acc2 : cctx<b1,list<b>>, acc3 : cctx<c1,list<c>>, acc4 : cctx<d1,list<d>>) -> (a1, b1, c1, d1) */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _cctx_x5122 = $std_core_types.Cons(ys.head.fst, undefined);
     
    var _cctx_x5123 = {obj: _cctx_x5122, field_name: "tail"};
     
    var _cctx_x5165 = $std_core_types.Cons(ys.head.snd, undefined);
     
    var _cctx_x5166 = {obj: _cctx_x5165, field_name: "tail"};
     
    var _cctx_x5208 = $std_core_types.Cons(ys.head.thd, undefined);
     
    var _cctx_x5209 = {obj: _cctx_x5208, field_name: "tail"};
     
    var _cctx_x5251 = $std_core_types.Cons(ys.head.field4, undefined);
     
    var _cctx_x5252 = {obj: _cctx_x5251, field_name: "tail"};
    {
      // tail call
      var _x104 = $std_core_types._cctx_compose(acc1,($std_core_types._cctx_create(_cctx_x5122,_cctx_x5123)));
      var _x105 = $std_core_types._cctx_compose(acc2,($std_core_types._cctx_create(_cctx_x5165,_cctx_x5166)));
      var _x106 = $std_core_types._cctx_compose(acc3,($std_core_types._cctx_create(_cctx_x5208,_cctx_x5209)));
      var _x107 = $std_core_types._cctx_compose(acc4,($std_core_types._cctx_create(_cctx_x5251,_cctx_x5252)));
      ys = ys.tail;
      acc1 = _x104;
      acc2 = _x105;
      acc3 = _x106;
      acc4 = _x107;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Tuple4($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3,($std_core_types.Nil)), $std_core_types._cctx_apply(acc4,($std_core_types.Nil)));
  }
}}
 
 
export function _lift_unzip4_6544(ys, acc1, acc2, acc3, acc4) /* forall<a,b,c,d,a1,b1,c1,d1> (ys : list<(a, b, c, d)>, acc1 : cctx<a1,list<a>>, acc2 : cctx<b1,list<b>>, acc3 : cctx<c1,list<c>>, acc4 : cctx<d1,list<d>>) -> (a1, b1, c1, d1) */  {
  if (ys === null) {
    return $std_core_types.Tuple4($std_core_types._cctx_apply(acc1,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3,($std_core_types.Nil)), $std_core_types._cctx_apply(acc4,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip4_6544_10027(ys, acc1, acc2, acc3, acc4);
  }
}
 
 
export function unzip4(xs) /* forall<a,b,c,d> (xs : list<(a, b, c, d)>) -> (list<a>, list<b>, list<c>, list<d>) */  {
   
  var acc1_10165 = $std_core_types._cctx_empty();
   
  var acc2_10166 = $std_core_types._cctx_empty();
   
  var acc3_10167 = $std_core_types._cctx_empty();
   
  var acc4_10168 = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple4($std_core_types._cctx_apply(acc1_10165,($std_core_types.Nil)), $std_core_types._cctx_apply(acc2_10166,($std_core_types.Nil)), $std_core_types._cctx_apply(acc3_10167,($std_core_types.Nil)), $std_core_types._cctx_apply(acc4_10168,($std_core_types.Nil)));
  }
  else {
    return _unroll_lift_unzip4_6544_10027(xs, acc1_10165, acc2_10166, acc3_10167, acc4_10168);
  }
}
 
 
export function _mlift_unroll_lift_span_6545_10028_10878(acc, predicate, y, ys, yy, _y_x10736) /* forall<a,b,e> (acc : cctx<a,list<b>>, predicate : (b) -> e bool, y : b, ys : list<b>, yy : list<b>, bool) -> e (a, list<b>) */  {
  if (_y_x10736) {
     
    var _cctx_x5506 = $std_core_types.Cons(y, undefined);
     
    var _cctx_x5507 = {obj: _cctx_x5506, field_name: "tail"};
     
    var acc_0_10125 = $std_core_types._cctx_compose(acc,($std_core_types._cctx_create(_cctx_x5506,_cctx_x5507)));
    return _unroll_lift_span_6545_10028(predicate, yy, acc_0_10125);
  }
  else {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc,($std_core_types.Nil)), ys);
  }
}
 
 
export function _unroll_lift_span_6545_10028(predicate_0, ys_0, acc_0) /* forall<a,e,b> (predicate : (a) -> e bool, ys : list<a>, acc : cctx<b,list<a>>) -> e (b, list<a>) */  { tailcall: while(1)
{
  if (ys_0 !== null) {
     
    var x_11071 = predicate_0(ys_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10736_0 /* bool */ ) {
        return _mlift_unroll_lift_span_6545_10028_10878(acc_0, predicate_0, ys_0.head, ys_0, ys_0.tail, _y_x10736_0);
      });
    }
    else {
      if (x_11071) {
         
        var _cctx_x5506_0 = $std_core_types.Cons(ys_0.head, undefined);
         
        var _cctx_x5507_0 = {obj: _cctx_x5506_0, field_name: "tail"};
         
        var acc_0_10125_0 = $std_core_types._cctx_compose(acc_0,($std_core_types._cctx_create(_cctx_x5506_0,_cctx_x5507_0)));
        {
          // tail call
          ys_0 = ys_0.tail;
          acc_0 = acc_0_10125_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Tuple2($std_core_types._cctx_apply(acc_0,($std_core_types.Nil)), ys_0);
      }
    }
  }
  else {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc_0,($std_core_types.Nil)), ys_0);
  }
}}
 
 
export function _lift_span_6545(predicate, ys, acc) /* forall<a,e,b> (predicate : (a) -> e bool, ys : list<a>, acc : cctx<b,list<a>>) -> e (b, list<a>) */  {
  if (ys === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc,($std_core_types.Nil)), ys);
  }
  else {
    return _unroll_lift_span_6545_10028(predicate, ys, acc);
  }
}
 
export function span(xs, predicate) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e (list<a>, list<a>) */  {
   
  var acc = $std_core_types._cctx_empty();
  if (xs === null) {
    return $std_core_types.Tuple2($std_core_types._cctx_apply(acc,($std_core_types.Nil)), xs);
  }
  else {
    return _unroll_lift_span_6545_10028(predicate, xs, acc);
  }
}
 
 
export function _mlift_trmc_unroll_take_while_10029_10879(_acc, predicate, x, xx, _y_x10744) /* forall<a,e> (ctx<list<a>>, predicate : (a) -> e bool, x : a, xx : list<a>, bool) -> e list<a> */  {
  if (_y_x10744) {
     
    var _trmc_x10448 = undefined;
     
    var _trmc_x10449 = $std_core_types.Cons(x, _trmc_x10448);
    return _trmc_unroll_take_while_10029(xx, predicate, $std_core_types._cctx_extend(_acc,_trmc_x10449,({obj: _trmc_x10449, field_name: "tail"})));
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}
 
 
export function _mlift_trmcm_unroll_take_while_10029_10880(_accm, predicate_0, x_0, xx_0, _y_x10748) /* forall<a,e> ((list<a>) -> list<a>, predicate : (a) -> e bool, x : a, xx : list<a>, bool) -> e list<a> */  {
  if (_y_x10748) {
    return _trmcm_unroll_take_while_10029(xx_0, predicate_0, function(_trmc_x10451 /* list<5662> */ ) {
        return _accm($std_core_types.Cons(x_0, _trmc_x10451));
      });
  }
  else {
    return _accm($std_core_types.Nil);
  }
}
 
 
export function _trmc_unroll_take_while_10029(xs, predicate_1, _acc_0) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool, ctx<list<a>>) -> e list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_2_11074 = predicate_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10744_0 /* bool */ ) {
        return _mlift_trmc_unroll_take_while_10029_10879(_acc_0, predicate_1, xs.head, xs.tail, _y_x10744_0);
      });
    }
    else {
      if (x_2_11074) {
         
        var _trmc_x10448_0 = undefined;
         
        var _trmc_x10449_0 = $std_core_types.Cons(xs.head, _trmc_x10448_0);
        {
          // tail call
          var _x108 = $std_core_types._cctx_extend(_acc_0,_trmc_x10449_0,({obj: _trmc_x10449_0, field_name: "tail"}));
          xs = xs.tail;
          _acc_0 = _x108;
          continue tailcall;
        }
      }
      else {
        return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_take_while_10029(xs_0, predicate_2, _accm_0) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool, (list<a>) -> list<a>) -> e list<a> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
     
    var x_4_11077 = predicate_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10748_0 /* bool */ ) {
        return _mlift_trmcm_unroll_take_while_10029_10880(_accm_0, predicate_2, xs_0.head, xs_0.tail, _y_x10748_0);
      });
    }
    else {
      if (x_4_11077) {
        {
          // tail call
          var _x111 = function(__at_accm_0109 /* (list<5662>) -> list<5662> */ , _x_3110 /* 5662 */ ) {
            return function(_trmc_x10451_0 /* list<5662> */ ) {
              return __at_accm_0109($std_core_types.Cons(_x_3110, _trmc_x10451_0));
            };
          }(_accm_0, xs_0.head);
          xs_0 = xs_0.tail;
          _accm_0 = _x111;
          continue tailcall;
        }
      }
      else {
        return _accm_0($std_core_types.Nil);
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_take_while_10029(xs_1, predicate_3) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  {
  var _x112 = $std_core_hnd._evv_is_affine();
  if (_x112) {
    return _trmc_unroll_take_while_10029(xs_1, predicate_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_take_while_10029(xs_1, predicate_3, function(_trmc_x10450 /* list<5662> */ ) {
        return _trmc_x10450;
      });
  }
}
 
 
export function take_while(xs, predicate) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_take_while_10029(xs, predicate);
  }
}
 
 
export function reverse_join(xs) /* (xs : list<string>) -> string */  {
   
  if (xs === null) {
    var xs_0_10129 = $std_core_types.Nil;
  }
  else {
    var xs_0_10129 = _unroll_reverse_acc_10003($std_core_types.Nil, xs);
  }
  if (xs_0_10129 === null) {
    return "";
  }
  else if (xs_0_10129 !== null && xs_0_10129.tail === null) {
    return xs_0_10129.head;
  }
  else if (xs_0_10129 !== null && xs_0_10129.tail !== null && xs_0_10129.tail.tail === null) {
    return $std_core_types._lp__plus__plus__rp_(xs_0_10129.head, xs_0_10129.tail.head);
  }
  else {
    return $std_core_string.vector_fs_join($std_core_vector.unvlist(xs_0_10129));
  }
}
 
 
export function join_end(xs, end) /* (xs : list<string>, end : string) -> string */  {
  if (xs === null) {
    return "";
  }
  else {
    return $std_core_types._lp__plus__plus__rp_(joinsep(xs, end), end);
  }
}
 
 
export function _trmc_lift_concat_6546(ys, zss, _acc) /* forall<a> (ys : list<a>, zss : list<list<a>>, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _trmc_x10452 = undefined;
     
    var _trmc_x10453 = $std_core_types.Cons(ys.head, _trmc_x10452);
    {
      // tail call
      var _x113 = $std_core_types._cctx_extend(_acc,_trmc_x10453,({obj: _trmc_x10453, field_name: "tail"}));
      ys = ys.tail;
      _acc = _x113;
      continue tailcall;
    }
  }
  else {
    if (zss !== null) {
      {
        // tail call
        ys = zss.head;
        zss = zss.tail;
        continue tailcall;
      }
    }
    else {
      return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
    }
  }
}}
 
 
export function _lift_concat_6546(ys_0, zss_0) /* forall<a> (ys : list<a>, zss : list<list<a>>) -> list<a> */  {
  return _trmc_lift_concat_6546(ys_0, zss_0, $std_core_types._cctx_empty());
}
 
 
export function concat(xss) /* forall<a> (xss : list<list<a>>) -> list<a> */  {
  return _trmc_lift_concat_6546($std_core_types.Nil, xss, $std_core_types._cctx_empty());
}
 
 
export function _mlift_trmc_lift_flatmap_6547_10881(_acc, f, zz, ys_1_10138) /* forall<a,b,e> (ctx<list<b>>, f : (a) -> e list<b>, zz : list<a>, ys@1@10138 : list<b>) -> e list<b> */  {
  return _trmc_lift_flatmap_6547(f, ys_1_10138, zz, _acc);
}
 
 
export function _mlift_trmcm_lift_flatmap_6547_10882(_accm, f_0, zz_0, ys_1_10138_0) /* forall<a,b,e> ((list<b>) -> list<b>, f : (a) -> e list<b>, zz : list<a>, ys@1@10138 : list<b>) -> e list<b> */  {
  return _trmcm_lift_flatmap_6547(f_0, ys_1_10138_0, zz_0, _accm);
}
 
 
export function _trmc_lift_flatmap_6547(f_1, ys, zs, _acc_0) /* forall<a,b,e> (f : (a) -> e list<b>, ys : list<b>, zs : list<a>, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (ys !== null) {
     
    var _trmc_x10454 = undefined;
     
    var _trmc_x10455 = $std_core_types.Cons(ys.head, _trmc_x10454);
    {
      // tail call
      var _x114 = $std_core_types._cctx_extend(_acc_0,_trmc_x10455,({obj: _trmc_x10455, field_name: "tail"}));
      ys = ys.tail;
      _acc_0 = _x114;
      continue tailcall;
    }
  }
  else {
    if (zs !== null) {
       
      var x_11082 = f_1(zs.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(ys_1_10138_1 /* list<5864> */ ) {
          return _mlift_trmc_lift_flatmap_6547_10881(_acc_0, f_1, zs.tail, ys_1_10138_1);
        });
      }
      else {
        {
          // tail call
          ys = x_11082;
          zs = zs.tail;
          continue tailcall;
        }
      }
    }
    else {
      return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
    }
  }
}}
 
 
export function _trmcm_lift_flatmap_6547(f_2, ys_0, zs_0, _accm_0) /* forall<a,b,e> (f : (a) -> e list<b>, ys : list<b>, zs : list<a>, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (ys_0 !== null) {
    {
      // tail call
      var _x117 = function(__at_accm_0115 /* (list<5864>) -> list<5864> */ , _y_0116 /* 5864 */ ) {
        return function(_trmc_x10457 /* list<5864> */ ) {
          return __at_accm_0115($std_core_types.Cons(_y_0116, _trmc_x10457));
        };
      }(_accm_0, ys_0.head);
      ys_0 = ys_0.tail;
      _accm_0 = _x117;
      continue tailcall;
    }
  }
  else {
    if (zs_0 !== null) {
       
      var x_0_11085 = f_2(zs_0.head);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(ys_1_10138_3 /* list<5864> */ ) {
          return _mlift_trmcm_lift_flatmap_6547_10882(_accm_0, f_2, zs_0.tail, ys_1_10138_3);
        });
      }
      else {
        {
          // tail call
          ys_0 = x_0_11085;
          zs_0 = zs_0.tail;
          continue tailcall;
        }
      }
    }
    else {
      return _accm_0($std_core_types.Nil);
    }
  }
}}
 
 
export function _lift_flatmap_6547(f_3, ys_1, zs_1) /* forall<a,b,e> (f : (a) -> e list<b>, ys : list<b>, zs : list<a>) -> e list<b> */  {
  var _x118 = $std_core_hnd._evv_is_affine();
  if (_x118) {
    return _trmc_lift_flatmap_6547(f_3, ys_1, zs_1, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_lift_flatmap_6547(f_3, ys_1, zs_1, function(_trmc_x10456 /* list<5864> */ ) {
        return _trmc_x10456;
      });
  }
}
 
 
export function flatmap(xs, f) /* forall<a,b,e> (xs : list<a>, f : (a) -> e list<b>) -> e list<b> */  {
  var _x119 = $std_core_hnd._evv_is_affine();
  if (_x119) {
    return _trmc_lift_flatmap_6547(f, $std_core_types.Nil, xs, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_lift_flatmap_6547(f, $std_core_types.Nil, xs, function(_trmc_x10456 /* list<5864> */ ) {
        return _trmc_x10456;
      });
  }
}
 
 
export function _mlift_trmc_unroll_flatmap_maybe_10030_10883(_acc, f, xx, _y_x10771) /* forall<a,b,e> (ctx<list<b>>, f : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10771 !== null) {
     
    var _trmc_x10458 = undefined;
     
    var _trmc_x10459 = $std_core_types.Cons(_y_x10771.value, _trmc_x10458);
    return _trmc_unroll_flatmap_maybe_10030(xx, f, $std_core_types._cctx_extend(_acc,_trmc_x10459,({obj: _trmc_x10459, field_name: "tail"})));
  }
  else {
    return _trmc_unroll_flatmap_maybe_10030(xx, f, _acc);
  }
}
 
 
export function _mlift_trmcm_unroll_flatmap_maybe_10030_10884(_accm, f_0, xx_0, _y_x10776) /* forall<a,b,e> ((list<b>) -> list<b>, f : (a) -> e maybe<b>, xx : list<a>, maybe<b>) -> e list<b> */  {
  if (_y_x10776 !== null) {
    return _trmcm_unroll_flatmap_maybe_10030(xx_0, f_0, function(_trmc_x10461 /* list<5951> */ ) {
        return _accm($std_core_types.Cons(_y_x10776.value, _trmc_x10461));
      });
  }
  else {
    return _trmcm_unroll_flatmap_maybe_10030(xx_0, f_0, _accm);
  }
}
 
 
export function _trmc_unroll_flatmap_maybe_10030(xs, f_1, _acc_0) /* forall<a,b,e> (xs : list<a>, f : (a) -> e maybe<b>, ctx<list<b>>) -> e list<b> */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_11091 = f_1(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10771_0 /* maybe<5951> */ ) {
        return _mlift_trmc_unroll_flatmap_maybe_10030_10883(_acc_0, f_1, xs.tail, _y_x10771_0);
      });
    }
    else {
      if (x_0_11091 !== null) {
         
        var _trmc_x10458_0 = undefined;
         
        var _trmc_x10459_0 = $std_core_types.Cons(x_0_11091.value, _trmc_x10458_0);
        {
          // tail call
          var _x120 = $std_core_types._cctx_extend(_acc_0,_trmc_x10459_0,({obj: _trmc_x10459_0, field_name: "tail"}));
          xs = xs.tail;
          _acc_0 = _x120;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc_0,($std_core_types.Nil));
  }
}}
 
 
export function _trmcm_unroll_flatmap_maybe_10030(xs_0, f_2, _accm_0) /* forall<a,b,e> (xs : list<a>, f : (a) -> e maybe<b>, (list<b>) -> list<b>) -> e list<b> */  { tailcall: while(1)
{
  if (xs_0 !== null) {
     
    var x_2_11094 = f_2(xs_0.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10776_0 /* maybe<5951> */ ) {
        return _mlift_trmcm_unroll_flatmap_maybe_10030_10884(_accm_0, f_2, xs_0.tail, _y_x10776_0);
      });
    }
    else {
      if (x_2_11094 !== null) {
        {
          // tail call
          var _x123 = function(__at_accm_0121 /* (list<5951>) -> list<5951> */ , _y_2122 /* 5951 */ ) {
            return function(_trmc_x10461_0 /* list<5951> */ ) {
              return __at_accm_0121($std_core_types.Cons(_y_2122, _trmc_x10461_0));
            };
          }(_accm_0, x_2_11094.value);
          xs_0 = xs_0.tail;
          _accm_0 = _x123;
          continue tailcall;
        }
      }
      else {
        {
          // tail call
          xs_0 = xs_0.tail;
          continue tailcall;
        }
      }
    }
  }
  else {
    return _accm_0($std_core_types.Nil);
  }
}}
 
 
export function _unroll_flatmap_maybe_10030(xs_1, f_3) /* forall<a,b,e> (xs : list<a>, f : (a) -> e maybe<b>) -> e list<b> */  {
  var _x124 = $std_core_hnd._evv_is_affine();
  if (_x124) {
    return _trmc_unroll_flatmap_maybe_10030(xs_1, f_3, $std_core_types._cctx_empty());
  }
  else {
    return _trmcm_unroll_flatmap_maybe_10030(xs_1, f_3, function(_trmc_x10460 /* list<5951> */ ) {
        return _trmc_x10460;
      });
  }
}
 
 
export function flatmap_maybe(xs, f) /* forall<a,b,e> (xs : list<a>, f : (a) -> e maybe<b>) -> e list<b> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _unroll_flatmap_maybe_10030(xs, f);
  }
}
 
 
export function _trmc_unroll_concat_maybe_10031(xs, _acc) /* forall<a> (xs : list<maybe<a>>, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (xs !== null) {
    if (xs.head !== null) {
       
      var _trmc_x10462 = undefined;
       
      var _trmc_x10463 = $std_core_types.Cons(xs.head.value, _trmc_x10462);
      {
        // tail call
        var _x125 = $std_core_types._cctx_extend(_acc,_trmc_x10463,({obj: _trmc_x10463, field_name: "tail"}));
        xs = xs.tail;
        _acc = _x125;
        continue tailcall;
      }
    }
    else {
      {
        // tail call
        xs = xs.tail;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function _unroll_concat_maybe_10031(xs_0) /* forall<a> (xs : list<maybe<a>>) -> list<a> */  {
  return _trmc_unroll_concat_maybe_10031(xs_0, $std_core_types._cctx_empty());
}
 
 
export function concat_maybe(xs) /* forall<a> (xs : list<maybe<a>>) -> list<a> */  {
  if (xs === null) {
    return $std_core_types.Nil;
  }
  else {
    return _trmc_unroll_concat_maybe_10031(xs, $std_core_types._cctx_empty());
  }
}
 
 
export function last(xs) /* forall<a> (xs : list<a>) -> maybe<a> */  { tailcall: while(1)
{
  if (xs !== null && xs.tail === null) {
    return $std_core_types.Just(xs.head);
  }
  else if (xs !== null) {
    {
      // tail call
      xs = xs.tail;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function _trmc_init(xs, _acc) /* forall<a> (xs : list<a>, ctx<list<a>>) -> list<a> */  { tailcall: while(1)
{
  if (xs !== null && xs.tail !== null) {
     
    var _trmc_x10464 = undefined;
     
    var _trmc_x10465 = $std_core_types.Cons(xs.head, _trmc_x10464);
    {
      // tail call
      var _x126 = $std_core_types._cctx_extend(_acc,_trmc_x10465,({obj: _trmc_x10465, field_name: "tail"}));
      xs = xs.tail;
      _acc = _x126;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function init(xs_0) /* forall<a> (xs : list<a>) -> list<a> */  {
  return _trmc_init(xs_0, $std_core_types._cctx_empty());
}
 
 
export function split_last(xs, acc) /* forall<a> (xs : list<a>, acc : ? (ctx<list<a>>)) -> maybe2<list<a>,a> */  { tailcall: while(1)
{
   
  if (acc !== undefined) {
    var _uniq_acc_6123 = acc;
  }
  else {
    var _uniq_acc_6123 = $std_core_types._cctx_empty();
  }
  if (xs !== null && xs.tail !== null) {
     
    var _cctx_x6182 = $std_core_types.Cons(xs.head, undefined);
     
    var _cctx_x6183 = {obj: _cctx_x6182, field_name: "tail"};
    {
      // tail call
      var _x127 = $std_core_types._cctx_compose(_uniq_acc_6123,($std_core_types._cctx_create(_cctx_x6182,_cctx_x6183)));
      xs = xs.tail;
      acc = _x127;
      continue tailcall;
    }
  }
  else if (xs !== null && xs.tail === null) {
    return $std_core_types.Just2($std_core_types._cctx_apply(_uniq_acc_6123,($std_core_types.Nil)), xs.head);
  }
  else {
    return $std_core_types.Nothing2;
  }
}}
 
 
export function _unroll_index_10032(xs, n) /* forall<a> (xs : list<a>, n : int) -> maybe<a> */  { tailcall: while(1)
{
  if (xs !== null) {
    if ($std_core_types._int_gt(n,0)) {
      {
        // tail call
        var _x128 = $std_core_types._int_sub(n,1);
        xs = xs.tail;
        n = _x128;
        continue tailcall;
      }
    }
    else {
      if ($std_core_types._int_eq(n,0)) {
        return $std_core_types.Just(xs.head);
      }
      else {
        return $std_core_types.Nothing;
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function _index(xs, n) /* forall<a> (xs : list<a>, n : int) -> maybe<a> */  {
  if (xs === null) {
    return $std_core_types.Nothing;
  }
  else {
    return _unroll_index_10032(xs, n);
  }
}
 
 
export function _mlift_unroll_all_10033_10885(predicate, xx, _y_x10786) /* forall<a,e> (predicate : (a) -> e bool, xx : list<a>, bool) -> e bool */  {
  if (_y_x10786) {
    return _unroll_all_10033(xx, predicate);
  }
  else {
    return false;
  }
}
 
 
export function _unroll_all_10033(xs, predicate_0) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_11098 = predicate_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10786_0 /* bool */ ) {
        return _mlift_unroll_all_10033_10885(predicate_0, xs.tail, _y_x10786_0);
      });
    }
    else {
      if (x_0_11098) {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
      else {
        return false;
      }
    }
  }
  else {
    return true;
  }
}}
 
 
export function all(xs, predicate) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  {
  if (xs === null) {
    return true;
  }
  else {
    return _unroll_all_10033(xs, predicate);
  }
}
 
 
export function _mlift_unroll_any_10034_10886(predicate, xx, _y_x10792) /* forall<a,e> (predicate : (a) -> e bool, xx : list<a>, bool) -> e bool */  {
  if (_y_x10792) {
    return true;
  }
  else {
    return _unroll_any_10034(xx, predicate);
  }
}
 
 
export function _unroll_any_10034(xs, predicate_0) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  { tailcall: while(1)
{
  if (xs !== null) {
     
    var x_0_11101 = predicate_0(xs.head);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10792_0 /* bool */ ) {
        return _mlift_unroll_any_10034_10886(predicate_0, xs.tail, _y_x10792_0);
      });
    }
    else {
      if (x_0_11101) {
        return true;
      }
      else {
        {
          // tail call
          xs = xs.tail;
          continue tailcall;
        }
      }
    }
  }
  else {
    return false;
  }
}}
 
 
export function any(xs, predicate) /* forall<a,e> (xs : list<a>, predicate : (a) -> e bool) -> e bool */  {
  if (xs === null) {
    return false;
  }
  else {
    return _unroll_any_10034(xs, predicate);
  }
}
 
 
export function _lift_sum_10357(_uniq_xs_10327, _uniq_z_10328) /* (list<int>, int) -> int */  { tailcall: while(1)
{
  if (_uniq_xs_10327 !== null) {
    {
      // tail call
      var _x129 = $std_core_int._lp__plus__rp_(_uniq_z_10328, _uniq_xs_10327.head);
      _uniq_xs_10327 = _uniq_xs_10327.tail;
      _uniq_z_10328 = _x129;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10328;
  }
}}
 
 
export function sum(xs) /* (xs : list<int>) -> int */  {
  if (xs === null) {
    return 0;
  }
  else {
    return _lift_sum_10357(xs, 0);
  }
}
 
 
export function _lift_minimum_10358(_uniq_xs_10335, _uniq_z_10336) /* (list<int>, int) -> int */  { tailcall: while(1)
{
  if (_uniq_xs_10335 !== null) {
    {
      // tail call
      var _x130 = $std_core_int.min(_uniq_z_10336, _uniq_xs_10335.head);
      _uniq_xs_10335 = _uniq_xs_10335.tail;
      _uniq_z_10336 = _x130;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10336;
  }
}}
 
 
export function minimum(xs, $default) /* (xs : list<int>, default : ? int) -> int */  {
  if (xs === null) {
    return ($default !== undefined) ? $default : 0;
  }
  else {
    if (xs.tail === null) {
      return xs.head;
    }
    else {
      return _lift_minimum_10358(xs.tail, xs.head);
    }
  }
}
 
 
export function _lift_maximum_10359(_uniq_xs_10343, _uniq_z_10344) /* (list<int>, int) -> int */  { tailcall: while(1)
{
  if (_uniq_xs_10343 !== null) {
    {
      // tail call
      var _x131 = $std_core_int.max(_uniq_z_10344, _uniq_xs_10343.head);
      _uniq_xs_10343 = _uniq_xs_10343.tail;
      _uniq_z_10344 = _x131;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10344;
  }
}}
 
 
export function maximum(xs, $default) /* (xs : list<int>, default : ? int) -> int */  {
  if (xs === null) {
    return ($default !== undefined) ? $default : 0;
  }
  else {
    if (xs.tail === null) {
      return xs.head;
    }
    else {
      return _lift_maximum_10359(xs.tail, xs.head);
    }
  }
}
 
 
export function lines(s) /* (s : string) -> list<string> */  {
   
  var v_10019 = $std_core_string.splitv(s, "\n");
  return $std_core_vector.vlist(v_10019);
}
 
 
export function unlines(xs) /* (xs : list<string>) -> string */  {
  if (xs === null) {
    return "";
  }
  if (xs !== null && xs.tail === null) {
    return xs.head;
  }
  if (xs !== null && xs.tail !== null && xs.tail.tail === null) {
    if ($std_core_string._lp__eq__eq__rp_("\n", "")){
      return $std_core_types._lp__plus__plus__rp_(xs.head, xs.tail.head);
    }
  }
  return $std_core_string.vectorsep_fs_join($std_core_vector.unvlist(xs), "\n");
}
