// Koka generated module: std/num/float64, koka version: 3.2.9
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
import * as $std_text_parse from './std_text_parse.mjs';
import * as $std_num_int32 from './std_num_int32.mjs';
import * as $std_num_int64 from './std_num_int64.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2017-2021, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
var _big_endian = undefined;
function _check_big_endian() {
  var arrayBuffer = new ArrayBuffer(2);
  var uint8Array = new Uint8Array(arrayBuffer);
  var uint16array = new Uint16Array(arrayBuffer);
  uint8Array[0] = 0x11;
  uint8Array[1] = 0x22;
  return (uint16array[0] === 0x1122);
}
function _is_big_endian() {
  if (_big_endian===undefined) { _big_endian = _check_big_endian();  }
  return _big_endian;
}
var _buf         = new ArrayBuffer(8);
var _buf_float64 = new Float64Array(_buf);
var _buf_int32   = new Int32Array(_buf);
function _double_to_bits(d) {
  _buf_float64[0] = d;
  var lo;
  var hi;
  if (_is_big_endian()) {
    hi = _buf_int32[0]; lo = _buf_int32[1];
  }
  else {
    lo = _buf_int32[0]; hi = _buf_int32[1];
  }
  return (BigInt(hi) << 32n) + (lo >= 0 ? BigInt(lo) : 0x100000000n + BigInt(lo));
}
function _double_from_bits(i) {
  var hi = Number(i>>32n)|0;
  var lo = Number(i&0xFFFFFFFFn)|0;
  if (_is_big_endian()) {
    _buf_int32[0] = hi; _buf_int32[1] = lo;
  }
  else {
    _buf_int32[0] = lo; _buf_int32[1] = hi;
  }
  return _buf_float64[0];
}
var _splitter    = Math.pow(2,27) + 1;      // 0x1.0000002p+27 // 134217729.0 = 2^27 + 1
var _splitbound  = Math.pow(2,296);         // 0x1.0p996 // 6.696928794914171e+299  = 2^996
var _two28       = Math.pow(2,28);          // 0x1.0p28 // 268435456.0 = 2^28
var _twomin28    = Math.pow(2,-28);         // 0x1.0p-28  // 3.7252902984619140625e-09 = 2^-28
function _split( x ) {
  if (x > _splitbound || x < -_splitbound) {
    var y = x * _twomin28;
    var t = y * _splitter;
    var hi = t - (t - y);
    var lo = y - hi;
    return { hi: hi*_two28, lo: lo*_two28 };
  }
  else {
    var t = x * _splitter;
    var hi = t - (t - x);
    var lo = x - hi;
    return { hi: hi, lo: lo };
  }
}
function _fmadd(x,y,z) {
  var xx = _split(x);
  var yy = (x===y ? xx : _split(y));
  return ((xx.hi*yy.hi + z) + (xx.hi*yy.lo + xx.lo*yy.hi)) + (xx.lo*yy.lo);
}
/*------------------------------------------------
  Number formatting
------------------------------------------------*/
function _double_show_special(d) {
  if (isNaN(d)) {
    return "nan"
  }
  else if (d === -Infinity) {
    return "-inf"
  }
  else if (d === Infinity) {
    return "inf"
  }
  else {
    return "nan"
  }
}
function _double_fix_exp(s) {
  // an exponent has at least 2 digits (following the C standard)
  return s.replace(/([eE][\+\-])(\d)$/,function(m,p1,p2){ return (p2==="0" ? "" : p1 + "0" + p2); });
}
function _double_show_exp(d,fractionDigits) {
  var s;
  if (!isFinite(d)) {
    s = _double_show_special(d);
  }
  else if (d===0.0 && Object.is(d,-0.0)) {
    s = "-0";
  }
  else if (fractionDigits < 0) {
    // use at most |fractionDigits|
    s = d.toExponential();
  }
  else {
    // use exactly |fractionDigits|.
    if (fractionDigits > 20) fractionDigits = 20;
    s = d.toExponential(fractionDigits);
  }
  return _double_fix_exp(s);
}
function _double_show_fixed(d, fractionDigits) {
  var dabs = (d < 0.0 ? -d : d);
  if (!isFinite(d)) {
    return _double_show_special(d);
  }
  else if (dabs < 1.0e-15 || dabs > 1.0e+21) {
    return _double_show_exp(d,fractionDigits);
  }
  else if (fractionDigits < 0) {
    // use at most |fractionDigits|
    var s = d.toFixed(-fractionDigits-1);              // show at full precision
    var cap = /^([\-\+]?\d+)(\.\d+)$/.exec(s);
    if (!cap) return _double_fix_exp(s);
    var frac = cap[2].substr(0,1 - fractionDigits);  // then cut off
    return cap[1] + frac.replace(/(?:\.|([1-9]))0+$/,"$1"); // remove trailing zeros
  }
  else {
    // use exactly fractionDigits
    if (fractionDigits > 20) fractionDigits = 20;
    return _double_fix_exp(d.toFixed(fractionDigits));
  }
}
function _trimzeros(s) {
  return s.replace(/\.?0+$/,"");
}
function _gformat(x,format) {
  if (typeof x === "number" && !isFinite(x)) return _double_show_special(x);
  var hex = /^[xX]([0-9]*)/.exec(format)
  if (hex) {
    var w = parseInt(hex[1]);
    var s = x.toString(16)
    if (format[0] == 'X') s = s.toUpperCase();
    return (s.length<w ? _string_repeat("0",w - s.length) + s : s );
  }
  var exp = /^[eE]([0-9]*)/.exec(format)
  if (exp) {
    var w = parseInt(exp[1]);
    return (w>0 && w<=20 ? x.toExponential(w) : x.toExponential());
  }
  var fix = /^[fF]([0-9]*)/.exec(format)
  if (fix) {
    var w = parseInt(fix[1]);
    return _trimzeros((w > 0 && w <= 20) ? x.toFixed(w) : x.toFixed(20));
  }
  var expfix = /^[gG]([0-9]*)/.exec(format)
  if (expfix) {
    var w = parseInt(expfix[1]);
    return (w>0&&w<=20 ? x.toPrecision(w) : x.toPrecision());
  }
  /* default */
  return x.toString();
}
 
// type declarations
 
// declarations
 
 
export var pi;
var pi = 3.141592653589793;
 
 
export var flt_pi;
var flt_pi = 3.141592653589793;
 
 
export var flt_twopi;
var flt_twopi = 6.283185307179586;
 
 
export var flt_pi2;
var flt_pi2 = 1.5707963267948966;
 
 
export var flt_pi4;
var flt_pi4 = 0.7853981633974483;
 
 
export var flt_pi34;
var flt_pi34 = 2.356194490192345;
 
 
export var flt_e;
var flt_e = 2.718281828459045;
 
 
export var flt_ln2;
var flt_ln2 = 0.6931471805599453;
 
 
export var flt_ln10;
var flt_ln10 = 2.302585092994046;
 
 
export var flt_log2e;
var flt_log2e = 1.4426950408889634;
 
 
export var flt_log10e;
var flt_log10e = 0.4342944819032518;
 
 
export var flt_sqrt2;
var flt_sqrt2 = 1.4142135623730951;
 
 
export var flt_sqrt12;
var flt_sqrt12 = 0.7071067811865476;
 
 
export var flt_euler;
var flt_euler = 0.5772156649015329;
 
 
export var flt_max;
var flt_max = 1.7976931348623157e308;
 
 
export var flt_min;
var flt_min = 2.2250738585072014e-308;
 
 
export var flt_true_min;
var flt_true_min = 5.0e-324;
 
 
export var flt_epsilon;
var flt_epsilon = 2.220446049250313e-16;
 
 
export var flt_max_prec;
var flt_max_prec = 15;
 
 
export function is_neg(d) /* (d : float64) -> bool */  {
  return (d < (0.0));
}
 
 
export function max(x, y) /* (x : float64, y : float64) -> float64 */  {
  return ((x >= y)) ? x : y;
}
 
 
export function is_subnormal(d) /* (d : float64) -> bool */  {
  if ((d !== (0.0))) {
    return ((Math.abs(d)) < (2.2250738585072014e-308));
  }
  else {
    return false;
  }
}
 
 
export function float32_fs_float64(f) /* (f : float32) -> float64 */  {
  return (f);
}
 
 
export function int64_fs_float64(i) /* (i : int64) -> float64 */  {
  return $std_core_types._int_to_double(($std_core_types._int_from_int64(i)));
}
 
