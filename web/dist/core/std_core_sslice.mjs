// Koka generated module: std/core/sslice, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_undiv from './std_core_undiv.mjs';
import * as $std_core_unsafe from './std_core_unsafe.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_int from './std_core_int.mjs';
import * as $std_core_string from './std_core_string.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2012-2024, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
function _slice_to_string(sl) {
  if (sl.start===0 && sl.len===sl.str.length) return sl.str;
  return sl.str.substr(sl.start,sl.len);
}
function _sslice_first( s ) {
  var len;
  if (s.length===0) len = 0;
  else if ($std_core_string._is_high_surrogate(s.charCodeAt(0))) len = 2
  else len = 1;
  return { str: s, start: 0, len: len };
}
function _sslice_last( s ) {
  var len;
  if (s.length===0) len = 0;
  else if ($std_core_string._is_low_surrogate(s.charCodeAt(s.length-1))) len = 2
  else len = 1;
  return { str: s, start: s.length-len, len: len };
}
function _sslice_count(slice) {
  if (slice.len<=0) return 0;
  var count = 0;
  var end = slice.start + slice.len;
  $std_core_string._char_iter(slice.str, slice.start, function(c,i,nexti) {
    count++;
    return (nexti >= end);
  });
  return count;
}
// Extend the length of slice
function _sslice_extend( slice, count ) {
  if (count===0) return slice;
  var idx = slice.start + slice.len;
  if (count > 0) {
    $std_core_string._char_iter(slice.str, idx, function(c,i,nexti) {
      count--;
      idx = nexti;
      return (count <= 0);
    });
  }
  else {
    $std_core_string._char_reviter(slice.str, idx-1, function(c,i,nexti) {
      count++;
      idx = i;
      return (count >= 0 || idx <= slice.start);
    });
  }
  return { str: slice.str, start: slice.start, len: (idx > slice.start ? idx - slice.start : 0) };
}
// advance the start position of a slice
function _sslice_advance( slice, count ) {
  if (count===0) return slice;
  var idx = slice.start;
  var end = slice.start + slice.len;
  var slicecount = _sslice_count(slice); // todo: optimize by caching the character count?
  if (count > 0) {
    var extra = 0;
    $std_core_string._char_iter(slice.str, idx, function(c,i,nexti) {
      extra++;
      idx = nexti;
      return (extra >= count);
    });
    if (extra < slicecount && idx < end) { // optimize
      return _sslice_extend({ str: slice.str, start: idx, len: end-idx }, extra);
    }
  }
  else {
    var extra = 0;
    $std_core_string._char_reviter(slice.str, idx-1, function(c,i,nexti) {
      extra++;
      idx = i;
      return (extra >= -count);
    });
    if (extra < slicecount && idx < slice.start) {  // optimize
      return _sslice_extend({ str: slice.str, start: idx, len: slice.start-idx }, slicecount - extra);
    }
  }
  return _sslice_extend( { str: slice.str, start: idx, len: 0 }, slicecount );
}
// iterate through a slice
function _sslice_next( slice ) {
  if (slice.len <= 0) return null;
  var c = slice.str.charCodeAt(slice.start);
  var n = 1;
  if ($std_core_string._is_high_surrogate(c) && slice.len > 1) {
    var lo = slice.str.charCodeAt(slice.start+1);
    if ($std_core_string._is_low_surrogate(lo)) {
      c = $std_core_string._from_surrogate(c,lo);
      n = 2;
    }
  }
  return $std_core_types.Just( {fst: c, snd: { str: slice.str, start: slice.start+n, len: slice.len-n }} );
}
// return the common prefix of two strings
function _sslice_common_prefix( s, t, upto ) {
  var i;
  var max = Math.min(s.length,t.length);
  for(i = 0; i < max && upto > 0; i++) {
    var c = s.charCodeAt(i);
    if (c !== t.charCodeAt(i)) break;
    if (!$std_core_string._is_low_surrogate(c)) upto--; // count characters
  }
  return { str: s, start: 0, len: i };
}
 
// type declarations
// type sslice
export function Sslice(str, start, len) /* (str : string, start : int, len : int) -> sslice */  {
  return { str: str, start: start, len: len };
}
 
