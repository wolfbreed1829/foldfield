// Koka generated module: std/core/hnd, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_undiv from './std_core_undiv.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2020-2021, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
var $marker_unique = 1;  // must be > 0
function _assert(cond,msg) {
  if (!cond) console.error(msg);
}
// for internal references
const $std_core_hnd = { "_evv_get"      : _evv_get,
                  "_evv_set"            : _evv_set,
                  "_evv_at"             : _evv_at,
                  "_evv_swap"           : _evv_swap,
                  "_evv_swap_create0"   : _evv_swap_create0,
                  "_evv_swap_create1"   : _evv_swap_create1,
                  "_yielding"           : _yielding,
                  "_yielding_non_final" : _yielding_non_final,
                  "_evv_is_affine_"     : _evv_is_affine_,
                  "_yield_to"           : _yield_to,
                  "_yield_final"        : _yield_final,
                };
var _evv = [];
var _yield = null; // { marker: 0, clause: null, conts: [], conts_count: 0, final: bool };
export function _evv_get() {
  return _evv;
}
export function _evv_at(i) {
  return _evv[i];
}
export function _evv_set(evv) {
  _evv = evv;
}
export function _evv_swap(evv) {
  const evv0 = _evv;
  _evv = evv;
  return evv0;
}
const _evv_empty = [];
export function _evv_swap_create0() {
  const evv = _evv;
  if (evv.length!==0) {
    _evv = _evv_empty;
  }
  return evv;
}
export function _evv_swap_create1( i ) {
  const evv = _evv;
  if (evv.length !== 1) {
    const ev = evv[i];
    _evv = [ev];
    _evv._cfc = ev.hnd._cfc;
  }
  return evv;
}
export function _yielding() {
  return (_yield !== null);
}
export function _yielding_non_final() {
  return (_yield !== null && !_yield.final);
}
//--------------------------------------------------
// evidence: { evv: [forall h. ev<h>], ofs : int }
//--------------------------------------------------
// function ev_none() {
//   var evv = []
//   evv._cfc = -1
//   return Ev(null,0,null,/*-1,*/evv);
// }
function _cfc_lub(x,y) {
  _assert(x!=null && y!=null);
  if (x < 0) return y;
  if (x + y === 1) return 2;
  if (x > y) return x;
  return y;
}
function _evv_get_cfc( evv ) {
  const cfc = evv._cfc;
  return (cfc==null ? -1 : cfc);
}
function _evv_is_affine_() {
  return (_evv_get_cfc(_evv) <= 2);
}
function _evv_insert(evv,ev) {
  // update ev
  if (ev.marker===0) return; // marker zero is ev-none
  ev.hevv = evv;
  const cfc = _cfc_lub(_evv_get_cfc(evv), ev.hnd._cfc);
  if (ev.marker < 0) { // negative marker is used for named evidence; this means this evidence should not be inserted into the evidence vector
    evv._cfc = cfc;  // update control flow context
    return; // a negative (named) marker is not in the evidence vector
  }
  // insert in the vector
  const n    = evv.length;
  const evv2 = new Array(n+1);
  evv2._cfc = cfc;
  var i;
  for(i = 0; i < n; i++) {
    const ev2 = evv[i];
    if (ev.htag <= ev2.htag) break;
    evv2[i] = ev2;
  }
  evv2[i] = ev;
  for(; i < n; i++) {
    evv2[i+1] = evv[i];
  }
  return evv2;
}
function _evv_delete(evv,i,behind) {
  // delete from the vector
  if (behind) i++;
  const n = evv.length;
  const evv2 = new Array(n-1);
  if (evv._cfc != null) { evv2._cfc = evv._cfc; }
  if (n==1) return evv2;  // empty
  // copy without i
  var j;
  for(j = 0; j < i; j++) {
    evv2[j] = evv[j];
  }
  for(; j < n-1; j++) {
    evv2[j] = evv[j + 1];
  }
  // update cfc?  no, as named handlers may still exist with a higher cfc (and not present in the vector)
  // if (evv[i].cfc >= _evv_get_cfc(evv)) {
  //   var cfc = evv2[0].hnd._cfc;
  //   for(j = 1; j < n-1; j++) {
  //     cfc = _cfc_lub(evv2[j].hnd._cfc, cfc);
  //   }
  //   evv2._cfc = cfc;
  // }
  return evv2;
}
function _evv_swap_delete(i,behind) {
  const w0 = _evv;
  _evv = _evv_delete(w0,i,behind);
  return w0;
}
// Find insertion/deletion point for an effect label
function __evv_index(tag) {
  const evv = _evv;
  const n = evv.length
  for(var i = 0; i < n; i++) {
    if (tag <= evv[i].htag) return i;  // string compare
  }
  return n;
}
function _evv_show(evv) {
  evv.sort(function(ev1,ev2){ return (ev1.marker - ev2.marker); });
  var out = "";
  for( var i = 0; i < evv.length; i++) {
    const evvi = evv[i].hevv;
    out += ((i==0 ? "{ " : "  ") + evv[i].htag.padEnd(8," ") + ": marker " + evv[i].marker + ", under <" +
             evvi.map(function(ev){ return ev.marker.toString(); }).join(",") + ">" + (i==evv.length-1 ? "}" : "") + "\n");
  }
  return out;
}
function _yield_show() {
  if (_yielding()) {
    return "yielding to " + _yield.marker + ", final: " + _yield.final;
  }
  else {
    return "pure"
  }
}
function _evv_expect(m,expected) {
  if ((_yield===null || _yield.marker === m) && (_evv !== expected.evv)) {
    console.error("expected evidence: \n" + _evv_show(expected) + "\nbut found:\n" + _evv_show(_evv));
  }
}
function _guard(evv) {
  if (_evv !== evv) {
    if (_evv.length == evv.length) {
      var equal = true;
      for(var i = 0; i < evv.length; i++) {
        if (_evv[i].marker != evv[i].marker) {
          equal = false;
          break;
        }
      }
      if (equal) return;
    }
    console.error("trying to resume outside the (handler) scope of the original handler. \n captured under:\n" + _evv_show(evv) + "\n but resumed under:\n" + _evv_show(_evv));
    throw "trying to resume outside the (handler) scope of the original handler";
  }
}
function _throw_resume_final(f) {
  throw "trying to resume an unresumable resumption (from finalization)";
}
function _evv_create( evv, indices ) {
  const n = indices.length;
  const evv2 = new Array(n);
  if (evv._cfc != null) { evv2._cfc = evv._cfc; }
  for(var i = 0; i < n; i++) {
    evv2[i] = evv[indices[i]];
  }
  return evv2;
}
function _evv_swap_create(indices) {
  const evv = _evv;
  _evv = _evv_create(evv,indices);
  return evv;
}
//--------------------------------------------------
// Yielding
//--------------------------------------------------
function _kcompose( to, conts ) {
  return function(x) {
    var acc = x;
    for(var i = 0; i < to; i++) {
      acc = conts[i](acc);
      if (_yielding()) {
        //return ((function(i){ return _yield_extend(_kcompose(i+1,to,conts)); })(i));
        while(++i < to) {
          _yield_extend(conts[i]);
        }
        return; // undefined
      }
    }
    return acc;
  }
}
function _yield_extend(next) {
  _assert(_yielding(), "yield extension while not yielding!");
  if (_yield.final) return;
  _yield.conts[_yield.conts_count++] = next;  // index is ~80% faster as push
}
function _yield_cont(f) {
  _assert(_yielding(), "yield extension while not yielding!");
  if (_yield.final) return;
  const cont   = _kcompose(_yield.conts_count,_yield.conts);
  _yield.conts = new Array(8);
  _yield.conts_count = 1;
  _yield.conts[0] = function(x){ return f(cont,x); };
}
function _yield_prompt(m) {
  if (_yield === null) {
    return Pure;
  }
  else if (_yield.marker !== m) {
    return (_yield.final ? YieldingFinal : Yielding);
  }
  else { // _yield.marker === m
    const cont   = (_yield.final ? _throw_resume_final : _kcompose(_yield.conts_count,_yield.conts));
    const clause = _yield.clause;
    _yield = null;
    return Yield(clause,cont);
  }
}
export function _yield_final(m,clause) {
  _assert(!_yielding(),"yielding final while yielding!");
  _yield = { marker: m, clause: clause, conts: null, conts_count: 0, final: true };
}
export function _yield_to(m,clause) {
  _assert(!_yielding(),"yielding while yielding!");
  _yield = { marker: m, clause: clause, conts: new Array(8), conts_count: 0, final: false };
}
function _yield_capture() {
  _assert(_yielding(),"can only capture a yield when yielding!");
  const yld = _yield;
  _yield = null;
  return yld;
}
function _reyield( yld ) {
  _assert(!_yielding(),"can only reyield a yield when not yielding!");
  _yield = yld;
}
 
