// Koka generated module: std/num/int32, koka version: 3.2.9
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
import * as $std_core_undiv from './std_core_undiv.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2020-2026, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
// -------------------------------------------
// clmul,clmulr,gather,scatter,zip,unzip,orc
// see: kklib/src/bits.c for optimized implementations
// -------------------------------------------
export function _int32_clmul(x,y) {
  let a = $std_core_types._int32_as_uint32(x);
  let b = $std_core_types._int32_as_uint32(y);
  let c = 0;
  for (let i = 0; i < 32; i++) {
    if ((b >> i) & 1) {
      c ^= (a << i);
    }
  }
  return $std_core_types._uint32_as_int32(c|0);
}
export function _int32_clmul_wide(x,y) {
  let a = $std_core_types._int32_as_uint32(x);
  let b = $std_core_types._int32_as_uint32(y);
  let clo = 0;
  let chi = 0;
  for (let i = 0; i < 32; i++) {
    if ((b >> i) & 1) {
      clo ^= (a << i);
      chi ^= (a >> (32 - i));
    }
  }  
  return $std_core_types.Tuple2($std_core_types._uint32_as_int32(chi),$std_core_types._uint32_as_int32(clo));
}
export function _int32_clmulr(x,y) {
  return $std_core_types._int32_breverse(_int32_clmul($std_core_types._int32_breverse(x),$std_core_types._int32_breverse(y)));
}
export function _int32_scatter(x,mask) {
  let a = $std_core_types._int32_as_uint32(x)
  let y = 0
  for (let i = 0; i < 32; i++) {
    if ((mask >> i) & 1) {
      y |= ((a&1) << i)
      a >>= 1
    }
  }
  return $std_core_types._uint32_as_int32(y|0)
}
export function _int32_gather(x,smask) {
  let a = $std_core_types._int32_as_uint32(x)
  let mask = $std_core_types._int32_as_uint32(smask)  
  let y = 0
  let shift = 0
  for (let i = 0; i < 32; i++) {
    if ((mask>>i) & 1) {
      if ((a>>i) & 1) {
        y |= (1 << shift)
      }
      shift++      
    }
  }
  return $std_core_types._uint32_as_int32(y|0)
}
function _int32_scatter_even(x) {
  x = (x | (x << 8 )) & 0x00FF00FF; // even bytes
  x = (x | (x << 4 )) & 0x0F0F0F0F; // even nibbles
  x = (x | (x << 2 )) & 0x33333333; // even pairs
  x = (x | (x << 1 )) & 0x55555555; // even bits
  return x;
}
export function _int32_zip(x) {
  let a = $std_core_types._int32_as_uint32(x) 
  let b = (_int32_scatter_even(a >> 16) << 1) | _int32_scatter_even(a & 0xFFFF);
  return $std_core_types._uint32_as_int32(b)
}
function _int32_gather_even(x) {
  x = x & 0x55555555;
  x = (x | (x >> 1 )) & 0x33333333;
  x = (x | (x >> 2 )) & 0x0F0F0F0F;
  x = (x | (x >> 4 )) & 0x00FF00FF;
  x = (x | (x >> 8 )) & 0x0000FFFF;
  return x;
}
export function _int32_unzip(x) {
  let a = $std_core_types._int32_as_uint32(x)   
  let b = (_int32_gather_even(a >> 1) << 16) | _int32_gather_even(a);
  return $std_core_types._uint32_as_int32(b);
}
export function _int32_orc(x) {
  let a = $std_core_types._int32_as_uint32(x)   
  // set high bit in each byte to `or` of the bits in the byte
  a |= ((a & 0x0F0F0F0F) << 4);
  a |= ((a & 0x33333333) << 2);
  a |= ((a & 0x55555555) << 1);
  // distribute the high bit back
  a &= 0x80808080
  a |= (a >> 1);
  a |= (a >> 2);
  a |= (a >> 4);
  return $std_core_types._uint32_as_int32(a);
}
 
// type declarations
 
