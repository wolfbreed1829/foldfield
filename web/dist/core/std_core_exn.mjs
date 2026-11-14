// Koka generated module: std/core/exn, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
 
// externals
/*---------------------------------------------------------------------------
  Copyright 2012-2024, Microsoft Research, Daan Leijen.
  This is free software; you can redistribute it and/or modify it under the
  terms of the Apache License, Version 2.0. A copy of the License can be
  found in the LICENSE file at the root of this distribution.
---------------------------------------------------------------------------*/
/* assign here so inlined primitives are available in system.core itself */
const $std_core_exn = {// primitive operations emitted by the compiler
                        "_throw_exception": _throw_exception
                      , "_error_from_exception": _error_from_exception
                      , "_unsupported_external": _unsupported_external
                      }
/*------------------------------------------------
  Exceptions
------------------------------------------------*/
function _exn_capture_stack(exn) {
  /*
  if ("captureStackTrace" in Error) {
    Error.captureStackTrace(exn,_InfoException);  // best on Node.js
  }
  else
  */
  {
    exn.stack = (new Error()).stack; // in browsers
  }
  if (exn.stack==null) exn.stack = "";
  // strip off leaf functions from the stack trace
  exn.stack = exn.stack.replace(/\n\s*at (exn_exception|exception|(Object\.)?throw_1|Object\.error|exn_error_pattern|Object\.error_pattern|exn_error_range|Object\._vector_at)\b.*/g,"");
}
function exn_stacktrace( exn ) {
  if (exn instanceof Error && typeof exn.stack === "string") {
    return exn.stack;
  }
  else {
    return "";
  }
}
function exn_info( exn ) {
  //console.log("exn_info: " + exn.stack);
  /*
  if (exn instanceof _InfoException && exn.info != null) {
    return exn.info;
  }
  else if (exn instanceof _InfoSystemException && exn.info != null) {
    return exn.info;
  }
  else if (exn instanceof _FinalizeException) {
    return Finalize;
  }
  else if (exn instanceof AssertionError) {
    return Assert;
  }
  else
  */
  if (exn instanceof RangeError) {
    return ExnRange;
  }
  else if (exn instanceof Error && typeof exn.code === "string" ) {
    return ExnSystem(exn.code);
  }
  else {
    return ExnError;
  }
}
function exn_message( exn ) {
  if (exn==null) {
    return "invalid error";
  }
  if (typeof exn.get_message === "function") { // for FinalizeException
    var msg = exn.get_message();
    if (typeof msg === "string") return msg;
  }
  if (typeof exn.message === "string") {
    return exn.message;
  }
  else if (typeof exn === "string") {
    return exn;
  }
  else if (typeof exn.toString === "function") {
    return exn.toString();
  }
  else {
    return "Unknown error";
  };
}
// Throw a JavaScript exception as a Koka exception
export function _throw_exception( exn ) {
  var st  = exn_stacktrace(exn);
  var exc = Exception( exn_message(exn) + (st ? "\n" + st : ""), exn_info(exn) );
  return throw_exn(exc);
}
export function _error_from_exception( exn ) {
  var st  = exn_stacktrace(exn);
  var exc = Exception( exn_message(exn) + (st ? "\n" + st : ""), exn_info(exn) );
  return $std_core_types.$Error(exc);
}
export function _unsupported_external( msg ) {
  _throw_exception(msg);
}
 
// type declarations
 
 
export var exn_fs__tag;
var exn_fs__tag = "exn@exn";
 
export var _tag_ExnError;
var _tag_ExnError = "std/core/exn/ExnError";
 
export var _tag_ExnAssert;
var _tag_ExnAssert = "std/core/exn/ExnAssert";
 
export var _tag_ExnTodo;
var _tag_ExnTodo = "std/core/exn/ExnTodo";
 
export var _tag_ExnRange;
var _tag_ExnRange = "std/core/exn/ExnRange";
 
export var _tag_ExnPattern;
var _tag_ExnPattern = "std/core/exn/ExnPattern";
 
export var _tag_ExnSystem;
var _tag_ExnSystem = "std/core/exn/ExnSystem";
 