export function make_neginf() /* () -> float64 */  {
  return -Infinity;
}
 
 
export var neginf;
var neginf = make_neginf();
 
export function make_posinf() /* () -> float64 */  {
  return Infinity;
}
 
 
export var posinf;
var posinf = make_posinf();
 
 
export function is_pos(d) /* (d : float64) -> bool */  {
  return (d > (0.0));
}
 
 
export function is_zero(d) /* (d : float64) -> bool */  {
  return (d === (0.0));
}
 
 
export function min(x, y) /* (x : float64, y : float64) -> float64 */  {
  return ((x <= y)) ? x : y;
}
 
 
export function _lift_minimum_10331(_uniq_xs_10250, _uniq_z_10251) /* (list<float64>, float64) -> float64 */  { tailcall: while(1)
{
  if (_uniq_xs_10250 !== null) {
    {
      // tail call
      var _x0 = ((_uniq_z_10251 <= (_uniq_xs_10250.head))) ? _uniq_z_10251 : _uniq_xs_10250.head;
      _uniq_xs_10250 = _uniq_xs_10250.tail;
      _uniq_z_10251 = _x0;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10251;
  }
}}
 
 
export function _lift_minimum_10330(_uniq_xs_10244, _uniq_z_10245) /* (list<float64>, float64) -> float64 */  {
  if (_uniq_xs_10244 === null) {
    return _uniq_z_10245;
  }
  else {
    return _lift_minimum_10331(_uniq_xs_10244, _uniq_z_10245);
  }
}
 
 
export function minimum(xs) /* (xs : list<float64>) -> float64 */  {
  if (xs === null) {
    return 0.0;
  }
  else {
    return _lift_minimum_10330(xs.tail, xs.head);
  }
}
 
 
export function _lift_maximum_10333(_uniq_xs_10264, _uniq_z_10265) /* (list<float64>, float64) -> float64 */  { tailcall: while(1)
{
  if (_uniq_xs_10264 !== null) {
    {
      // tail call
      var _x1 = ((_uniq_z_10265 >= (_uniq_xs_10264.head))) ? _uniq_z_10265 : _uniq_xs_10264.head;
      _uniq_xs_10264 = _uniq_xs_10264.tail;
      _uniq_z_10265 = _x1;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10265;
  }
}}
 
 
export function _lift_maximum_10332(_uniq_xs_10258, _uniq_z_10259) /* (list<float64>, float64) -> float64 */  {
  if (_uniq_xs_10258 === null) {
    return _uniq_z_10259;
  }
  else {
    return _lift_maximum_10333(_uniq_xs_10258, _uniq_z_10259);
  }
}
 
 
export function maximum(xs) /* (xs : list<float64>) -> float64 */  {
  if (xs === null) {
    return 0.0;
  }
  else {
    return _lift_maximum_10332(xs.tail, xs.head);
  }
}
 
export function make_nan() /* () -> float64 */  {
  return NaN;
}
 
 
export var nan;
var nan = make_nan();
 
 
export function sign(d) /* (d : float64) -> order */  {
  if ((d < (0.0))) {
    return $std_core_types.Lt;
  }
  else {
    return ((d > (0.0))) ? $std_core_types.Gt : $std_core_types.Eq;
  }
}
 
export function show_fixedx(d, prec) /* (d : float64, prec : int32) -> string */  {
  return _double_show_fixed(d,prec);
}
 
export function show_expx(d, prec) /* (d : float64, prec : int32) -> string */  {
  return _double_show_exp(d,prec);
}
 
 
export function show_exp(d, precision) /* (d : float64, precision : ? int) -> string */  {
  var _x2 = (precision !== undefined) ? precision : -17;
  return show_expx(d, $std_core_types._int_clamp32(_x2));
}
 
 
export function show_fixed(d, precision) /* (d : float64, precision : ? int) -> string */  {
   
  var dabs = Math.abs(d);
  if ((dabs < (1.0e-15))) {
    var _x3 = (precision !== undefined) ? precision : -2;
    return show_expx(d, $std_core_types._int_clamp32(_x3));
  }
  else {
    if ((dabs > (1.0e21))) {
      var _x4 = (precision !== undefined) ? precision : -2;
      return show_expx(d, $std_core_types._int_clamp32(_x4));
    }
    else {
      var _x5 = (precision !== undefined) ? precision : -2;
      return show_fixedx(d, $std_core_types._int_clamp32(_x5));
    }
  }
}
 
 
export function show(d, precision) /* (d : float64, precision : ? int) -> string */  {
   
  var dabs = Math.abs(d);
  if ((dabs >= (1.0e-5))) {
    if ((dabs < (1.0e21))) {
       
      var dabs_0 = Math.abs(d);
      if ((dabs_0 < (1.0e-15))) {
        var _x6 = (precision !== undefined) ? precision : -17;
        return show_expx(d, $std_core_types._int_clamp32(_x6));
      }
      else {
        if ((dabs_0 > (1.0e21))) {
          var _x7 = (precision !== undefined) ? precision : -17;
          return show_expx(d, $std_core_types._int_clamp32(_x7));
        }
        else {
          var _x8 = (precision !== undefined) ? precision : -17;
          return show_fixedx(d, $std_core_types._int_clamp32(_x8));
        }
      }
    }
    else {
      var _x9 = (precision !== undefined) ? precision : -17;
      return show_expx(d, $std_core_types._int_clamp32(_x9));
    }
  }
  else {
    var _x10 = (precision !== undefined) ? precision : -17;
    return show_expx(d, $std_core_types._int_clamp32(_x10));
  }
}
 
 
export function is_inf(d) /* (d : float64) -> bool */  {
  return ((d) === Infinity || (d) === -Infinity);
}
 
 
export function is_negzero(d) /* (d : float64) -> bool */  {
  if ((d === (0.0))) {
    return (((((1.0) / d))) === -Infinity);
  }
  else {
    return false;
  }
}
 
 
export function fmadd(x, y, z) /* (x : float64, y : float64, z : float64) -> float64 */  {
  return _fmadd(x,y,z);
}
 
 
export function truncate(d) /* (d : float64) -> float64 */  {
  return ((d >= (0.0))) ? Math.floor(d) : Math.ceil(d);
}
 
 
export function fraction(d) /* (d : float64) -> float64 */  {
  var _x11 = ((d >= (0.0))) ? Math.floor(d) : Math.ceil(d);
  return (d - _x11);
}
 
 
export function ffraction(d) /* (d : float64) -> float64 */  {
  return (d - (Math.floor(d)));
}
 
 
export function round_to_prec(d, prec) /* (d : float64, prec : int) -> float64 */  {
  if ($std_core_types._int_le(prec,0)) {
    return $std_core_types._double_round_even(d);
  }
  else {
     
    var p = Math.pow(10.0,($std_core_types._int_to_double(prec)));
    return (($std_core_types._double_round_even(((d * p)))) / p);
  }
}
 
 
export function float64_fs_float32(f) /* (f : float64) -> float32 */  {
  return $std_core_types._double_to_float(f);
}
 
 
export function f32(f) /* (f : float64) -> float32 */  {
  return float64_fs_float32(f);
}
 
 
export function log(f, base) /* (f : float64, base : float64) -> float64 */  {
  return ((Math.log(f)) / (Math.log(base)));
}
 
export function log2p1(x) /* (x : float64) -> float64 */  {
  return ((1.4426950408889634) * (Math.log1p(x)));
}
 
export function exp2m1(x) /* (x : float64) -> float64 */  {
  return Math.expm1((((0.6931471805599453) * x)));
}
 
 
export function lnaddexp(x, y) /* (x : float64, y : float64) -> float64 */  {
  if ((x === y)) {
    return (x + (0.6931471805599453));
  }
  else {
     
    var z = (x - y);
    if ((z > (0.0))) {
      return (x + (Math.log1p((Math.exp(((-z)))))));
    }
    else {
      return (y + (Math.log1p((Math.exp(z)))));
    }
  }
}
 
 
export function logaddexp2(x, y) /* (x : float64, y : float64) -> float64 */  {
  if ((x === y)) {
    return (x + (1.0));
  }
  else {
     
    var z = (x - y);
    if ((z > (0.0))) {
       
      var x_0_10015 = Math.pow(2.0,((-z)));
      return (x + (((1.4426950408889634) * (Math.log1p(x_0_10015)))));
    }
    else {
       
      var x_1_10016 = Math.pow(2.0,z);
      return (y + (((1.4426950408889634) * (Math.log1p(x_1_10016)))));
    }
  }
}
 
 
export function nearly_eq(x, y, epsilon) /* (x : float64, y : float64, epsilon : ? float64) -> bool */  {
   
  var _uniq_epsilon_1783 = (epsilon !== undefined) ? epsilon : ((8.0) * (2.220446049250313e-16));
  if ((x === y)) {
    return true;
  }
  else {
     
    var diff = Math.abs(((x - y)));
    if ((x === (0.0))) {
      return ((((2.0) * diff)) < ((_uniq_epsilon_1783 * (2.2250738585072014e-308))));
    }
    else {
      if ((y === (0.0))) {
        return ((((2.0) * diff)) < ((_uniq_epsilon_1783 * (2.2250738585072014e-308))));
      }
      else {
        if ((diff < (2.2250738585072014e-308))) {
          return ((((2.0) * diff)) < ((_uniq_epsilon_1783 * (2.2250738585072014e-308))));
        }
        else {
           
          var sum_0 = ((Math.abs(x)) + (Math.abs(y)));
          var _x12 = ((sum_0 > (1.7976931348623157e308))) ? 1.7976931348623157e308 : sum_0;
          return ((((((2.0) * diff)) / _x12)) < _uniq_epsilon_1783);
        }
      }
    }
  }
}
 
 
export function _lp__tilde__eq__rp_(x, y) /* (x : float64, y : float64) -> bool */  {
  return nearly_eq(x, y);
}
 
 
export function float64_to_bits(d) /* (d : float64) -> int64 */  {
  return _double_to_bits(d);
}
 
 
export function float64_from_bits(i) /* (i : int64) -> float64 */  {
  return _double_from_bits(i);
}
 
 
export function exp2i(e) /* (e : int) -> float64 */  {
  if ($std_core_types._int_ge(e,(-1022))) {
    if ($std_core_types._int_le(e,1023)) {
       
      var i_10017 = $std_num_int64.int64($std_core_types._int_add(1023,e));
      return float64_from_bits($std_core_types._int64_shl(i_10017,52n));
    }
    else {
      return Math.pow(2.0,($std_core_types._int_to_double(e)));
    }
  }
  else {
    return Math.pow(2.0,($std_core_types._int_to_double(e)));
  }
}
 
export var one_p1023;
var one_p1023 = 8.98846567431158e307;
 
export var one_m1022;
var one_m1022 = 2.2250738585072014e-308;
 
export function mul_exp2(x, e) /* (x : float64, e : int) -> float64 */  {
  return (x * (exp2i(e)));
}
 
 
export function ldexp(x, e) /* (x : float64, e : int) -> float64 */  {
   
  var b_10021 = isFinite(x);
  if (b_10021) {
    if ($std_core_types._int_ge(e,(-1022))) {
      if ($std_core_types._int_le(e,1023)) {
        return (x * (exp2i(e)));
      }
      else {
        if ($std_core_types._int_le(e,2046)) {
           
          var x_1_10024 = (x * (8.98846567431158e307));
           
          var e_1_10025 = $std_core_types._int_sub(e,1023);
          return (x_1_10024 * (exp2i(e_1_10025)));
        }
        else {
          if ($std_core_types._int_le(e,3069)) {
             
            var x_3_10028 = (((x * (8.98846567431158e307))) * (8.98846567431158e307));
             
            var e_2_10029 = $std_core_types._int_sub(e,2046);
            return (x_3_10028 * (exp2i(e_2_10029)));
          }
          else {
            return ((x < (0.0))) ? neginf : posinf;
          }
        }
      }
    }
    else {
      if ($std_core_types._int_ge(e,(-2044))) {
         
        var x_5_10032 = (x * (2.2250738585072014e-308));
         
        var e_3_10033 = $std_core_types._int_add(e,1022);
        return (x_5_10032 * (exp2i(e_3_10033)));
      }
      else {
        if ($std_core_types._int_ge(e,(-3066))) {
           
          var x_7_10036 = (((x * (2.2250738585072014e-308))) * (2.2250738585072014e-308));
           
          var e_4_10037 = $std_core_types._int_add(e,2044);
          return (x_7_10036 * (exp2i(e_4_10037)));
        }
        else {
          return ((x < (0.0))) ? (-0.0) : 0.0;
        }
      }
    }
  }
  else {
    return x;
  }
}
 
 
export function encode(man, exp) /* (man : int, exp : int) -> float64 */  {
  return ldexp($std_core_types._int_to_double(man), exp);
}
 
 
export function decode_normalized(d, e_adjust) /* (d : float64, e-adjust : ? int) -> (int, int) */  {
   
  var i = float64_to_bits(d);
   
  var exp = BigInt.asIntN(64,(($std_core_types._int64_shr(i,52n)) & 2047n) - 1043n);
   
  var man = BigInt.asIntN(64,(i & 4503599627370495n) + 4503599627370496n);
   
  var x_0_10045 = $std_core_types._int_from_int64(exp);
   
  var x_10043 = $std_core_types._int_sub(x_0_10045,32);
  if (0n > i) {
    var _x13 = BigInt.asIntN(64,0n - man);
  }
  else {
    var _x13 = man;
  }
  var _x14 = (e_adjust !== undefined) ? e_adjust : 0;
  return $std_core_types.Tuple2($std_core_types._int_from_int64(_x13), $std_core_types._int_add(x_10043,_x14));
}
 
 
export function decode(d) /* (d : float64) -> (int, int) */  {
  if ((d === (0.0))) {
    return $std_core_types.Tuple2(0, 0);
  }
  else {
    if ((d !== (0.0))) {
      var _x15 = ((Math.abs(d)) < (2.2250738585072014e-308));
      if (_x15) {
         
        var d_0_10137 = (d * (1.8014398509481984e16));
         
        var i = float64_to_bits(d_0_10137);
         
        var exp = BigInt.asIntN(64,(($std_core_types._int64_shr(i,52n)) & 2047n) - 1043n);
         
        var man = BigInt.asIntN(64,(i & 4503599627370495n) + 4503599627370496n);
         
        var x_0_10045 = $std_core_types._int_from_int64(exp);
         
        var x_10043 = $std_core_types._int_sub(x_0_10045,32);
        if (0n > i) {
          var _x16 = BigInt.asIntN(64,0n - man);
        }
        else {
          var _x16 = man;
        }
        return $std_core_types.Tuple2($std_core_types._int_from_int64(_x16), $std_core_types._int_add(x_10043,(-54)));
      }
      else {
         
        var i_0 = float64_to_bits(d);
         
        var exp_0 = BigInt.asIntN(64,(($std_core_types._int64_shr(i_0,52n)) & 2047n) - 1043n);
         
        var man_0 = BigInt.asIntN(64,(i_0 & 4503599627370495n) + 4503599627370496n);
         
        var x_0_10045_0 = $std_core_types._int_from_int64(exp_0);
         
        var x_10043_0 = $std_core_types._int_sub(x_0_10045_0,32);
        if (0n > i_0) {
          var _x17 = BigInt.asIntN(64,0n - man_0);
        }
        else {
          var _x17 = man_0;
        }
        return $std_core_types.Tuple2($std_core_types._int_from_int64(_x17), $std_core_types._int_add(x_10043_0,0));
      }
    }
    else {
       
      var i_1 = float64_to_bits(d);
       
      var exp_1 = BigInt.asIntN(64,(($std_core_types._int64_shr(i_1,52n)) & 2047n) - 1043n);
       
      var man_1 = BigInt.asIntN(64,(i_1 & 4503599627370495n) + 4503599627370496n);
       
      var x_0_10045_1 = $std_core_types._int_from_int64(exp_1);
       
      var x_10043_1 = $std_core_types._int_sub(x_0_10045_1,32);
      if (0n > i_1) {
        var _x18 = BigInt.asIntN(64,0n - man_1);
      }
      else {
        var _x18 = man_1;
      }
      return $std_core_types.Tuple2($std_core_types._int_from_int64(_x18), $std_core_types._int_add(x_10043_1,0));
    }
  }
}
 
 
export function frexp(x) /* (x : float64) -> (float64, int) */  {
   
  var b_10048 = isFinite(x);
  if (b_10048) {
    if ((x === (0.0))) {
      var _x19 = (((((1.0) / x))) === -Infinity);
      if (_x19) {
        return $std_core_types.Tuple2(x, 0);
      }
      else {
        var _x20 = decode(x);
        return $std_core_types.Tuple2((($std_core_types._int_to_double((_x20.fst))) * (1.1102230246251565e-16)), $std_core_types._int_add((_x20.snd),53));
      }
    }
    else {
      var _x21 = decode(x);
      return $std_core_types.Tuple2((($std_core_types._int_to_double((_x21.fst))) * (1.1102230246251565e-16)), $std_core_types._int_add((_x21.snd),53));
    }
  }
  else {
    return $std_core_types.Tuple2(x, 0);
  }
}
 
 
export function next_down(x) /* (x : float64) -> float64 */  {
  if (isNaN(x)) {
    return x;
  }
  else {
    if (((x) === -Infinity)) {
      return x;
    }
    else {
      if ((x === (0.0))) {
        return (-(5.0e-324));
      }
      else {
         
        var i = float64_to_bits(x);
         
        if (0n > i) {
          var next = BigInt.asIntN(64,i + 1n);
        }
        else {
          var next = BigInt.asIntN(64,i - 1n);
        }
        return float64_from_bits(next);
      }
    }
  }
}
 
 
export function next_up(x) /* (x : float64) -> float64 */  {
  if (isNaN(x)) {
    return x;
  }
  else {
    if (((x) === Infinity)) {
      return x;
    }
    else {
      if ((x === (0.0))) {
        return 5.0e-324;
      }
      else {
         
        var i = float64_to_bits(x);
         
        if (0n > i) {
          var next = BigInt.asIntN(64,i - 1n);
        }
        else {
          var next = BigInt.asIntN(64,i + 1n);
        }
        return float64_from_bits(next);
      }
    }
  }
}
 
 
export function cmp(x, y) /* (x : float64, y : float64) -> order */  {
   
  var bx = float64_to_bits(x);
   
  var by = float64_to_bits(y);
   
  var i_10058 = $std_core_types._int64_sar(bx,63n);
   
  var ix = ($std_core_types._int64_shr(i_10058,1n)) ^ bx;
   
  var i_1_10062 = $std_core_types._int64_sar(by,63n);
   
  var iy = ($std_core_types._int64_shr(i_1_10062,1n)) ^ by;
  if ((ix < iy)) {
    return $std_core_types.Lt;
  }
  else {
    return ((ix > iy)) ? $std_core_types.Gt : $std_core_types.Eq;
  }
}
 
 
export function midpoint(x, y) /* (x : float64, y : float64) -> float64 */  {
  if ((x !== (0.0))) {
    var _x22 = ((Math.abs(x)) < (2.2250738585072014e-308));
    if (_x22) {
      return (((x + y)) / (2.0));
    }
    else {
      if ((y !== (0.0))) {
        var _x23 = ((Math.abs(y)) < (2.2250738585072014e-308));
        if (_x23) {
          return (((x + y)) / (2.0));
        }
        else {
          return (((x / (2.0))) + ((y / (2.0))));
        }
      }
      else {
        return (((x / (2.0))) + ((y / (2.0))));
      }
    }
  }
  else {
    if ((y !== (0.0))) {
      var _x24 = ((Math.abs(y)) < (2.2250738585072014e-308));
      if (_x24) {
        return (((x + y)) / (2.0));
      }
      else {
        return (((x / (2.0))) + ((y / (2.0))));
      }
    }
    else {
      return (((x / (2.0))) + ((y / (2.0))));
    }
  }
}
 
 
export function lerp(x, y, t) /* (x : float64, y : float64, t : float64) -> float64 */  {
  if ((x <= (0.0))) {
    if ((y >= (0.0))) {
      return (((t * y)) + (((((1.0) - t)) * x)));
    }
    else {
      if ((x >= (0.0))) {
        if ((y <= (0.0))) {
          return (((t * y)) + (((((1.0) - t)) * x)));
        }
        else {
          if ((t === (1.0))) {
            return y;
          }
          else {
             
            var z = (x + ((t * ((y - x)))));
             
            var x_0_10070 = (t > (1.0));
             
            var y_0_10071 = (y > x);
            if (x_0_10070) {
              var _x25 = y_0_10071;
            }
            else {
              var _x25 = (y_0_10071) ? false : true;
            }
            if (_x25) {
              return ((y >= z)) ? y : z;
            }
            else {
              return ((y <= z)) ? y : z;
            }
          }
        }
      }
      else {
        if ((t === (1.0))) {
          return y;
        }
        else {
           
          var z_0 = (x + ((t * ((y - x)))));
           
          var x_3_10076 = (t > (1.0));
           
          var y_3_10077 = (y > x);
          if (x_3_10076) {
            var _x26 = y_3_10077;
          }
          else {
            var _x26 = (y_3_10077) ? false : true;
          }
          if (_x26) {
            return ((y >= z_0)) ? y : z_0;
          }
          else {
            return ((y <= z_0)) ? y : z_0;
          }
        }
      }
    }
  }
  else {
    if ((x >= (0.0))) {
      if ((y <= (0.0))) {
        return (((t * y)) + (((((1.0) - t)) * x)));
      }
      else {
        if ((t === (1.0))) {
          return y;
        }
        else {
           
          var z_1 = (x + ((t * ((y - x)))));
           
          var x_6_10082 = (t > (1.0));
           
          var y_6_10083 = (y > x);
          if (x_6_10082) {
            var _x27 = y_6_10083;
          }
          else {
            var _x27 = (y_6_10083) ? false : true;
          }
          if (_x27) {
            return ((y >= z_1)) ? y : z_1;
          }
          else {
            return ((y <= z_1)) ? y : z_1;
          }
        }
      }
    }
    else {
      if ((t === (1.0))) {
        return y;
      }
      else {
         
        var z_0_0 = (x + ((t * ((y - x)))));
         
        var x_9_10088 = (t > (1.0));
         
        var y_9_10089 = (y > x);
        if (x_9_10088) {
          var _x28 = y_9_10089;
        }
        else {
          var _x28 = (y_9_10089) ? false : true;
        }
        if (_x28) {
          return ((y >= z_0_0)) ? y : z_0_0;
        }
        else {
          return ((y <= z_0_0)) ? y : z_0_0;
        }
      }
    }
  }
}
 
 
// /* Show a float64 in [hexadecimal notation](https://books.google.com/books?id=FgMsCwAAQBAJ&pg=PA41).
// An advantage of this format is that it precisely represents the `:float64` and can
// reliably (and efficiently) be parsed back, i.e. `d.show-hex.parse-float64 == Just(d)`.
// The significant is the _hexadecimal_ fraction while the
// exponent after the `p` is the _decimal_ power of 2.
//  For example, ``0xA.Fp-10`` = (10 + 15/16)&middot;2^-10^  (not 2^-16^!) = 0.01068115234375.
//  Equivalently, ``0xA.Fp-10 == 0x5.78p-9 == 0x2.BCp-8 == 0x1.5Ep-7``.
// ```
// > flt-min.show-hex
// "0x1.0p-1022"
// > 0.1.show-hex
// "0x1.999999999999Ap-4"
// > flt-max.show-hex
// "0x1.FFFFFFFFFFFFFp+1023"
// > -0.0.show-hex
// "-0x0.0p+0"
// > nan.show-hex
// "NaN"
// > 0.01068115234375.show-hex
// "0x1.5Ep-7"
// ```
// .
// */
export function show_hex(d, width, use_capitals, pre) /* (d : float64, width : ? int, use-capitals : ? bool, pre : ? string) -> string */  {
   
  var b_10094 = isFinite(d);
  if (b_10094) {
    var _x29 = decode(d);
     
    var _x30 = (use_capitals !== undefined) ? use_capitals : true;
    var man = $std_core_show.show_hex($std_core_types._int_abs((_x29.fst)), 1, _x30, "");
     
    var x_0_10097 = $std_core_string.chars_fs_count(man);
     
    var y_10096 = $std_core_types._int_mul(4,($std_core_types._int_sub(x_0_10097,1)));
     
    var exp0 = $std_core_types._int_add((_x29.snd),y_10096);
     
    var _x31 = ($std_core_types._int_ge(exp0,0)) ? "+" : "";
    var exp = $std_core_types._lp__plus__plus__rp_(_x31, $std_core_int.show(exp0));
     
    var s_10099 = $std_core_sslice.trim_right($std_core_sslice.tail(man), "0");
     
    var _x33 = (width !== undefined) ? width : 1;
    var _x32 = $std_core_types._int_ge(1,_x33);
    if (_x32) {
      var width_0_10100 = 1;
    }
    else {
      var width_0_10100 = (width !== undefined) ? width : 1;
    }
     
    var n = $std_core_string.chars_fs_count(s_10099);
     
    if ($std_core_types._int_le(width_0_10100,n)) {
      var frac = s_10099;
    }
    else {
       
      var s_0_10015 = $std_core_string.char_fs_string(0x0030);
       
      var n_0_10016 = $std_core_types._int_sub(width_0_10100,n);
      var frac = $std_core_types._lp__plus__plus__rp_(s_10099, $std_core_string.repeatz(s_0_10015, $std_core_int.ssize__t(n_0_10016)));
    }
     
    if ((d < (0.0))) {
      var sign_0 = "-";
    }
    else {
      if ((d === (0.0))) {
        var _x34 = (((((1.0) / d))) === -Infinity);
        var sign_0 = (_x34) ? "-" : "";
      }
      else {
        var sign_0 = "";
      }
    }
    var _x30 = (pre !== undefined) ? pre : "0x";
    return $std_core_types._lp__plus__plus__rp_(sign_0, $std_core_types._lp__plus__plus__rp_(_x30, $std_core_types._lp__plus__plus__rp_($std_core_sslice.head(man), $std_core_types._lp__plus__plus__rp_(".", $std_core_types._lp__plus__plus__rp_(frac, $std_core_types._lp__plus__plus__rp_("p", exp))))));
  }
  else {
    return show(d);
  }
}
 
 
export function _mlift_phexdouble_10400(wild_2) /* (wild@2 : char) -> text/parse/parse int */  {
  return $std_text_parse.pint();
}
 
 
export function _mlift_phexdouble_10401(frac, man, _c_x10359) /* (frac : string, man : string, int) -> float64 */  {
   
  var _x_x1_0_10395 = $std_core_types._lp__plus__plus__rp_(man, frac);
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = $std_core_int.xparse(_x_x1_0_10395, true);
   
  var keep = $std_core_hnd._evv_set(w);
   
  var w_0 = $std_core_hnd._evv_swap_create0();
   
  var keep_0 = $std_core_hnd._evv_set(w_0);
   
  var y_10390 = $std_core_types._int_mul(4,($std_core_string.chars_fs_count(frac)));
   
  var e = $std_core_types._int_sub(_c_x10359,y_10390);
   
  var w_1 = $std_core_hnd._evv_swap_create0();
   
  var _x31 = (x === null) ? 0 : x.value;
  var x_2 = ldexp($std_core_types._int_to_double(_x31), e);
   
  var keep_1 = $std_core_hnd._evv_set(w_1);
  return x_2;
}
 
 
export function _mlift_phexdouble_10402(frac, man, _y_x10356) /* (frac : string, man : string, bool) -> text/parse/parse float64 */  {
   
  if (_y_x10356) {
     
    var x_0_10440 = $std_text_parse.one_of("pP");
    if ($std_core_hnd._yielding()) {
      var x_10438 = $std_core_hnd.yield_extend(_mlift_phexdouble_10400);
    }
    else {
      var x_10438 = $std_text_parse.pint();
    }
  }
  else {
    var x_10438 = 0;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10359 /* int */ ) {
      return _mlift_phexdouble_10401(frac, man, _c_x10359);
    });
  }
  else {
    return _mlift_phexdouble_10401(frac, man, x_10438);
  }
}
 
 
export function _mlift_phexdouble_10403(wild_1) /* (wild@1 : char) -> text/parse/parse string */  {
  return $std_text_parse.hex_digits();
}
 
 
export function _mlift_phexdouble_10404(man, _c_x10355) /* (man : string, string) -> float64 */  {
   
  var frac = $std_core_sslice.trim_right(_c_x10355, "0");
   
  var ev_10444 = $std_core_hnd._evv_at(0);
   
  var _x31 = $std_text_parse.pick_fs__select(ev_10444.hnd);
  var x_10442 = _x31(ev_10444.marker, ev_10444);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10356 /* bool */ ) {
      return _mlift_phexdouble_10402(frac, man, _y_x10356);
    });
  }
  else {
    return _mlift_phexdouble_10402(frac, man, x_10442);
  }
}
 
 
export function _mlift_phexdouble_10405(man, _y_x10352) /* (man : string, bool) -> text/parse/parse float64 */  {
   
  if (_y_x10352) {
     
    var x_0_10448 = $std_text_parse.char(0x002E);
    if ($std_core_hnd._yielding()) {
      var x_10446 = $std_core_hnd.yield_extend(_mlift_phexdouble_10403);
    }
    else {
      var x_10446 = $std_text_parse.hex_digits();
    }
  }
  else {
    var x_10446 = "";
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10355 /* string */ ) {
      return _mlift_phexdouble_10404(man, _c_x10355);
    });
  }
  else {
    return _mlift_phexdouble_10404(man, x_10446);
  }
}
 
 
export function _mlift_phexdouble_10406(man) /* (man : string) -> text/parse/parse float64 */  {
   
  var ev_10452 = $std_core_hnd._evv_at(0);
   
  var _x31 = $std_text_parse.pick_fs__select(ev_10452.hnd);
  var x_10450 = _x31(ev_10452.marker, ev_10452);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10352 /* bool */ ) {
      return _mlift_phexdouble_10405(man, _y_x10352);
    });
  }
  else {
    return _mlift_phexdouble_10405(man, x_10450);
  }
}
 
 
export function _mlift_phexdouble_10407(wild_0) /* (wild@0 : char) -> text/parse/parse float64 */  {
   
  var x_10454 = $std_text_parse.hex_digits();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_phexdouble_10406);
  }
  else {
    return _mlift_phexdouble_10406(x_10454);
  }
}
 
 
export function _mlift_phexdouble_10408(wild) /* (wild : char) -> text/parse/parse float64 */  {
   
  var x_10456 = $std_text_parse.one_of("xX");
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_phexdouble_10407);
  }
  else {
    return _mlift_phexdouble_10407(x_10456);
  }
}
 