// declarations
 
 
export var one;
var one = 1;
 
 
export var zero;
var zero = 0;
 
 
export function bool_fs_int32(b) /* (b : bool) -> int32 */  {
  return (b) ? one : zero;
}
 
 
export function hilo_fs_int32(hi_0, lo_0) /* (hi : int32, lo : int32) -> int32 */  {
  return ((hi_0 << 16) | ((lo_0 & 65535)));
}
 
 
export var max_int32;
var max_int32 = 2147483647;
 
 
export var min_int32;
var min_int32 = -2147483648;
 
 
export var bits_int32;
var bits_int32 = 32;
 
 
export function i32(i) /* (i : int) -> int32 */  {
  return $std_core_types._int_clamp32(i);
}
 
 
export function bool(i) /* (i : int32) -> bool */  {
  return (i !== zero);
}
 
 
export function uint(i) /* (i : int32) -> int */  {
  if (0 > i) {
     
    var y_10002 = $std_core_types._int_from_int32(i);
    return $std_core_types._int_add(4294967296,y_10002);
  }
  else {
    return $std_core_types._int_from_int32(i);
  }
}
 
 
export function hilo_fs_int(_pat_x428__19) /* ((int32, int32)) -> int */  {
   
  var x_10003 = $std_core_types._int_mul(($std_core_types._int_from_int32((_pat_x428__19.fst))),4294967296);
   
  var y_10004 = uint(_pat_x428__19.snd);
  return $std_core_types._int_add(x_10003,y_10004);
}
 
 
export function hilo_fs_uint(_pat_x433__20) /* ((int32, int32)) -> int */  {
   
  var x_10005 = $std_core_types._int_mul((uint(_pat_x433__20.fst)),4294967296);
   
  var y_10006 = uint(_pat_x433__20.snd);
  return $std_core_types._int_add(x_10005,y_10006);
}
 
 
export function show(i) /* (i : int32) -> string */  {
  return $std_core_int.show($std_core_types._int_from_int32(i));
}
 
 
export function show_hex(i, width, use_capitals, pre) /* (i : int32, width : ? int, use-capitals : ? bool, pre : ? string) -> string */  {
  var _x0 = (width !== undefined) ? width : 1;
  var _x1 = (use_capitals !== undefined) ? use_capitals : true;
  var _x2 = (pre !== undefined) ? pre : "0x";
  return $std_core_show.show_hex($std_core_types._int_from_int32(i), _x0, _x1, _x2);
}
 
 
export function uint32(i) /* (i : int) -> int32 */  {
  var _x4 = $std_core_types._int_gt(i,($std_core_types._int_from_int32(max_int32)));
  var _x3 = (_x4) ? $std_core_types._int_sub(i,4294967296) : i;
  return $std_core_types._int_clamp32(_x3);
}
 
 
export function show_hex32(i, width, use_capitals, pre) /* (i : int32, width : ? int, use-capitals : ? bool, pre : ? string) -> string */  {
  var _x5 = (width !== undefined) ? width : 8;
  var _x6 = (use_capitals !== undefined) ? use_capitals : true;
  var _x7 = (pre !== undefined) ? pre : "0x";
  return $std_core_show.show_hex(uint(i), _x5, _x6, _x7);
}
 
 
export function sign(i) /* (i : int32) -> order */  {
  if (0 < i) {
    return $std_core_types.Gt;
  }
  else {
    return (0 > i) ? $std_core_types.Lt : $std_core_types.Eq;
  }
}
 
 
export function is_odd(i) /* (i : int32) -> bool */  {
  return (((i & 1)) === 1);
}
 
 
export function is_even(i) /* (i : int32) -> bool */  {
  return (((i & 1)) === 0);
}
 
 
export function inc(i) /* (i : int32) -> int32 */  {
  return ((i + 1)|0);
}
 
 
export function dec(i) /* (i : int32) -> int32 */  {
  return ((i - 1)|0);
}
 
