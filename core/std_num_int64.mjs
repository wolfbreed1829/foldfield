// Koka generated module: std/num/int64, koka version: 3.2.9
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
import * as $std_num_int32 from './std_num_int32.mjs';
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
// -------------------------------------------
export function _int64_clmul(x,y) {
  let a = $std_core_types._int64_as_uint64(x);
  let b = $std_core_types._int64_as_uint64(y);
  let c = 0n;
  for (let i = 0n; i < 64n; i++) {
    if ((b >> i) & 1n) {
      c ^= BigInt.asUintN(64,(a << i));
    }
  }
  return $std_core_types._uint64_as_int64(BigInt.asIntN(64,c));
}
export function _int64_clmul_wide(x,y) {
  let a = $std_core_types._int64_as_uint64(x);
  let b = $std_core_types._int64_as_uint64(y);
  let clo = 0n;
  let chi = 0n;
  for (let i = 0n; i < 64n; i++) {
    if ((b >> i) & 1n) {
      clo ^= BigInt.asUintN(64,a << i);
      chi ^= (a >> (64n - i));
    }
  }  
  return $std_core_types.Tuple2($std_core_types._uint64_as_int64(chi),$std_core_types._uint64_as_int64(clo));
}
export function _int64_clmulr(x,y) {
  return $std_core_types._int64_breverse(_int64_clmul($std_core_types._int64_breverse(x),$std_core_types._int64_breverse(y)));
}
export function _int64_scatter(x,smask) {
  let a = $std_core_types._int64_as_uint64(x)
  let mask = $std_core_types._int64_as_uint64(smask)
  let y = 0n
  for (let i = 0n; i < 64n; i++) {
    if ((mask >> i) & 1n) {
      y |= ((a&1n) << i)
      a >>= 1n
    }
  }
  return BigInt.asIntN(64,y)
}
export function _int64_gather(x,smask) {
  let a = $std_core_types._int64_as_uint64(x)
  let mask = $std_core_types._int64_as_uint64(smask)  
  let y = 0n
  let shift = 0n
  for (let i = 0n; i < 64n; i++) {
    if ((mask>>i) & 1n) {
      if ((a>>i) & 1n) {
        y |= (1n << shift)
      }
      shift++   
    }
  }
  return BigInt.asIntN(64,y)
}
function _int64_scatter_even(x) {
  x = (x | (x << 16n)) & 0x0000FFFF0000FFFFn;
  x = (x | (x << 8n )) & 0x00FF00FF00FF00FFn; // even bytes
  x = (x | (x << 4n )) & 0x0F0F0F0F0F0F0F0Fn; // even nibbles
  x = (x | (x << 2n )) & 0x3333333333333333n; // even pairs
  x = (x | (x << 1n )) & 0x5555555555555555n; // even bits
  return x;
}
export function _int64_zip(x) {
  let a = $std_core_types._int64_as_uint64(x) 
  let b = (_int64_scatter_even(a >> 32n) << 1n) | _int64_scatter_even(a & 0xFFFFFFFFn);
  return $std_core_types._uint64_as_int64(b)
}
function _int64_gather_even(x) {
  x = x & 0x5555555555555555n;
  x = (x | (x >> 1n )) & 0x3333333333333333n;
  x = (x | (x >> 2n )) & 0x0F0F0F0F0F0F0F0Fn;
  x = (x | (x >> 4n )) & 0x00FF00FF00FF00FFn;
  x = (x | (x >> 8n )) & 0x0000FFFF0000FFFFn;
  x = (x | (x >> 16n)) & 0x00000000FFFFFFFFn;
  return x;
}
export function _int64_unzip(x) {
  let a = $std_core_types._int64_as_uint64(x)   
  let b = (_int64_gather_even(a >> 1n) << 32n) | _int64_gather_even(a);
  return $std_core_types._uint64_as_int64(b);
}
export function _int64_orc(x) {
  let a = $std_core_types._int64_as_uint64(x)   
  let lo = $std_core_types._int64_lo(a)
  let hi = $std_core_types._int64_hi(a)
  let olo = $std_num_int32._int32_orc(lo)
  let ohi = $std_num_int32._int32_orc(hi)
  return $std_core_types._int64_hi_lo(ohi,olo)
}
export function _int64_orcx(x) {
  let a = $std_core_types._int64_as_uint64(x)   
  // set high bit in each byte to `or` of the bits in the byte
  a |= ((a & 0x0F0F0F0F0F0F0F0Fn) << 4n);
  a |= ((a & 0x3333333333333333n) << 2n);
  a |= ((a & 0x5555555555555555n) << 1n);
  // distribute the high bit back
  a &= 0x8080808080808080n
  a |= (a >> 1n);
  a |= (a >> 2n);
  a |= (a >> 4n);
  return $std_core_types._uint64_as_int64(a);
}
 
