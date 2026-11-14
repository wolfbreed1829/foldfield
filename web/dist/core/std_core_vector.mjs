// Koka generated module: std/core/vector, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_undiv from './std_core_undiv.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
import * as $std_core_exn from './std_core_exn.mjs';
import * as $std_core_int from './std_core_int.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2012-2023, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
// Create a list with from a vector in constant stack space
export function _vlist(elems,tail) {
  var xs = tail || $std_core_types.Nil;
  if (elems!=null && elems.length>0) {
    for(var i = elems.length - 1; i >= 0; i--) {
      var elem = elems[i];
      if (elem !== undefined) xs = $std_core_types.Cons(elem,xs);
    }
  }
  return xs;
}
// Create an array from a list with constant stack space
export function _unvlist(list) {
  var elems = [];
  while(list) {
    elems.push(list.head);
    list = list.tail;
  }
  return elems;
}
// Create a vector with a default value
export function _vector_initz(n, x) {
  if (n<=0) return [];
  var a = new Array(n);
  for(var i = 0; i < n; i++) {
    a[i] = x;
  }
  return a;
}
// Create a vector with a function initializer
export function _vector_initf(n, f) {
  if (n<=0) return [];
  var a = new Array(n);
  for(var i = 0; i < n; i++) {
    a[i] = f(i);
  }
  return a;
}
// Index a vector
export function _vector_at( v, i ) {
  var j = _int_to_number(i);
  var x = v[j];
  if (x === undefined) { $std_core_exn.exn_error_range(); }
  return x;
}
// Assign to a local array variable
// TODO: we can avoid a copy if we copy at the local reference creation?
export function kk_ref_vector_assign_borrow(ref,idx,val) {
  let a = Array.from(ref.value)  // make copy :-(
  a[idx] = val
  ref.value = a
}
 
// type declarations
 
// declarations
 