// type declarations
// type evv
// type htag
export function Htag(tagname) /* forall<a> (tagname : string) -> htag<a> */  {
  return tagname;
}
// type marker
// type ev
export function Ev(htag, marker, hnd, hevv) /* forall<a,e,b> (htag : htag<a>, marker : marker<e,b>, hnd : a<e,b>, hevv : evv<e>) -> ev<a> */  {
  return { htag: htag, marker: marker, hnd: hnd, hevv: hevv };
}
// type clause0
export function Clause0(clause) /* forall<a,b,e,c> (clause : (marker<e,c>, ev<b>) -> e a) -> clause0<a,b,e,c> */  {
  return clause;
}
// type clause1
export function Clause1(clause) /* forall<a,b,c,e,d> (clause : (marker<e,d>, ev<c>, a) -> e b) -> clause1<a,b,c,e,d> */  {
  return clause;
}
// type clause2
export function Clause2(clause) /* forall<a,b,c,d,e,a1> (clause : (marker<e,a1>, ev<d>, a, b) -> e c) -> clause2<a,b,c,d,e,a1> */  {
  return clause;
}
// type resume-result
export function Deep(result) /* forall<a,b> (result : a) -> resume-result<a,b> */  {
  return { _tag: 1, result: result };
}
export function Shallow(result) /* forall<a,b> (result : a) -> resume-result<a,b> */  {
  return { _tag: 2, result: result };
}
export function Finalize(result) /* forall<a,b> (result : b) -> resume-result<a,b> */  {
  return { _tag: 3, result: result };
}
// type protect-state
export function NeedsFinalization(k) /* forall<a,b,e> (k : (resume-result<a,b>) -> e b) -> protect-state<a,b,e> */  {
  return { k: k };
}
export const NoFinalization = null; // forall<a,b,e> protect-state<a,b,e>
// type resume-context
export function Resume_context(k) /* forall<a,e,e1,b> (k : (resume-result<a,b>) -> e b) -> resume-context<a,e,e1,b> */  {
  return k;
}
// type yield-context
export function Yield_context(yld) /* (yld : any) -> yield-context */  {
  return yld;
}
// type yld
export const Pure = { _tag: 1 }; // forall<e,a,b> yld<e,a,b>
export const YieldingFinal = { _tag: 2 }; // forall<e,a,b> yld<e,a,b>
export const Yielding = { _tag: 3 }; // forall<e,a,b> yld<e,a,b>
export function Yield(clause, cont) /* forall<e,a,b,c> (clause : ((resume-result<c,b>) -> e b) -> e b, cont : (() -> c) -> e a) -> yld<e,a,b> */  {
  return { _tag: 4, clause: clause, cont: cont };
}
 
// declarations
 
 
export function htag_fs_tagname(htag) /* forall<a> (htag : htag<a>) -> string */  {
  return htag;
}
 
export function htag_fs__copy(_this, tagname) /* forall<a> (htag<a>, tagname : ? string) -> htag<a> */  {
  if (tagname !== undefined) {
    var _x0 = tagname;
  }
  else {
    var _x0 = _this;
  }
  return _x0;
}
 
 
export function _new_htag(tag) /* forall<a> (tag : string) -> htag<a> */  {
  return tag;
}
 
 
export function htag_fs_show(_pat_x126__20) /* forall<a> (htag<a>) -> string */  {
  return _pat_x126__20;
}
 
 
export function ev_fs_htag(ev) /* forall<a> (ev : ev<a>) -> htag<a> */  {
  return ev.htag;
}
 
export function ev_fs__copy(_this, htag, marker, hnd, hevv) /* forall<a,e,b> (ev<a>, htag : ? (htag<a>), marker : marker<e,b>, hnd : a<e,b>, hevv : evv<e>) -> ev<a> */  {
  if (htag !== undefined) {
    var _x1 = htag;
  }
  else {
    var _x1 = _this.htag;
  }
  return Ev(_x1, marker, hnd, hevv);
}
 
 
export function eq_marker(x, y) /* forall<a,b,e,e1> (x : marker<e,a>, y : marker<e1,b>) -> bool */  {
  return x===y;
}
 
 
export function ev_fs__lp__eq__eq__rp_(_pat_x141__18, _pat_x141__37) /* forall<a> (ev<a>, ev<a>) -> bool */  {
  return eq_marker(_pat_x141__18.marker, _pat_x141__37.marker);
}
 
export function fresh_marker() /* forall<a,e> () -> marker<e,a> */  {
  return $marker_unique++;
}
 
export function fresh_marker_named() /* forall<a,e> () -> marker<e,a> */  {
  return -($marker_unique++);
}
 
 
export function evv_insert(evv, ev) /* forall<e,e1,a> (evv : evv<e>, ev : ev<a>) -> e evv<e1> */  {
  return _evv_insert(evv,ev);
}
 
 
export function evv_show(evv) /* forall<e> (evv : evv<e>) -> string */  {
  return _evv_show(evv);
}
 
 
export function evv_eq(evv0, evv1) /* forall<e> (evv0 : evv<e>, evv1 : evv<e>) -> bool */  {
  return (evv0) === (evv1);
}
 
 
export function _evv_index(htag) /* forall<e,a> (htag : htag<a>) -> e ev-index */  {
  return __evv_index(htag);
}
 
 
export function evv_get() /* forall<e> () -> e evv<e> */  {
  return $std_core_hnd._evv_get();
}
 
 
export function _evv_is_affine() /* () -> bool */  {
  return $std_core_hnd._evv_is_affine_();
}
 
 
export function evv_swap_delete(i, behind) /* forall<e,e1> (i : ev-index, behind : bool) -> e1 evv<e> */  {
  return _evv_swap_delete(i,behind);
}
 
 
export function evv_swap_create(indices) /* forall<e> (indices : vector<ev-index>) -> e evv<e> */  {
  return _evv_swap_create(indices);
}
 