// type declarations
 
// declarations
 
 
export function int64(i) /* (i : int) -> int64 */  {
  return $std_core_types._int_clamp64(i);
}
 
 
export var one;
var one = 1n;
 
 
export var zero;
var zero = 0n;
 
 
export function bool_fs_int64(b) /* (b : bool) -> int64 */  {
  return (b) ? one : zero;
}
 
 
export function hilo_fs_int64(hi_0, lo_0) /* (hi : int64, lo : int64) -> int64 */  {
  return ($std_core_types._int64_shl(hi_0,32n)) | (lo_0 & 4294967295n);
}
 
 
export var max_int64;
var max_int64 = 9223372036854775807n;
 
 
export var min_int64;
var min_int64 = -9223372036854775808n;
 
 
export var bits_int64;
var bits_int64 = 64n;
 
 
export function i64(i) /* (i : int) -> int64 */  {
  return int64(i);
}
 
 
export function bool(i) /* (i : int64) -> bool */  {
  return (i !== zero);
}
 
 
export function hi(i) /* (i : int64) -> int64 */  {
  return $std_core_types._int64_sar(i,32n);
}
 
 
export function lo(i) /* (i : int64) -> int64 */  {
  return i & 4294967295n;
}
 
 
export function int64_fs_uint(i) /* (i : int64) -> int */  {
  if (0n > i) {
     
    var y_10002 = $std_core_types._int_from_int64(i);
    return $std_core_types._int_add(($std_core_types._int_const(18446744073709551616n)),y_10002);
  }
  else {
    return $std_core_types._int_from_int64(i);
  }
}
 
 
export function hilo_fs_int(_pat_x455__19) /* ((int64, int64)) -> int */  {
   
  var x_10003 = $std_core_types._int_mul(($std_core_types._int_from_int64((_pat_x455__19.fst))),($std_core_types._int_const(18446744073709551616n)));
   
  var y_10004 = int64_fs_uint(_pat_x455__19.snd);
  return $std_core_types._int_add(x_10003,y_10004);
}
 
 
export function hilo_fs_uint(_pat_x460__20) /* ((int64, int64)) -> int */  {
   
  var x_10005 = $std_core_types._int_mul((int64_fs_uint(_pat_x460__20.fst)),($std_core_types._int_const(18446744073709551616n)));
   
  var y_10006 = int64_fs_uint(_pat_x460__20.snd);
  return $std_core_types._int_add(x_10005,y_10006);
}
 
 
export function show(i) /* (i : int64) -> string */  {
  return $std_core_int.show($std_core_types._int_from_int64(i));
}
 
 
export function int_fs_uint64(i) /* (i : int) -> int64 */  {
  var _x1 = $std_core_types._int_gt(i,($std_core_types._int_from_int64(max_int64)));
  var _x0 = (_x1) ? $std_core_types._int_sub(i,($std_core_types._int_const(18446744073709551616n))) : i;
  return int64(_x0);
}
 
 
export function show_hex(i, width, use_capitals, pre) /* (i : int64, width : ? int, use-capitals : ? bool, pre : ? string) -> string */  {
  var _x2 = (width !== undefined) ? width : 1;
  var _x3 = (use_capitals !== undefined) ? use_capitals : true;
  var _x4 = (pre !== undefined) ? pre : "0x";
  return $std_core_show.show_hex($std_core_types._int_from_int64(i), _x2, _x3, _x4);
}
 
 
export function show_hex64(i, width, use_capitals, pre) /* (i : int64, width : ? int, use-capitals : ? bool, pre : ? string) -> string */  {
  var _x5 = (width !== undefined) ? width : 16;
  var _x6 = (use_capitals !== undefined) ? use_capitals : true;
  var _x7 = (pre !== undefined) ? pre : "0x";
  return $std_core_show.show_hex(int64_fs_uint(i), _x5, _x6, _x7);
}
 
 
export function sign(i) /* (i : int64) -> order */  {
  if (0n < i) {
    return $std_core_types.Gt;
  }
  else {
    return (0n > i) ? $std_core_types.Lt : $std_core_types.Eq;
  }
}
 
 
export function is_odd(i) /* (i : int64) -> bool */  {
  return ((i & one) === one);
}
 
 
export function is_even(i) /* (i : int64) -> bool */  {
  return ((i & one) === zero);
}
 
 
export function inc(i) /* (i : int64) -> int64 */  {
  return BigInt.asIntN(64,i + 1n);
}
 
 
export function dec(i) /* (i : int64) -> int64 */  {
  return BigInt.asIntN(64,i - 1n);
}
 