export function phexdouble() /* () -> text/parse/parse float64 */  {
   
  var x_10458 = $std_text_parse.char(0x0030);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_phexdouble_10408);
  }
  else {
     
    var x_0_10461 = $std_text_parse.one_of("xX");
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_phexdouble_10407);
    }
    else {
       
      var x_1_10464 = $std_text_parse.hex_digits();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(_mlift_phexdouble_10406);
      }
      else {
         
        var ev_10470 = $std_core_hnd._evv_at(0);
         
        var _x31 = $std_text_parse.pick_fs__select(ev_10470.hnd);
        var x_2_10467 = _x31(ev_10470.marker, ev_10470);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10352 /* bool */ ) {
            return _mlift_phexdouble_10405(x_1_10464, _y_x10352);
          });
        }
        else {
           
          if (x_2_10467) {
             
            var x_4_10475 = $std_text_parse.char(0x002E);
            if ($std_core_hnd._yielding()) {
              var x_3_10472 = $std_core_hnd.yield_extend(_mlift_phexdouble_10403);
            }
            else {
              var x_3_10472 = $std_text_parse.hex_digits();
            }
          }
          else {
            var x_3_10472 = "";
          }
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_c_x10355 /* string */ ) {
              return _mlift_phexdouble_10404(x_1_10464, _c_x10355);
            });
          }
          else {
             
            var frac = $std_core_sslice.trim_right(x_3_10472, "0");
             
            var ev_0_10480 = $std_core_hnd._evv_at(0);
             
            var _x31 = $std_text_parse.pick_fs__select(ev_0_10480.hnd);
            var x_5_10477 = _x31(ev_0_10480.marker, ev_0_10480);
            if ($std_core_hnd._yielding()) {
              return $std_core_hnd.yield_extend(function(_y_x10356 /* bool */ ) {
                return _mlift_phexdouble_10402(frac, x_1_10464, _y_x10356);
              });
            }
            else {
               
              if (x_5_10477) {
                 
                var x_7_10485 = $std_text_parse.one_of("pP");
                if ($std_core_hnd._yielding()) {
                  var x_6_10482 = $std_core_hnd.yield_extend(_mlift_phexdouble_10400);
                }
                else {
                  var x_6_10482 = $std_text_parse.pint();
                }
              }
              else {
                var x_6_10482 = 0;
              }
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_c_x10359 /* int */ ) {
                  return _mlift_phexdouble_10401(frac, x_1_10464, _c_x10359);
                });
              }
              else {
                 
                var _x_x1_0_10395 = $std_core_types._lp__plus__plus__rp_(x_1_10464, frac);
                 
                var w = $std_core_hnd._evv_swap_create0();
                 
                var x_8 = $std_core_int.xparse(_x_x1_0_10395, true);
                 
                var keep = $std_core_hnd._evv_set(w);
                 
                var w_0 = $std_core_hnd._evv_swap_create0();
                 
                var keep_0 = $std_core_hnd._evv_set(w_0);
                 
                var y_10390 = $std_core_types._int_mul(4,($std_core_string.chars_fs_count(frac)));
                 
                var e = $std_core_types._int_sub(x_6_10482,y_10390);
                 
                var w_1 = $std_core_hnd._evv_swap_create0();
                 
                var _x31 = (x_8 === null) ? 0 : x_8.value;
                var x_11 = ldexp($std_core_types._int_to_double(_x31), e);
                 
                var keep_1 = $std_core_hnd._evv_set(w_1);
                return x_11;
              }
            }
          }
        }
      }
    }
  }
}
 
 
export function prim_parse_float64(s) /* (s : string) -> float64 */  {
  return parseFloat(s);
}
 
 
export function _mlift_pdecdouble_10409(wild_0) /* (wild@0 : char) -> text/parse/parse int */  {
  return $std_text_parse.pint();
}
 
 
export function _mlift_pdecdouble_10410(cur, _c_x10369) /* (cur : sslice/sslice, int) -> float64 */  {
   
  var _x_x1_10399 = $std_core_sslice.string(cur);
  return $std_core_hnd._open_none1(prim_parse_float64, _x_x1_10399);
}
 
 
export function _mlift_pdecdouble_10411(cur, _y_x10366) /* (cur : sslice/sslice, bool) -> text/parse/parse float64 */  {
   
  if (_y_x10366) {
     
    var x_0_10498 = $std_text_parse.one_of("eE");
    if ($std_core_hnd._yielding()) {
      var x_10496 = $std_core_hnd.yield_extend(_mlift_pdecdouble_10409);
    }
    else {
      var x_10496 = $std_text_parse.pint();
    }
  }
  else {
    var x_10496 = 0;
  }
   
  function next_10497(_c_x10369) /* (int) -> float64 */  {
     
    var _x_x1_10399 = $std_core_sslice.string(cur);
    return $std_core_hnd._open_none1(prim_parse_float64, _x_x1_10399);
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(next_10497);
  }
  else {
    return next_10497(x_10496);
  }
}
 
 
export function _mlift_pdecdouble_10412(wild) /* (wild : char) -> text/parse/parse string */  {
  return $std_text_parse.digits0();
}
 
 
export function _mlift_pdecdouble_10413(cur, _c_x10365) /* (cur : sslice/sslice, string) -> float64 */  {
   
  var frac = $std_core_sslice.trim_right(_c_x10365, "0");
   
  var ev_10504 = $std_core_hnd._evv_at(0);
   
  var _x31 = $std_text_parse.pick_fs__select(ev_10504.hnd);
  var x_10502 = _x31(ev_10504.marker, ev_10504);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10366 /* bool */ ) {
      return _mlift_pdecdouble_10411(cur, _y_x10366);
    });
  }
  else {
    return _mlift_pdecdouble_10411(cur, x_10502);
  }
}
 
 
export function _mlift_pdecdouble_10414(cur, _y_x10362) /* (cur : sslice/sslice, bool) -> text/parse/parse float64 */  {
   
  if (_y_x10362) {
     
    var x_0_10508 = $std_text_parse.char(0x002E);
    if ($std_core_hnd._yielding()) {
      var x_10506 = $std_core_hnd.yield_extend(_mlift_pdecdouble_10412);
    }
    else {
      var x_10506 = $std_text_parse.digits0();
    }
  }
  else {
    var x_10506 = "";
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10365 /* string */ ) {
      return _mlift_pdecdouble_10413(cur, _c_x10365);
    });
  }
  else {
    return _mlift_pdecdouble_10413(cur, x_10506);
  }
}
 
 
export function _mlift_pdecdouble_10415(cur, man) /* (cur : sslice/sslice, man : string) -> text/parse/parse float64 */  {
   
  var ev_10512 = $std_core_hnd._evv_at(0);
   
  var _x31 = $std_text_parse.pick_fs__select(ev_10512.hnd);
  var x_10510 = _x31(ev_10512.marker, ev_10512);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10362 /* bool */ ) {
      return _mlift_pdecdouble_10414(cur, _y_x10362);
    });
  }
  else {
    return _mlift_pdecdouble_10414(cur, x_10510);
  }
}
 
 
export function _mlift_pdecdouble_10416(cur) /* (cur : sslice/sslice) -> text/parse/parse float64 */  {
   
  var x_10514 = $std_text_parse.digits();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(man /* string */ ) {
      return _mlift_pdecdouble_10415(cur, man);
    });
  }
  else {
    return _mlift_pdecdouble_10415(cur, x_10514);
  }
}
 