export function yield_extend(next) /* forall<a,b,e> (next : (a) -> e b) -> e b */  {
  return _yield_extend(next);
}
 
export function yield_bind(x, next) /* forall<a,b,e> (x : a, next : (a) -> e b) -> e b */  {
  if ($std_core_hnd._yielding()) {
    return yield_extend(next);
  }
  else {
    return next(x);
  }
}
 
export function yield_bind2(x, extend, next) /* forall<a,b,e> (x : a, extend : (a) -> e b, next : (a) -> e b) -> e b */  {
  if ($std_core_hnd._yielding()) {
    return yield_extend(extend);
  }
  else {
    return next(x);
  }
}
 
export function yield_cont(f) /* forall<a,e,b> (f : forall<c> ((c) -> e a, c) -> e b) -> e b */  {
  return _yield_cont(f);
}
 
export function yield_prompt(m) /* forall<a,e,b> (m : marker<e,b>) -> yld<e,a,b> */  {
  return _yield_prompt(m);
}
 
export function yield_to_prim(m, clause) /* forall<a,e,e1,b> (m : marker<e1,b>, clause : ((resume-result<a,b>) -> e1 b) -> e1 b) -> e (() -> a) */  {
  return $std_core_hnd._yield_to(m,clause);
}
 
export function yield_to_final(m, clause) /* forall<a,e,e1,b> (m : marker<e1,b>, clause : ((resume-result<a,b>) -> e1 b) -> e1 b) -> e a */  {
  return $std_core_hnd._yield_final(m,clause);
}
 
export function yield_to(m, clause) /* forall<a,e,b> (m : marker<e,b>, clause : ((resume-result<a,b>) -> e b) -> e b) -> e a */  {
   
  var g = yield_to_prim(m, clause);
  return yield_extend(function(f /* () -> 2814 2813 */ ) {
    return f();
  });
}
 
 
export function yield_context_fs_yld(_this) /* (yield-context) -> any */  {
  return _this;
}
 
export function yield_context_fs__copy(_this, yld) /* (yield-context, yld : ? any) -> yield-context */  {
  if (yld !== undefined) {
    var _x2 = yld;
  }
  else {
    var _x2 = _this;
  }
  return _x2;
}
 
export function yield_capture_prim() /* forall<e> () -> e any */  {
  return _yield_capture();
}
 
export function unsafe_reyield_prim(yld) /* forall<a,e> (yld : any) -> e a */  {
  return _reyield(yld);
}
 
export function yield_capture() /* forall<e> () -> e yield-context */  {
  return yield_capture_prim();
}
 
export function unsafe_reyield(_pat_x338__24) /* forall<a,e> (yield-context) -> e a */  {
  return unsafe_reyield_prim(_pat_x338__24);
}
 
 
export function is_deep(resume_result) /* forall<a,b> (resume-result : resume-result<a,b>) -> bool */  {
  return (resume_result._tag === 1);
}
 
 
export function is_shallow(resume_result) /* forall<a,b> (resume-result : resume-result<a,b>) -> bool */  {
  return (resume_result._tag === 2);
}
 
 
export function is_finalize(resume_result) /* forall<a,b> (resume-result : resume-result<a,b>) -> bool */  {
  return (resume_result._tag === 3);
}
 
 
export function is_pure(yld) /* forall<a,b,e> (yld : yld<e,a,b>) -> bool */  {
  return (yld._tag === 1);
}
 
 
export function is_yieldingFinal(yld) /* forall<a,b,e> (yld : yld<e,a,b>) -> bool */  {
  return (yld._tag === 2);
}
 
 
export function is_yielding(yld) /* forall<a,b,e> (yld : yld<e,a,b>) -> bool */  {
  return (yld._tag === 3);
}
 
 
export function is_yield(yld) /* forall<a,b,e> (yld : yld<e,a,b>) -> bool */  {
  return (yld._tag === 4);
}
 
export function guard(w) /* forall<e> (w : evv<e>) -> e () */  {
  return _guard(w);
}
 
export function resume_final() /* forall<a> () -> a */  {
  return _throw_resume_final();
}
 
export function prompt(w0, w1, ev, m, ret, result) /* forall<a,e,b,c> (w0 : evv<e>, w1 : evv<e>, ev : ev<b>, m : marker<e,c>, ret : (a) -> e c, result : a) -> e c */  {
   
  guard(w1);
   
  $std_core_hnd._evv_set(w0);
  var _x3 = yield_prompt(m);
  if (_x3._tag === 1) {
    return ret(result);
  }
  else if (_x3._tag === 2) {
    return undefined;
  }
  else if (_x3._tag === 3) {
    return yield_cont(function(cont /* (3345) -> 3586 3585 */ , res /* 3345 */ ) {
       
      var w0_sq_ = evv_get();
       
      var _x4 = evv_eq(w0, w0_sq_);
      if (_x4) {
        var w1_sq_ = w1;
      }
      else {
        var w1_sq_ = evv_insert(w0_sq_, ev);
      }
       
      $std_core_hnd._evv_set(w1_sq_);
      return prompt(w0_sq_, w1_sq_, ev, m, ret, cont(res));
    });
  }
  else {
    return _x3.clause(function(r /* resume-result<3566,3588> */ ) {
      if (r._tag === 1) {
         
        var w0_0_sq_ = evv_get();
         
        var _x4 = evv_eq(w0, w0_0_sq_);
        if (_x4) {
          var w1_0_sq_ = w1;
        }
        else {
          var w1_0_sq_ = evv_insert(w0_0_sq_, ev);
        }
         
        $std_core_hnd._evv_set(w1_0_sq_);
        return prompt(w0_0_sq_, w1_0_sq_, ev, m, ret, _x3.cont(function() {
            return r.result;
          }));
      }
      else if (r._tag === 2) {
         
        var x_1_10003 = _x3.cont(function() {
          return r.result;
        });
        if ($std_core_hnd._yielding()) {
          return yield_extend(ret);
        }
        else {
          return ret(x_1_10003);
        }
      }
      else {
         
        var w0_1_sq_ = evv_get();
         
        var _x4 = evv_eq(w0, w0_1_sq_);
        if (_x4) {
          var w1_1_sq_ = w1;
        }
        else {
          var w1_1_sq_ = evv_insert(w0_1_sq_, ev);
        }
         
        $std_core_hnd._evv_set(w1_1_sq_);
        return prompt(w0_1_sq_, w1_1_sq_, ev, m, ret, _x3.cont(function() {
            return yield_to_final(m, function(___wildcard_x417__85 /* (resume-result<3566,3588>) -> 3586 3588 */ ) {
                return r.result;
              });
          }));
      }
    });
  }
}
 