export function cmp(x, y) /* (x : int64, y : int64) -> order */  {
  if ((x < y)) {
    return $std_core_types.Lt;
  }
  else {
    return ((x > y)) ? $std_core_types.Gt : $std_core_types.Eq;
  }
}
 
 
export function _lp__hat__rp_(x, y) /* (x : int64, y : int64) -> int64 */  {
  return x ^ y;
}
 
 
export function negate(i) /* (i : int64) -> int64 */  {
  return BigInt.asIntN(64,0n - i);
}
 
 
export function abs(i) /* (i : int64) -> exn int64 */  {
   
  var _x_x1_10209 = 0n > i;
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var keep = $std_core_hnd._evv_set(w);
  if (_x_x1_10209) {
    if ((i > min_int64)) {
       
      var w_0 = $std_core_hnd._evv_swap_create0();
       
      var x_0 = BigInt.asIntN(64,0n - i);
       
      var keep_0 = $std_core_hnd._evv_set(w_0);
      return x_0;
    }
    else {
       
      var ev_10219 = $std_core_hnd._evv_at(0);
      var _x8 = $std_core_exn.throw_exn_fs__select(ev_10219.hnd);
      var _x10 = undefined;
      var _x9 = (_x10 !== undefined) ? _x10 : $std_core_exn.ExnError;
      return _x8(ev_10219.marker, ev_10219, $std_core_exn.Exception("std/num/int64/abs: cannot make min-int64 into a positive int64 without overflow", _x9));
    }
  }
  else {
    return i;
  }
}
 
 
export function abs0(i) /* (i : int64) -> int64 */  {
   
  var b_10011 = 0n > i;
  if (b_10011) {
    if ((i > min_int64)) {
      return BigInt.asIntN(64,0n - i);
    }
    else {
      return 0n;
    }
  }
  else {
    return i;
  }
}
 
 
export function shl(i, shift) /* (i : int64, shift : int) -> int64 */  {
  return $std_core_types._int64_shl(i,(int64(shift)));
}
 
 
export function shr(i, shift) /* (i : int64, shift : int) -> int64 */  {
  return $std_core_types._int64_shr(i,(int64(shift)));
}
 
 
export function sar(i, shift) /* (i : int64, shift : int) -> int64 */  {
  return $std_core_types._int64_sar(i,(int64(shift)));
}
 
 
export function rotl(i, shift) /* (i : int64, shift : int) -> int64 */  {
  return $std_core_types._int64_rotl(i,(int64(shift)));
}
 
 
export function rotr(i, shift) /* (i : int64, shift : int) -> int64 */  {
  return $std_core_types._int64_rotr(i,(int64(shift)));
}
 
 
export function popcount(i) /* (i : int64) -> int */  {
  return $std_core_types._int_from_int64(($std_core_types._int64_popcount(i)));
}
 
 
export function clmul_wide(x, y) /* (x : int64, y : int64) -> (int64, int64) */  {
  return _int64_clmul_wide(x,y);
}
 
 
export function min(i, j) /* (i : int64, j : int64) -> int64 */  {
  return ((i <= j)) ? i : j;
}
 
 
export function max(i, j) /* (i : int64, j : int64) -> int64 */  {
  return ((i >= j)) ? i : j;
}
 
 
export function umul(i, j) /* (i : int64, j : int64) -> (int64, int64) */  {
  return $std_core_types._int64_umul(i,j);
}
 
 
export function imul(i, j) /* (i : int64, j : int64) -> (int64, int64) */  {
  return $std_core_types._int64_imul(i,j);
}
 
 
export function cdiv(i, j) /* (i : int64, j : int64) -> exn int64 */  {
  if (0n === j) {
     
    var ev_10222 = $std_core_hnd._evv_at(0);
    var _x11 = $std_core_exn.throw_exn_fs__select(ev_10222.hnd);
    var _x13 = undefined;
    var _x12 = (_x13 !== undefined) ? _x13 : $std_core_exn.ExnError;
    return _x11(ev_10222.marker, ev_10222, $std_core_exn.Exception("std/num/int64/cdiv: division by zero", _x12));
  }
  else {
     
    var w = $std_core_hnd._evv_swap_create0();
     
    var x_0 = -1n;
     
    var keep = $std_core_hnd._evv_set(w);
    if ((j === x_0)) {
      if ((i === min_int64)) {
         
        var ev_0_10227 = $std_core_hnd._evv_at(0);
        var _x14 = $std_core_exn.throw_exn_fs__select(ev_0_10227.hnd);
        var _x16 = undefined;
        var _x15 = (_x16 !== undefined) ? _x16 : $std_core_exn.ExnError;
        return _x14(ev_0_10227.marker, ev_0_10227, $std_core_exn.Exception("std/num/int64/cdiv: division overflow in cdiv(min-int64, -1.int64)", _x15));
      }
      else {
        return i / j;
      }
    }
    else {
      return i / j;
    }
  }
}
 
 
export function cmod(i, j) /* (i : int64, j : int64) -> exn int64 */  {
  if (0n === j) {
     
    var ev_10230 = $std_core_hnd._evv_at(0);
    var _x17 = $std_core_exn.throw_exn_fs__select(ev_10230.hnd);
    var _x19 = undefined;
    var _x18 = (_x19 !== undefined) ? _x19 : $std_core_exn.ExnError;
    return _x17(ev_10230.marker, ev_10230, $std_core_exn.Exception("std/num/int64/cmod: modulus by zero", _x18));
  }
  else {
     
    var w = $std_core_hnd._evv_swap_create0();
     
    var x_0 = -1n;
     
    var keep = $std_core_hnd._evv_set(w);
    if ((j === x_0)) {
      if ((i === min_int64)) {
         
        var ev_0_10235 = $std_core_hnd._evv_at(0);
        var _x20 = $std_core_exn.throw_exn_fs__select(ev_0_10235.hnd);
        var _x22 = undefined;
        var _x21 = (_x22 !== undefined) ? _x22 : $std_core_exn.ExnError;
        return _x20(ev_0_10235.marker, ev_0_10235, $std_core_exn.Exception("std/num/int64/cmod: modulus overflow in cmod(min-int64, -1.int64)", _x21));
      }
      else {
        return i % j;
      }
    }
    else {
      return i % j;
    }
  }
}
 
 
export function _lp__tilde__rp_(i) /* (i : int64) -> int64 */  {
  return BigInt.asIntN(64,0n - i);
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
// * `D/(2^n) == sar(D,n)         `  (with `0 <= n <= 63`)
// * `D%(2^n) == D & ((2^n) - 1)  `  (with `0 <= n <= 63`)
// 
// Note that an interesting edge case is `min-int64 / -1` which equals `min-int64` since in modulo 64-bit
// arithmetic `min-int64 == -1 * min-int64 == -1 * (min-int64 / -1) + (min-int64 % -1)` satisfying property (1).
// Of course `(min-int64 + 1) / -1` is again positive (namely `max-int64`).
// 
// See also _Division and modulus for computer scientists, Daan Leijen, 2001_
// [pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf) .
// */
export function _lp__fs__rp_(x, y) /* (x : int64, y : int64) -> int64 */  {
  var _x23 = (y === 0n);
  if (_x23) {
    return 0n;
  }
  else {
    var _x24 = (y === (-1n));
    if (_x24) {
      if ((x === min_int64)) {
        return x;
      }
      else {
         
        var q = x / y;
         
        var r = x % y;
        var _x25 = (r >= 0n);
        if (_x25) {
          return q;
        }
        else {
          var _x26 = (y > 0n);
          if (_x26) {
            return BigInt.asIntN(64,q - 1n);
          }
          else {
            return BigInt.asIntN(64,q + 1n);
          }
        }
      }
    }
    else {
       
      var q_0 = x / y;
       
      var r_0 = x % y;
      var _x27 = (r_0 >= 0n);
      if (_x27) {
        return q_0;
      }
      else {
        var _x28 = (y > 0n);
        if (_x28) {
          return BigInt.asIntN(64,q_0 - 1n);
        }
        else {
          return BigInt.asIntN(64,q_0 + 1n);
        }
      }
    }
  }
}
 
 
export function _lp__perc__rp_(x, y) /* (x : int64, y : int64) -> int64 */  {
  var _x29 = (y === 0n);
  if (_x29) {
    return x;
  }
  else {
    var _x30 = (y === (-1n));
    if (_x30) {
      if ((x === min_int64)) {
        return 0n;
      }
      else {
         
        var r = x % y;
        var _x31 = (r >= 0n);
        if (_x31) {
          return r;
        }
        else {
          var _x32 = (y > 0n);
          return (_x32) ? BigInt.asIntN(64,r + y) : BigInt.asIntN(64,r - y);
        }
      }
    }
    else {
       
      var r_0 = x % y;
      var _x33 = (r_0 >= 0n);
      if (_x33) {
        return r_0;
      }
      else {
        var _x34 = (y > 0n);
        return (_x34) ? BigInt.asIntN(64,r_0 + y) : BigInt.asIntN(64,r_0 - y);
      }
    }
  }
}
 
export function divmod(x, y) /* (x : int64, y : int64) -> (int64, int64) */  {
  if (0n === y) {
    return $std_core_types.Tuple2(zero, x);
  }
  else {
    var _x35 = (y === (-1n));
    if (_x35) {
      if ((x === min_int64)) {
        return $std_core_types.Tuple2(x, 0n);
      }
      else {
         
        var q = x / y;
         
        var r = x % y;
        var _x36 = (r >= 0n);
        if (_x36) {
          return $std_core_types.Tuple2(q, r);
        }
        else {
          var _x37 = (y > 0n);
          if (_x37) {
            return $std_core_types.Tuple2(BigInt.asIntN(64,q - 1n), BigInt.asIntN(64,r + y));
          }
          else {
            return $std_core_types.Tuple2(BigInt.asIntN(64,q + 1n), BigInt.asIntN(64,r - y));
          }
        }
      }
    }
    else {
       
      var q_0 = x / y;
       
      var r_0 = x % y;
      var _x38 = (r_0 >= 0n);
      if (_x38) {
        return $std_core_types.Tuple2(q_0, r_0);
      }
      else {
        var _x39 = (y > 0n);
        if (_x39) {
          return $std_core_types.Tuple2(BigInt.asIntN(64,q_0 - 1n), BigInt.asIntN(64,r_0 + y));
        }
        else {
          return $std_core_types.Tuple2(BigInt.asIntN(64,q_0 + 1n), BigInt.asIntN(64,r_0 - y));
        }
      }
    }
  }
}
 
 
export function range_fs__mlift_fold_int64_10213(end, f, start, x) /* forall<a,e> (end : int64, f : (int64, a) -> e a, start : int64, x : a) -> e a */  {
  return range_fs_fold_int64(BigInt.asIntN(64,start + 1n), end, x, f);
}
 
export function range_fs_fold_int64(start_0, end_0, init, f_0) /* forall<a,e> (start : int64, end : int64, init : a, f : (int64, a) -> e a) -> e a */  { tailcall: while(1)
{
  if ((start_0 > end_0)) {
    return init;
  }
  else {
     
    var x_0_10238 = f_0(start_0, init);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(x_1 /* 3776 */ ) {
        return range_fs__mlift_fold_int64_10213(end_0, f_0, start_0, x_1);
      });
    }
    else {
      {
        // tail call
        var _x40 = BigInt.asIntN(64,start_0 + 1n);
        start_0 = _x40;
        init = x_0_10238;
        continue tailcall;
      }
    }
  }
}}
 