export function cmp(x, y) /* (x : int32, y : int32) -> order */  {
  if ((x < y)) {
    return $std_core_types.Lt;
  }
  else {
    return ((x > y)) ? $std_core_types.Gt : $std_core_types.Eq;
  }
}
 
 
export function _lp__hat__rp_(x, y) /* (x : int32, y : int32) -> int32 */  {
  return (x ^ y);
}
 
 
export function negate(i) /* (i : int32) -> int32 */  {
  return ((0 - i)|0);
}
 
 
export function abs(i) /* (i : int32) -> exn int32 */  {
   
  var _x_x1_10183 = 0 > i;
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var keep = $std_core_hnd._evv_set(w);
  if (_x_x1_10183) {
    if ((i > min_int32)) {
      return ((0 - i)|0);
    }
    else {
       
      var ev_10190 = $std_core_hnd._evv_at(0);
      var _x8 = $std_core_exn.throw_exn_fs__select(ev_10190.hnd);
      var _x10 = undefined;
      var _x9 = (_x10 !== undefined) ? _x10 : $std_core_exn.ExnError;
      return _x8(ev_10190.marker, ev_10190, $std_core_exn.Exception("std/num/int32/abs: cannot make min-int32 into a positive int32 without overflow", _x9));
    }
  }
  else {
    return i;
  }
}
 
 
export function abs0(i) /* (i : int32) -> int32 */  {
   
  var b_10011 = 0 > i;
  if (b_10011) {
    if ((i > min_int32)) {
      return ((0 - i)|0);
    }
    else {
      return 0;
    }
  }
  else {
    return i;
  }
}
 
 
export function shl(i, shift) /* (i : int32, shift : int) -> int32 */  {
  return i << ($std_core_types._int_clamp32(shift));
}
 
 
export function shr(i, shift) /* (i : int32, shift : int) -> int32 */  {
  return i >>> ($std_core_types._int_clamp32(shift));
}
 
 
export function sar(i, shift) /* (i : int32, shift : int) -> int32 */  {
  return i >> ($std_core_types._int_clamp32(shift));
}
 
 
export function hi(i) /* (i : int32) -> int32 */  {
  return i >> 16;
}
 
 
export function lo(i) /* (i : int32) -> int32 */  {
  return (i & 65535);
}
 
 
export function rotl(i, shift) /* (i : int32, shift : int) -> int32 */  {
  return $std_core_types._int32_rotl(i,($std_core_types._int_clamp32(shift)));
}
 
 
export function rotr(i, shift) /* (i : int32, shift : int) -> int32 */  {
  return $std_core_types._int32_rotr(i,($std_core_types._int_clamp32(shift)));
}
 
 
export function clmul_wide(x, y) /* (x : int32, y : int32) -> (int32, int32) */  {
  return _int32_clmul_wide(x,y);
}
 
 
export function min(i, j) /* (i : int32, j : int32) -> int32 */  {
  return ((i <= j)) ? i : j;
}
 
 
export function max(i, j) /* (i : int32, j : int32) -> int32 */  {
  return ((i >= j)) ? i : j;
}
 
 
export function umul(i, j) /* (i : int32, j : int32) -> (int32, int32) */  {
  return $std_core_types._int32_umul(i,j);
}
 
 
export function imul(i, j) /* (i : int32, j : int32) -> (int32, int32) */  {
  return $std_core_types._int32_imul(i,j);
}
 
 
export function cdiv(i, j) /* (i : int32, j : int32) -> exn int32 */  {
  if (0 === j) {
     
    var ev_10193 = $std_core_hnd._evv_at(0);
    var _x11 = $std_core_exn.throw_exn_fs__select(ev_10193.hnd);
    var _x13 = undefined;
    var _x12 = (_x13 !== undefined) ? _x13 : $std_core_exn.ExnError;
    return _x11(ev_10193.marker, ev_10193, $std_core_exn.Exception("std/num/int32/cdiv: modulus by zero", _x12));
  }
  else {
    var _x14 = (j === (-1));
    if (_x14) {
      if ((i === min_int32)) {
         
        var ev_0_10196 = $std_core_hnd._evv_at(0);
        var _x15 = $std_core_exn.throw_exn_fs__select(ev_0_10196.hnd);
        var _x17 = undefined;
        var _x16 = (_x17 !== undefined) ? _x17 : $std_core_exn.ExnError;
        return _x15(ev_0_10196.marker, ev_0_10196, $std_core_exn.Exception("std/num/int32/cdiv: modulus overflow in cdiv(min-int32, -1.int32)", _x16));
      }
      else {
        return ((i/j)|0);
      }
    }
    else {
      return ((i/j)|0);
    }
  }
}
 
 
export function cmod(i, j) /* (i : int32, j : int32) -> exn int32 */  {
  if (0 === j) {
     
    var ev_10199 = $std_core_hnd._evv_at(0);
    var _x18 = $std_core_exn.throw_exn_fs__select(ev_10199.hnd);
    var _x20 = undefined;
    var _x19 = (_x20 !== undefined) ? _x20 : $std_core_exn.ExnError;
    return _x18(ev_10199.marker, ev_10199, $std_core_exn.Exception("std/num/int32/cmod: modulus by zero", _x19));
  }
  else {
    var _x21 = (j === (-1));
    if (_x21) {
      if ((i === min_int32)) {
         
        var ev_0_10202 = $std_core_hnd._evv_at(0);
        var _x22 = $std_core_exn.throw_exn_fs__select(ev_0_10202.hnd);
        var _x24 = undefined;
        var _x23 = (_x24 !== undefined) ? _x24 : $std_core_exn.ExnError;
        return _x22(ev_0_10202.marker, ev_0_10202, $std_core_exn.Exception("std/num/int32/cmod: modulus overflow in cmod(min-int32, -1.int32)", _x23));
      }
      else {
        return ((i % j)|0);
      }
    }
    else {
      return ((i % j)|0);
    }
  }
}
 
 
export function _lp__tilde__rp_(i) /* (i : int32) -> int32 */  {
  return ((0 - i)|0);
}
 
 
// /*
// Euclidean-0 division.
// Euclidean division is defined as: For any `D`  and `d`  where `d!=0` , we have:
// 
// 1. `D == d*(D/d) + (D%d)`
// 2. `D%d`  is always positive where `0 <= D%d < abs(d)`
// 
// Moreover, Euclidean-0 is a total function, for the case where `d==0`  we have
// that `D%0 == D`  and `D/0 == 0` . So property (1) still holds, but not property (2).
// Useful laws that hold for Euclidean-0 division:
// 
// * `D/(-d) == -(D/d)`
// * `D%(-d) == D%d`
// * `D/(2^n) == sar(D,n)         `  (with `0 <= n <= 31`)
// * `D%(2^n) == D & ((2^n) - 1)  `  (with `0 <= n <= 31`)
// 
// Note that an interesting edge case is `min-int32 / -1` which equals `min-int32` since in modulo 32-bit
// arithmetic `min-int32 == -1 * min-int32 == -1 * (min-int32 / -1) + (min-int32 % -1)` satisfying property (1).
// Of course `(min-int32 + 1) / -1` is again positive (namely `max-int32`).
// 
// See also _Division and modulus for computer scientists, Daan Leijen, 2001_
// [pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf) .
// */
export function _lp__fs__rp_(x, y) /* (x : int32, y : int32) -> int32 */  {
  var _x25 = (y === 0);
  if (_x25) {
    return 0;
  }
  else {
    var _x26 = (y === (-1));
    if (_x26) {
      if ((x === min_int32)) {
        return x;
      }
      else {
         
        var q = ((x/y)|0);
         
        var r = ((x % y)|0);
        var _x27 = (r >= 0);
        if (_x27) {
          return q;
        }
        else {
          var _x28 = (y > 0);
          if (_x28) {
            return ((q - 1)|0);
          }
          else {
            return ((q + 1)|0);
          }
        }
      }
    }
    else {
       
      var q_0 = ((x/y)|0);
       
      var r_0 = ((x % y)|0);
      var _x29 = (r_0 >= 0);
      if (_x29) {
        return q_0;
      }
      else {
        var _x30 = (y > 0);
        if (_x30) {
          return ((q_0 - 1)|0);
        }
        else {
          return ((q_0 + 1)|0);
        }
      }
    }
  }
}
 
 
export function _lp__perc__rp_(x, y) /* (x : int32, y : int32) -> int32 */  {
  var _x31 = (y === 0);
  if (_x31) {
    return x;
  }
  else {
    var _x32 = (y === (-1));
    if (_x32) {
      if ((x === min_int32)) {
        return 0;
      }
      else {
         
        var r = ((x % y)|0);
        var _x33 = (r >= 0);
        if (_x33) {
          return r;
        }
        else {
          var _x34 = (y > 0);
          return (_x34) ? ((r + y)|0) : ((r - y)|0);
        }
      }
    }
    else {
       
      var r_0 = ((x % y)|0);
      var _x35 = (r_0 >= 0);
      if (_x35) {
        return r_0;
      }
      else {
        var _x36 = (y > 0);
        return (_x36) ? ((r_0 + y)|0) : ((r_0 - y)|0);
      }
    }
  }
}
 