export function _hhandle(tag, h, ret, action) /* forall<a,e,e1,b,c> (tag : htag<b>, h : b<e,c>, ret : (a) -> e c, action : () -> e1 a) -> e c */  {
   
  var w0 = evv_get();
   
  var m = fresh_marker();
   
  var ev = Ev(tag, m, h, w0);
   
  var w1 = evv_insert(w0, ev);
   
  $std_core_hnd._evv_set(w1);
  return prompt(w0, w1, ev, m, ret, action());
}
 
export function _named_handle(tag, h, ret, action) /* forall<a,e,e1,b,c> (tag : htag<b>, h : b<e,c>, ret : (a) -> e c, action : (ev<b>) -> e1 a) -> e c */  {
   
  var m = fresh_marker_named();
   
  var w0 = evv_get();
   
  var ev = Ev(tag, m, h, w0);
  return prompt(w0, w0, ev, m, ret, action(ev));
}
 
export function mask_at1(i, behind, action, x) /* forall<a,b,e,e1> (i : ev-index, behind : bool, action : (a) -> e b, x : a) -> e1 b */  {
   
  var w0 = evv_swap_delete(i, behind);
   
  var y = action(x);
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (3941) -> 3967 3965 */ , res /* 3941 */ ) {
      return mask_at1(i, behind, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _mask_at(i, behind, action) /* forall<a,e,e1> (i : ev-index, behind : bool, action : () -> e a) -> e1 a */  {
   
  var w0 = evv_swap_delete(i, behind);
   
  var x = action();
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (4058) -> 4079 4077 */ , res /* 4058 */ ) {
      return mask_at1(i, behind, cont, res);
    });
  }
  else {
    return x;
  }
}
 
 
export function _mask_builtin(action) /* forall<a,e,e1> (action : () -> e a) -> e1 a */  {
  return action();
}
 
export function prompt_local_var(loc, res) /* forall<a,b,h> (loc : local-var<h,a>, res : b) -> <div,local<h>> b */  {
   
  var b_10005 = $std_core_hnd._yielding();
  if (b_10005) {
     
    var v = ((loc).value);
    return yield_cont(function(cont /* (4221) -> <div,local<4265>> 4264 */ , x /* 4221 */ ) {
       
      ((loc).value = v);
      return prompt_local_var(loc, cont(x));
    });
  }
  else {
    return res;
  }
}
 
export function local_var(init, action) /* forall<a,b,e,h> (init : a, action : (local-var<h,a>) -> <local<h>|e> b) -> <local<h>|e> b */  {
   
  var loc = { value: init };
   
  var res = action(loc);
  return prompt_local_var(loc, res);
}
 
export function finally_prompt(fin, res) /* forall<a,e> (fin : () -> e (), res : a) -> e a */  {
   
  var b = $std_core_hnd._yielding();
  if (b) {
    if ($std_core_hnd._yielding_non_final()) {
      return yield_cont(function(cont /* (4456) -> 4516 4515 */ , x /* 4456 */ ) {
        return finally_prompt(fin, cont(x));
      });
    }
    else {
       
      var yld = yield_capture_prim();
       
      fin();
      if ($std_core_hnd._yielding()) {
        return yield_extend(function(___wildcard_x498__43 /* _4477 */ ) {
          return unsafe_reyield_prim(yld);
        });
      }
      else {
        return unsafe_reyield_prim(yld);
      }
    }
  }
  else {
     
    fin();
    if ($std_core_hnd._yielding()) {
      return yield_extend(function(___wildcard_x491__40 /* _4404 */ ) {
        return res;
      });
    }
    else {
      return res;
    }
  }
}
 
export function $finally(fin, action) /* forall<a,e> (fin : () -> e (), action : () -> e a) -> e a */  {
  return finally_prompt(fin, action());
}
 
export function initially_prompt(init, res) /* forall<a,e> (init : (int) -> e (), res : a) -> e a */  {
  if ($std_core_hnd._yielding_non_final()) {
     
    var count = { value: 0 };
    return yield_cont(function(cont /* (4737) -> 4751 4750 */ , x /* 4737 */ ) {
       
      var cnt = (count).value;
       
      ((count).value = ((cnt + 1)));
       
      if ((cnt == 0)) {
        $std_core_types.Unit;
      }
      else {
         
        var r = init(cnt);
        if ($std_core_hnd._yielding()) {
           
          yield_extend(function(___wildcard_x539__35 /* _4684 */ ) {
            return initially_prompt(init, cont(x));
          });
          $std_core_types.Unit;
        }
        else {
          $std_core_types.Unit;
        }
      }
      return initially_prompt(init, cont(x));
    });
  }
  else {
    return res;
  }
}
 
export function initially(init, action) /* forall<a,e> (init : (int) -> e (), action : () -> e a) -> e a */  {
   
  init(0);
  if ($std_core_hnd._yielding()) {
    return yield_extend(function(___wildcard_x527__40 /* () */ ) {
      return initially_prompt(init, action());
    });
  }
  else {
    return initially_prompt(init, action());
  }
}
 
 
export function resume_context_fs_k(_this) /* forall<a,e,e1,b> (resume-context<a,e,e1,b>) -> ((resume-result<a,b>) -> e b) */  {
  return _this;
}
 
export function resume_context_fs__copy(_this, k) /* forall<a,e,e1,b> (resume-context<a,e,e1,b>, k : ? ((resume-result<a,b>) -> e b)) -> resume-context<a,e,e1,b> */  {
  if (k !== undefined) {
    var _x4 = k;
  }
  else {
    var _x4 = _this;
  }
  return _x4;
}
 
export function resume(r, x) /* forall<a,e,e1,b> (r : resume-context<a,e,e1,b>, x : a) -> e b */  {
  return r(Deep(x));
}
 
export function resume_shallow(r, x) /* forall<a,e,e1,b> (r : resume-context<a,e,e1,b>, x : a) -> e1 b */  {
  return r(Shallow(x));
}
 
export function finalize(r, x) /* forall<a,e,e1,b> (r : resume-context<a,e,e1,b>, x : b) -> e b */  {
  return r(Finalize(x));
}
 
 
export function clause1_fs_clause(clause1) /* forall<a,b,c,e,d> (clause1 : clause1<a,b,c,e,d>) -> ((marker<e,d>, ev<c>, a) -> e b) */  {
  return clause1;
}
 
export function clause1_fs__copy(_this, clause) /* forall<a,b,c,e,d> (clause1<a,b,c,e,d>, clause : ? ((marker<e,d>, ev<c>, a) -> e b)) -> clause1<a,b,c,e,d> */  {
  if (clause !== undefined) {
    var _x5 = clause;
  }
  else {
    var _x5 = _this;
  }
  return _x5;
}
 
export function _perform1(ev, op, x) /* forall<a,b,c,e> (ev : ev<c>, op : forall<e1,d> (c<e1,d>) -> clause1<a,b,c,e1,d>, x : a) -> e b */  {
  var _x6 = op(ev.hnd);
  return _x6(ev.marker, ev, x);
}
 
export function evv_swap_with(ev) /* forall<a,e> (ev : ev<a>) -> evv<e> */  {
  return $std_core_hnd._evv_swap((ev.hevv));
}
 
 
export function under1x(ev, op, x) /* forall<a,b,e,c> (ev : ev<c>, op : (a) -> e b, x : a) -> e b */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var y = op(x);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (5539) -> 5573 5572 */ , res /* 5539 */ ) {
      return under1x(ev, cont, res);
    });
  }
  else {
     
    $std_core_hnd._evv_set(w0);
    return y;
  }
}
 
