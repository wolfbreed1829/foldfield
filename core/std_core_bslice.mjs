// Koka generated module: std/core/bslice, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_debug from './std_core_debug.mjs';
import * as $std_core_bytes from './std_core_bytes.mjs';
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_int from './std_core_int.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
import * as $std_core_list from './std_core_list.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
 
// externals
 
// type declarations
// type bslice
export function Bslice(backing_bytes, start, len) /* (backing-bytes : bytes, start : int, len : int) -> bslice */  {
  return { backing_bytes: backing_bytes, start: start, len: len };
}
 
// declarations
 
 
export function bslice_fs_backing_bytes(bslice) /* (bslice : bslice) -> bytes */  {
  return bslice.backing_bytes;
}
 
 
export function bslice_fs_start(bslice) /* (bslice : bslice) -> int */  {
  return bslice.start;
}
 
 
export function bslice_fs_len(bslice) /* (bslice : bslice) -> int */  {
  return bslice.len;
}
 
export function bslice_fs__copy(_this, backing_bytes, start, len) /* (bslice, backing-bytes : ? bytes, start : ? int, len : ? int) -> bslice */  {
  if (backing_bytes !== undefined) {
    var _x0 = backing_bytes;
  }
  else {
    var _x0 = _this.backing_bytes;
  }
  if (start !== undefined) {
    var _x1 = start;
  }
  else {
    var _x1 = _this.start;
  }
  if (len !== undefined) {
    var _x2 = len;
  }
  else {
    var _x2 = _this.len;
  }
  return Bslice(_x0, _x1, _x2);
}
 
 
export var empty;
var empty = Bslice($std_core_bytes.empty, 0, 0);
 
 
export function is_empty(slice_0) /* (slice : bslice) -> bool */  {
  var _x3 = slice_0.len;
  return $std_core_types._int_le(_x3,0);
}
 
 
export function slice(b) /* (b : bytes) -> bslice */  {
  return Bslice(b, 0, $std_core_types._int_from_int32(($std_core_bytes.prim_length(b))));
}
 
 
export function first(b, n) /* (b : bytes, n : ? int) -> bslice */  {
   
  var hi_10007 = $std_core_types._int_from_int32(($std_core_bytes.prim_length(b)));
   
  var _x5 = (n !== undefined) ? n : 1;
  var _x4 = $std_core_types._int_ge(_x5,0);
  if (_x4) {
    var i_0_10017 = (n !== undefined) ? n : 1;
  }
  else {
    var i_0_10017 = 0;
  }
  var _x4 = ($std_core_types._int_le(i_0_10017,hi_10007)) ? i_0_10017 : hi_10007;
  return Bslice(b, 0, _x4);
}
 
 
export function last(b, n) /* (b : bytes, n : ? int) -> bslice */  {
   
  var total = $std_core_types._int_from_int32(($std_core_bytes.prim_length(b)));
   
  var _x6 = (n !== undefined) ? n : 1;
  var _x5 = $std_core_types._int_ge(_x6,0);
  if (_x5) {
    var i_0_10017 = (n !== undefined) ? n : 1;
  }
  else {
    var i_0_10017 = 0;
  }
   
  var count = ($std_core_types._int_le(i_0_10017,total)) ? i_0_10017 : total;
   
  var start = $std_core_types._int_sub(total,count);
  return Bslice(b, start, count);
}
 
 
export function bytes(_pat_x54__16) /* (bslice) -> bytes */  {
  return $std_core_bytes.subbytes(_pat_x54__16.backing_bytes, _pat_x54__16.start, _pat_x54__16.len);
}
 
 
export function next(_pat_x59__15) /* (bslice) -> maybe2<int,bslice> */  {
  if ($std_core_types._int_le((_pat_x59__15.len),0)) {
    return $std_core_types.Nothing2;
  }
  else {
    return $std_core_types.Just2($std_core_types._int_from_int32(($std_core_bytes.unsafe_index(_pat_x59__15.backing_bytes, $std_core_int.ssize__t(_pat_x59__15.start)))), Bslice(_pat_x59__15.backing_bytes, $std_core_types._int_add((_pat_x59__15.start),1), $std_core_types._int_sub((_pat_x59__15.len),1)));
  }
}
 
 
export function advance(_pat_x67__18, count) /* (bslice, count : int) -> bslice */  {
   
  var total = $std_core_types._int_from_int32(($std_core_bytes.prim_length(_pat_x67__18.backing_bytes)));
   
  var i_10020 = $std_core_types._int_add((_pat_x67__18.start),count);
   
  var i_0_10017 = ($std_core_types._int_ge(i_10020,0)) ? i_10020 : 0;
   
  var newstart = ($std_core_types._int_le(i_0_10017,total)) ? i_0_10017 : total;
   
  var j_10026 = $std_core_types._int_sub(total,newstart);
   
  var newlen = ($std_core_types._int_ge((_pat_x67__18.len),j_10026)) ? _pat_x67__18.len : j_10026;
  return Bslice(_pat_x67__18.backing_bytes, newstart, newlen);
}
 
 
export function extend(_pat_x75__17, count) /* (bslice, count : int) -> bslice */  {
   
  var total = $std_core_types._int_from_int32(($std_core_bytes.prim_length(_pat_x75__17.backing_bytes)));
   
  var i_10030 = $std_core_types._int_add((_pat_x75__17.len),count);
   
  var hi_10032 = $std_core_types._int_sub(total,(_pat_x75__17.start));
   
  var i_0_10017 = ($std_core_types._int_ge(i_10030,0)) ? i_10030 : 0;
   
  var newlen = ($std_core_types._int_le(i_0_10017,hi_10032)) ? i_0_10017 : hi_10032;
  return Bslice(_pat_x75__17.backing_bytes, _pat_x75__17.start, newlen);
}
 
 
export function truncate(_pat_x81__19) /* (bslice) -> bslice */  {
  return Bslice(_pat_x81__19.backing_bytes, _pat_x81__19.start, 0);
}
 
 
export function drop(_pat_x85__15, n) /* (bslice, n : int) -> bslice */  {
   
  var count = ($std_core_types._int_le(n,0)) ? n : 0;
   
  var total = $std_core_types._int_from_int32(($std_core_bytes.prim_length(_pat_x85__15.backing_bytes)));
   
  var i_0_10040 = $std_core_types._int_add((_pat_x85__15.start),count);
   
  var i_0_10017 = ($std_core_types._int_ge(i_0_10040,0)) ? i_0_10040 : 0;
   
  var newstart = ($std_core_types._int_le(i_0_10017,total)) ? i_0_10017 : total;
   
  var i_1_10045 = $std_core_types._int_sub((_pat_x85__15.len),count);
   
  var hi_0_10047 = $std_core_types._int_sub(total,newstart);
   
  var i_0_10017_0 = ($std_core_types._int_ge(i_1_10045,0)) ? i_1_10045 : 0;
   
  var newlen = ($std_core_types._int_le(i_0_10017_0,hi_0_10047)) ? i_0_10017_0 : hi_0_10047;
  return Bslice(_pat_x85__15.backing_bytes, newstart, newlen);
}
 
 
export function take(_pat_x93__15, n) /* (bslice, n : int) -> bslice */  {
   
  var i_0_10017 = ($std_core_types._int_ge(n,0)) ? n : 0;
   
  var newlen = ($std_core_types._int_le(i_0_10017,(_pat_x93__15.len))) ? i_0_10017 : _pat_x93__15.len;
  return Bslice(_pat_x93__15.backing_bytes, _pat_x93__15.start, newlen);
}
 
 
export function subslice(_pat_x98__19, start, len) /* (bslice, start : int, len : int) -> bslice */  {
   
  var i_0_10017 = ($std_core_types._int_ge(start,0)) ? start : 0;
   
  var newstart = ($std_core_types._int_le(i_0_10017,(_pat_x98__19.len))) ? i_0_10017 : _pat_x98__19.len;
   
  var hi_0_10060 = $std_core_types._int_sub((_pat_x98__19.len),newstart);
   
  var i_0_10017_0 = ($std_core_types._int_ge(len,0)) ? len : 0;
   
  var newlen = ($std_core_types._int_le(i_0_10017_0,hi_0_10060)) ? i_0_10017_0 : hi_0_10060;
  return Bslice(_pat_x98__19.backing_bytes, $std_core_types._int_add((_pat_x98__19.start),newstart), newlen);
}
 
 
export function before(_pat_x105__17) /* (bslice) -> bslice */  {
  return Bslice(_pat_x105__17.backing_bytes, 0, _pat_x105__17.start);
}
 
 
export function after(_pat_x110__16) /* (bslice) -> bslice */  {
   
  var newstart = $std_core_types._int_add((_pat_x110__16.start),(_pat_x110__16.len));
   
  var x_0_10069 = $std_core_types._int_from_int32(($std_core_bytes.prim_length(_pat_x110__16.backing_bytes)));
   
  var j_10068 = $std_core_types._int_sub(x_0_10069,newstart);
   
  var newlen = ($std_core_types._int_ge(0,j_10068)) ? 0 : j_10068;
  return Bslice(_pat_x110__16.backing_bytes, newstart, newlen);
}
 
 
export function _mlift_index_10183(b, i, start, _c_x10179) /* (b : bytes, i : int, start : int, ()) -> int */  {
  return $std_core_types._int_from_int32(($std_core_bytes.unsafe_index(b, $std_core_int.ssize__t($std_core_types._int_add(start,i)))));
}
 
 
export function _index(_pat_x116__18, i) /* (bslice, i : int) -> exn int */  {
   
  if ($std_core_types._int_lt(i,0)) {
     
    var ev_10187 = $std_core_hnd._evv_at(0);
    var _x5 = $std_core_exn.throw_exn_fs__select(ev_10187.hnd);
    var x_10184 = _x5(ev_10187.marker, ev_10187, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
  }
  else {
    if ($std_core_types._int_ge(i,(_pat_x116__18.len))) {
       
      var ev_0_10190 = $std_core_hnd._evv_at(0);
      var _x6 = $std_core_exn.throw_exn_fs__select(ev_0_10190.hnd);
      var x_10184 = _x6(ev_0_10190.marker, ev_0_10190, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
    }
    else {
      var x_10184 = $std_core_types.Unit;
    }
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10179 /* () */ ) {
      return $std_core_types._int_from_int32(($std_core_bytes.unsafe_index(_pat_x116__18.backing_bytes, $std_core_int.ssize__t($std_core_types._int_add((_pat_x116__18.start),i)))));
    });
  }
  else {
    return $std_core_types._int_from_int32(($std_core_bytes.unsafe_index(_pat_x116__18.backing_bytes, $std_core_int.ssize__t($std_core_types._int_add((_pat_x116__18.start),i)))));
  }
}
