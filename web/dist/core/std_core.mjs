// Koka generated module: std/core, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_undiv from './std_core_undiv.mjs';
import * as $std_core_unsafe from './std_core_unsafe.mjs';
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
 
// externals
 
// type declarations
// type blocking
// type fsys
// type global-scope
// type net
// type ui
// type nmd
// type scope
// type stream
export function Next(head, tail) /* forall<a> (head : a, tail : stream<a>) -> stream<a> */  {
  return { head: head, tail: tail };
}
 
// declarations
 
 
export function apply(f, x) /* forall<a,b,e> (f : (a) -> e b, x : a) -> e b */  {
  return f(x);
}
 
 
export function o(f, g) /* forall<a,b,c,e> (f : (a) -> e b, g : (c) -> e a) -> ((x : c) -> e b) */  {
  return function(x /* 243 */ ) {
     
    var x_0_10207 = g(x);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(f);
    }
    else {
      return f(x_0_10207);
    }
  };
}
 
 
export function ignore(x) /* forall<a> (x : a) -> () */  {
  return $std_core_types.Unit;
}
 
 
export function $const($default) /* forall<a,b> (default : a) -> ((x : b) -> a) */  {
  return function(___wildcard_x108__6 /* 287 */ ) {
    return $default;
  };
}
 
 
export function same_type(x, y) /* forall<a> (x : a, y : a) -> a */  {
  return x;
}
 
 
export function _mlift_while_10194(action, predicate, wild) /* forall<e> (action : () -> <div|e> (), predicate : () -> <div|e> bool, wild : ()) -> <div|e> () */  {
  return $while(predicate, action);
}
 
 
export function _mlift_while_10195(action_0, predicate_0, _y_x10135) /* forall<e> (action : () -> <div|e> (), predicate : () -> <div|e> bool, bool) -> <div|e> () */  {
  if (_y_x10135) {
     
    var x_10209 = action_0();
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return _mlift_while_10194(action_0, predicate_0, wild_0);
      });
    }
    else {
      return _mlift_while_10194(action_0, predicate_0, x_10209);
    }
  }
  else {
    return $std_core_types.Unit;
  }
}
 
 
export function $while(predicate_1, action_1) /* forall<e> (predicate : () -> <div|e> bool, action : () -> <div|e> ()) -> <div|e> () */  { tailcall: while(1)
{
   
  var x_0_10211 = predicate_1();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10135_0 /* bool */ ) {
      return _mlift_while_10195(action_1, predicate_1, _y_x10135_0);
    });
  }
  else {
    if (x_0_10211) {
       
      var x_1_10214 = action_1();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(wild_1 /* () */ ) {
          return _mlift_while_10194(action_1, predicate_1, wild_1);
        });
      }
      else {
        {
          // tail call
          continue tailcall;
        }
      }
    }
    else {
      return $std_core_types.Unit;
    }
  }
}}
 
 
export function default_fs_cmp_fs__lp__at_mlift_x10196_eq__eq__rp_(_y_x10139) /* forall<e> (order) -> e bool */  {
  return (_y_x10139 === 2);
}
 
 
export function default_fs_cmp_fs__lp__eq__eq__rp_(x, y, _implicit_fs_cmp) /* forall<a,e> (x : a, y : a, ?cmp : (a, a) -> e order) -> e bool */  {
   
  var x_0_10217 = _implicit_fs_cmp(x, y);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10139 /* order */ ) {
      return (_y_x10139 === 2);
    });
  }
  else {
    return (x_0_10217 === 2);
  }
}
 
 
export function default_fs__lp__at_mlift_x10197_excl__eq__rp_(_y_x10140) /* forall<e> (bool) -> e bool */  {
  return (_y_x10140) ? false : true;
}
 
 
export function default_fs__lp__excl__eq__rp_(x, y, _implicit_fs__lp__eq__eq__rp_) /* forall<a,e> (x : a, y : a, ?(==) : (a, a) -> e bool) -> e bool */  {
   
  var x_0_10221 = _implicit_fs__lp__eq__eq__rp_(x, y);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10140 /* bool */ ) {
      return (_y_x10140) ? false : true;
    });
  }
  else {
    return (x_0_10221) ? false : true;
  }
}
 
 
export function default_fs_cmp_fs__lp__at_mlift_x10198_gt__rp_(_y_x10141) /* forall<e> (order) -> e bool */  {
  if (_y_x10141 === 1) {
    var _x0 = -1;
  }
  else if (_y_x10141 === 2) {
    var _x0 = 0;
  }
  else {
    var _x0 = 1;
  }
  return $std_core_types._int_eq(_x0,1);
}
 
 
export function default_fs_cmp_fs__lp__gt__rp_(x, y, _implicit_fs_cmp) /* forall<a,e> (x : a, y : a, ?cmp : (a, a) -> e order) -> e bool */  {
   
  var x_0_10225 = _implicit_fs_cmp(x, y);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10141 /* order */ ) {
      if (_y_x10141 === 1) {
        var _x1 = -1;
      }
      else if (_y_x10141 === 2) {
        var _x1 = 0;
      }
      else {
        var _x1 = 1;
      }
      return $std_core_types._int_eq(_x1,1);
    });
  }
  else {
    if (x_0_10225 === 1) {
      var _x2 = -1;
    }
    else if (x_0_10225 === 2) {
      var _x2 = 0;
    }
    else {
      var _x2 = 1;
    }
    return $std_core_types._int_eq(_x2,1);
  }
}
 
 
export function range_fs__mlift_fold_10199(end, f, start, x) /* forall<a,e> (end : int, f : (int, a) -> e a, start : int, x : a) -> e a */  {
  return range_fs_fold($std_core_types._int_add(start,1), end, x, f);
}
 
 
export function range_fs_fold(start_0, end_0, init, f_0) /* forall<a,e> (start : int, end : int, init : a, f : (int, a) -> e a) -> e a */  { tailcall: while(1)
{
  if ($std_core_types._int_gt(start_0,end_0)) {
    return init;
  }
  else {
     
    var x_0_10229 = f_0(start_0, init);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(x_1 /* 823 */ ) {
        return range_fs__mlift_fold_10199(end_0, f_0, start_0, x_1);
      });
    }
    else {
      {
        // tail call
        var _x3 = $std_core_types._int_add(start_0,1);
        start_0 = _x3;
        init = x_0_10229;
        continue tailcall;
      }
    }
  }
}}
 
 
export function fold(upto, init, f) /* forall<a,e> (upto : int, init : a, f : (int, a) -> e a) -> e a */  {
  return range_fs_fold(0, $std_core_types._int_sub(upto,1), init, f);
}
 
 
export function range_fs__mlift_fold_while_10200(end, f, init, start, _y_x10146) /* forall<a,e> (end : int, f : (int, a) -> e maybe<a>, init : a, start : int, maybe<a>) -> e a */  {
  if (_y_x10146 !== null) {
    return range_fs_fold_while($std_core_types._int_add(start,1), end, _y_x10146.value, f);
  }
  else {
    return init;
  }
}
 
 
export function range_fs_fold_while(start_0, end_0, init_0, f_0) /* forall<a,e> (start : int, end : int, init : a, f : (int, a) -> e maybe<a>) -> e a */  { tailcall: while(1)
{
  if ($std_core_types._int_gt(start_0,end_0)) {
    return init_0;
  }
  else {
     
    var x_0_10232 = f_0(start_0, init_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10146_0 /* maybe<960> */ ) {
        return range_fs__mlift_fold_while_10200(end_0, f_0, init_0, start_0, _y_x10146_0);
      });
    }
    else {
      if (x_0_10232 !== null) {
        {
          // tail call
          var _x4 = $std_core_types._int_add(start_0,1);
          start_0 = _x4;
          init_0 = x_0_10232.value;
          continue tailcall;
        }
      }
      else {
        return init_0;
      }
    }
  }
}}
 
 
export function fold_while(n, init, f) /* forall<a,e> (n : int, init : a, f : (int, a) -> e maybe<a>) -> e a */  {
  return range_fs_fold_while(0, $std_core_types._int_sub(n,1), init, f);
}
 
 
export function default_fs_cmp_fs__lp__at_mlift_x10201_lt__rp_(_y_x10151) /* forall<e> (order) -> e bool */  {
  if (_y_x10151 === 1) {
    var _x5 = -1;
  }
  else if (_y_x10151 === 2) {
    var _x5 = 0;
  }
  else {
    var _x5 = 1;
  }
  return $std_core_types._int_eq(_x5,(-1));
}
 
 
export function default_fs_cmp_fs__lp__lt__rp_(x, y, _implicit_fs_cmp) /* forall<a,e> (x : a, y : a, ?cmp : (a, a) -> e order) -> e bool */  {
   
  var x_0_10235 = _implicit_fs_cmp(x, y);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10151 /* order */ ) {
      if (_y_x10151 === 1) {
        var _x6 = -1;
      }
      else if (_y_x10151 === 2) {
        var _x6 = 0;
      }
      else {
        var _x6 = 1;
      }
      return $std_core_types._int_eq(_x6,(-1));
    });
  }
  else {
    if (x_0_10235 === 1) {
      var _x7 = -1;
    }
    else if (x_0_10235 === 2) {
      var _x7 = 0;
    }
    else {
      var _x7 = 1;
    }
    return $std_core_types._int_eq(_x7,(-1));
  }
}
 
 
export function default_fs_cmp_fs__lp__at_mlift_x10202_gt__eq__rp_(_y_x10152) /* forall<e> (bool) -> e bool */  {
  return (_y_x10152) ? false : true;
}
 
 
export function default_fs_cmp_fs__lp__gt__eq__rp_(x, y, _implicit_fs_cmp) /* forall<a,e> (x : a, y : a, ?cmp : (a, a) -> e order) -> e bool */  {
   
  var x_0_10239 = default_fs_cmp_fs__lp__lt__rp_(x, y, _implicit_fs_cmp);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10152 /* bool */ ) {
      return (_y_x10152) ? false : true;
    });
  }
  else {
    return (x_0_10239) ? false : true;
  }
}
 
 
export function default_fs_cmp_fs__lp__at_mlift_x10203_lt__eq__rp_(_y_x10153) /* forall<e> (bool) -> e bool */  {
  return (_y_x10153) ? false : true;
}
 
 
export function default_fs_cmp_fs__lp__lt__eq__rp_(x, y, _implicit_fs_cmp) /* forall<a,e> (x : a, y : a, ?cmp : (a, a) -> e order) -> e bool */  {
   
  var x_0_10243 = default_fs_cmp_fs__lp__gt__rp_(x, y, _implicit_fs_cmp);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10153 /* bool */ ) {
      return (_y_x10153) ? false : true;
    });
  }
  else {
    return (x_0_10243) ? false : true;
  }
}
 
 
export function range_fs__mlift_lift_for_1933_10204(action, end, i, wild) /* forall<e> (action : (int) -> e (), end : int, i : int, wild : ()) -> e () */  {
   
  var i_0_10000 = $std_core_types._int_add(i,1);
  return range_fs__lift_for_1933(action, end, i_0_10000);
}
 
 
export function range_fs__lift_for_1933(action_0, end_0, i_0) /* forall<e> (action : (int) -> e (), end : int, i : int) -> e () */  { tailcall: while(1)
{
  if ($std_core_types._int_le(i_0,end_0)) {
     
    var x_10247 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return range_fs__mlift_lift_for_1933_10204(action_0, end_0, i_0, wild_0);
      });
    }
    else {
       
      var i_0_10000_0 = $std_core_types._int_add(i_0,1);
      {
        // tail call
        i_0 = i_0_10000_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function range_fs_for(start, end, action) /* forall<e> (start : int, end : int, action : (int) -> e ()) -> e () */  {
  return range_fs__lift_for_1933(action, end, start);
}
 
 
export function $for(n, action) /* forall<e> (n : int, action : (int) -> e ()) -> e () */  {
   
  var end_10002 = $std_core_types._int_sub(n,1);
  return range_fs__lift_for_1933(action, end_10002, 0);
}
 
 
export function _mlift_lift_repeat_10127_10205(_uniq_end_10118, _uniq_i_10119, action, _uniq_x___10121) /* forall<e> (int, int, action : () -> e (), ()) -> e () */  {
   
  var _uniq_i_0_10000_10123 = $std_core_types._int_add(_uniq_i_10119,1);
  return _lift_repeat_10127(action, _uniq_end_10118, _uniq_i_0_10000_10123);
}
 
 
export function _lift_repeat_10127(action_0, _uniq_end_10118_0, _uniq_i_10119_0) /* forall<e> (action : () -> e (), int, int) -> e () */  { tailcall: while(1)
{
  if ($std_core_types._int_le(_uniq_i_10119_0,_uniq_end_10118_0)) {
     
    var x_10250 = action_0();
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_uniq_x___10121_0 /* () */ ) {
        return _mlift_lift_repeat_10127_10205(_uniq_end_10118_0, _uniq_i_10119_0, action_0, _uniq_x___10121_0);
      });
    }
    else {
       
      var _uniq_i_0_10000_10123_0 = $std_core_types._int_add(_uniq_i_10119_0,1);
      {
        // tail call
        _uniq_i_10119_0 = _uniq_i_0_10000_10123_0;
        continue tailcall;
      }
    }
  }
  else {
    return $std_core_types.Unit;
  }
}}
 
 
export function repeat(n, action) /* forall<e> (n : int, action : () -> e ()) -> e () */  {
   
  var end_10007 = $std_core_types._int_sub(n,1);
  return _lift_repeat_10127(action, end_10007, 0);
}
 
 
export function range_fs__mlift_lift_for_while_1934_10206(action, end, i, _y_x10163) /* forall<a,e> (action : (int) -> e maybe<a>, end : int, i : int, maybe<a>) -> e maybe<a> */  {
  if (_y_x10163 === null) {
     
    var i_0_10009 = $std_core_types._int_add(i,1);
    return range_fs__lift_for_while_1934(action, end, i_0_10009);
  }
  else {
    return $std_core_types.Just(_y_x10163.value);
  }
}
 
 
export function range_fs__lift_for_while_1934(action_0, end_0, i_0) /* forall<a,e> (action : (int) -> e maybe<a>, end : int, i : int) -> e maybe<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(i_0,end_0)) {
     
    var x_0_10253 = action_0(i_0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10163_0 /* maybe<1486> */ ) {
        return range_fs__mlift_lift_for_while_1934_10206(action_0, end_0, i_0, _y_x10163_0);
      });
    }
    else {
      if (x_0_10253 === null) {
         
        var i_0_10009_0 = $std_core_types._int_add(i_0,1);
        {
          // tail call
          i_0 = i_0_10009_0;
          continue tailcall;
        }
      }
      else {
        return $std_core_types.Just(x_0_10253.value);
      }
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}}
 
 
export function range_fs_for_while(start, end, action) /* forall<a,e> (start : int, end : int, action : (int) -> e maybe<a>) -> e maybe<a> */  {
  return range_fs__lift_for_while_1934(action, end, start);
}
 
 
export function for_while(n, action) /* forall<a,e> (n : int, action : (int) -> e maybe<a>) -> e maybe<a> */  {
   
  var end_10011 = $std_core_types._int_sub(n,1);
  return range_fs__lift_for_while_1934(action, end_10011, 0);
}
 
 
export function main_console(main) /* forall<a,e> (main : () -> e a) -> e a */  {
  return (main)();
}
 
 
export function host() /* () -> ndet string */  {
  return $std_core_console._host;
}
 
 
export function _default_exn(action) /* forall<e> (action : () -> <exn,console/console|e> ()) -> <console/console|e> () */  {
  return $std_core_exn.exn_fs__handle($std_core_exn._Hnd_exn(0, function(m /* hnd/marker<<console/console|1771>,()> */ , ___wildcard_x672__16 /* hnd/ev<exn> */ , x /* exception */ ) {
        return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<1755,()>) -> <console/console|1771> () */ ) {
            var _x8 = x.message;
            return $std_core_console.printsln($std_core_types._lp__plus__plus__rp_("uncaught exception: ", _x8));
          });
      }), function(_res /* () */ ) {
      return _res;
    }, action);
}
 
export var unique_count;
var unique_count = { value: 0 };
 
 
export function unique() /* () -> ndet int */  {
   
  var u = (unique_count).value;
   
  ((unique_count).value = ($std_core_types._int_add(u,1)));
  return u;
}
 
 
export function stream_fs_head(stream) /* forall<a> (stream : stream<a>) -> a */  {
  return stream.head;
}
 
 
export function stream_fs_tail(stream) /* forall<a> (stream : stream<a>) -> stream<a> */  {
  return stream.tail;
}
 
export function stream_fs__copy(_this, head, tail) /* forall<a> (stream<a>, head : ? a, tail : ? (stream<a>)) -> stream<a> */  {
  if (head !== undefined) {
    var _x9 = head;
  }
  else {
    var _x9 = _this.head;
  }
  if (tail !== undefined) {
    var _x10 = tail;
  }
  else {
    var _x10 = _this.tail;
  }
  return Next(_x9, _x10);
}