export function under1(ev, op, x) /* forall<a,b,e,c> (ev : ev<c>, op : (a) -> e b, x : a) -> e b */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var y = op(x);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (5652) -> 5686 5685 */ , res /* 5652 */ ) {
      return under1x(ev, cont, res);
    });
  }
  else {
     
    $std_core_hnd._evv_set(w0);
    return y;
  }
}
 
export function clause_control_raw1(op) /* forall<a,b,e,e1,c,d> (op : (x : a, r : resume-context<b,e,e1,d>) -> e d) -> clause1<a,b,c,e,d> */  {
  return function(m /* marker<5787,5790> */ , ___wildcard_x606__16 /* ev<5789> */ , x /* 5785 */ ) {
    return yield_to(m, function(k /* (resume-result<5786,5790>) -> 5787 5790 */ ) {
        return op(x, k);
      });
  };
}
 
export function get(ref) /* forall<a,h> (ref : ref<h,a>) -> <read<h>,div> a */  {
  return (ref).value;
}
 
 
export function is_needsFinalization(protect_state) /* forall<a,b,e> (protect-state : protect-state<a,b,e>) -> bool */  {
  return (protect_state !== null);
}
 
 
export function is_noFinalization(protect_state) /* forall<a,b,e> (protect-state : protect-state<a,b,e>) -> bool */  {
  return (protect_state === null);
}
 
export function protect_prompt(resumed, res) /* forall<a,e,b> (resumed : ref<global,protect-state<a,b,e>>, res : b) -> e b */  {
   
  var did_resume = (resumed).value;
  if (did_resume === null) {
    return res;
  }
  else {
     
    var b = $std_core_hnd._yielding();
    if (b) {
      if ($std_core_hnd._yielding_non_final()) {
        return yield_cont(function(cont /* (6045) -> 6121 6122 */ , x /* 6045 */ ) {
          return protect_prompt(resumed, cont(x));
        });
      }
      else {
         
        var yld = yield_capture_prim();
         
        did_resume.k(Finalize(res));
        if ($std_core_hnd._yielding()) {
          return yield_extend(function(___wildcard_x639__47 /* _6077 */ ) {
            return unsafe_reyield_prim(yld);
          });
        }
        else {
          return unsafe_reyield_prim(yld);
        }
      }
    }
    else {
      return did_resume.k(Finalize(res));
    }
  }
}
 
export function protect(x, clause, k) /* forall<a,b,e,c> (x : a, clause : (x : a, k : (b) -> e c) -> e c, k : (resume-result<b,c>) -> e c) -> e c */  {
   
  var resumed = { value: (NeedsFinalization(k)) };
   
  var res = clause(x, function(ret /* 6258 */ ) {
       
      ((resumed).value = NoFinalization);
      return k(Deep(ret));
    });
  return protect_prompt(resumed, res);
}
 
 
export function clause_control1(clause) /* forall<a,b,e,c,d> (clause : (x : a, k : (b) -> e d) -> e d) -> clause1<a,b,c,e,d> */  {
  return function(m /* marker<6352,6354> */ , ___wildcard_x657__16 /* ev<6353> */ , x /* 6350 */ ) {
    return yield_to(m, function(k /* (resume-result<6351,6354>) -> 6352 6354 */ ) {
        return protect(x, clause, k);
      });
  };
}
 
 
export function clause_tail1(op) /* forall<e,a,b,c,d> (op : (c) -> e d) -> clause1<c,d,b,e,a> */  {
  return function(___wildcard_x662__14 /* marker<6435,6436> */ , ev /* ev<6437> */ , x /* 6438 */ ) {
     
    var w0 = $std_core_hnd._evv_swap((ev.hevv));
     
    var y = op(x);
    if ($std_core_hnd._yielding()) {
      return yield_cont(function(cont /* (5652) -> 6435 6439 */ , res /* 5652 */ ) {
        return under1x(ev, cont, res);
      });
    }
    else {
       
      $std_core_hnd._evv_set(w0);
      return y;
    }
  };
}
 
 
export function clause_tail_noop1(op) /* forall<e,a,b,c,d> (op : (c) -> e d) -> clause1<c,d,b,e,a> */  {
  return function(___wildcard_x667__14 /* marker<6506,6507> */ , ___wildcard_x667__17 /* ev<6508> */ , x /* 6509 */ ) {
    return op(x);
  };
}
 
 
export function clause_never1(op) /* forall<a,b,e,c,d> (op : (a) -> e d) -> clause1<a,b,c,e,d> */  {
  return function(m /* marker<6595,6597> */ , ___wildcard_x672__16 /* ev<6596> */ , x /* 6593 */ ) {
    return yield_to_final(m, function(___wildcard_x672__45 /* (resume-result<6594,6597>) -> 6595 6597 */ ) {
        return op(x);
      });
  };
}
 
 
export function clause0_fs_clause(clause0) /* forall<a,b,e,c> (clause0 : clause0<a,b,e,c>) -> ((marker<e,c>, ev<b>) -> e a) */  {
  return clause0;
}
 
export function clause0_fs__copy(_this, clause) /* forall<a,b,e,c> (clause0<a,b,e,c>, clause : ? ((marker<e,c>, ev<b>) -> e a)) -> clause0<a,b,e,c> */  {
  if (clause !== undefined) {
    var _x7 = clause;
  }
  else {
    var _x7 = _this;
  }
  return _x7;
}
 
 
export function _perform0(ev, op) /* forall<a,e,b> (ev : ev<b>, op : forall<e1,c> (b<e1,c>) -> clause0<a,b,e1,c>) -> e a */  {
  var _x8 = op(ev.hnd);
  return _x8(ev.marker, ev);
}
 
export function under0(ev, op) /* forall<a,e,b> (ev : ev<b>, op : () -> e a) -> e a */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var y = op();
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (6898) -> 6918 6917 */ , res /* 6898 */ ) {
       
      var w0_0 = $std_core_hnd._evv_swap((ev.hevv));
       
      var y_0 = cont(res);
      if ($std_core_hnd._yielding()) {
        return yield_cont(function(cont_0 /* (5652) -> 6918 6917 */ , res_0 /* 5652 */ ) {
          return under1x(ev, cont_0, res_0);
        });
      }
      else {
         
        $std_core_hnd._evv_set(w0_0);
        return y_0;
      }
    });
  }
  else {
    return y;
  }
}
 
export function clause_control_raw0(op) /* forall<a,e,e1,b,c> (op : (resume-context<a,e,e1,c>) -> e c) -> clause0<a,b,e,c> */  {
  return function(m /* marker<7006,7009> */ , ___wildcard_x698__16 /* ev<7008> */ ) {
    return yield_to(m, function(k /* (resume-result<7005,7009>) -> 7006 7009 */ ) {
        return op(k);
      });
  };
}
 