export function pdecdouble() /* () -> text/parse/parse float64 */  {
   
  var ev_10519 = $std_core_hnd._evv_at(0);
   
  var _x31 = $std_text_parse.current_input_fs__select(ev_10519.hnd);
  var x_10516 = _x31(ev_10519.marker, ev_10519);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pdecdouble_10416);
  }
  else {
     
    var x_0_10521 = $std_text_parse.digits();
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(man /* string */ ) {
        return _mlift_pdecdouble_10415(x_10516, man);
      });
    }
    else {
       
      var ev_0_10527 = $std_core_hnd._evv_at(0);
       
      var _x31 = $std_text_parse.pick_fs__select(ev_0_10527.hnd);
      var x_1_10524 = _x31(ev_0_10527.marker, ev_0_10527);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10362 /* bool */ ) {
          return _mlift_pdecdouble_10414(x_10516, _y_x10362);
        });
      }
      else {
         
        if (x_1_10524) {
           
          var x_3_10532 = $std_text_parse.char(0x002E);
          if ($std_core_hnd._yielding()) {
            var x_2_10529 = $std_core_hnd.yield_extend(_mlift_pdecdouble_10412);
          }
          else {
            var x_2_10529 = $std_text_parse.digits0();
          }
        }
        else {
          var x_2_10529 = "";
        }
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_c_x10365 /* string */ ) {
            return _mlift_pdecdouble_10413(x_10516, _c_x10365);
          });
        }
        else {
           
          var frac = $std_core_sslice.trim_right(x_2_10529, "0");
           
          var ev_1_10537 = $std_core_hnd._evv_at(0);
           
          var _x31 = $std_text_parse.pick_fs__select(ev_1_10537.hnd);
          var x_4_10534 = _x31(ev_1_10537.marker, ev_1_10537);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10366 /* bool */ ) {
              return _mlift_pdecdouble_10411(x_10516, _y_x10366);
            });
          }
          else {
             
            if (x_4_10534) {
               
              var x_6_10542 = $std_text_parse.one_of("eE");
              if ($std_core_hnd._yielding()) {
                var x_5_10539 = $std_core_hnd.yield_extend(_mlift_pdecdouble_10409);
              }
              else {
                var x_5_10539 = $std_text_parse.pint();
              }
            }
            else {
              var x_5_10539 = 0;
            }
            if ($std_core_hnd._yielding()) {
              return $std_core_hnd.yield_extend(function(_c_x10369 /* int */ ) {
                 
                var _x_x1_10399 = $std_core_sslice.string(x_10516);
                return $std_core_hnd._open_none1(prim_parse_float64, _x_x1_10399);
              });
            }
            else {
               
              var _x_x1_10399_0 = $std_core_sslice.string(x_10516);
              return $std_core_hnd._open_none1(prim_parse_float64, _x_x1_10399_0);
            }
          }
        }
      }
    }
  }
}
 
 
export function _mlift_pspecial_10417(wild) /* (wild : string) -> text/parse/parse float64 */  {
  return nan;
}
 
 
export function _mlift_pspecial_10418(wild_0) /* (wild@0 : string) -> text/parse/parse float64 */  {
  return posinf;
}
 
 
export function _mlift_pspecial_10419(wild_1) /* (wild@1 : string) -> text/parse/parse float64 */  {
  return posinf;
}
 
