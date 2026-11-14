// Koka generated module: std/core/bytes, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
import * as $std_core_bool from './std_core_bool.mjs';
import * as $std_core_int from './std_core_int.mjs';
import * as $std_core_show from './std_core_show.mjs';
import * as $std_core_vector from './std_core_vector.mjs';
import * as $std_core_string from './std_core_string.mjs';
import * as $std_core_list from './std_core_list.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
 
// externals
function kk_string_from_bytes(bs) {
  if (typeof TextDecoder !== "undefined") {
    //console.trace( "bytes: " + typeof bs );
    return (new TextDecoder("utf-8",{fatal:false,ignoreBOM:false})).decode(bs);
  }
  else if (typeof Buffer !== "undefined") {
    return Buffer.from(bs).toString();
  }
  else {
    // todo: improve the fallback to correctly decode utf-8?
    return String.fromCharCode.apply(null,b);
  }
}
function kk_string_to_bytes(s) {
  if (typeof TextEncoder !== "undefined") {
    return (new TextEncoder("utf-8",{fatal:false,ignoreBOM:false})).encode(s);
  }
  else if (typeof Buffer !== "undefined") {
    return Buffer.from(s,"utf-8");  // buffer is a subclass of UInt8Array
  }
  else {
    // todo: improve the fallback?
    return Uint8Array.from(text.split('').map(b => b.charCodeAt(0)));
  }
}
function kk_bytes_adjust_length(bs,newlen) {
  if (newlen == bs.length) {
    return bs;
  }
  else if (newlen < bs.length) {
    return bs.slice(0,newlen);
  }
  else {
    const bsnew = new Uint8Array(newlen).fill(0);
    bsnew.set(bs,0);
    return bsnew;
  }
}
function kk_bytes_join(bss) {
  var total_len = 0;
  bss.forEach( (bs) => total_len += bs.length );
  var bsnew = new Uint8Array(total_len);
  var offset = 0;
  bss.forEach( (bs) => {
    bsnew.set(bs,offset);
    offset += bs.length;
  });
  return bsnew;
}
function kk_bytes_assign(b, i, new_value) {
  const fresh = new Uint8Array(b);
  fresh[i] = new_value;
  return fresh;
}
function kk_bytes_substring(b, start, len) {
  if (len == 0 || start >= b.length) return [];  
  if (start < 0) start = 0;
  if (len < 0 || start + len > b.length) { len = b.length - start; }
  return kk_string_from_bytes(b.subarray(start,start + len));
}
function kk_bytes_subvector(b, start, len) {
  if (len == 0 || start >= b.length) return [];  
  if (start < 0) start = 0;
  if (len < 0 || start + len > b.length) { len = b.length - start; }
  return Array.from(b.subarray(start,start + len))
}
function kk_bytes_from_vector(v) {
  return Uint8Array.from(v)
}
// count up to 3 initial continuation bytes
function kk_bytes_utf8_partial_pre(b) {
  var i = 0;
  for( ; i < b.length && i < 3; i++ ) {
    if ((b[i] & 0xC0) !== 0x80) break;
  }
  return i;
}
// count up to 3 bytes at the end for an unfinished utf-8 code point
function kk_bytes_utf8_partial_post(b) {
  const len = b.length
  var i = 1
  for( ; i <= 3 && i <= len; i++) {
    var b = b[len - i]
    if ((b[i] & 0xC0) !== 0x80) {
      // start of utf8 sequence
      if ((b & 0xF8) === 0xF0) {  // 4 byte sequence && i <= 3
        return i;
      }
      else if (i<=2 && ((b & 0xF0) === 0xE0)) {  // 3 byte sequence && i <= 2
        return i;
      }
      else if (i<=1 && ((b & 0xD0) === 0xC0)) {  // 2 byte sequence && i == 1
        return i;
      }
      else {
        return 0;  // full sequence or invalid utf8
      }
    }
  }
  return 0; // all continuation bytes (caught by _pre)
}
 
// type declarations
 
// declarations
 
 
export function prim_empty() /* () -> bytes */  {
  return new Uint8Array(0);
}
 