export function clause_control0(op) /* forall<a,e,b,c> (op : ((a) -> e c) -> e c) -> clause0<a,b,e,c> */  {
  return function(m /* marker<7099,7101> */ , ___wildcard_x706__16 /* ev<7100> */ ) {
    return yield_to(m, function(k /* (resume-result<7098,7101>) -> 7099 7101 */ ) {
         
        var resumed = { value: (NeedsFinalization(k)) };
         
        var res = op(function(ret /* 7098 */ ) {
           
          ((resumed).value = NoFinalization);
          return k(Deep(ret));
        });
        return protect_prompt(resumed, res);
      });
  };
}
 
export function clause_tail0(op) /* forall<e,a,b,c> (op : () -> e c) -> clause0<c,b,e,a> */  {
  return function(___wildcard_x710__14 /* marker<7167,7168> */ , ev /* ev<7169> */ ) {
     
    var w0 = $std_core_hnd._evv_swap((ev.hevv));
     
    var y = op();
     
    $std_core_hnd._evv_set(w0);
    if ($std_core_hnd._yielding()) {
      return yield_cont(function(cont /* (6898) -> 7167 7170 */ , res /* 6898 */ ) {
         
        var w0_0 = $std_core_hnd._evv_swap((ev.hevv));
         
        var y_0 = cont(res);
        if ($std_core_hnd._yielding()) {
          return yield_cont(function(cont_0 /* (5652) -> 7167 7170 */ , res_0 /* 5652 */ ) {
            return under1x(ev, cont_0, res_0);
          });
        }
        else {
           
          $std_core_hnd._evv_set(w0_0);
          return y_0;
        }
      });
    }
    else {
      return y;
    }
  };
}
 
export function clause_tail_noop0(op) /* forall<e,a,b,c> (op : () -> e c) -> clause0<c,b,e,a> */  {
  return function(___wildcard_x713__14 /* marker<7225,7226> */ , ___wildcard_x713__17 /* ev<7227> */ ) {
    return op();
  };
}
 
export function clause_value(v) /* forall<a,e,b,c> (v : a) -> clause0<a,b,e,c> */  {
  return function(___wildcard_x716__14 /* marker<7283,7285> */ , ___wildcard_x716__17 /* ev<7284> */ ) {
    return v;
  };
}
 
export function clause_never0(op) /* forall<a,e,b,c> (op : () -> e c) -> clause0<a,b,e,c> */  {
  return function(m /* marker<7357,7359> */ , ___wildcard_x719__16 /* ev<7358> */ ) {
    return yield_to_final(m, function(___wildcard_x719__43 /* (resume-result<7356,7359>) -> 7357 7359 */ ) {
        return op();
      });
  };
}
 
 
export function clause2_fs_clause(clause2) /* forall<a,b,c,d,e,a1> (clause2 : clause2<a,b,c,d,e,a1>) -> ((marker<e,a1>, ev<d>, a, b) -> e c) */  {
  return clause2;
}
 
export function clause2_fs__copy(_this, clause) /* forall<a,b,c,d,e,a1> (clause2<a,b,c,d,e,a1>, clause : ? ((marker<e,a1>, ev<d>, a, b) -> e c)) -> clause2<a,b,c,d,e,a1> */  {
  if (clause !== undefined) {
    var _x9 = clause;
  }
  else {
    var _x9 = _this;
  }
  return _x9;
}
 
export function under2(ev, op, x1, x2) /* forall<a,b,c,e,d> (ev : ev<d>, op : (a, b) -> e c, x1 : a, x2 : b) -> e c */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var z = op(x1, x2);
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (7622) -> 7652 7651 */ , res /* 7622 */ ) {
       
      var w0_0 = $std_core_hnd._evv_swap((ev.hevv));
       
      var y = cont(res);
      if ($std_core_hnd._yielding()) {
        return yield_cont(function(cont_0 /* (5652) -> 7652 7651 */ , res_0 /* 5652 */ ) {
          return under1x(ev, cont_0, res_0);
        });
      }
      else {
         
        $std_core_hnd._evv_set(w0_0);
        return y;
      }
    });
  }
  else {
    return z;
  }
}
 
export function protect2(x1, x2, clause, k) /* forall<a,b,c,e,d> (x1 : a, x2 : b, clause : (x : a, x : b, k : (c) -> e d) -> e d, k : (resume-result<c,d>) -> e d) -> e d */  {
   
  var resumed = { value: (NeedsFinalization(k)) };
   
  var res = clause(x1, x2, function(ret /* 7802 */ ) {
       
      ((resumed).value = NoFinalization);
      return k(Deep(ret));
    });
  return protect_prompt(resumed, res);
}
 
export function clause_control2(clause) /* forall<a,b,c,e,d,a1> (clause : (x1 : a, x2 : b, k : (c) -> e a1) -> e a1) -> clause2<a,b,c,d,e,a1> */  {
  return function(m /* marker<7912,7914> */ , ___wildcard_x744__16 /* ev<7913> */ , x1 /* 7909 */ , x2 /* 7910 */ ) {
    return yield_to(m, function(k /* (resume-result<7911,7914>) -> 7912 7914 */ ) {
        return protect2(x1, x2, clause, k);
      });
  };
}
 
export function clause_control_raw2(op) /* forall<a,b,c,e,e1,d,a1> (op : (x1 : a, x2 : b, r : resume-context<c,e,e1,a1>) -> e a1) -> clause2<a,b,c,d,e,a1> */  {
  return function(m /* marker<8031,8034> */ , ___wildcard_x748__16 /* ev<8033> */ , x1 /* 8028 */ , x2 /* 8029 */ ) {
    return yield_to(m, function(k /* (resume-result<8030,8034>) -> 8031 8034 */ ) {
        return op(x1, x2, k);
      });
  };
}
 
export function clause_tail2(op) /* forall<e,a,b,c,d,a1> (op : (c, d) -> e a1) -> clause2<c,d,a1,b,e,a> */  {
  return function(m /* marker<8133,8134> */ , ev /* ev<8135> */ , x1 /* 8136 */ , x2 /* 8137 */ ) {
    return under2(ev, op, x1, x2);
  };
}
 
export function clause_tail_noop2(op) /* forall<e,a,b,c,d,a1> (op : (c, d) -> e a1) -> clause2<c,d,a1,b,e,a> */  {
  return function(___wildcard_x754__14 /* marker<8217,8218> */ , ___wildcard_x754__17 /* ev<8219> */ , x1 /* 8220 */ , x2 /* 8221 */ ) {
    return op(x1, x2);
  };
}
 
export function _perform2(evx, op, x, y) /* forall<a,b,c,e,d> (evx : ev<d>, op : forall<e1,a1> (d<e1,a1>) -> clause2<a,b,c,d,e1,a1>, x : a, y : b) -> e c */  {
  var _x10 = op(evx.hnd);
  return _x10(evx.marker, evx, x, y);
}
 
export function clause_never2(op) /* forall<a,b,c,e,d,a1> (op : (a, b) -> e a1) -> clause2<a,b,c,d,e,a1> */  {
  return function(m /* marker<8441,8443> */ , ___wildcard_x762__16 /* ev<8442> */ , x1 /* 8438 */ , x2 /* 8439 */ ) {
    return yield_to_final(m, function(___wildcard_x762__49 /* (resume-result<8440,8443>) -> 8441 8443 */ ) {
        return op(x1, x2);
      });
  };
}
 
 
export function xperform1(ev, op, x) /* forall<a,b,e,c> (ev : ev<c>, op : forall<e1,d> (c<e1,d>) -> clause1<a,b,c,e1,d>, x : a) -> e b */  {
  var _x11 = op(ev.hnd);
  return _x11(ev.marker, ev, x);
}
 