export function pspecial() /* () -> text/parse/parse float64 */  {
   
  var ps_10114 = $std_core_types.Cons(function() {
       
      var x_10546 = $std_text_parse.pstring("nan");
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(_mlift_pspecial_10417);
      }
      else {
        return nan;
      }
    }, $std_core_types.Cons(function() {
         
        var x_0_10548 = $std_text_parse.pstring("infinity");
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(_mlift_pspecial_10418);
        }
        else {
          return posinf;
        }
      }, $std_core_types.Cons(function() {
           
          var x_1_10550 = $std_text_parse.pstring("inf");
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(_mlift_pspecial_10419);
          }
          else {
            return posinf;
          }
        }, $std_core_types.Nil)));
  if (ps_10114 === null) {
     
    var ev_10552 = $std_core_hnd._evv_at(0);
    var _x31 = $std_text_parse.fail_fs__select(ev_10552.hnd);
    return _x31(ev_10552.marker, ev_10552, "no further alternatives");
  }
  else {
    return $std_text_parse._unroll_choose_10000(ps_10114);
  }
}
 
 
export function _mlift_pdouble_10420(wild) /* (wild : string) -> text/parse/parse float64 */  {
  return nan;
}
 
 
export function _mlift_pdouble_10421(wild_0) /* (wild@0 : string) -> text/parse/parse float64 */  {
  return posinf;
}
 
 
export function _mlift_pdouble_10422(wild_1) /* (wild@1 : string) -> text/parse/parse float64 */  {
  return posinf;
}
 
 
export function _mlift_pdouble_10423(neg, _c_x10385) /* (neg : bool, float64) -> float64 */  {
  return (neg) ? (-_c_x10385) : _c_x10385;
}
 
 
export function _mlift_pdouble_10424(neg) /* (neg : bool) -> text/parse/parse float64 */  {
   
  var ps_10115 = $std_core_types.Cons(phexdouble, $std_core_types.Cons(pdecdouble, $std_core_types.Cons(function() {
           
          var ps_0_10116 = $std_core_types.Cons(function() {
               
              var x_10555 = $std_text_parse.pstring("nan");
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(_mlift_pdouble_10420);
              }
              else {
                return nan;
              }
            }, $std_core_types.Cons(function() {
                 
                var x_0_10557 = $std_text_parse.pstring("infinity");
                if ($std_core_hnd._yielding()) {
                  return $std_core_hnd.yield_extend(_mlift_pdouble_10421);
                }
                else {
                  return posinf;
                }
              }, $std_core_types.Cons(function() {
                   
                  var x_1_10559 = $std_text_parse.pstring("inf");
                  if ($std_core_hnd._yielding()) {
                    return $std_core_hnd.yield_extend(_mlift_pdouble_10422);
                  }
                  else {
                    return posinf;
                  }
                }, $std_core_types.Nil)));
          if (ps_0_10116 === null) {
             
            var ev_10561 = $std_core_hnd._evv_at(0);
            var _x32 = $std_text_parse.fail_fs__select(ev_10561.hnd);
            return _x32(ev_10561.marker, ev_10561, "no further alternatives");
          }
          else {
            return $std_text_parse._unroll_choose_10000(ps_0_10116);
          }
        }, $std_core_types.Cons(function() {
            return 0.0;
          }, $std_core_types.Nil))));
   
  if (ps_10115 === null) {
     
    var ev_0_10566 = $std_core_hnd._evv_at(0);
    var _x33 = $std_text_parse.fail_fs__select(ev_0_10566.hnd);
    var x_3_10564 = _x33(ev_0_10566.marker, ev_0_10566, "no further alternatives");
  }
  else {
    var x_3_10564 = $std_text_parse._unroll_choose_10000(ps_10115);
  }
   
  function next_2_10565(_c_x10385) /* (float64) -> float64 */  {
    return (neg) ? (-_c_x10385) : _c_x10385;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(next_2_10565);
  }
  else {
    return next_2_10565(x_3_10564);
  }
}
 