export var _tag_ExnInternal;
var _tag_ExnInternal = "std/core/exn/ExnInternal";
// type exception-info
export const ExnError = { _tag: _tag_ExnError }; // exception-info
export const ExnAssert = { _tag: _tag_ExnAssert }; // exception-info
export const ExnTodo = { _tag: _tag_ExnTodo }; // exception-info
export const ExnRange = { _tag: _tag_ExnRange }; // exception-info
export function ExnPattern(location, definition) /* (location : string, definition : string) -> exception-info */  {
  return { _tag: _tag_ExnPattern, location: location, definition: definition };
}
export function ExnSystem(errno) /* (errno : int) -> exception-info */  {
  return { _tag: _tag_ExnSystem, errno: errno };
}
export function ExnInternal(name) /* (name : string) -> exception-info */  {
  return { _tag: _tag_ExnInternal, name: name };
}
// type exception
export function Exception(message, info) /* (message : string, info : exception-info) -> exception */  {
  return { message: message, info: info };
}
// type exn
export function _Hnd_exn(_cfc, _brk_throw_exn) /* forall<e,a> (int, forall<b> hnd/clause1<exception,b,exn,e,a>) -> exn<e,a> */  {
  return { _cfc: _cfc, _brk_throw_exn: _brk_throw_exn };
}
 
// declarations
 
 
export function exn_fs__cfc(exn) /* forall<e,a> (exn : exn<e,a>) -> int */  {
  return exn._cfc;
}
 
 
export function exn_fs__handle(hnd, ret, action) /* forall<a,e,b> (hnd : exn<e,b>, ret : (res : a) -> e b, action : () -> <exn|e> a) -> e b */  {
  return $std_core_hnd._hhandle(exn_fs__tag, hnd, ret, action);
}
 
 
export function exn_fs__brk_throw_exn(exn) /* forall<e,a,b> (exn : exn<e,a>) -> hnd/clause1<exception,b,exn,e,a> */  {
  return exn._brk_throw_exn;
}
 
 
export function throw_exn_fs__select(hnd) /* forall<a,e,b> (hnd : exn<e,b>) -> hnd/clause1<exception,a,exn,e,b> */  {
  return hnd._brk_throw_exn;
}
 
 
// 
export function throw_exn(exn) /* forall<a> (exn : exception) -> exn a */  {
   
  var ev_10158 = $std_core_hnd._evv_at(0);
  var _x0 = ev_10158.hnd._brk_throw_exn;
  return _x0(ev_10158.marker, ev_10158, exn);
}
 
 
export function exception_fs_info(exception) /* (exception : exception) -> exception-info */  {
  return exception.info;
}
 
 
export function exception_fs_message(exception) /* (exception : exception) -> string */  {
  return exception.message;
}
 