export function clause_control_raw3(op) /* forall<a,b,c,d,e,e1,a1,b1> (op : (x1 : a, x2 : b, x3 : c, r : resume-context<d,e,e1,b1>) -> e b1) -> clause1<(a, b, c),d,a1,e,b1> */  {
  return function(m /* marker<8654,8657> */ , ___wildcard_x606__16 /* ev<8656> */ , x /* (8650, 8651, 8652) */ ) {
    return yield_to(m, function(k /* (resume-result<8653,8657>) -> 8654 8657 */ ) {
        return op(x.fst, x.snd, x.thd, k);
      });
  };
}
 
export function clause_control3(op) /* forall<a,b,c,d,e,a1,b1> (op : (x1 : a, x2 : b, x3 : c, k : (d) -> e b1) -> e b1) -> clause1<(a, b, c),d,a1,e,b1> */  {
  return function(m /* marker<8760,8762> */ , ___wildcard_x657__16 /* ev<8761> */ , x /* (8756, 8757, 8758) */ ) {
    return yield_to(m, function(k /* (resume-result<8759,8762>) -> 8760 8762 */ ) {
         
        var resumed = { value: (NeedsFinalization(k)) };
         
        var res = op(x.fst, x.snd, x.thd, function(ret /* 8759 */ ) {
             
            ((resumed).value = NoFinalization);
            return k(Deep(ret));
          });
        return protect_prompt(resumed, res);
      });
  };
}
 
export function clause_tail3(op) /* forall<e,a,b,c,d,a1,b1> (op : (c, d, a1) -> e b1) -> clause1<(c, d, a1),b1,b,e,a> */  {
  return function(___wildcard_x662__14 /* marker<8857,8858> */ , ev /* ev<8859> */ , x /* (8860, 8861, 8862) */ ) {
     
    var w0 = $std_core_hnd._evv_swap((ev.hevv));
     
    var y = op(x.fst, x.snd, x.thd);
    if ($std_core_hnd._yielding()) {
      return yield_cont(function(cont /* (5652) -> 8857 8863 */ , res /* 5652 */ ) {
        return under1x(ev, cont, res);
      });
    }
    else {
       
      $std_core_hnd._evv_set(w0);
      return y;
    }
  };
}
 
export function clause_tail_noop3(op) /* forall<e,a,b,c,d,a1,b1> (op : (c, d, a1) -> e b1) -> clause1<(c, d, a1),b1,b,e,a> */  {
  return function(___wildcard_x667__14 /* marker<8958,8959> */ , ___wildcard_x667__17 /* ev<8960> */ , x /* (8961, 8962, 8963) */ ) {
    return op(x.fst, x.snd, x.thd);
  };
}
 
export function clause_never3(op) /* forall<a,b,c,d,e,a1,b1> (op : (a, b, c) -> e b1) -> clause1<(a, b, c),d,a1,e,b1> */  {
  return function(m /* marker<9063,9065> */ , ___wildcard_x672__16 /* ev<9064> */ , x /* (9059, 9060, 9061) */ ) {
    return yield_to_final(m, function(___wildcard_x672__45 /* (resume-result<9062,9065>) -> 9063 9065 */ ) {
        return op(x.fst, x.snd, x.thd);
      });
  };
}
 
export function _perform3(ev, op, x1, x2, x3) /* forall<a,b,c,d,e,a1> (ev : ev<a1>, op : forall<e1,b1> (a1<e1,b1>) -> clause1<(a, b, c),d,a1,e1,b1>, x1 : a, x2 : b, x3 : c) -> e d */  {
  var _x12 = op(ev.hnd);
  return _x12(ev.marker, ev, $std_core_types.Tuple3(x1, x2, x3));
}
 
export function under3(ev, op, x1, x2, x3) /* forall<a,b,c,d,e,a1> (ev : ev<a1>, op : (a, b, c) -> e d, x1 : a, x2 : b, x3 : c) -> e d */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var z = op(x1, x2, x3);
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (9266) -> 9301 9300 */ , res /* 9266 */ ) {
       
      var w0_0 = $std_core_hnd._evv_swap((ev.hevv));
       
      var y = cont(res);
      if ($std_core_hnd._yielding()) {
        return yield_cont(function(cont_0 /* (5652) -> 9301 9300 */ , res_0 /* 5652 */ ) {
          return under1x(ev, cont_0, res_0);
        });
      }
      else {
         
        $std_core_hnd._evv_set(w0_0);
        return y;
      }
    });
  }
  else {
    return z;
  }
}
 
export function clause_control4(op) /* forall<a,b,c,d,a1,e,b1,c1> (op : (x1 : a, x2 : b, x3 : c, x4 : d, k : (a1) -> e c1) -> e c1) -> clause1<(a, b, c, d),a1,b1,e,c1> */  {
  return function(m /* marker<9407,9409> */ , ___wildcard_x657__16 /* ev<9408> */ , x /* (9402, 9403, 9404, 9405) */ ) {
    return yield_to(m, function(k /* (resume-result<9406,9409>) -> 9407 9409 */ ) {
         
        var resumed = { value: (NeedsFinalization(k)) };
         
        var res = op(x.fst, x.snd, x.thd, x.field4, function(ret /* 9406 */ ) {
             
            ((resumed).value = NoFinalization);
            return k(Deep(ret));
          });
        return protect_prompt(resumed, res);
      });
  };
}
 
export function clause_tail4(op) /* forall<e,a,b,c,d,a1,b1,c1> (op : (c, d, a1, b1) -> e c1) -> clause1<(c, d, a1, b1),c1,b,e,a> */  {
  return function(___wildcard_x662__14 /* marker<9515,9516> */ , ev /* ev<9517> */ , x /* (9518, 9519, 9520, 9521) */ ) {
     
    var w0 = $std_core_hnd._evv_swap((ev.hevv));
     
    var y = op(x.fst, x.snd, x.thd, x.field4);
    if ($std_core_hnd._yielding()) {
      return yield_cont(function(cont /* (5652) -> 9515 9522 */ , res /* 5652 */ ) {
        return under1x(ev, cont, res);
      });
    }
    else {
       
      $std_core_hnd._evv_set(w0);
      return y;
    }
  };
}
 
export function clause_tail_noop4(op) /* forall<e,a,b,c,d,a1,b1,c1> (op : (c, d, a1, b1) -> e c1) -> clause1<(c, d, a1, b1),c1,b,e,a> */  {
  return function(___wildcard_x667__14 /* marker<9628,9629> */ , ___wildcard_x667__17 /* ev<9630> */ , x /* (9631, 9632, 9633, 9634) */ ) {
    return op(x.fst, x.snd, x.thd, x.field4);
  };
}
 
export function clause_never4(op) /* forall<a,b,c,d,a1,e,b1,c1> (op : (a, b, c, d) -> e c1) -> clause1<(a, b, c, d),a1,b1,e,c1> */  {
  return function(m /* marker<9746,9748> */ , ___wildcard_x672__16 /* ev<9747> */ , x /* (9741, 9742, 9743, 9744) */ ) {
    return yield_to_final(m, function(___wildcard_x672__45 /* (resume-result<9745,9748>) -> 9746 9748 */ ) {
        return op(x.fst, x.snd, x.thd, x.field4);
      });
  };
}
 