export function pdouble() /* () -> text/parse/parse float64 */  {
   
  var x_10571 = $std_text_parse.sign();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pdouble_10424);
  }
  else {
     
    var ps_10115 = $std_core_types.Cons(phexdouble, $std_core_types.Cons(pdecdouble, $std_core_types.Cons(function() {
             
            var ps_0_10116 = $std_core_types.Cons(function() {
                 
                var x_0_10574 = $std_text_parse.pstring("nan");
                if ($std_core_hnd._yielding()) {
                  return $std_core_hnd.yield_extend(_mlift_pdouble_10420);
                }
                else {
                  return nan;
                }
              }, $std_core_types.Cons(function() {
                   
                  var x_1_10576 = $std_text_parse.pstring("infinity");
                  if ($std_core_hnd._yielding()) {
                    return $std_core_hnd.yield_extend(_mlift_pdouble_10421);
                  }
                  else {
                    return posinf;
                  }
                }, $std_core_types.Cons(function() {
                     
                    var x_2_10578 = $std_text_parse.pstring("inf");
                    if ($std_core_hnd._yielding()) {
                      return $std_core_hnd.yield_extend(_mlift_pdouble_10422);
                    }
                    else {
                      return posinf;
                    }
                  }, $std_core_types.Nil)));
            if (ps_0_10116 === null) {
               
              var ev_10580 = $std_core_hnd._evv_at(0);
              var _x32 = $std_text_parse.fail_fs__select(ev_10580.hnd);
              return _x32(ev_10580.marker, ev_10580, "no further alternatives");
            }
            else {
              return $std_text_parse._unroll_choose_10000(ps_0_10116);
            }
          }, $std_core_types.Cons(function() {
              return 0.0;
            }, $std_core_types.Nil))));
     
    if (ps_10115 === null) {
       
      var ev_0_10586 = $std_core_hnd._evv_at(0);
      var _x33 = $std_text_parse.fail_fs__select(ev_0_10586.hnd);
      var x_4_10583 = _x33(ev_0_10586.marker, ev_0_10586, "no further alternatives");
    }
    else {
      var x_4_10583 = $std_text_parse._unroll_choose_10000(ps_10115);
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_c_x10385 /* float64 */ ) {
        return (x_10571) ? (-_c_x10385) : _c_x10385;
      });
    }
    else {
      return (x_10571) ? (-x_4_10583) : x_4_10583;
    }
  }
}
 
 
export function parse_float64(s) /* (s : string) -> maybe<float64> */  {
   
  var s_0_10118 = $std_core_string.to_lower($std_core_string.trim_right($std_core_string.trim_left(s)));
   
  var perr_10117 = $std_text_parse.parse_eof($std_core_sslice.Sslice(s_0_10118, 0, s_0_10118.length), pdouble);
  if (perr_10117._tag === 1) {
    return $std_core_types.Just(perr_10117.result);
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _lift_sum_10335(comp, total, _uniq_xs_10277) /* forall<h> (comp : local-var<h,float64>, total : local-var<h,float64>, list<float64>) -> (local<h>) () */  { tailcall: while(1)
{
  if (_uniq_xs_10277 !== null) {
     
    var t = ((((total).value)) + (_uniq_xs_10277.head));
     
    var _x32 = ((Math.abs((((total).value)))) >= (Math.abs((_uniq_xs_10277.head))));
    if (_x32) {
      var c = ((((((total).value)) - t)) + (_uniq_xs_10277.head));
    }
    else {
      var c = ((((_uniq_xs_10277.head) - t)) + (((total).value)));
    }
     
    ((comp).value = (((((comp).value)) + c)));
     
    var _null_ = ((total).value = t);
    {
      // tail call
      _uniq_xs_10277 = _uniq_xs_10277.tail;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_sum_10334(comp, total, _uniq_xs_10272) /* forall<h> (comp : local-var<h,float64>, total : local-var<h,float64>, list<float64>) -> (local<h>) () */  {
  if (_uniq_xs_10272 === null) {
    return $std_core_types.Unit;
  }
  else {
    return _lift_sum_10335(comp, total, _uniq_xs_10272);
  }
}
 
 
export function sum(xs) /* (xs : list<float64>) -> float64 */  {
  return function() {
     
    var loc = { value: (0.0) };
     
    var loc_0 = { value: (0.0) };
     
    _lift_sum_10334(loc_0, loc, xs);
     
    var res_0 = ((((loc).value)) + (((loc_0).value)));
     
    var res = $std_core_hnd.prompt_local_var(loc_0, res_0);
    return $std_core_hnd.prompt_local_var(loc, res);
  }();
}
 
 
export function hypot(x, y) /* (x : float64, y : float64) -> float64 */  {
   
  var xx = Math.abs(x);
   
  var yy = Math.abs(y);
   
  var lo = ((xx <= yy)) ? xx : yy;
   
  var hi = ((xx >= yy)) ? xx : yy;
  if ((hi === (0.0))) {
    return 0.0;
  }
  else {
     
    var z = (lo / hi);
    return (hi * (Math.sqrt((((1.0) + ((z * z)))))));
  }
}
 
 
export function sqr(x) /* (x : float64) -> float64 */  {
  return (x * x);
}
 
 
export function xyz_fs_hypot(x, y, z) /* (x : float64, y : float64, z : float64) -> float64 */  {
   
  var xx = Math.abs(x);
   
  var yy = Math.abs(y);
   
  var zz = Math.abs(z);
   
  var x_0_10125 = ((xx >= yy)) ? xx : yy;
   
  var hi = ((x_0_10125 >= zz)) ? x_0_10125 : zz;
  if ((hi === (0.0))) {
    return 0.0;
  }
  else {
     
    var x_4_10131 = (zz / hi);
     
    var x_2_10129 = (xx / hi);
     
    var x_3_10130 = (yy / hi);
    return (hi * (Math.sqrt(((((((x_2_10129 * x_2_10129)) + ((x_3_10130 * x_3_10130)))) + ((x_4_10131 * x_4_10131)))))));
  }
}
 
 
export function abs_max(x, y) /* (x : float64, y : float64) -> float64 */  {
   
  var x_0_10132 = Math.abs(x);
   
  var y_0_10133 = Math.abs(y);
  return ((x_0_10132 >= y_0_10133)) ? x_0_10132 : y_0_10133;
}
 
 
export function list_fs__lift_abs_max_10337(_uniq_xs_10291, _uniq_z_10292) /* (list<float64>, float64) -> float64 */  { tailcall: while(1)
{
  if (_uniq_xs_10291 !== null) {
     
    var x_0_10134 = Math.abs((_uniq_xs_10291.head));
    {
      // tail call
      var _x32 = ((x_0_10134 >= _uniq_z_10292)) ? x_0_10134 : _uniq_z_10292;
      _uniq_xs_10291 = _uniq_xs_10291.tail;
      _uniq_z_10292 = _x32;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10292;
  }
}}
 
 
export function list_fs__lift_abs_max_10336(_uniq_xs_10285, _uniq_z_10286) /* (list<float64>, float64) -> float64 */  {
  if (_uniq_xs_10285 === null) {
    return _uniq_z_10286;
  }
  else {
    return list_fs__lift_abs_max_10337(_uniq_xs_10285, _uniq_z_10286);
  }
}
 
 
export function list_fs_abs_max(xs) /* (xs : list<float64>) -> float64 */  {
  return list_fs__lift_abs_max_10336(xs, 0.0);
}
 
 
export function list_fs__lift_hypot_10339(_uniq_xs_10307, _uniq_z_10308) /* (list<float64>, float64) -> float64 */  { tailcall: while(1)
{
  if (_uniq_xs_10307 !== null) {
     
    var x_0_10134 = Math.abs((_uniq_xs_10307.head));
    {
      // tail call
      var _x33 = ((x_0_10134 >= _uniq_z_10308)) ? x_0_10134 : _uniq_z_10308;
      _uniq_xs_10307 = _uniq_xs_10307.tail;
      _uniq_z_10308 = _x33;
      continue tailcall;
    }
  }
  else {
    return _uniq_z_10308;
  }
}}
 
 
export function list_fs__lift_hypot_10338(_uniq_xs_10301, _uniq_z_10302) /* (list<float64>, float64) -> float64 */  {
  if (_uniq_xs_10301 === null) {
    return _uniq_z_10302;
  }
  else {
    return list_fs__lift_hypot_10339(_uniq_xs_10301, _uniq_z_10302);
  }
}
 
 
export function list_fs__trmc_lift_hypot_10341(hi, _uniq_xs_10322, _acc) /* (hi : float64, list<float64>, ctx<list<float64>>) -> list<float64> */  { tailcall: while(1)
{
  if (_uniq_xs_10322 !== null) {
     
    var x_0_10136 = ((_uniq_xs_10322.head) / hi);
     
    var _trmc_x10346 = (x_0_10136 * x_0_10136);
     
    var _trmc_x10347 = undefined;
     
    var _trmc_x10348 = $std_core_types.Cons(_trmc_x10346, _trmc_x10347);
    {
      // tail call
      var _x34 = $std_core_types._cctx_extend(_acc,_trmc_x10348,({obj: _trmc_x10348, field_name: "tail"}));
      _uniq_xs_10322 = _uniq_xs_10322.tail;
      _acc = _x34;
      continue tailcall;
    }
  }
  else {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Nil));
  }
}}
 
 
export function list_fs__lift_hypot_10341(hi_0, _uniq_xs_10322_0) /* (hi : float64, list<float64>) -> list<float64> */  {
  return list_fs__trmc_lift_hypot_10341(hi_0, _uniq_xs_10322_0, $std_core_types._cctx_empty());
}
 
 
export function list_fs__lift_hypot_10340(hi, _uniq_xs_10317) /* (hi : float64, list<float64>) -> list<float64> */  {
  if (_uniq_xs_10317 === null) {
    return $std_core_types.Nil;
  }
  else {
    return list_fs__trmc_lift_hypot_10341(hi, _uniq_xs_10317, $std_core_types._cctx_empty());
  }
}
 
 
export function list_fs_hypot(xs) /* (xs : list<float64>) -> float64 */  {
   
  var hi = list_fs__lift_hypot_10338(xs, 0.0);
  if ((hi === (0.0))) {
    return 0.0;
  }
  else {
     
    var xs_0_10629 = list_fs__lift_hypot_10340(hi, xs);
    return (hi * (Math.sqrt((function() {
       
      var loc = { value: (0.0) };
       
      var loc_0 = { value: (0.0) };
       
      _lift_sum_10334(loc_0, loc, xs_0_10629);
       
      var res_0 = ((((loc).value)) + (((loc_0).value)));
       
      var res = $std_core_hnd.prompt_local_var(loc_0, res_0);
      return $std_core_hnd.prompt_local_var(loc, res);
    }()))));
  }
}
 
export var rad2deg;
var rad2deg = ((180.0) / (3.141592653589793));
 
export var deg2rad;
var deg2rad = ((3.141592653589793) / (180.0));
 
 
export function deg(rad_0) /* (rad : float64) -> float64 */  {
  return (rad_0 * rad2deg);
}
 
 
export function rad(deg_0) /* (deg : float64) -> float64 */  {
  return (deg_0 * deg2rad);
}
 
 
export function with_sign_of(x, y) /* (x : float64, y : float64) -> float64 */  {
  if ((y < (0.0))) {
    return (-(Math.abs(x)));
  }
  else {
    return Math.abs(x);
  }
}
 
 
export function atanh(d) /* (d : float64) -> float64 */  {
  return Math.atanh(d);
}
 
 
export function acosh(d) /* (d : float64) -> float64 */  {
  return Math.acosh(d);
}
 
 
export function asinh(d) /* (d : float64) -> float64 */  {
  return Math.asinh(d);
}