export function exception_fs__copy(_this, message, info) /* (exception, message : ? string, info : ? exception-info) -> exception */  {
  if (message !== undefined) {
    var _x1 = message;
  }
  else {
    var _x1 = _this.message;
  }
  if (info !== undefined) {
    var _x2 = info;
  }
  else {
    var _x2 = _this.info;
  }
  return Exception(_x1, _x2);
}
 
 
export function $throw(message, info) /* forall<a> (message : string, info : ? exception-info) -> exn a */  {
   
  var ev_10161 = $std_core_hnd._evv_at(0);
  var _x3 = ev_10161.hnd._brk_throw_exn;
  var _x4 = (info !== undefined) ? info : ExnError;
  return _x3(ev_10161.marker, ev_10161, Exception(message, _x4));
}
 
 
export function error_pattern(location, definition) /* forall<a> (location : string, definition : string) -> exn a */  {
   
  var message_10003 = $std_core_types._lp__plus__plus__rp_(location, $std_core_types._lp__plus__plus__rp_(": ", $std_core_types._lp__plus__plus__rp_(definition, ": pattern match failure")));
   
  var ev_10164 = $std_core_hnd._evv_at(0);
  var _x5 = ev_10164.hnd._brk_throw_exn;
  return _x5(ev_10164.marker, ev_10164, Exception(message_10003, ExnPattern(location, definition)));
}
 
 
export function is_exnError(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnError);
}
 
 
export function is_exnAssert(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnAssert);
}
 
 
export function is_exnTodo(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnTodo);
}
 
 
export function is_exnRange(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnRange);
}
 
 
export function is_exnPattern(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnPattern);
}
 
 
export function is_exnSystem(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnSystem);
}
 
 
export function is_exnInternal(exception_info) /* (exception-info : exception-info) -> bool */  {
  return (exception_info._tag === _tag_ExnInternal);
}
 
 
export function show(exn) /* (exn : exception) -> string */  {
  return exn.message;
}
 
 
export function handle_fs_try(hndl, action) /* forall<a,e> (hndl : (exception) -> e a, action : () -> <exn|e> a) -> e a */  {
  return exn_fs__handle(_Hnd_exn(0, function(m /* hnd/marker<667,666> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<648,666>) -> 667 666 */ ) {
            return hndl(x);
          });
      }), function(_res /* 666 */ ) {
      return _res;
    }, action);
}
 
 
export function error_fs__mlift_try_10153(_y_x10126) /* forall<a,e> (a) -> <exn|e> result<a,exception> */  {
  return $std_core_types.Ok(_y_x10126);
}
 
 
export function error_fs_try(action) /* forall<a,e> (action : () -> <exn|e> a) -> e error<a> */  {
  return exn_fs__handle(_Hnd_exn(0, function(m /* hnd/marker<721,error<720>> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<648,error<720>>) -> 721 error<720> */ ) {
            return $std_core_types.$Error(x);
          });
      }), function(_res /* error<720> */ ) {
      return _res;
    }, function() {
       
      var x_0_10169 = action();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10126 /* 720 */ ) {
          return $std_core_types.Ok(_y_x10126);
        });
      }
      else {
        return $std_core_types.Ok(x_0_10169);
      }
    });
}
 
 
export function $catch(hndl, action) /* forall<a,e> (hndl : (exception) -> e a, action : () -> <exn|e> a) -> e a */  {
  return exn_fs__handle(_Hnd_exn(0, function(m /* hnd/marker<752,751> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<648,751>) -> 752 751 */ ) {
            return hndl(x);
          });
      }), function(_res /* 751 */ ) {
      return _res;
    }, action);
}
 
 
export function untry(err) /* forall<a> (err : error<a>) -> exn a */  {
  if (err._tag === 1) {
     
    var ev_10173 = $std_core_hnd._evv_at(0);
    var _x6 = ev_10173.hnd._brk_throw_exn;
    return _x6(ev_10173.marker, ev_10173, err.error);
  }
  else {
    return err.value;
  }
}
 
 
export function error_fs__mlift_map_10154(_y_x10131) /* forall<a,e> (a) -> e result<a,exception> */  {
  return $std_core_types.Ok(_y_x10131);
}
 
export function error_fs_map(err, f) /* forall<a,b,e> (err : error<a>, f : (a) -> e b) -> e error<b> */  {
  if (err._tag === 1) {
    return $std_core_types.$Error(err.error);
  }
  else {
     
    var x_0_10176 = f(err.value);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10131 /* 849 */ ) {
        return $std_core_types.Ok(_y_x10131);
      });
    }
    else {
      return $std_core_types.Ok(x_0_10176);
    }
  }
}
 
 
export function on_exit(hndler, action) /* forall<a,e> (hndler : () -> e (), action : () -> e a) -> e a */  {
  return $std_core_hnd.finally_prompt(hndler, action());
}
 
export function exn_error_range() /* forall<a> () -> exn a */  {
   
  var ev_10182 = $std_core_hnd._evv_at(0);
  var _x7 = ev_10182.hnd._brk_throw_exn;
  return _x7(ev_10182.marker, ev_10182, Exception("index out-of-range", ExnRange));
}
 
 
export function prepend(exn, pre) /* (exn : exception, pre : string) -> exception */  {
  var _x8 = exn.message;
  var _x9 = exn.info;
  return Exception($std_core_types._lp__plus__plus__rp_(pre, $std_core_types._lp__plus__plus__rp_(": ", _x8)), _x9);
}
 
 
export function _mlift_try_exn_map_10155(action, _y_x10137) /* forall<a,e> (action : () -> <exn|e> a, hnd/ev-index) -> <exn,exn|e> a */  {
   
  var w0 = $std_core_hnd.evv_swap_delete(_y_x10137, true);
   
  var x = action();
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_cont(function(cont /* (4058) -> <exn,exn|1065> 1064 */ , res /* 4058 */ ) {
      return $std_core_hnd.mask_at1(_y_x10137, true, cont, res);
    });
  }
  else {
    return x;
  }
}
 