export function _perform4(ev, op, x1, x2, x3, x4) /* forall<a,b,c,d,a1,e,b1> (ev : ev<b1>, op : forall<e1,c1> (b1<e1,c1>) -> clause1<(a, b, c, d),a1,b1,e1,c1>, x1 : a, x2 : b, x3 : c, x4 : d) -> e a1 */  {
  var _x13 = op(ev.hnd);
  return _x13(ev.marker, ev, $std_core_types.Tuple4(x1, x2, x3, x4));
}
 
export function under4(ev, op, x1, x2, x3, x4) /* forall<a,b,c,d,a1,e,b1> (ev : ev<b1>, op : (a, b, c, d) -> e a1, x1 : a, x2 : b, x3 : c, x4 : d) -> e a1 */  {
   
  var w0 = $std_core_hnd._evv_swap((ev.hevv));
   
  var z = op(x1, x2, x3, x4);
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (9967) -> 10007 10006 */ , res /* 9967 */ ) {
       
      var w0_0 = $std_core_hnd._evv_swap((ev.hevv));
       
      var y = cont(res);
      if ($std_core_hnd._yielding()) {
        return yield_cont(function(cont_0 /* (5652) -> 10007 10006 */ , res_0 /* 5652 */ ) {
          return under1x(ev, cont_0, res_0);
        });
      }
      else {
         
        $std_core_hnd._evv_set(w0_0);
        return y;
      }
    });
  }
  else {
    return z;
  }
}
 
export function _open_none0(f) /* forall<a,e,e1> (f : () -> e a) -> e1 a */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = f();
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
export function _open_none1(f, x1) /* forall<a,b,e,e1> (f : (a) -> e b, x1 : a) -> e1 b */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = f(x1);
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
export function _open_none2(f, x1, x2) /* forall<a,b,c,e,e1> (f : (a, b) -> e c, x1 : a, x2 : b) -> e1 c */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = f(x1, x2);
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
export function _open_none3(f, x1, x2, x3) /* forall<a,b,c,d,e,e1> (f : (a, b, c) -> e d, x1 : a, x2 : b, x3 : c) -> e1 d */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = f(x1, x2, x3);
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
export function _open_none4(f, x1, x2, x3, x4) /* forall<a,b,c,d,a1,e,e1> (f : (a, b, c, d) -> e a1, x1 : a, x2 : b, x3 : c, x4 : d) -> e1 a1 */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x = f(x1, x2, x3, x4);
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
export function open_at1(i, f, x) /* forall<a,b,e,e1> (i : ev-index, f : (a) -> e b, x : a) -> e1 b */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f(x);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (10535) -> 10561 10559 */ , res /* 10535 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open_at0(i, f) /* forall<a,e,e1> (i : ev-index, f : () -> e a) -> e1 a */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f();
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (10647) -> 10668 10666 */ , res /* 10647 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open_at1(i, f, x) /* forall<a,b,e,e1> (i : ev-index, f : (a) -> e b, x : a) -> e1 b */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f(x);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (10756) -> 10782 10780 */ , res /* 10756 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open_at2(i, f, x1, x2) /* forall<a,b,c,e,e1> (i : ev-index, f : (a, b) -> e c, x1 : a, x2 : b) -> e1 c */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f(x1, x2);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (10878) -> 10909 10907 */ , res /* 10878 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open_at3(i, f, x1, x2, x3) /* forall<a,b,c,d,e,e1> (i : ev-index, f : (a, b, c) -> e d, x1 : a, x2 : b, x3 : c) -> e1 d */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f(x1, x2, x3);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11013) -> 11049 11047 */ , res /* 11013 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open_at4(i, f, x1, x2, x3, x4) /* forall<a,b,c,d,a1,e,e1> (i : ev-index, f : (a, b, c, d) -> e a1, x1 : a, x2 : b, x3 : c, x4 : d) -> e1 a1 */  {
   
  var w = $std_core_hnd._evv_swap_create1(i);
   
  var y = f(x1, x2, x3, x4);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11161) -> 11202 11200 */ , res /* 11161 */ ) {
      return open_at1(i, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function open1(indices, f, x) /* forall<a,b,e,e1> (indices : vector<ev-index>, f : (a) -> e b, x : a) -> e1 b */  {
   
  var w = evv_swap_create(indices);
   
  var y = f(x);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11309) -> 11335 11333 */ , res /* 11309 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open0(indices, f) /* forall<a,e,e1> (indices : vector<ev-index>, f : () -> e a) -> e1 a */  {
   
  var w = evv_swap_create(indices);
   
  var y = f();
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11421) -> 11442 11440 */ , res /* 11421 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open1(indices, f, x) /* forall<a,b,e,e1> (indices : vector<ev-index>, f : (a) -> e b, x : a) -> e1 b */  {
   
  var w = evv_swap_create(indices);
   
  var y = f(x);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11530) -> 11556 11554 */ , res /* 11530 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open2(indices, f, x1, x2) /* forall<a,b,c,e,e1> (indices : vector<ev-index>, f : (a, b) -> e c, x1 : a, x2 : b) -> e1 c */  {
   
  var w = evv_swap_create(indices);
   
  var y = f(x1, x2);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11652) -> 11683 11681 */ , res /* 11652 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open3(indices, f, x1, x2, x3) /* forall<a,b,c,d,e,e1> (indices : vector<ev-index>, f : (a, b, c) -> e d, x1 : a, x2 : b, x3 : c) -> e1 d */  {
   
  var w = evv_swap_create(indices);
   
  var y = f(x1, x2, x3);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11787) -> 11823 11821 */ , res /* 11787 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function _open4(indices, f, x1, x2, x3, x4) /* forall<a,b,c,d,a1,e,e1> (indices : vector<ev-index>, f : (a, b, c, d) -> e a1, x1 : a, x2 : b, x3 : c, x4 : d) -> e1 a1 */  {
   
  var w = evv_swap_create(indices);
   
  var y = f(x1, x2, x3, x4);
   
  $std_core_hnd._evv_set(w);
  if ($std_core_hnd._yielding()) {
    return yield_cont(function(cont /* (11935) -> 11976 11974 */ , res /* 11935 */ ) {
      return open1(indices, cont, res);
    });
  }
  else {
    return y;
  }
}
 
export function unfinalize_prompt(res) /* forall<a,e> (res : a) -> e either<yield-context,a> */  {
  if ($std_core_hnd._yielding_non_final()) {
    return yield_cont(function(cont /* (12041) -> 12098 12097 */ , x /* 12041 */ ) {
      return unfinalize_prompt(cont(x));
    });
  }
  else {
     
    var b = $std_core_hnd._yielding();
    if (b) {
      return $std_core_types.Left(yield_capture_prim());
    }
    else {
      return $std_core_types.Right(res);
    }
  }
}
 
 
export function unsafe_unfinalize(action) /* forall<a,e> (action : () -> e a) -> e either<yield-context,a> */  {
  return unfinalize_prompt(action());
}