export function fold_int64(n, init, f) /* forall<a,e> (n : int64, init : a, f : (int64, a) -> e a) -> e a */  {
  return range_fs_fold_int64(zero, BigInt.asIntN(64,n - 1n), init, f);
}
 
 
export function range_fs__mlift_lift_for_while64_4387_10214(action, end, i, _y_x10195) /* forall<a,e> (action : (int64) -> e maybe<a>, end : int64, i : int64, maybe<a>) -> e maybe<a> */  {
  if (_y_x10195 === null) {
     
    var i_0_10029 = BigInt.asIntN(64,i + 1n);
    return range_fs__lift_for_while64_4387(action, end, i_0_10029);
  }
  else {
    return $std_core_types.Just(_y_x10195.value);
  }
}
 
 
export function range_fs__lift_for_while64_4387(action_0, end_0, i_0) /* forall<a,e> (action : (int64) -> e maybe<a>, end : int64, i : int64) -> e maybe<a> */  { tailcall: while(1)
{
  if ((i_0 <= end_0)) {
     
    var x_0_10241 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10195_0 /* maybe<3887> */ ) {
        return range_fs__mlift_lift_for_while64_4387_10214(action_0, end_0, i_0, _y_x10195_0);
      });
    }
    else {
      if (x_0_10241 === null) {
         
        var i_0_10029_0 = BigInt.asIntN(64,i_0 + 1n);
        {
          // tail call
          i_0 = i_0_10029_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Just(x_0_10241.value);
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function range_fs_for_while64(start, end, action) /* forall<a,e> (start : int64, end : int64, action : (int64) -> e maybe<a>) -> e maybe<a> */  {
  return range_fs__lift_for_while64_4387(action, end, start);
}
 
export function for_while64(n, action) /* forall<a,e> (n : int64, action : (int64) -> e maybe<a>) -> e maybe<a> */  {
   
  var end_10031 = BigInt.asIntN(64,n - 1n);
  return range_fs__lift_for_while64_4387(action, end_10031, zero);
}
 
export function _trmc_list64(lo_0, hi_0, _acc) /* (lo : int64, hi : int64, ctx<list<int64>>) -> list<int64> */  { tailcall: while(1)
{
  if ((lo_0 <= hi_0)) {
     
    var _trmc_x10176 = undefined;
     
    var _trmc_x10177 = $std_core_types.Cons(lo_0, _trmc_x10176);
    {
      // tail call
      var _x41 = BigInt.asIntN(64,lo_0 + 1n);
      var _x42 = $std_core_types._cctx_extend(_acc,_trmc_x10177,({obj: _trmc_x10177, field_name: "tail"}));
      lo_0 = _x41;
      _acc = _x42;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
export function list64(lo_0_0, hi_0_0) /* (lo : int64, hi : int64) -> list<int64> */  {
  return _trmc_list64(lo_0_0, hi_0_0, $std_core_types._cctx_empty());
}
 
export function _unroll_sumacc64_10000(xs, acc) /* (xs : list<int64>, acc : int64) -> int64 */  { tailcall: while(1)
{
  if (xs !== null) {
    {
      // tail call
      var _x43 = BigInt.asIntN(64,acc + (xs.head));
      xs = xs.tail;
      acc = _x43;
      continue tailcall;
    }
  }
  else {
    return acc;
  }
}}
 
 
export function sumacc64(xs, acc) /* (xs : list<int64>, acc : int64) -> int64 */  {
  if (xs === null) {
    return acc;
  }
  else {
    return _unroll_sumacc64_10000(xs, acc);
  }
}
 
export function sum64(xs) /* (xs : list<int64>) -> int64 */  {
   
  var acc_10035 = 0n;
  if (xs === null) {
    return acc_10035;
  }
  else {
    return _unroll_sumacc64_10000(xs, acc_10035);
  }
}
 
 
export function test_prefix_sum() /* () -> string */  {
   
  var x = 1295n;
   
  var i_10036 = $std_num_int64._int64_clmul(x,(-1n));
  var _x45 = undefined;
  var _x44 = (_x45 !== undefined) ? _x45 : 1;
  var _x47 = undefined;
  var _x46 = (_x47 !== undefined) ? _x47 : true;
  var _x49 = undefined;
  var _x48 = (_x49 !== undefined) ? _x49 : "0x";
  return $std_core_show.show_hex($std_core_types._int_from_int64(i_10036), _x44, _x46, _x48);
}
 
 
export function test_bit_spread1() /* () -> string */  {
   
  var x = 1535n;
   
  var i_10040 = $std_num_int64._int64_clmul(x,x);
  var _x51 = undefined;
  var _x50 = (_x51 !== undefined) ? _x51 : 1;
  var _x53 = undefined;
  var _x52 = (_x53 !== undefined) ? _x53 : true;
  var _x55 = undefined;
  var _x54 = (_x55 !== undefined) ? _x55 : "0x";
  return $std_core_show.show_hex($std_core_types._int_from_int64(i_10040), _x50, _x52, _x54);
}
 
export function test_bit_spread2() /* () -> string */  {
   
  var x = 1531n;
   
  var i_10044 = $std_num_int64._int64_clmul(x,x);
  var _x57 = undefined;
  var _x56 = (_x57 !== undefined) ? _x57 : 1;
  var _x59 = undefined;
  var _x58 = (_x59 !== undefined) ? _x59 : true;
  var _x61 = undefined;
  var _x60 = (_x61 !== undefined) ? _x61 : "0x";
  return $std_core_show.show_hex($std_core_types._int_from_int64(i_10044), _x56, _x58, _x60);
}
 
export function zip_clmul(x) /* (x : int64) -> int64 */  {
  return ($std_num_int64._int64_clmul(x,x)) | ($std_num_int64._int64_clmulr(x,x));
}
 
export function test_clmulr1() /* () -> string */  {
   
  var x = 51n;
   
  var i_10048 = $std_num_int64._int64_zip(x);
   
  var i_0_10052 = ($std_num_int64._int64_clmul(x,x)) | ($std_num_int64._int64_clmulr(x,x));
  var _x63 = undefined;
  var _x62 = (_x63 !== undefined) ? _x63 : 1;
  var _x65 = undefined;
  var _x64 = (_x65 !== undefined) ? _x65 : true;
  var _x67 = undefined;
  var _x66 = (_x67 !== undefined) ? _x67 : "0x";
  var _x69 = undefined;
  var _x68 = (_x69 !== undefined) ? _x69 : 1;
  var _x71 = undefined;
  var _x70 = (_x71 !== undefined) ? _x71 : true;
  var _x73 = undefined;
  var _x72 = (_x73 !== undefined) ? _x73 : "0x";
  return $std_core_types._lp__plus__plus__rp_($std_core_show.show_hex($std_core_types._int_from_int64(i_10048), _x62, _x64, _x66), $std_core_types._lp__plus__plus__rp_(" == ", $std_core_show.show_hex($std_core_types._int_from_int64(i_0_10052), _x68, _x70, _x72)));
}
 
export function test_clmulr2() /* () -> string */  {
   
  var x = 81986702028889840n;
   
  var i_10057 = $std_num_int64._int64_zip(x);
   
  var i_0_10061 = ($std_num_int64._int64_clmul(x,x)) | ($std_num_int64._int64_clmulr(x,x));
  var _x75 = undefined;
  var _x74 = (_x75 !== undefined) ? _x75 : 1;
  var _x77 = undefined;
  var _x76 = (_x77 !== undefined) ? _x77 : true;
  var _x79 = undefined;
  var _x78 = (_x79 !== undefined) ? _x79 : "0x";
  var _x81 = undefined;
  var _x80 = (_x81 !== undefined) ? _x81 : 1;
  var _x83 = undefined;
  var _x82 = (_x83 !== undefined) ? _x83 : true;
  var _x85 = undefined;
  var _x84 = (_x85 !== undefined) ? _x85 : "0x";
  return $std_core_types._lp__plus__plus__rp_($std_core_show.show_hex($std_core_types._int_from_int64(i_10057), _x74, _x76, _x78), $std_core_types._lp__plus__plus__rp_(" == ", $std_core_show.show_hex($std_core_types._int_from_int64(i_0_10061), _x80, _x82, _x84)));
}
 
export function clmulrev(x, y) /* (x : int64, y : int64) -> int64 */  {
  return $std_core_types._int64_breverse(($std_num_int64._int64_clmul(($std_core_types._int64_breverse(x)),($std_core_types._int64_breverse(y)))));
}
 
export function test_clmulrev1() /* () -> string */  {
   
  var x = 305419896n;
   
  var y = $std_core_types._int64_bswap(2309737967n);
   
  var i_10066 = $std_num_int64._int64_clmulr(x,y);
   
  var i_0_10070 = $std_core_types._int64_breverse(($std_num_int64._int64_clmul(($std_core_types._int64_breverse(x)),($std_core_types._int64_breverse(y)))));
  var _x87 = undefined;
  var _x86 = (_x87 !== undefined) ? _x87 : 1;
  var _x89 = undefined;
  var _x88 = (_x89 !== undefined) ? _x89 : true;
  var _x91 = undefined;
  var _x90 = (_x91 !== undefined) ? _x91 : "0x";
  var _x93 = undefined;
  var _x92 = (_x93 !== undefined) ? _x93 : 1;
  var _x95 = undefined;
  var _x94 = (_x95 !== undefined) ? _x95 : true;
  var _x97 = undefined;
  var _x96 = (_x97 !== undefined) ? _x97 : "0x";
  return $std_core_types._lp__plus__plus__rp_($std_core_show.show_hex($std_core_types._int_from_int64(i_10066), _x86, _x88, _x90), $std_core_types._lp__plus__plus__rp_(" == ", $std_core_show.show_hex($std_core_types._int_from_int64(i_0_10070), _x92, _x94, _x96)));
}