export function divmod(x, y) /* (x : int32, y : int32) -> (int32, int32) */  {
  if (0 === y) {
    return $std_core_types.Tuple2(zero, x);
  }
  else {
    var _x37 = (y === (-1));
    if (_x37) {
      if ((x === min_int32)) {
        return $std_core_types.Tuple2(x, 0);
      }
      else {
         
        var q = ((x/y)|0);
         
        var r = ((x % y)|0);
         
        var b_10021 = 0 > r;
        if (b_10021) {
          if (0 < y) {
            return $std_core_types.Tuple2(((q - 1)|0), ((r + y)|0));
          }
          else {
            return $std_core_types.Tuple2(((q + 1)|0), ((r - y)|0));
          }
        }
        else {
          return $std_core_types.Tuple2(q, r);
        }
      }
    }
    else {
       
      var q_0 = ((x/y)|0);
       
      var r_0 = ((x % y)|0);
       
      var b_0_10024 = 0 > r_0;
      if (b_0_10024) {
        if (0 < y) {
          return $std_core_types.Tuple2(((q_0 - 1)|0), ((r_0 + y)|0));
        }
        else {
          return $std_core_types.Tuple2(((q_0 + 1)|0), ((r_0 - y)|0));
        }
      }
      else {
        return $std_core_types.Tuple2(q_0, r_0);
      }
    }
  }
}
 
 
export function range_fs__mlift_fold_int32_10184(end, f, start, x) /* forall<a,e> (end : int32, f : (int32, a) -> e a, start : int32, x : a) -> e a */  {
  return range_fs_fold_int32(((start + 1)|0), end, x, f);
}
 
 
export function range_fs_fold_int32(start_0, end_0, init, f_0) /* forall<a,e> (start : int32, end : int32, init : a, f : (int32, a) -> e a) -> e a */  { tailcall: while(1)
{
  if ((start_0 > end_0)) {
    return init;
  }
  else {
     
    var x_0_10205 = f_0(start_0, init);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(x_1 /* 3726 */ ) {
        return range_fs__mlift_fold_int32_10184(end_0, f_0, start_0, x_1);
      });
    }
    else {
      {
        // tail call
        var _x38 = ((start_0 + 1)|0);
        start_0 = _x38;
        init = x_0_10205;
        continue tailcall;
      }
    }
  }
}}
 
 
export function fold_int32(n, init, f) /* forall<a,e> (n : int32, init : a, f : (int32, a) -> e a) -> e a */  {
  return range_fs_fold_int32(zero, ((n - 1)|0), init, f);
}
 
 
export function range_fs__mlift_fold_while_int32_10185(end, f, init, start, _y_x10157) /* forall<a,e> (end : int32, f : (int32, a) -> e maybe<a>, init : a, start : int32, maybe<a>) -> e a */  {
  if (_y_x10157 !== null) {
    return range_fs_fold_while_int32(((start + 1)|0), end, _y_x10157.value, f);
  }
  else {
    return init;
  }
}
 
 
export function range_fs_fold_while_int32(start_0, end_0, init_0, f_0) /* forall<a,e> (start : int32, end : int32, init : a, f : (int32, a) -> e maybe<a>) -> e a */  { tailcall: while(1)
{
  if ((start_0 > end_0)) {
    return init_0;
  }
  else {
     
    var x_0_10208 = f_0(start_0, init_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10157_0 /* maybe<3863> */ ) {
        return range_fs__mlift_fold_while_int32_10185(end_0, f_0, init_0, start_0, _y_x10157_0);
      });
    }
    else {
      if (x_0_10208 !== null) {
        {
          // tail call
          var _x39 = ((start_0 + 1)|0);
          start_0 = _x39;
          init_0 = x_0_10208.value;
          continue tailcall;
        }
      }
      else {
        return init_0;
      }
    }
  }
}}
 
 
export function fold_while_int32(n, init, f) /* forall<a,e> (n : int32, init : a, f : (int32, a) -> e maybe<a>) -> e a */  {
  return range_fs_fold_while_int32(zero, ((n - 1)|0), init, f);
}
 
 
export function range_fs__mlift_lift_for32_4227_10186(action, end, i, wild) /* forall<e> (action : (int32) -> e (), end : int32, i : int32, wild : ()) -> e () */  {
   
  var i_0_10027 = ((i + 1)|0);
  return range_fs__lift_for32_4227(action, end, i_0_10027);
}
 
 
export function range_fs__lift_for32_4227(action_0, end_0, i_0) /* forall<e> (action : (int32) -> e (), end : int32, i : int32) -> e () */  { tailcall: while(1)
{
  if ((i_0 <= end_0)) {
     
    var x_10211 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return range_fs__mlift_lift_for32_4227_10186(action_0, end_0, i_0, wild_0);
      });
    }
    else {
       
      var i_0_10027_0 = ((i_0 + 1)|0);
      {
        // tail call
        i_0 = i_0_10027_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function range_fs_for32(start, end, action) /* forall<e> (start : int32, end : int32, action : (int32) -> e ()) -> e () */  {
  return range_fs__lift_for32_4227(action, end, start);
}
 
export function for32(n, action) /* forall<e> (n : int32, action : (int32) -> e ()) -> e () */  {
   
  var end_10029 = ((n - 1)|0);
  return range_fs__lift_for32_4227(action, end_10029, zero);
}
 
 
export function range_fs__mlift_lift_for_while32_4228_10187(action, end, i, _y_x10167) /* forall<a,e> (action : (int32) -> e maybe<a>, end : int32, i : int32, maybe<a>) -> e maybe<a> */  {
  if (_y_x10167 === null) {
     
    var i_0_10031 = ((i + 1)|0);
    return range_fs__lift_for_while32_4228(action, end, i_0_10031);
  }
  else {
    return $std_core_types.Just(_y_x10167.value);
  }
}
 
 
export function range_fs__lift_for_while32_4228(action_0, end_0, i_0) /* forall<a,e> (action : (int32) -> e maybe<a>, end : int32, i : int32) -> e maybe<a> */  { tailcall: while(1)
{
  if ((i_0 <= end_0)) {
     
    var x_0_10214 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10167_0 /* maybe<4071> */ ) {
        return range_fs__mlift_lift_for_while32_4228_10187(action_0, end_0, i_0, _y_x10167_0);
      });
    }
    else {
      if (x_0_10214 === null) {
         
        var i_0_10031_0 = ((i_0 + 1)|0);
        {
          // tail call
          i_0 = i_0_10031_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Just(x_0_10214.value);
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function range_fs_for_while32(start, end, action) /* forall<a,e> (start : int32, end : int32, action : (int32) -> e maybe<a>) -> e maybe<a> */  {
  return range_fs__lift_for_while32_4228(action, end, start);
}
 
export function for_while32(n, action) /* forall<a,e> (n : int32, action : (int32) -> e maybe<a>) -> e maybe<a> */  {
   
  var end_10033 = ((n - 1)|0);
  return range_fs__lift_for_while32_4228(action, end_10033, zero);
}
 
 
export function _trmc_list32(lo_0, hi_0, _acc) /* (lo : int32, hi : int32, ctx<list<int32>>) -> list<int32> */  { tailcall: while(1)
{
  if ((lo_0 <= hi_0)) {
     
    var _trmc_x10138 = undefined;
     
    var _trmc_x10139 = $std_core_types.Cons(lo_0, _trmc_x10138);
    {
      // tail call
      var _x40 = ((lo_0 + 1)|0);
      var _x41 = $std_core_types._cctx_extend(_acc,_trmc_x10139,({obj: _trmc_x10139, field_name: "tail"}));
      lo_0 = _x40;
      _acc = _x41;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function list32(lo_0_0, hi_0_0) /* (lo : int32, hi : int32) -> list<int32> */  {
  return _trmc_list32(lo_0_0, hi_0_0, $std_core_types._cctx_empty());
}
 
export function _unroll_sumacc32_10000(xs, acc) /* (xs : list<int32>, acc : int32) -> int32 */  { tailcall: while(1)
{
  if (xs !== null) {
    {
      // tail call
      var _x42 = ((acc + (xs.head))|0);
      xs = xs.tail;
      acc = _x42;
      continue tailcall;
    }
  }
  else {
    return acc;
  }
}}
 
 
export function sumacc32(xs, acc) /* (xs : list<int32>, acc : int32) -> int32 */  {
  if (xs === null) {
    return acc;
  }
  else {
    return _unroll_sumacc32_10000(xs, acc);
  }
}
 
export function sum32(xs) /* (xs : list<int32>) -> int32 */  {
   
  var acc_10037 = 0;
  if (xs === null) {
    return acc_10037;
  }
  else {
    return _unroll_sumacc32_10000(xs, acc_10037);
  }
}