// declarations
 
 
export function sslice_fs_len(sslice) /* (sslice : sslice) -> int */  {
  return sslice.len;
}
 
 
export function sslice_fs_start(sslice) /* (sslice : sslice) -> int */  {
  return sslice.start;
}
 
 
export function sslice_fs_str(sslice) /* (sslice : sslice) -> string */  {
  return sslice.str;
}
 
export function sslice_fs__copy(_this, str, start, len) /* (sslice, str : ? string, start : ? int, len : ? int) -> sslice */  {
  if (str !== undefined) {
    var _x0 = str;
  }
  else {
    var _x0 = _this.str;
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
  return Sslice(_x0, _x1, _x2);
}
 
 
export function _new_sslice(str, start, len) /* (str : string, start : int, len : int) -> sslice */  {
  return Sslice(str, start, len);
}
 
 
export function string(slice_0) /* (slice : sslice) -> string */  {
  return _slice_to_string(slice_0);
}
 
 
export function _lp__eq__eq__rp_(slice1, slice2) /* (slice1 : sslice, slice2 : sslice) -> bool */  {
  var _x3 = Object.is((slice1.str),(slice2.str));
  if (_x3) {
    if ($std_core_types._int_eq((slice1.start),(slice2.start))) {
      if ($std_core_types._int_eq((slice1.len),(slice2.len))) {
        return true;
      }
      else {
        return $std_core_string._lp__eq__eq__rp_(string(slice1), string(slice2));
      }
    }
    else {
      return $std_core_string._lp__eq__eq__rp_(string(slice1), string(slice2));
    }
  }
  else {
    return $std_core_string._lp__eq__eq__rp_(string(slice1), string(slice2));
  }
}
 
 
export function _lp__excl__eq__rp_(slice1, slice2) /* (slice1 : sslice, slice2 : sslice) -> bool */  {
   
  var b_10003 = _lp__eq__eq__rp_(slice1, slice2);
  return (b_10003) ? false : true;
}
 
 
export function _lp__eq__eq__eq__rp_(slice1, slice2) /* (slice1 : sslice, slice2 : sslice) -> bool */  {
  if ($std_core_types._int_eq((slice1.start),(slice2.start))) {
    if ($std_core_types._int_eq((slice1.len),(slice2.len))) {
      return $std_core_string._lp__eq__eq__rp_(slice1.str, slice2.str);
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
 
 
export function _lp__excl__eq__eq__rp_(slice1, slice2) /* (slice1 : sslice, slice2 : sslice) -> bool */  {
   
  var b_10004 = _lp__eq__eq__eq__rp_(slice1, slice2);
  return (b_10004) ? false : true;
}
 
 
export function count(slice_0) /* (slice : sslice) -> int */  {
  return _sslice_count(slice_0);
}
 
export function first1(s) /* (s : string) -> sslice */  {
  return _sslice_first(s);
}
 
export function last1(s) /* (s : string) -> sslice */  {
  return _sslice_last(s);
}
 
 
export function advance(slice_0, count_0) /* (slice : sslice, count : int) -> sslice */  {
  return _sslice_advance(slice_0,count_0);
}
 
 
export function extend(slice_0, count_0) /* (slice : sslice, count : int) -> sslice */  {
  return _sslice_extend(slice_0,count_0);
}
 
 
export function first(s, n) /* (s : string, n : ? int) -> sslice */  {
   
  var slice_0 = first1(s);
  var _x5 = (n !== undefined) ? n : 1;
  var _x4 = $std_core_types._int_eq(_x5,1);
  if (_x4) {
    return slice_0;
  }
  else {
    var _x6 = (n !== undefined) ? n : 1;
    return extend(slice_0, $std_core_types._int_sub(_x6,1));
  }
}
 
 
export function last(s, n) /* (s : string, n : ? int) -> sslice */  {
   
  var slice_0 = last1(s);
  var _x8 = (n !== undefined) ? n : 1;
  var _x7 = $std_core_types._int_eq(_x8,1);
  if (_x7) {
    return slice_0;
  }
  else {
    var _x9 = (n !== undefined) ? n : 1;
    var _x10 = (n !== undefined) ? n : 1;
    return extend(advance(slice_0, $std_core_types._int_sub(1,_x9)), $std_core_types._int_sub(_x10,1));
  }
}
 
 
export function before(slice_0) /* (slice : sslice) -> sslice */  {
  return Sslice(slice_0.str, 0, slice_0.start);
}
 
 
export function after(slice_0) /* (slice : sslice) -> sslice */  {
   
  var new_start = $std_core_types._int_add((slice_0.start),(slice_0.len));
   
  var x_0_10013 = (slice_0.str).length;
  return Sslice(slice_0.str, new_start, $std_core_types._int_sub(x_0_10013,new_start));
}
 
 
export function capitalize(s) /* (s : string) -> string */  {
   
  var slice_0_1 = first1(s);
   
  var _x13 = undefined;
  var _x12 = (_x13 !== undefined) ? _x13 : 1;
  var _x11 = $std_core_types._int_eq(_x12,1);
  if (_x11) {
    var slice_0_0_10019 = slice_0_1;
  }
  else {
    var _x15 = undefined;
    var _x14 = (_x15 !== undefined) ? _x15 : 1;
    var slice_0_0_10019 = extend(slice_0_1, $std_core_types._int_sub(_x14,1));
  }
   
  var slice_0 = first1(s);
  var _x14 = undefined;
  var _x13 = (_x14 !== undefined) ? _x14 : 1;
  var _x12 = $std_core_types._int_eq(_x13,1);
  if (_x12) {
    var _x11 = slice_0;
  }
  else {
    var _x16 = undefined;
    var _x15 = (_x16 !== undefined) ? _x16 : 1;
    var _x11 = extend(slice_0, $std_core_types._int_sub(_x15,1));
  }
   
  var new_start = $std_core_types._int_add((slice_0_0_10019.start),(slice_0_0_10019.len));
   
  var x_1_10026 = (slice_0_0_10019.str).length;
  var _x17 = Sslice(slice_0_0_10019.str, new_start, $std_core_types._int_sub(x_1_10026,new_start));
  return $std_core_types._lp__plus__plus__rp_($std_core_string.to_upper(string(_x11)), string(_x17));
}
 
 
export function slice(s) /* (s : string) -> sslice */  {
  return Sslice(s, 0, s.length);
}
 
 
export var empty;
var empty = Sslice("", 0, 0);
 
 
export function is_empty(slice_0) /* (slice : sslice) -> bool */  {
   
  var _x18 = slice_0.len;
  var b_10028 = $std_core_types._int_gt(_x18,0);
  return (b_10028) ? false : true;
}
 
 
export var invalid;
var invalid = Sslice("", -1, 0);
 
 
export function is_valid(slice_0) /* (slice : sslice) -> bool */  {
  var _x18 = slice_0.start;
  return $std_core_types._int_ge(_x18,0);
}
 
 
export function is_notempty(slice_0) /* (slice : sslice) -> bool */  {
  var _x19 = slice_0.len;
  return $std_core_types._int_gt(_x19,0);
}
 
 
export function head(s) /* (s : string) -> string */  {
   
  var slice_0 = first1(s);
  var _x23 = undefined;
  var _x22 = (_x23 !== undefined) ? _x23 : 1;
  var _x21 = $std_core_types._int_eq(_x22,1);
  if (_x21) {
    var _x20 = slice_0;
  }
  else {
    var _x25 = undefined;
    var _x24 = (_x25 !== undefined) ? _x25 : 1;
    var _x20 = extend(slice_0, $std_core_types._int_sub(_x24,1));
  }
  return string(_x20);
}
 
 
export function tail(s) /* (s : string) -> string */  {
   
  var slice_0_0 = first1(s);
   
  var _x28 = undefined;
  var _x27 = (_x28 !== undefined) ? _x28 : 1;
  var _x26 = $std_core_types._int_eq(_x27,1);
  if (_x26) {
    var slice_0_10038 = slice_0_0;
  }
  else {
    var _x30 = undefined;
    var _x29 = (_x30 !== undefined) ? _x30 : 1;
    var slice_0_10038 = extend(slice_0_0, $std_core_types._int_sub(_x29,1));
  }
   
  var new_start = $std_core_types._int_add((slice_0_10038.start),(slice_0_10038.len));
   
  var x_0_10045 = (slice_0_10038.str).length;
  var _x26 = Sslice(slice_0_10038.str, new_start, $std_core_types._int_sub(x_0_10045,new_start));
  return string(_x26);
}
 
 
export function common_prefix(s, t, upto) /* (s : string, t : string, upto : ? int) -> sslice */  {
  var _x27 = (upto !== undefined) ? upto : -1;
  return _sslice_common_prefix(s,t,_x27);
}
 
 
export function next(slice_0) /* (slice : sslice) -> maybe<(char, sslice)> */  {
  return _sslice_next(slice_0);
}
 
 
export function slice_fs_truncate(slice_0) /* (slice : sslice) -> sslice */  {
  var _x28 = slice_0.str;
  var _x29 = slice_0.start;
  return Sslice(_x28, _x29, 0);
}
 
 
export function slice_fs__mlift_foreach_10222(action, rest, wild) /* forall<e> (action : (c : char) -> e (), rest : sslice, wild : ()) -> e () */  {
  return slice_fs_foreach(rest, action);
}
 
 
export function slice_fs_foreach(slice_0, action_0) /* forall<e> (slice : sslice, action : (c : char) -> e ()) -> e () */  { tailcall: while(1)
{
  var _x30 = next(slice_0);
  if (_x30 === null) {
    return $std_core_types.Unit;
  }
  else {
     
    var x_10228 = action_0(_x30.value.fst);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return slice_fs__mlift_foreach_10222(action_0, _x30.value.snd, wild_0);
      });
    }
    else {
      {
        // tail call
        slice_0 = _x30.value.snd;
        continue tailcall;
      }
    }
  }
}}
 
 
export function string_fs_foreach(s, action) /* forall<e> (s : string, action : (c : char) -> e ()) -> e () */  {
  return slice_fs_foreach(Sslice(s, 0, s.length), action);
}
 
 
export function pred_fs__mlift_lift_count_10194_10223(cnt, _y_x10203) /* forall<h,e> (cnt : local-var<h,int>, int) -> <local<h>|e> () */  {
  return ((cnt).value = ($std_core_types._int_add(_y_x10203,1)));
}
 
 
export function pred_fs__mlift_lift_count_10194_10224(_uniq_rest_10187, cnt_0, pred, _c_x10205) /* forall<h,e> (sslice, cnt : local-var<h,int>, pred : (char) -> e bool, ()) -> () */  {
  return pred_fs__lift_count_10194(cnt_0, pred, _uniq_rest_10187);
}
 
 
export function pred_fs__mlift_lift_count_10194_10225(_uniq_rest_10187_0, cnt_1, pred_0, _y_x10202) /* forall<h,e> (sslice, cnt : local-var<h,int>, pred : (char) -> e bool, bool) -> <local<h>|e> () */  {
   
  if (_y_x10202) {
     
    var x_0_10233 = ((cnt_1).value);
    if ($std_core_hnd._yielding()) {
      var x_10231 = $std_core_hnd.yield_extend(function(_y_x10203_0 /* int */ ) {
        return pred_fs__mlift_lift_count_10194_10223(cnt_1, _y_x10203_0);
      });
    }
    else {
      var x_10231 = pred_fs__mlift_lift_count_10194_10223(cnt_1, x_0_10233);
    }
  }
  else {
    var x_10231 = $std_core_types.Unit;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10205_0 /* () */ ) {
      return pred_fs__mlift_lift_count_10194_10224(_uniq_rest_10187_0, cnt_1, pred_0, _c_x10205_0);
    });
  }
  else {
    return pred_fs__mlift_lift_count_10194_10224(_uniq_rest_10187_0, cnt_1, pred_0, x_10231);
  }
}
 
 
export function pred_fs__lift_count_10194(cnt_2, pred_1, _uniq_slice_0_10181) /* forall<h,e> (cnt : local-var<h,int>, pred : (char) -> e bool, sslice) -> <local<h>|e> () */  { tailcall: while(1)
{
  var _x31 = next(_uniq_slice_0_10181);
  if (_x31 === null) {
    return $std_core_types.Unit;
  }
  else {
     
    var x_1_10235 = pred_1(_x31.value.fst);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10202_0 /* bool */ ) {
        return pred_fs__mlift_lift_count_10194_10225(_x31.value.snd, cnt_2, pred_1, _y_x10202_0);
      });
    }
    else {
       
      if (x_1_10235) {
         
        var x_3_10242 = ((cnt_2).value);
        if ($std_core_hnd._yielding()) {
          var x_2_10239 = $std_core_hnd.yield_extend(function(_y_x10203_1 /* int */ ) {
            return pred_fs__mlift_lift_count_10194_10223(cnt_2, _y_x10203_1);
          });
        }
        else {
          var x_2_10239 = pred_fs__mlift_lift_count_10194_10223(cnt_2, x_3_10242);
        }
      }
      else {
        var x_2_10239 = $std_core_types.Unit;
      }
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_c_x10205_1 /* () */ ) {
          return pred_fs__mlift_lift_count_10194_10224(_x31.value.snd, cnt_2, pred_1, _c_x10205_1);
        });
      }
      else {
        {
          // tail call
          _uniq_slice_0_10181 = _x31.value.snd;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function pred_fs__mlift_count_10226(cnt, wild) /* forall<h,e> (cnt : local-var<h,int>, wild : ()) -> <local<h>|e> int */  {
  return ((cnt).value);
}
 
 
export function pred_fs_count(s, pred) /* forall<e> (s : string, pred : (char) -> e bool) -> e int */  {
  return function() {
     
    var loc = { value: 0 };
     
    var _uniq_slice_0_10181_10196 = Sslice(s, 0, s.length);
     
    var x_10246 = pred_fs__lift_count_10194(loc, pred, _uniq_slice_0_10181_10196);
     
    if ($std_core_hnd._yielding()) {
      var res = $std_core_hnd.yield_extend(function(wild /* () */ ) {
        return ((loc).value);
      });
    }
    else {
      var res = ((loc).value);
    }
    return $std_core_hnd.prompt_local_var(loc, res);
  }();
}
 
 
export function string_fs_truncate(s, count_0) /* (s : string, count : int) -> string */  {
   
  var slice_0 = first1(s);
  var _x35 = undefined;
  var _x34 = (_x35 !== undefined) ? _x35 : 1;
  var _x33 = $std_core_types._int_eq(_x34,1);
  if (_x33) {
    var _x32 = slice_0;
  }
  else {
    var _x37 = undefined;
    var _x36 = (_x37 !== undefined) ? _x37 : 1;
    var _x32 = extend(slice_0, $std_core_types._int_sub(_x36,1));
  }
  return string(extend(_x32, $std_core_types._int_sub(count_0,1)));
}
 
 
export function subslice(slice_0, start, end) /* (slice : sslice, start : int, end : int) -> sslice */  {
  if ($std_core_types._int_lt(start,0)) {
    return slice_0;
  }
  else {
    if ($std_core_types._int_lt(end,0)) {
      return slice_0;
    }
    else {
       
      var slice_0_0_10058 = advance(slice_0, start);
      var _x38 = slice_0_0_10058.str;
      var _x39 = slice_0_0_10058.start;
      return extend(Sslice(_x38, _x39, 0), $std_core_types._int_sub(end,start));
    }
  }
}
 
 
export function take(slice_0, n) /* (slice : sslice, n : int) -> sslice */  {
  if ($std_core_types._int_lt(n,0)) {
    return slice_0;
  }
  else {
    var _x40 = slice_0.str;
    var _x41 = slice_0.start;
    return extend(Sslice(_x40, _x41, 0), n);
  }
}
 
 
export function drop(slice_0, n) /* (slice : sslice, n : int) -> sslice */  {
  if ($std_core_types._int_le(n,0)) {
    return slice_0;
  }
  else {
     
    var slice_0_0_10066 = advance(slice_0, n);
     
    var x_10069 = count(slice_0);
    var _x42 = slice_0_0_10066.str;
    var _x43 = slice_0_0_10066.start;
    return extend(Sslice(_x42, _x43, 0), $std_core_types._int_sub(x_10069,n));
  }
}
 
 
export function slice_fs__mlift_foreach_while_10227(action, rest, _y_x10212) /* forall<a,e> (action : (c : char) -> e maybe<a>, rest : sslice, maybe<a>) -> e maybe<a> */  {
  if (_y_x10212 === null) {
    return slice_fs_foreach_while(rest, action);
  }
  else {
    return _y_x10212;
  }
}
 
 
export function slice_fs_foreach_while(slice_0, action_0) /* forall<a,e> (slice : sslice, action : (c : char) -> e maybe<a>) -> e maybe<a> */  { tailcall: while(1)
{
  var _x44 = next(slice_0);
  if (_x44 === null) {
    return $std_core_types.Nothing;
  }
  else {
     
    var x_10250 = action_0(_x44.value.fst);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10212_0 /* maybe<1128> */ ) {
        return slice_fs__mlift_foreach_while_10227(action_0, _x44.value.snd, _y_x10212_0);
      });
    }
    else {
      if (x_10250 === null) {
        {
          // tail call
          slice_0 = _x44.value.snd;
          continue tailcall;
        }
      }
      else {
        return x_10250;
      }
    }
  }
}}
 
 
export function string_fs_foreach_while(s, action) /* forall<a,e> (s : string, action : (c : char) -> e maybe<a>) -> e maybe<a> */  {
  return slice_fs_foreach_while(Sslice(s, 0, s.length), action);
}
 
 
export function head_char(s) /* (s : string) -> maybe<char> */  {
  return slice_fs_foreach_while(Sslice(s, 0, s.length), $std_core_types.Just);
}
 
 
export function find(s, sub) /* (s : string, sub : string) -> maybe<sslice> */  {
   
  var i = $std_core_types._int_from_int32((((s).indexOf(sub) + 1)));
  if ($std_core_types._int_iszero(i)) {
    return $std_core_types.Nothing;
  }
  else {
    return $std_core_types.Just(Sslice(s, $std_core_types._int_sub(i,1), sub.length));
  }
}
 
 
export function find_last(s, sub) /* (s : string, sub : string) -> maybe<sslice> */  {
   
  var i = $std_core_types._int_from_int32((((s).lastIndexOf(sub) + 1)));
  if ($std_core_types._int_iszero(i)) {
    return $std_core_types.Nothing;
  }
  else {
    return $std_core_types.Just(Sslice(s, $std_core_types._int_sub(i,1), sub.length));
  }
}
 
 
export function starts_with(s, pre) /* (s : string, pre : string) -> maybe<sslice> */  {
  if ((s.substr(0,pre.length) === pre)) {
     
    var x_10075 = s.length;
     
    var y_10076 = pre.length;
    return $std_core_types.Just(Sslice(s, pre.length, $std_core_types._int_sub(x_10075,y_10076)));
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
export function xends_with(s, post) /* (s : string, post : string) -> bool */  {
  return ((s).indexOf(post, (s).length - (post).length) !== -1);
}
 
 
export function ends_with(s, post) /* (s : string, post : string) -> maybe<sslice> */  {
  var _x45 = xends_with(s, post);
  if (_x45) {
     
    var x_10077 = s.length;
     
    var y_10078 = post.length;
    return $std_core_types.Just(Sslice(s, 0, $std_core_types._int_sub(x_10077,y_10078)));
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function trim_left(s, sub) /* (s : string, sub : string) -> string */  { tailcall: while(1)
{
  var _x46 = $std_core_string._lp__eq__eq__rp_(sub, "");
  if (_x46) {
    return s;
  }
  else {
    var _x47 = starts_with(s, sub);
    if (_x47 !== null) {
      {
        // tail call
        var _x48 = string(_x47.value);
        s = _x48;
        continue tailcall;
      }
    }
    else {
      return s;
    }
  }
}}
 
 
export function trim_right(s, sub) /* (s : string, sub : string) -> string */  { tailcall: while(1)
{
  var _x49 = $std_core_string._lp__eq__eq__rp_(sub, "");
  if (_x49) {
    return s;
  }
  else {
    var _x50 = ends_with(s, sub);
    if (_x50 !== null) {
      {
        // tail call
        var _x51 = string(_x50.value);
        s = _x51;
        continue tailcall;
      }
    }
    else {
      return s;
    }
  }
}}