export var empty;
var empty = prim_empty();
 
 
export function prim_bytes(n) /* (n : ssize_t) -> bytes */  {
  return new Uint8Array(n).fill(0);
}
 
 
export function prim_unsafe_bytes(n) /* (n : ssize_t) -> bytes */  {
  return new Uint8Array(n);
}
 
 
export function bytes(len) /* (len : int) -> bytes */  {
  return prim_bytes($std_core_int.ssize__t(len));
}
 
 
export function unsafe_bytes(len) /* (len : int) -> bytes */  {
  return prim_unsafe_bytes($std_core_int.ssize__t(len));
}
 
 
export function prim_length(b) /* (b : bytes) -> ssize_t */  {
  return b.length;
}
 
 
export function length(bs) /* (bs : bytes) -> int */  {
  return $std_core_types._int_from_int32((prim_length(bs)));
}
 
 
export function is_empty(bs) /* (bs : bytes) -> bool */  {
  return $std_core_types._int_eq(($std_core_types._int_from_int32((prim_length(bs)))),0);
}
 
 
export function prim_adjust_length(b, len) /* (b : bytes, len : ssize_t) -> bytes */  {
  return kk_bytes_adjust_length(b,len);
}
 
export function prim_append(b1, b2) /* (b1 : bytes, b2 : bytes) -> bytes */  {
  return kk_bytes_cat(b1,b2);
}
 