export function try_exn_map(f, action) /* forall<a,e> (f : (exception) -> exception, action : () -> <exn|e> a) -> <exn|e> a */  {
  return exn_fs__handle(_Hnd_exn(0, function(m /* hnd/marker<<exn|1065>,1064> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<1033,1064>) -> <exn|1065> 1064 */ ) {
             
            var _x_x1_10149 = $std_core_hnd._open_none1(f, x);
             
            var i_10189 = $std_core_hnd._evv_index(exn_fs__tag);
             
            var w = $std_core_hnd._evv_swap_create1(i_10189);
             
            var ev_10192 = $std_core_hnd._evv_at(0);
             
            var _x10 = ev_10192.hnd._brk_throw_exn;
            var y = _x10(ev_10192.marker, ev_10192, _x_x1_10149);
             
            $std_core_hnd._evv_set(w);
            if ($std_core_hnd._yielding()) {
              return $std_core_hnd.yield_cont(function(cont /* (10756) -> <exn|1065> 1064 */ , res /* 10756 */ ) {
                return $std_core_hnd.open_at1(i_10189, cont, res);
              });
            }
            else {
              return y;
            }
          });
      }), function(_res /* 1064 */ ) {
      return _res;
    }, function() {
       
      var x_2_10195 = $std_core_hnd._evv_index(exn_fs__tag);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10137 /* hnd/ev-index */ ) {
          return _mlift_try_exn_map_10155(action, _y_x10137);
        });
      }
      else {
        return _mlift_try_exn_map_10155(action, x_2_10195);
      }
    });
}
 
 
export function _mlift_try_exn_prepend_10156(action, _y_x10142) /* forall<a,e> (action : () -> <exn|e> a, hnd/ev-index) -> <exn,exn|e> a */  {
   
  var w0 = $std_core_hnd.evv_swap_delete(_y_x10142, true);
   
  var x = action();
   
  $std_core_hnd._evv_set(w0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_cont(function(cont /* (4058) -> <exn,exn|1101> 1100 */ , res /* 4058 */ ) {
      return $std_core_hnd.mask_at1(_y_x10142, true, cont, res);
    });
  }
  else {
    return x;
  }
}
 
export function try_exn_prepend(pre, action) /* forall<a,e> (pre : string, action : () -> <exn|e> a) -> <exn|e> a */  {
  return exn_fs__handle(_Hnd_exn(0, function(m /* hnd/marker<<exn|1101>,1100> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<1033,1100>) -> <exn|1101> 1100 */ ) {
             
            var w = $std_core_hnd._evv_swap_create0();
             
            var _x10 = x.message;
            var _x11 = x.info;
            var x_0 = Exception($std_core_types._lp__plus__plus__rp_(pre, $std_core_types._lp__plus__plus__rp_(": ", _x10)), _x11);
             
            var keep = $std_core_hnd._evv_set(w);
             
            var i_10203 = $std_core_hnd._evv_index(exn_fs__tag);
             
            var w_0 = $std_core_hnd._evv_swap_create1(i_10203);
             
            var ev_10206 = $std_core_hnd._evv_at(0);
             
            var _x12 = ev_10206.hnd._brk_throw_exn;
            var y = _x12(ev_10206.marker, ev_10206, x_0);
             
            $std_core_hnd._evv_set(w_0);
            if ($std_core_hnd._yielding()) {
              return $std_core_hnd.yield_cont(function(cont /* (10756) -> <exn|1101> 1100 */ , res /* 10756 */ ) {
                return $std_core_hnd.open_at1(i_10203, cont, res);
              });
            }
            else {
              return y;
            }
          });
      }), function(_res /* 1100 */ ) {
      return _res;
    }, function() {
       
      var x_3_10209 = $std_core_hnd._evv_index(exn_fs__tag);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10142 /* hnd/ev-index */ ) {
          return _mlift_try_exn_prepend_10156(action, _y_x10142);
        });
      }
      else {
        return _mlift_try_exn_prepend_10156(action, x_3_10209);
      }
    });
}