export function _unsafe_vector(n) /* forall<a> (n : ssize_t) -> vector<a> */  {
  return Array(n);
}
 
 
export function _index(v, index) /* forall<a> (v : vector<a>, index : int) -> exn a */  {
   
  var idx = $std_core_int.ssize__t(index);
  var _x0 = (idx < (((v).length)));
  if (_x0) {
    return (v)[idx];
  }
  else {
     
    var ev_10273 = $std_core_hnd._evv_at(0);
    var _x1 = $std_core_exn.throw_exn_fs__select(ev_10273.hnd);
    return _x1(ev_10273.marker, ev_10273, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
  }
}
 
 
export function assign_fs__mlift_index_10262(assigned, idx, self, _y_x10217) /* forall<a,e,h> (assigned : a, idx : ssize_t, self : local-var<h,vector<a>>, vector<a>) -> <local<h>,exn,div|e> () */  {
  var _x2 = (idx < (((_y_x10217).length)));
  if (_x2) {
    return $std_core_vector.kk_ref_vector_assign_borrow(self,idx,assigned);
  }
  else {
     
    var i_10276 = $std_core_hnd._evv_index($std_core_exn.exn_fs__tag);
     
    var w = $std_core_hnd._evv_swap_create1(i_10276);
     
    var ev_10280 = $std_core_hnd._evv_at(0);
     
    var _x3 = $std_core_exn.throw_exn_fs__select(ev_10280.hnd);
    var y = _x3(ev_10280.marker, ev_10280, $std_core_exn.Exception("index out of bounds", $std_core_exn.ExnRange));
     
    $std_core_hnd._evv_set(w);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_cont(function(cont /* (10878) -> <exn,local<431>,div|430> () */ , res /* 10878 */ ) {
        return $std_core_hnd.open_at1(i_10276, cont, res);
      });
    }
    else {
      return y;
    }
  }
}
 
 
export function assign_fs__index(self, index, assigned) /* forall<a,e,h> (self : local-var<h,vector<a>>, index : int, assigned : a) -> <local<h>,exn|e> () */  {
   
  var idx = $std_core_int.ssize__t(index);
   
  var x_10283 = ((self).value);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10217 /* vector<429> */ ) {
      return assign_fs__mlift_index_10262(assigned, idx, self, _y_x10217);
    });
  }
  else {
    return assign_fs__mlift_index_10262(assigned, idx, self, x_10283);
  }
}
 
 
export function vector_alloc(n, init) /* forall<a,e> (n : ssize_t, init : a) -> e vector<a> */  {
  return _vector_initz(n,init);
}
 
 
export function vector_alloc_total(n, f) /* forall<a> (n : ssize_t, f : (ssize_t) -> a) -> vector<a> */  {
  return _vector_initf(n,f);
}
 
 
export function prim_empty() /* forall<a> () -> vector<a> */  {
  return [];
}
 
 
export function empty() /* forall<a> () -> vector<a> */  {
  return prim_empty();
}
 
 
export function at(v, index) /* forall<a> (v : vector<a>, index : int) -> maybe<a> */  {
   
  var idx = $std_core_int.ssize__t(index);
  var _x3 = (idx < (((v).length)));
  if (_x3) {
    return $std_core_types.Just((v)[idx]);
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function length(v) /* forall<a> (v : vector<a>) -> int */  {
  return $std_core_types._int_from_int32((((v).length)));
}
 
 
export function vector(n, $default) /* forall<a> (n : int, default : a) -> vector<a> */  {
  return vector_alloc($std_core_int.ssize__t(n), $default);
}
 
 
export function vector_init_total(n, f) /* forall<a> (n : int, f : (int) -> a) -> vector<a> */  {
  return vector_alloc_total($std_core_int.ssize__t(n), function(i /* ssize_t */ ) {
      return f($std_core_types._int_from_int32(i));
    });
}
 
export function ssize__t_fs_decr(i) /* (i : ssize_t) -> ssize_t */  {
  return (i - 1);
}
 
export function ssize__t_fs_incr(i) /* (i : ssize_t) -> ssize_t */  {
  return (i + 1);
}
 
 
export function _mlift_lift_forz_1199_10263(action, i, n, wild) /* forall<e> (action : (ssize_t) -> e (), i : ssize_t, n : ssize_t, wild : ()) -> e () */  {
   
  var i_0_10003 = ssize__t_fs_incr(i);
  return _lift_forz_1199(action, n, i_0_10003);
}
 
 
export function _lift_forz_1199(action_0, n_0, i_0) /* forall<e> (action : (ssize_t) -> e (), n : ssize_t, i : ssize_t) -> e () */  { tailcall: while(1)
{
  if ((i_0 < n_0)) {
     
    var x_10285 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return _mlift_lift_forz_1199_10263(action_0, i_0, n_0, wild_0);
      });
    }
    else {
       
      var i_0_10003_0 = ssize__t_fs_incr(i_0);
      {
        // tail call
        i_0 = i_0_10003_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function forz(n, action) /* forall<e> (n : ssize_t, action : (ssize_t) -> e ()) -> e () */  {
   
  var i = 0;
  return _lift_forz_1199(action, n, i);
}
 
 
export function _mlift_lift_vector_init_10185_10264(_uniq_i_10131, _uniq_n_10130, f, v, _y_x10228) /* forall<a,e> (ssize_t, ssize_t, f : (int) -> e a, v : vector<a>, a) -> e () */  {
   
  var _uniq_x___10133 = (v)[_uniq_i_10131] = _y_x10228;
   
  var _uniq_i_0_10003_10134 = ssize__t_fs_incr(_uniq_i_10131);
  return _lift_vector_init_10185(f, v, _uniq_n_10130, _uniq_i_0_10003_10134);
}
 
 
export function _lift_vector_init_10185(f_0, v_0, _uniq_n_10130_0, _uniq_i_10131_0) /* forall<a,e> (f : (int) -> e a, v : vector<a>, ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10131_0 < _uniq_n_10130_0)) {
     
    var x_10288 = f_0($std_core_types._int_from_int32(_uniq_i_10131_0));
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10228_0 /* 779 */ ) {
        return _mlift_lift_vector_init_10185_10264(_uniq_i_10131_0, _uniq_n_10130_0, f_0, v_0, _y_x10228_0);
      });
    }
    else {
       
      var _uniq_x___10133_0 = (v_0)[_uniq_i_10131_0] = x_10288;
       
      var _uniq_i_0_10003_10134_0 = ssize__t_fs_incr(_uniq_i_10131_0);
      {
        // tail call
        _uniq_i_10131_0 = _uniq_i_0_10003_10134_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _mlift_vector_init_10265(v, wild) /* forall<a,e> (v : vector<a>, wild : ()) -> e vector<a> */  {
  return v;
}
 
 
export function vector_init(n, f) /* forall<a,e> (n : int, f : (int) -> e a) -> e vector<a> */  {
   
  var len = $std_core_int.ssize__t(n);
   
  var v = Array(len);
   
  var i = 0;
   
  var x_10291 = _lift_vector_init_10185(f, v, len, i);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(wild /* () */ ) {
      return v;
    });
  }
  else {
    return v;
  }
}
 
 
export function _mlift_lift_foreach_indexedz_10186_10266(_uniq_i_10140, _uniq_n_10139, f, v, _uniq_x___10142) /* forall<a,e> (ssize_t, ssize_t, f : (ssize_t, a) -> e (), v : vector<a>, ()) -> e () */  {
   
  var _uniq_i_0_10003_10143 = ssize__t_fs_incr(_uniq_i_10140);
  return _lift_foreach_indexedz_10186(f, v, _uniq_n_10139, _uniq_i_0_10003_10143);
}
 
 
export function _lift_foreach_indexedz_10186(f_0, v_0, _uniq_n_10139_0, _uniq_i_10140_0) /* forall<a,e> (f : (ssize_t, a) -> e (), v : vector<a>, ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10140_0 < _uniq_n_10139_0)) {
     
    var x_10296 = f_0(_uniq_i_10140_0, (v_0)[_uniq_i_10140_0]);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_x___10142_0 /* () */ ) {
        return _mlift_lift_foreach_indexedz_10186_10266(_uniq_i_10140_0, _uniq_n_10139_0, f_0, v_0, _uniq_x___10142_0);
      });
    }
    else {
       
      var _uniq_i_0_10003_10143_0 = ssize__t_fs_incr(_uniq_i_10140_0);
      {
        // tail call
        _uniq_i_10140_0 = _uniq_i_0_10003_10143_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
export function foreach_indexedz(v, f) /* forall<a,e> (v : vector<a>, f : (ssize_t, a) -> e ()) -> e () */  {
   
  var n_10006 = ((v).length);
   
  var i = 0;
  return _lift_foreach_indexedz_10186(f, v, n_10006, i);
}
 
 
export function _mlift_lift_foreach_10187_10267(_uniq_i_10149, _uniq_n_10148, f, v, _uniq_x___10151) /* forall<a,e> (ssize_t, ssize_t, f : (a) -> e (), v : vector<a>, ()) -> e () */  {
   
  var _uniq_i_0_10003_10152 = ssize__t_fs_incr(_uniq_i_10149);
  return _lift_foreach_10187(f, v, _uniq_n_10148, _uniq_i_0_10003_10152);
}
 
 
export function _lift_foreach_10187(f_0, v_0, _uniq_n_10148_0, _uniq_i_10149_0) /* forall<a,e> (f : (a) -> e (), v : vector<a>, ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10149_0 < _uniq_n_10148_0)) {
     
    var x_10024 = (v_0)[_uniq_i_10149_0];
     
    var x_10299 = f_0(x_10024);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_x___10151_0 /* () */ ) {
        return _mlift_lift_foreach_10187_10267(_uniq_i_10149_0, _uniq_n_10148_0, f_0, v_0, _uniq_x___10151_0);
      });
    }
    else {
       
      var _uniq_i_0_10003_10152_0 = ssize__t_fs_incr(_uniq_i_10149_0);
      {
        // tail call
        _uniq_i_10149_0 = _uniq_i_0_10003_10152_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function foreach(v, f) /* forall<a,e> (v : vector<a>, f : (a) -> e ()) -> e () */  {
   
  var n_10010 = ((v).length);
   
  var i = 0;
  return _lift_foreach_10187(f, v, n_10010, i);
}
 
 
export function _mlift_lift_foreach_indexed_10188_10268(_uniq_i_10158, _uniq_n_10157, f, v, _uniq_x___10160) /* forall<a,e> (ssize_t, ssize_t, f : (int, a) -> e (), v : vector<a>, ()) -> e () */  {
   
  var _uniq_i_0_10003_10161 = ssize__t_fs_incr(_uniq_i_10158);
  return _lift_foreach_indexed_10188(f, v, _uniq_n_10157, _uniq_i_0_10003_10161);
}
 
 
export function _lift_foreach_indexed_10188(f_0, v_0, _uniq_n_10157_0, _uniq_i_10158_0) /* forall<a,e> (f : (int, a) -> e (), v : vector<a>, ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10158_0 < _uniq_n_10157_0)) {
     
    var x_10026 = (v_0)[_uniq_i_10158_0];
     
    var x_10302 = f_0($std_core_types._int_from_int32(_uniq_i_10158_0), x_10026);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_x___10160_0 /* () */ ) {
        return _mlift_lift_foreach_indexed_10188_10268(_uniq_i_10158_0, _uniq_n_10157_0, f_0, v_0, _uniq_x___10160_0);
      });
    }
    else {
       
      var _uniq_i_0_10003_10161_0 = ssize__t_fs_incr(_uniq_i_10158_0);
      {
        // tail call
        _uniq_i_10158_0 = _uniq_i_0_10003_10161_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function foreach_indexed(v, f) /* forall<a,e> (v : vector<a>, f : (int, a) -> e ()) -> e () */  {
   
  var n_10014 = ((v).length);
   
  var i = 0;
  return _lift_foreach_indexed_10188(f, v, n_10014, i);
}
 
 
export function _mlift_lift_for_whilez_1200_10269(action, i, n, _y_x10244) /* forall<a,e> (action : (ssize_t) -> e maybe<a>, i : ssize_t, n : ssize_t, maybe<a>) -> e maybe<a> */  {
  if (_y_x10244 === null) {
     
    var i_0_10016 = ssize__t_fs_incr(i);
    return _lift_for_whilez_1200(action, n, i_0_10016);
  }
  else {
    return $std_core_types.Just(_y_x10244.value);
  }
}
 
 
export function _lift_for_whilez_1200(action_0, n_0, i_0) /* forall<a,e> (action : (ssize_t) -> e maybe<a>, n : ssize_t, i : ssize_t) -> e maybe<a> */  { tailcall: while(1)
{
  if ((i_0 < n_0)) {
     
    var x_0_10305 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10244_0 /* maybe<967> */ ) {
        return _mlift_lift_for_whilez_1200_10269(action_0, i_0, n_0, _y_x10244_0);
      });
    }
    else {
      if (x_0_10305 === null) {
         
        var i_0_10016_0 = ssize__t_fs_incr(i_0);
        {
          // tail call
          i_0 = i_0_10016_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Just(x_0_10305.value);
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function for_whilez(n, action) /* forall<a,e> (n : ssize_t, action : (ssize_t) -> e maybe<a>) -> e maybe<a> */  {
   
  var i = 0;
  return _lift_for_whilez_1200(action, n, i);
}
 
 
export function _mlift_lift_foreach_while_10189_10270(_uniq_i_10167, _uniq_n_10166, f, v, _y_x10249) /* forall<a,b,e> (ssize_t, ssize_t, f : (a) -> e maybe<b>, v : vector<a>, maybe<b>) -> e maybe<b> */  {
  if (_y_x10249 === null) {
     
    var _uniq_i_0_10016_10170 = ssize__t_fs_incr(_uniq_i_10167);
    return _lift_foreach_while_10189(f, v, _uniq_n_10166, _uniq_i_0_10016_10170);
  }
  else {
    return $std_core_types.Just(_y_x10249.value);
  }
}
 
 
export function _lift_foreach_while_10189(f_0, v_0, _uniq_n_10166_0, _uniq_i_10167_0) /* forall<a,b,e> (f : (a) -> e maybe<b>, v : vector<a>, ssize_t, ssize_t) -> e maybe<b> */  { tailcall: while(1)
{
  if ((_uniq_i_10167_0 < _uniq_n_10166_0)) {
     
    var x_10308 = f_0((v_0)[_uniq_i_10167_0]);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10249_0 /* maybe<1020> */ ) {
        return _mlift_lift_foreach_while_10189_10270(_uniq_i_10167_0, _uniq_n_10166_0, f_0, v_0, _y_x10249_0);
      });
    }
    else {
      if (x_10308 === null) {
         
        var _uniq_i_0_10016_10170_0 = ssize__t_fs_incr(_uniq_i_10167_0);
        {
          // tail call
          _uniq_i_10167_0 = _uniq_i_0_10016_10170_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Just(x_10308.value);
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function foreach_while(v, f) /* forall<a,b,e> (v : vector<a>, f : (a) -> e maybe<b>) -> e maybe<b> */  {
   
  var n_10017 = ((v).length);
   
  var i = 0;
  return _lift_foreach_while_10189(f, v, n_10017, i);
}
 
 
export function _mlift_lift_map_10190_10271(_uniq_i_10178, _uniq_n_10177, f, v, w, _y_x10254) /* forall<a,b,e> (ssize_t, ssize_t, f : (a) -> e b, v : vector<a>, w : vector<b>, b) -> e () */  {
   
  var _uniq_x___10180 = (w)[_uniq_i_10178] = _y_x10254;
   
  var _uniq_i_0_10003_10181 = ssize__t_fs_incr(_uniq_i_10178);
  return _lift_map_10190(f, v, w, _uniq_n_10177, _uniq_i_0_10003_10181);
}
 
 
export function _lift_map_10190(f_0, v_0, w_0, _uniq_n_10177_0, _uniq_i_10178_0) /* forall<a,b,e> (f : (a) -> e b, v : vector<a>, w : vector<b>, ssize_t, ssize_t) -> e () */  { tailcall: while(1)
{
  if ((_uniq_i_10178_0 < _uniq_n_10177_0)) {
     
    var x_10028 = (v_0)[_uniq_i_10178_0];
     
    var x_10311 = f_0(x_10028);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10254_0 /* 1090 */ ) {
        return _mlift_lift_map_10190_10271(_uniq_i_10178_0, _uniq_n_10177_0, f_0, v_0, w_0, _y_x10254_0);
      });
    }
    else {
       
      var _uniq_x___10180_0 = (w_0)[_uniq_i_10178_0] = x_10311;
       
      var _uniq_i_0_10003_10181_0 = ssize__t_fs_incr(_uniq_i_10178_0);
      {
        // tail call
        _uniq_i_10178_0 = _uniq_i_0_10003_10181_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function _mlift_map_10272(w, wild) /* forall<a,e> (w : vector<a>, wild : ()) -> e vector<a> */  {
  return w;
}
 
 
export function map(v, f) /* forall<a,b,e> (v : vector<a>, f : (a) -> e b) -> e vector<b> */  {
   
  var w = Array(($std_core_int.ssize__t($std_core_types._int_from_int32((((v).length))))));
   
  var n_10021 = ((v).length);
   
  var i = 0;
   
  var x_10314 = _lift_map_10190(f, v, w, n_10021, i);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(wild /* () */ ) {
      return w;
    });
  }
  else {
    return w;
  }
}
 
 
export function vlist(v, tail) /* forall<a> (v : vector<a>, tail : ? (list<a>)) -> list<a> */  {
  var _x4 = (tail !== undefined) ? tail : $std_core_types.Nil;
  return _vlist(v,_x4);
}
 
 
export function list(v) /* forall<a> (v : vector<a>) -> list<a> */  {
  return vlist(v);
}
 
export function unvlist(xs) /* forall<a> (xs : list<a>) -> vector<a> */  {
  return _unvlist(xs);
}
 
 
export function list_fs_vector(xs) /* forall<a> (xs : list<a>) -> vector<a> */  {
  return unvlist(xs);
}
 
export function ssize__t_fs_is_zero(i) /* (i : ssize_t) -> bool */  {
  return (i === 0);
}