export function prim_join(bss) /* (bss : vector<bytes>) -> bytes */  {
  return kk_bytes_join(bss);
}
 
 
export function _lp__plus__plus__rp_(b1, b2) /* (b1 : bytes, b2 : bytes) -> bytes */  {
  return prim_append(b1, b2);
}
 
 
export function vector_fs_join(bss) /* (bss : vector<bytes>) -> bytes */  {
  return prim_join(bss);
}
 
 
export function adjust_length(bs, newlen) /* (bs : bytes, newlen : int) -> bytes */  {
  return prim_adjust_length(bs, $std_core_int.ssize__t(newlen));
}
 
 
export function prim_subvector(bytes_0, start, len) /* (bytes : bytes, start : ssize_t, len : ssize_t) -> vector<int> */  {
  return kk_bytes_subvector(bytes_0,start,len);
}
 
 
export function subvector(bytes_0, start, len) /* (bytes : bytes, start : ? int, len : ? int) -> vector<int> */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bytes_0)));
  var _x1 = (start !== undefined) ? start : 0;
  var _x0 = $std_core_types._int_ge(_x1,total);
  if (_x0) {
    return $std_core_vector.prim_empty();
  }
  else {
     
    var _x3 = (start !== undefined) ? start : 0;
    var _x2 = $std_core_types._int_ge(0,_x3);
    if (_x2) {
      var ofs = 0;
    }
    else {
      var ofs = (start !== undefined) ? start : 0;
    }
     
    var _x5 = (len !== undefined) ? len : -1;
    var _x4 = $std_core_types._int_lt(_x5,0);
    if (_x4) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x7 = (len !== undefined) ? len : -1;
      var _x6 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x7)),total);
      if (_x6) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var count = (len !== undefined) ? len : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      return $std_core_vector.prim_empty();
    }
    else {
      return prim_subvector(bytes_0, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
}
 
 
export function vector(bytes_0) /* (bytes : bytes) -> vector<int> */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bytes_0)));
  var _x4 = undefined;
  var _x3 = (_x4 !== undefined) ? _x4 : 0;
  var _x2 = $std_core_types._int_ge(_x3,total);
  if (_x2) {
    return $std_core_vector.prim_empty();
  }
  else {
     
    var _x7 = undefined;
    var _x6 = (_x7 !== undefined) ? _x7 : 0;
    var _x5 = $std_core_types._int_ge(0,_x6);
    if (_x5) {
      var ofs = 0;
    }
    else {
      var _x8 = undefined;
      var ofs = (_x8 !== undefined) ? _x8 : 0;
    }
     
    var _x11 = undefined;
    var _x10 = (_x11 !== undefined) ? _x11 : -1;
    var _x9 = $std_core_types._int_lt(_x10,0);
    if (_x9) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x14 = undefined;
      var _x13 = (_x14 !== undefined) ? _x14 : -1;
      var _x12 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x13)),total);
      if (_x12) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var _x15 = undefined;
        var count = (_x15 !== undefined) ? _x15 : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      return $std_core_vector.prim_empty();
    }
    else {
      return prim_subvector(bytes_0, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
}
 
 
export function list_fs_join(bss) /* (bss : list<bytes>) -> bytes */  {
   
  var bss_0_10011 = $std_core_vector.unvlist(bss);
  return prim_join(bss_0_10011);
}
 
export function prim_subbytes(bs, start, len) /* (bs : bytes, start : ssize_t, len : ssize_t) -> bytes */  {
  return bs.slice(start,len);
}
 
 
export function subbytes(bs, start, len) /* (bs : bytes, start : ? int, len : ? int) -> bytes */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bs)));
  var _x6 = (start !== undefined) ? start : 0;
  var _x5 = $std_core_types._int_ge(_x6,total);
  if (_x5) {
    return empty;
  }
  else {
     
    var _x8 = (start !== undefined) ? start : 0;
    var _x7 = $std_core_types._int_lt(_x8,0);
    if (_x7) {
      var ofs = 0;
    }
    else {
      var ofs = (start !== undefined) ? start : 0;
    }
     
    var _x10 = (len !== undefined) ? len : -1;
    var _x9 = $std_core_types._int_lt(_x10,0);
    if (_x9) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x12 = (len !== undefined) ? len : -1;
      var _x11 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x12)),total);
      if (_x11) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var count = (len !== undefined) ? len : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      return empty;
    }
    else {
      return prim_subbytes(bs, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
}
 
 
export function list(bytes_0) /* (bytes : bytes) -> list<int> */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bytes_0)));
   
  var _x9 = undefined;
  var _x8 = (_x9 !== undefined) ? _x9 : 0;
  var _x7 = $std_core_types._int_ge(_x8,total);
  if (_x7) {
    var v_10020 = $std_core_vector.prim_empty();
  }
  else {
     
    var _x12 = undefined;
    var _x11 = (_x12 !== undefined) ? _x12 : 0;
    var _x10 = $std_core_types._int_ge(0,_x11);
    if (_x10) {
      var ofs = 0;
    }
    else {
      var _x13 = undefined;
      var ofs = (_x13 !== undefined) ? _x13 : 0;
    }
     
    var _x16 = undefined;
    var _x15 = (_x16 !== undefined) ? _x16 : -1;
    var _x14 = $std_core_types._int_lt(_x15,0);
    if (_x14) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x19 = undefined;
      var _x18 = (_x19 !== undefined) ? _x19 : -1;
      var _x17 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x18)),total);
      if (_x17) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var _x20 = undefined;
        var count = (_x20 !== undefined) ? _x20 : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      var v_10020 = $std_core_vector.prim_empty();
    }
    else {
      var v_10020 = prim_subvector(bytes_0, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
  return $std_core_vector.vlist(v_10020);
}
 
 
export function _mlift_lift_foreach_10250_10279(_uniq_i_10222, _uniq_n_10221, _uniq_v_10213, f, _uniq_x___10224) /* forall<e> (ssize_t, ssize_t, vector<int>, f : (int) -> e (), ()) -> e () */  {
   
  var _uniq_i_0_10003_10225 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10222);
  return _lift_foreach_10250(_uniq_v_10213, f, _uniq_n_10221, _uniq_i_0_10003_10225);
}
 
 
export function _lift_foreach_10250(_uniq_v_10213_0, f_0, _uniq_n_10221_0, _uniq_i_10222_0) /* forall<e> (vector<int>, f : (int) -> e (), ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10222_0 < _uniq_n_10221_0)) {
     
    var _uniq_x_10024_10218 = (_uniq_v_10213_0)[_uniq_i_10222_0];
     
    var x_10282 = f_0(_uniq_x_10024_10218);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_x___10224_0 /* () */ ) {
        return _mlift_lift_foreach_10250_10279(_uniq_i_10222_0, _uniq_n_10221_0, _uniq_v_10213_0, f_0, _uniq_x___10224_0);
      });
    }
    else {
       
      var _uniq_i_0_10003_10225_0 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10222_0);
      {
        // tail call
        _uniq_i_10222_0 = _uniq_i_0_10003_10225_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_foreach_10249(bytes_0, f) /* forall<e> (bytes@0 : bytes, f : (int) -> e ()) -> e () */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bytes_0)));
   
  var _x9 = undefined;
  var _x8 = (_x9 !== undefined) ? _x9 : 0;
  var _x7 = $std_core_types._int_ge(_x8,total);
  if (_x7) {
    var _uniq_v_10213 = $std_core_vector.prim_empty();
  }
  else {
     
    var _x12 = undefined;
    var _x11 = (_x12 !== undefined) ? _x12 : 0;
    var _x10 = $std_core_types._int_ge(0,_x11);
    if (_x10) {
      var ofs = 0;
    }
    else {
      var _x13 = undefined;
      var ofs = (_x13 !== undefined) ? _x13 : 0;
    }
     
    var _x16 = undefined;
    var _x15 = (_x16 !== undefined) ? _x16 : -1;
    var _x14 = $std_core_types._int_lt(_x15,0);
    if (_x14) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x19 = undefined;
      var _x18 = (_x19 !== undefined) ? _x19 : -1;
      var _x17 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x18)),total);
      if (_x17) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var _x20 = undefined;
        var count = (_x20 !== undefined) ? _x20 : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      var _uniq_v_10213 = $std_core_vector.prim_empty();
    }
    else {
      var _uniq_v_10213 = prim_subvector(bytes_0, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
   
  var _uniq_n_10010_10215 = ((_uniq_v_10213).length);
   
  var _uniq_i_10216 = 0;
  return _lift_foreach_10250(_uniq_v_10213, f, _uniq_n_10010_10215, _uniq_i_10216);
}
 
 
export function foreach(bytes_0, f) /* forall<e> (bytes : bytes, f : (int) -> e ()) -> e () */  {
  return _lift_foreach_10249(bytes_0, f);
}
 
 
export function _lift_show_10252(_uniq_v_10229, _uniq_w_10232, _uniq_n_10241, _uniq_i_10242) /* (vector<int>, vector<string>, ssize_t, ssize_t) -> () */  { tailcall: while(1)
{
  if ((_uniq_i_10242 < _uniq_n_10241)) {
     
    var _uniq_x_10028_10236 = (_uniq_v_10229)[_uniq_i_10242];
     
    var _uniq_x___10244 = (_uniq_w_10232)[_uniq_i_10242] = ($std_core_show.show_hex(_uniq_x_10028_10236, 2, undefined, ""));
     
    var _uniq_i_0_10003_10245 = $std_core_vector.ssize__t_fs_incr(_uniq_i_10242);
    {
      // tail call
      _uniq_i_10242 = _uniq_i_0_10003_10245;
      continue tailcall;
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _lift_show_10251(bytes_0, total) /* (bytes@0 : bytes, total : int) -> vector<string> */  {
   
  var _x9 = undefined;
  var _x8 = (_x9 !== undefined) ? _x9 : 0;
  var _x7 = $std_core_types._int_ge(_x8,total);
  if (_x7) {
    var _uniq_v_10229 = $std_core_vector.prim_empty();
  }
  else {
     
    var _x12 = undefined;
    var _x11 = (_x12 !== undefined) ? _x12 : 0;
    var _x10 = $std_core_types._int_ge(0,_x11);
    if (_x10) {
      var ofs = 0;
    }
    else {
      var _x13 = undefined;
      var ofs = (_x13 !== undefined) ? _x13 : 0;
    }
     
    var _x16 = undefined;
    var _x15 = (_x16 !== undefined) ? _x16 : -1;
    var _x14 = $std_core_types._int_lt(_x15,0);
    if (_x14) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var _x19 = undefined;
      var _x18 = (_x19 !== undefined) ? _x19 : -1;
      var _x17 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x18)),total);
      if (_x17) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var _x20 = undefined;
        var count = (_x20 !== undefined) ? _x20 : -1;
      }
    }
    if ($std_core_types._int_le(count,0)) {
      var _uniq_v_10229 = $std_core_vector.prim_empty();
    }
    else {
      var _uniq_v_10229 = prim_subvector(bytes_0, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
    }
  }
   
  var _uniq_w_10232 = Array(($std_core_int.ssize__t($std_core_types._int_from_int32((((_uniq_v_10229).length))))));
   
  var _uniq_n_10021_10233 = ((_uniq_v_10229).length);
   
  var _uniq_i_10234 = 0;
   
  var _uniq_x___10237 = _lift_show_10252(_uniq_v_10229, _uniq_w_10232, _uniq_n_10021_10233, _uniq_i_10234);
  return _uniq_w_10232;
}
 
 
export function show(bytes_0) /* (bytes : bytes) -> string */  {
   
  var total = $std_core_types._int_from_int32((prim_length(bytes_0)));
  return $std_core_types._lp__plus__plus__rp_("[", $std_core_types._lp__plus__plus__rp_($std_core_string.vectorsep_fs_join(_lift_show_10251(bytes_0, total), " "), "]"));
}
 
 
export function vector_fs_bytes(v) /* (v : vector<int>) -> bytes */  {
  return kk_bytes_from_vector(v);
}
 
 
export function string_fs_bytes(s) /* (s : string) -> bytes */  {
  return (new TextEncoder()).encode(s);
}
 
 
export function unsafe_index(b, i) /* (b : bytes, i : ssize_t) -> uint8 */  {
  return b[i];
}
 
 
export function unsafe_assign(b, i, value) /* (b : bytes, i : ssize_t, value : uint8) -> bytes */  {
  return kk_bytes_assign(b,i,value);
}
 
 
export function _mlift_index_10280(b, i, _c_x10271) /* (b : bytes, i : int, ()) -> int */  {
  return $std_core_types._int_from_int32((unsafe_index(b, $std_core_int.ssize__t(i))));
}
 
 
export function _index(b, i) /* (b : bytes, i : int) -> exn int */  {
   
  if ($std_core_types._int_lt(i,0)) {
     
    var ev_10288 = $std_core_hnd._evv_at(0);
    var _x7 = $std_core_exn.throw_exn_fs__select(ev_10288.hnd);
    var x_10285 = _x7(ev_10288.marker, ev_10288, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
  }
  else {
    var _x8 = $std_core_types._int_ge(i,($std_core_types._int_from_int32((prim_length(b)))));
    if (_x8) {
       
      var ev_0_10291 = $std_core_hnd._evv_at(0);
      var _x9 = $std_core_exn.throw_exn_fs__select(ev_0_10291.hnd);
      var x_10285 = _x9(ev_0_10291.marker, ev_0_10291, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
    }
    else {
      var x_10285 = $std_core_types.Unit;
    }
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10271 /* () */ ) {
      return $std_core_types._int_from_int32((unsafe_index(b, $std_core_int.ssize__t(i))));
    });
  }
  else {
    return $std_core_types._int_from_int32((unsafe_index(b, $std_core_int.ssize__t(i))));
  }
}
 
 
export function _mlift_assign_10281(bs, i, value, _c_x10275) /* (bs : bytes, i : int, value : int, ()) -> bytes */  {
  return unsafe_assign(bs, $std_core_int.ssize__t(i), $std_core_int.uint8(value));
}
 
 
export function assign(bs, i, value) /* (bs : bytes, i : int, value : int) -> exn bytes */  {
   
  if ($std_core_types._int_lt(i,0)) {
     
    var ev_10300 = $std_core_hnd._evv_at(0);
    var _x7 = $std_core_exn.throw_exn_fs__select(ev_10300.hnd);
    var x_10297 = _x7(ev_10300.marker, ev_10300, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
  }
  else {
    var _x8 = $std_core_types._int_ge(i,($std_core_types._int_from_int32((prim_length(bs)))));
    if (_x8) {
       
      var ev_0_10303 = $std_core_hnd._evv_at(0);
      var _x9 = $std_core_exn.throw_exn_fs__select(ev_0_10303.hnd);
      var x_10297 = _x9(ev_0_10303.marker, ev_0_10303, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
    }
    else {
      var x_10297 = $std_core_types.Unit;
    }
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10275 /* () */ ) {
      return unsafe_assign(bs, $std_core_int.ssize__t(i), $std_core_int.uint8(value));
    });
  }
  else {
    return unsafe_assign(bs, $std_core_int.ssize__t(i), $std_core_int.uint8(value));
  }
}
 
 
export function string(bytes_0) /* (bytes : bytes) -> string */  {
  return kk_string_from_bytes(bytes_0);
}
 
export function prim_substring(b, start, len) /* (b : bytes, start : ssize_t, len : ssize_t) -> string */  {
  return kk_bytes_substring(b,start,len);
}
 
 
export function substring(b, start, len) /* (b : bytes, start : ? int, len : ? int) -> string */  {
   
  var total = $std_core_types._int_from_int32((prim_length(b)));
   
  var _x8 = (start !== undefined) ? start : 0;
  var _x7 = $std_core_types._int_ge(_x8,0);
  if (_x7) {
    var i_0_10017 = (start !== undefined) ? start : 0;
  }
  else {
    var i_0_10017 = 0;
  }
   
  var ofs = ($std_core_types._int_le(i_0_10017,total)) ? i_0_10017 : total;
   
  var _x10 = (len !== undefined) ? len : -1;
  var _x9 = $std_core_types._int_lt(_x10,0);
  if (_x9) {
    var count = $std_core_types._int_sub(total,ofs);
  }
  else {
    var _x12 = (len !== undefined) ? len : -1;
    var _x11 = $std_core_types._int_gt(($std_core_types._int_add(ofs,_x12)),total);
    if (_x11) {
      var count = $std_core_types._int_sub(total,ofs);
    }
    else {
      var count = (len !== undefined) ? len : -1;
    }
  }
  if ($std_core_types._int_le(count,0)) {
    return "";
  }
  else {
    var _x7 = (len !== undefined) ? len : -1;
    return prim_substring(b, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(_x7));
  }
}
 
 
export function utf8_partial_pre(b) /* (b : bytes) -> ssize_t */  {
  return kk_bytes_utf8_partial_pre(b);
}
 
 
export function utf8_partial_post(b) /* (b : bytes) -> ssize_t */  {
  return kk_bytes_utf8_partial_post(b);
}
 
export function partial_strings(b, previous_post) /* (b : bytes, previous-post : ? bytes) -> (list<string>, bytes) */  {
   
  var pre_len = $std_core_types._int_from_int32((utf8_partial_pre(b)));
   
  var post_len = $std_core_types._int_from_int32((utf8_partial_post(b)));
   
  var x_0_10045 = $std_core_types._int_from_int32((prim_length(b)));
   
  var x_10043 = $std_core_types._int_sub(x_0_10045,pre_len);
   
  var j_10042 = $std_core_types._int_sub(x_10043,post_len);
   
  var mid_len = ($std_core_types._int_ge(0,j_10042)) ? 0 : j_10042;
   
  if ($std_core_types._int_eq(pre_len,0)) {
    var partial = (previous_post !== undefined) ? previous_post : empty;
  }
  else {
     
    var total = $std_core_types._int_from_int32((prim_length(b)));
     
    if ($std_core_types._int_ge(0,total)) {
      var b2_10049 = empty;
    }
    else {
       
      var ofs = ($std_core_types._int_lt(0,0)) ? 0 : 0;
       
      if ($std_core_types._int_lt(pre_len,0)) {
        var count = $std_core_types._int_sub(total,ofs);
      }
      else {
        var _x8 = $std_core_types._int_gt(($std_core_types._int_add(ofs,pre_len)),total);
        var count = (_x8) ? $std_core_types._int_sub(total,ofs) : pre_len;
      }
      if ($std_core_types._int_le(count,0)) {
        var b2_10049 = empty;
      }
      else {
        var b2_10049 = prim_subbytes(b, $std_core_int.ssize__t(ofs), $std_core_int.ssize__t(count));
      }
    }
    var _x8 = (previous_post !== undefined) ? previous_post : empty;
    var partial = prim_append(_x8, b2_10049);
  }
  if ($std_core_types._int_eq(mid_len,0)) {
    if ($std_core_types._int_eq(post_len,0)) {
      return $std_core_types.Tuple2($std_core_types.Nil, partial);
    }
    else {
       
      var _x8 = $std_core_types._int_eq(($std_core_types._int_from_int32((prim_length(partial)))),0);
      if (_x8) {
        var xs_10060 = $std_core_types.Nil;
      }
      else {
        var xs_10060 = $std_core_types.Cons(string(partial), $std_core_types.Nil);
      }
       
      var total_0 = $std_core_types._int_from_int32((prim_length(b)));
       
      var i_0_10017 = ($std_core_types._int_ge(pre_len,0)) ? pre_len : 0;
       
      var ofs_0 = ($std_core_types._int_le(i_0_10017,total_0)) ? i_0_10017 : total_0;
       
      if ($std_core_types._int_lt(mid_len,0)) {
        var count_0 = $std_core_types._int_sub(total_0,ofs_0);
      }
      else {
        var _x9 = $std_core_types._int_gt(($std_core_types._int_add(ofs_0,mid_len)),total_0);
        var count_0 = (_x9) ? $std_core_types._int_sub(total_0,ofs_0) : mid_len;
      }
       
      if ($std_core_types._int_le(count_0,0)) {
        var _x10 = "";
      }
      else {
        var _x10 = prim_substring(b, $std_core_int.ssize__t(ofs_0), $std_core_int.ssize__t(mid_len));
      }
      var ys_10061 = $std_core_types.Cons(_x10, $std_core_types.Nil);
       
      var start_0_10065 = $std_core_types._int_add(pre_len,mid_len);
       
      var total_0_0 = $std_core_types._int_from_int32((prim_length(b)));
      if (xs_10060 === null) {
        var _x8 = ys_10061;
      }
      else {
        var _x8 = $std_core_list._unroll_append_10004(xs_10060, ys_10061);
      }
      var _x11 = (start_0_10065 !== undefined) ? start_0_10065 : 0;
      var _x10 = $std_core_types._int_ge(_x11,total_0_0);
      if (_x10) {
        var _x9 = empty;
      }
      else {
         
        var _x13 = (start_0_10065 !== undefined) ? start_0_10065 : 0;
        var _x12 = $std_core_types._int_lt(_x13,0);
        if (_x12) {
          var ofs_0_0 = 0;
        }
        else {
          var ofs_0_0 = (start_0_10065 !== undefined) ? start_0_10065 : 0;
        }
         
        if ($std_core_types._int_lt(post_len,0)) {
          var count_0_0 = $std_core_types._int_sub(total_0_0,ofs_0_0);
        }
        else {
          var _x14 = $std_core_types._int_gt(($std_core_types._int_add(ofs_0_0,post_len)),total_0_0);
          var count_0_0 = (_x14) ? $std_core_types._int_sub(total_0_0,ofs_0_0) : post_len;
        }
        if ($std_core_types._int_le(count_0_0,0)) {
          var _x9 = empty;
        }
        else {
          var _x9 = prim_subbytes(b, $std_core_int.ssize__t(ofs_0_0), $std_core_int.ssize__t(count_0_0));
        }
      }
      return $std_core_types.Tuple2(_x8, _x9);
    }
  }
  else {
     
    var _x12 = $std_core_types._int_eq(($std_core_types._int_from_int32((prim_length(partial)))),0);
    if (_x12) {
      var xs_0_10076 = $std_core_types.Nil;
    }
    else {
      var xs_0_10076 = $std_core_types.Cons(string(partial), $std_core_types.Nil);
    }
     
    var total_1 = $std_core_types._int_from_int32((prim_length(b)));
     
    var i_0_10017_0 = ($std_core_types._int_ge(pre_len,0)) ? pre_len : 0;
     
    var ofs_1 = ($std_core_types._int_le(i_0_10017_0,total_1)) ? i_0_10017_0 : total_1;
     
    if ($std_core_types._int_lt(mid_len,0)) {
      var count_1 = $std_core_types._int_sub(total_1,ofs_1);
    }
    else {
      var _x13 = $std_core_types._int_gt(($std_core_types._int_add(ofs_1,mid_len)),total_1);
      var count_1 = (_x13) ? $std_core_types._int_sub(total_1,ofs_1) : mid_len;
    }
     
    if ($std_core_types._int_le(count_1,0)) {
      var _x14 = "";
    }
    else {
      var _x14 = prim_substring(b, $std_core_int.ssize__t(ofs_1), $std_core_int.ssize__t(mid_len));
    }
    var ys_0_10077 = $std_core_types.Cons(_x14, $std_core_types.Nil);
     
    var start_1_10081 = $std_core_types._int_add(pre_len,mid_len);
     
    var total_1_0 = $std_core_types._int_from_int32((prim_length(b)));
    if (xs_0_10076 === null) {
      var _x12 = ys_0_10077;
    }
    else {
      var _x12 = $std_core_list._unroll_append_10004(xs_0_10076, ys_0_10077);
    }
    var _x15 = (start_1_10081 !== undefined) ? start_1_10081 : 0;
    var _x14 = $std_core_types._int_ge(_x15,total_1_0);
    if (_x14) {
      var _x13 = empty;
    }
    else {
       
      var _x17 = (start_1_10081 !== undefined) ? start_1_10081 : 0;
      var _x16 = $std_core_types._int_lt(_x17,0);
      if (_x16) {
        var ofs_1_0 = 0;
      }
      else {
        var ofs_1_0 = (start_1_10081 !== undefined) ? start_1_10081 : 0;
      }
       
      if ($std_core_types._int_lt(post_len,0)) {
        var count_1_0 = $std_core_types._int_sub(total_1_0,ofs_1_0);
      }
      else {
        var _x18 = $std_core_types._int_gt(($std_core_types._int_add(ofs_1_0,post_len)),total_1_0);
        var count_1_0 = (_x18) ? $std_core_types._int_sub(total_1_0,ofs_1_0) : post_len;
      }
      if ($std_core_types._int_le(count_1_0,0)) {
        var _x13 = empty;
      }
      else {
        var _x13 = prim_subbytes(b, $std_core_int.ssize__t(ofs_1_0), $std_core_int.ssize__t(count_1_0));
      }
    }
    return $std_core_types.Tuple2(_x12, _x13);
  }
}
 
 
export function list_fs__trmc_unroll_lift_string_1374_10000(previous_post, xs, _acc) /* (previous-post : bytes, xs : list<bytes>, ctx<list<list<string>>>) -> list<list<string>> */  { tailcall: while(1)
{
  if (xs === null) {
    return $std_core_types._cctx_apply(_acc,($std_core_types.Cons($std_core_types.Cons(string(previous_post), $std_core_types.Nil), $std_core_types.Nil)));
  }
  else {
    var _x16 = partial_strings(xs.head, previous_post);
     
    var _trmc_x10261 = undefined;
     
    var _trmc_x10262 = $std_core_types.Cons(_x16.fst, _trmc_x10261);
    {
      // tail call
      var _x17 = $std_core_types._cctx_extend(_acc,_trmc_x10262,({obj: _trmc_x10262, field_name: "tail"}));
      previous_post = _x16.snd;
      xs = xs.tail;
      _acc = _x17;
      continue tailcall;
    }
  }
}}
 
 
export function list_fs__unroll_lift_string_1374_10000(previous_post_0, xs_0) /* (previous-post : bytes, xs : list<bytes>) -> list<list<string>> */  {
  return list_fs__trmc_unroll_lift_string_1374_10000(previous_post_0, xs_0, $std_core_types._cctx_empty());
}
 
 
export function list_fs__lift_string_1374(previous_post, xs) /* (previous-post : bytes, xs : list<bytes>) -> list<list<string>> */  {
  if (xs === null) {
    return $std_core_types.Cons($std_core_types.Cons(string(previous_post), $std_core_types.Nil), $std_core_types.Nil);
  }
  else {
    return list_fs__trmc_unroll_lift_string_1374_10000(previous_post, xs, $std_core_types._cctx_empty());
  }
}
 
 
export function list_fs_string(bs) /* (bs : list<bytes>) -> string */  {
   
  if (bs === null) {
    var xss_10092 = $std_core_types.Cons($std_core_types.Cons(string(empty), $std_core_types.Nil), $std_core_types.Nil);
  }
  else {
    var xss_10092 = list_fs__trmc_unroll_lift_string_1374_10000(empty, bs, $std_core_types._cctx_empty());
  }
   
  var xs_0 = $std_core_list._lift_concat_6546($std_core_types.Nil, xss_10092);
  if (xs_0 === null) {
    return "";
  }
  else if (xs_0 !== null && xs_0.tail === null) {
    return xs_0.head;
  }
  else if (xs_0 !== null && xs_0.tail !== null && xs_0.tail.tail === null) {
    return $std_core_types._lp__plus__plus__rp_(xs_0.head, xs_0.tail.head);
  }
  else {
    return $std_core_string.vector_fs_join($std_core_vector.unvlist(xs_0));
  }
}
 
 
export function partial_string(b, previous_post) /* (b : bytes, previous-post : ? bytes) -> (string, bytes) */  {
  var _x19 = (previous_post !== undefined) ? previous_post : empty;
  var _x18 = partial_strings(b, _x19);
  return $std_core_types.Tuple2($std_core_list.concat_fs_join(_x18.fst), _x18.snd);
}
