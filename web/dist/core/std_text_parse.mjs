// Koka generated module: std/text/parse, koka version: 3.2.9
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
 
// type declarations
 
 
export var parse_fs__tag;
var parse_fs__tag = "parse@parse";
// type parse
export function _Hnd_parse(_cfc, _fun_current_input, _brk_fail, _ctl_pick, _fun_satisfy) /* forall<e,a> (int, hnd/clause0<sslice/sslice,parse,e,a>, forall<b> hnd/clause1<string,b,parse,e,a>, hnd/clause0<bool,parse,e,a>, forall<b> hnd/clause1<(sslice/sslice) -> maybe<(b, sslice/sslice)>,maybe<b>,parse,e,a>) -> parse<e,a> */  {
  return { _cfc: _cfc, _fun_current_input: _fun_current_input, _brk_fail: _brk_fail, _ctl_pick: _ctl_pick, _fun_satisfy: _fun_satisfy };
}
// type parse-error
export function ParseOk(result, rest) /* forall<a> (result : a, rest : sslice/sslice) -> parse-error<a> */  {
  return { _tag: 1, result: result, rest: rest };
}
export function ParseError(msg, rest) /* forall<a> (msg : string, rest : sslice/sslice) -> parse-error<a> */  {
  return { _tag: 2, msg: msg, rest: rest };
}
 
// declarations
 
 
export function parse_fs__cfc(parse_0) /* forall<e,a> (parse : parse<e,a>) -> int */  {
  return parse_0._cfc;
}
 
 
export function parse_fs__handle(hnd, ret, action) /* forall<a,e,b> (hnd : parse<e,b>, ret : (res : a) -> e b, action : () -> <parse|e> a) -> e b */  {
  return $std_core_hnd._hhandle(parse_fs__tag, hnd, ret, action);
}
 
 
export function parse_fs__fun_satisfy(parse_0) /* forall<e,a,b> (parse : parse<e,a>) -> hnd/clause1<(sslice/sslice) -> maybe<(b, sslice/sslice)>,maybe<b>,parse,e,a> */  {
  return parse_0._fun_satisfy;
}
 
 
export function satisfy_fs__select(hnd) /* forall<a,e,b> (hnd : parse<e,b>) -> hnd/clause1<(sslice/sslice) -> maybe<(a, sslice/sslice)>,maybe<a>,parse,e,b> */  {
  return hnd._fun_satisfy;
}
 
 
// 
export function satisfy(pred) /* forall<a> (pred : (sslice/sslice) -> maybe<(a, sslice/sslice)>) -> parse maybe<a> */  {
   
  var ev_10603 = $std_core_hnd._evv_at(0);
  var _x0 = ev_10603.hnd._fun_satisfy;
  return _x0(ev_10603.marker, ev_10603, pred);
}
 
 
export function parse_fs__brk_fail(parse_0) /* forall<e,a,b> (parse : parse<e,a>) -> hnd/clause1<string,b,parse,e,a> */  {
  return parse_0._brk_fail;
}
 
 
export function fail_fs__select(hnd) /* forall<a,e,b> (hnd : parse<e,b>) -> hnd/clause1<string,a,parse,e,b> */  {
  return hnd._brk_fail;
}
 
 
// 
export function fail(msg) /* forall<a> (msg : string) -> parse a */  {
   
  var ev_10606 = $std_core_hnd._evv_at(0);
  var _x1 = ev_10606.hnd._brk_fail;
  return _x1(ev_10606.marker, ev_10606, msg);
}
 
 
export function parse_fs__ctl_pick(parse_0) /* forall<e,a> (parse : parse<e,a>) -> hnd/clause0<bool,parse,e,a> */  {
  return parse_0._ctl_pick;
}
 
 
export function pick_fs__select(hnd) /* forall<e,a> (hnd : parse<e,a>) -> hnd/clause0<bool,parse,e,a> */  {
  return hnd._ctl_pick;
}
 
 
// 
export function pick() /* () -> parse bool */  {
   
  var ev_10609 = $std_core_hnd._evv_at(0);
  return ev_10609.hnd._ctl_pick(ev_10609.marker, ev_10609);
}
 
 
export function parse_fs__fun_current_input(parse_0) /* forall<e,a> (parse : parse<e,a>) -> hnd/clause0<sslice/sslice,parse,e,a> */  {
  return parse_0._fun_current_input;
}
 
 
export function current_input_fs__select(hnd) /* forall<e,a> (hnd : parse<e,a>) -> hnd/clause0<sslice/sslice,parse,e,a> */  {
  return hnd._fun_current_input;
}
 
 
// 
export function current_input() /* () -> parse sslice/sslice */  {
   
  var ev_10611 = $std_core_hnd._evv_at(0);
  return ev_10611.hnd._fun_current_input(ev_10611.marker, ev_10611);
}
 
 
export function is_parseOk(parse_error) /* forall<a> (parse-error : parse-error<a>) -> bool */  {
  return (parse_error._tag === 1);
}
 
 
export function parse_error_fs_rest(_this) /* forall<a> (parse-error<a>) -> sslice/sslice */  {
  return (_this._tag === 1) ? _this.rest : _this.rest;
}
 
 
export function is_parseError(parse_error) /* forall<a> (parse-error : parse-error<a>) -> bool */  {
  return (parse_error._tag === 2);
}
 
export function either(perr) /* forall<a> (perr : parse-error<a>) -> either<string,a> */  {
  if (perr._tag === 1) {
    return $std_core_types.Right(perr.result);
  }
  else {
    return $std_core_types.Left(perr.msg);
  }
}
 
export function maybe(perr) /* forall<a> (perr : parse-error<a>) -> maybe<a> */  {
  if (perr._tag === 1) {
    return $std_core_types.Just(perr.result);
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _mlift_parse_10546(msg, _y_x10371) /* forall<h,a,e> (msg : string, sslice/sslice) -> <local<h>|e> parse-error<a> */  {
  return ParseError(msg, _y_x10371);
}
 
 
export function _mlift_parse_10547(err1, _y_x10375) /* forall<h,a,e> (err1 : parse-error<a>, parse-error<a>) -> <local<h>|e> parse-error<a> */  {
  if (_y_x10375._tag === 1) {
    return ParseOk(_y_x10375.result, _y_x10375.rest);
  }
  else {
    return err1;
  }
}
 
 
export function _mlift_parse_10548(err1, resume, wild) /* forall<h,a,e> (err1 : parse-error<a>, resume : (bool) -> <local<h>|e> parse-error<a>, wild : ()) -> <local<h>|e> parse-error<a> */  {
   
  var x_10613 = resume(false);
   
  function next_10614(_y_x10375) /* (parse-error<1460>) -> <local<1450>|1461> parse-error<1460> */  {
    if (_y_x10375._tag === 1) {
      return ParseOk(_y_x10375.result, _y_x10375.rest);
    }
    else {
      return err1;
    }
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(next_10614);
  }
  else {
    return next_10614(x_10613);
  }
}
 
 
export function _mlift_parse_10549(input, resume, save, _y_x10373) /* forall<h,a,e> (input : local-var<h,sslice/sslice>, resume : (bool) -> <local<h>|e> parse-error<a>, save : sslice/sslice, parse-error<a>) -> <local<h>|e> parse-error<a> */  {
  if (_y_x10373._tag === 1) {
    return ParseOk(_y_x10373.result, _y_x10373.rest);
  }
  else {
     
    var x_10617 = ((input).value = save);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild /* () */ ) {
        return _mlift_parse_10548(_y_x10373, resume, wild);
      });
    }
    else {
      return _mlift_parse_10548(_y_x10373, resume, x_10617);
    }
  }
}
 
 
export function _mlift_parse_10550(input, resume, save) /* forall<h,a,e> (input : local-var<h,sslice/sslice>, resume : (bool) -> <local<h>|e> parse-error<a>, save : sslice/sslice) -> <local<h>|e> parse-error<a> */  {
   
  var x_10619 = resume(true);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10373 /* parse-error<1460> */ ) {
      return _mlift_parse_10549(input, resume, save, _y_x10373);
    });
  }
  else {
    return _mlift_parse_10549(input, resume, save, x_10619);
  }
}
 
 
export function _mlift_parse_10551(x, wild_0) /* forall<a,h,e> (x : a, wild@0 : ()) -> <local<h>|e> maybe<a> */  {
  return $std_core_types.Just(x);
}
 
 
export function _mlift_parse_10552(input, pred, inp) /* forall<a,h,e> (input : local-var<h,sslice/sslice>, pred : (sslice/sslice) -> maybe<(a, sslice/sslice)>, inp : sslice/sslice) -> <local<h>|e> maybe<a> */  {
  var _x2 = pred(inp);
  if (_x2 !== null) {
     
    var x_0_10621 = ((input).value = (_x2.value.snd));
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(wild_0 /* () */ ) {
        return $std_core_types.Just(_x2.value.fst);
      });
    }
    else {
      return $std_core_types.Just(_x2.value.fst);
    }
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _mlift_parse_10553(x_0, _y_x10380) /* forall<h,a,e> (x@0 : a, sslice/sslice) -> <local<h>|e> parse-error<a> */  {
  return ParseOk(x_0, _y_x10380);
}
 
 
export function parse(input0, p) /* forall<a,e> (input0 : sslice/sslice, p : () -> <parse|e> a) -> e parse-error<a> */  {
  return function() {
     
    var loc = { value: input0 };
     
    var res = parse_fs__handle(_Hnd_parse(3, $std_core_hnd.clause_tail0(function() {
          return ((loc).value);
        }), function(m /* hnd/marker<<local<1450>|1461>,parse-error<1460>> */ , ___wildcard_x672__16 /* hnd/ev<parse> */ , x /* string */ ) {
          return $std_core_hnd.yield_to_final(m, function(___wildcard_x672__45 /* (hnd/resume-result<1228,parse-error<1460>>) -> <local<1450>|1461> parse-error<1460> */ ) {
               
              var x_0_10628 = ((loc).value);
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_y_x10371 /* sslice/sslice */ ) {
                  return ParseError(x, _y_x10371);
                });
              }
              else {
                return ParseError(x, x_0_10628);
              }
            });
        }, $std_core_hnd.clause_control0(function(resume /* (bool) -> <local<1450>|1461> parse-error<1460> */ ) {
           
          var x_1_10632 = ((loc).value);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(save /* sslice/sslice */ ) {
              return _mlift_parse_10550(loc, resume, save);
            });
          }
          else {
            return _mlift_parse_10550(loc, resume, x_1_10632);
          }
        }), $std_core_hnd.clause_tail1(function(pred /* (sslice/sslice) -> maybe<(1399, sslice/sslice)> */ ) {
           
          var x_2_10634 = ((loc).value);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(inp /* sslice/sslice */ ) {
              return _mlift_parse_10552(loc, pred, inp);
            });
          }
          else {
            return _mlift_parse_10552(loc, pred, x_2_10634);
          }
        })), function(x_0_0 /* 1460 */ ) {
         
        var x_3_10636 = ((loc).value);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10380 /* sslice/sslice */ ) {
            return ParseOk(x_0_0, _y_x10380);
          });
        }
        else {
          return ParseOk(x_0_0, x_3_10636);
        }
      }, p);
    return $std_core_hnd.prompt_local_var(loc, res);
  }();
}
 
export function starts_with(s, p) /* forall<a> (s : string, p : () -> parse a) -> maybe<(a, sslice/sslice)> */  {
  var _x3 = parse($std_core_sslice.Sslice(s, 0, s.length), p);
  if (_x3._tag === 1) {
    return $std_core_types.Just($std_core_types.Tuple2(_x3.result, _x3.rest));
  }
  else {
    return $std_core_types.Nothing;
  }
}
 
 
export function _lp__at_mlift_x10554_bar__bar__rp_(p1, p2, _y_x10386) /* forall<a,e> (p1 : parser<e,a>, p2 : parser<e,a>, bool) -> <parse|e> a */  {
  if (_y_x10386) {
    return p1();
  }
  else {
    return p2();
  }
}
 
export function _lp__bar__bar__rp_(p1, p2) /* forall<a,e> (p1 : parser<e,a>, p2 : parser<e,a>) -> <parse|e> a */  {
   
  var i_10644 = $std_core_hnd._evv_index(parse_fs__tag);
   
  var w = $std_core_hnd._evv_swap_create1(i_10644);
   
  var ev_10646 = $std_core_hnd._evv_at(0);
   
  var y = ev_10646.hnd._ctl_pick(ev_10646.marker, ev_10646);
   
  var _null_ = $std_core_hnd._evv_set(w);
   
  if ($std_core_hnd._yielding()) {
    var x_10641 = $std_core_hnd.yield_cont(function(cont /* (326) -> <parse|1548> bool */ , res /* 326 */ ) {
      return $std_core_hnd.open_at1(i_10644, cont, res);
    });
  }
  else {
    var x_10641 = y;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10386 /* bool */ ) {
      if (_y_x10386) {
        return p1();
      }
      else {
        return p2();
      }
    });
  }
  else {
    if (x_10641) {
      return p1();
    }
    else {
      return p2();
    }
  }
}
 
 
export function _mlift_optional_10555($default, p, _y_x10391) /* forall<a,e> (default : a, p : parser<e,a>, bool) -> <parse|e> a */  {
  if (_y_x10391) {
    return p();
  }
  else {
    return $default;
  }
}
 
export function optional($default, p) /* forall<a,e> (default : a, p : parser<e,a>) -> <parse|e> a */  {
   
  var i_10654 = $std_core_hnd._evv_index(parse_fs__tag);
   
  var w = $std_core_hnd._evv_swap_create1(i_10654);
   
  var ev_10656 = $std_core_hnd._evv_at(0);
   
  var y = ev_10656.hnd._ctl_pick(ev_10656.marker, ev_10656);
   
  var _null_ = $std_core_hnd._evv_set(w);
   
  if ($std_core_hnd._yielding()) {
    var x_10651 = $std_core_hnd.yield_cont(function(cont /* (326) -> <parse|1581> bool */ , res /* 326 */ ) {
      return $std_core_hnd.open_at1(i_10654, cont, res);
    });
  }
  else {
    var x_10651 = y;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10391 /* bool */ ) {
      if (_y_x10391) {
        return p();
      }
      else {
        return $default;
      }
    });
  }
  else {
    if (x_10651) {
      return p();
    }
    else {
      return $default;
    }
  }
}
 
 
export function _mlift_unroll_choose_10000_10556(p_0, pp, _y_x10398) /* forall<a,e> (p@0 : parser<e,a>, pp : list<parser<e,a>>, bool) -> <parse|e> a */  {
  if (_y_x10398) {
    return p_0();
  }
  else {
    return _unroll_choose_10000(pp);
  }
}
 
export function _unroll_choose_10000(ps) /* forall<a,e> (ps : list<parser<e,a>>) -> <parse|e> a */  { tailcall: while(1)
{
  if (ps === null) {
     
    var i_10661 = $std_core_hnd._evv_index(parse_fs__tag);
     
    var w = $std_core_hnd._evv_swap_create1(i_10661);
     
    var ev_10664 = $std_core_hnd._evv_at(0);
     
    var _x4 = ev_10664.hnd._brk_fail;
    var y = _x4(ev_10664.marker, ev_10664, "no further alternatives");
     
    var _null_ = $std_core_hnd._evv_set(w);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_cont(function(cont /* (331) -> <parse|1645> 1644 */ , res /* 331 */ ) {
        return $std_core_hnd.open_at1(i_10661, cont, res);
      });
    }
    else {
      return y;
    }
  }
  else if (ps !== null && ps.tail === null) {
    return ps.head();
  }
  else {
     
    var i_0_10670 = $std_core_hnd._evv_index(parse_fs__tag);
     
    var w_0 = $std_core_hnd._evv_swap_create1(i_0_10670);
     
    var ev_0_10672 = $std_core_hnd._evv_at(0);
     
    var y_0 = ev_0_10672.hnd._ctl_pick(ev_0_10672.marker, ev_0_10672);
     
    var _null_ = $std_core_hnd._evv_set(w_0);
     
    if ($std_core_hnd._yielding()) {
      var x_1_10667 = $std_core_hnd.yield_cont(function(cont_0 /* (326) -> <parse|1645> bool */ , res_0 /* 326 */ ) {
        return $std_core_hnd.open_at1(i_0_10670, cont_0, res_0);
      });
    }
    else {
      var x_1_10667 = y_0;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10398_0 /* bool */ ) {
        return _mlift_unroll_choose_10000_10556(ps.head, ps.tail, _y_x10398_0);
      });
    }
    else {
      if (x_1_10667) {
        return ps.head();
      }
      else {
        {
          // tail call
          ps = ps.tail;
          continue tailcall;
        }
      }
    }
  }
}}
 
 
export function choose(ps) /* forall<a,e> (ps : list<parser<e,a>>) -> <parse|e> a */  {
  if (ps === null) {
     
    var i_10674 = $std_core_hnd._evv_index(parse_fs__tag);
     
    var w = $std_core_hnd._evv_swap_create1(i_10674);
     
    var ev_10677 = $std_core_hnd._evv_at(0);
     
    var _x4 = ev_10677.hnd._brk_fail;
    var y = _x4(ev_10677.marker, ev_10677, "no further alternatives");
     
    var _null_ = $std_core_hnd._evv_set(w);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_cont(function(cont /* (331) -> <parse|1645> 1644 */ , res /* 331 */ ) {
        return $std_core_hnd.open_at1(i_10674, cont, res);
      });
    }
    else {
      return y;
    }
  }
  else {
    return _unroll_choose_10000(ps);
  }
}
 
 
export function _mlift_satisfy_fail_10557(msg, _y_x10407) /* forall<a> (msg : string, maybe<a>) -> parse a */  {
  if (_y_x10407 === null) {
     
    var ev_10680 = $std_core_hnd._evv_at(0);
    var _x4 = ev_10680.hnd._brk_fail;
    return _x4(ev_10680.marker, ev_10680, msg);
  }
  else {
    return _y_x10407.value;
  }
}
 
export function satisfy_fail(msg, pred) /* forall<a> (msg : string, pred : (sslice/sslice) -> maybe<(a, sslice/sslice)>) -> parse a */  {
   
  var ev_10686 = $std_core_hnd._evv_at(0);
   
  var _x5 = ev_10686.hnd._fun_satisfy;
  var x_10683 = _x5(ev_10686.marker, ev_10686, pred);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10407 /* maybe<1687> */ ) {
      return _mlift_satisfy_fail_10557(msg, _y_x10407);
    });
  }
  else {
    if (x_10683 === null) {
       
      var ev_0_10689 = $std_core_hnd._evv_at(0);
      var _x5 = ev_0_10689.hnd._brk_fail;
      return _x5(ev_0_10689.marker, ev_0_10689, msg);
    }
    else {
      return x_10683.value;
    }
  }
}
 
 
export function _mlift_eof_10558(_y_x10410) /* (maybe<()>) -> parse () */  {
  if (_y_x10410 === null) {
     
    var ev_10692 = $std_core_hnd._evv_at(0);
    var _x6 = ev_10692.hnd._brk_fail;
    return _x6(ev_10692.marker, ev_10692, "expecting end-of-input");
  }
  else {
    return $std_core_types.Unit;
  }
}
 
export function eof() /* () -> parse () */  {
   
  var ev_10698 = $std_core_hnd._evv_at(0);
   
  var _x7 = ev_10698.hnd._fun_satisfy;
  var x_10695 = _x7(ev_10698.marker, ev_10698, function(s /* sslice/sslice */ ) {
       
      var _x8 = s.len;
      var b_10028 = $std_core_types._int_gt(_x8,0);
      if (b_10028) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2($std_core_types.Unit, s));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_eof_10558);
  }
  else {
    if (x_10695 === null) {
       
      var ev_0_10701 = $std_core_hnd._evv_at(0);
      var _x7 = ev_0_10701.hnd._brk_fail;
      return _x7(ev_0_10701.marker, ev_0_10701, "expecting end-of-input");
    }
    else {
      return $std_core_types.Unit;
    }
  }
}
 
 
export function _mlift_parse_eof_10559(_y_x10414) /* (maybe<()>) -> parse () */  {
  if (_y_x10414 === null) {
     
    var ev_10704 = $std_core_hnd._evv_at(0);
    var _x8 = ev_10704.hnd._brk_fail;
    return _x8(ev_10704.marker, ev_10704, "expecting end-of-input");
  }
  else {
    return $std_core_types.Unit;
  }
}
 
 
export function _mlift_parse_eof_10560(x, wild) /* forall<a,e> (x : a, wild : ()) -> <parse|e> a */  {
  return x;
}
 
 
export function _mlift_parse_eof_10561(x) /* forall<a,e> (x : a) -> <parse|e> a */  {
   
  var i_10709 = $std_core_hnd._evv_index(parse_fs__tag);
   
  var w = $std_core_hnd._evv_swap_create1(i_10709);
   
  var ev_10713 = $std_core_hnd._evv_at(0);
   
  var _x9 = ev_10713.hnd._fun_satisfy;
  var x_1_10711 = _x9(ev_10713.marker, ev_10713, function(s /* sslice/sslice */ ) {
       
      var _x10 = s.len;
      var b_10028 = $std_core_types._int_gt(_x10,0);
      if (b_10028) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2($std_core_types.Unit, s));
      }
    });
   
  if ($std_core_hnd._yielding()) {
    var y = $std_core_hnd.yield_extend(_mlift_parse_eof_10559);
  }
  else {
    var y = _mlift_parse_eof_10559(x_1_10711);
  }
   
  var _null_ = $std_core_hnd._evv_set(w);
   
  if ($std_core_hnd._yielding()) {
    var x_0_10707 = $std_core_hnd.yield_cont(function(cont /* (326) -> <parse|1785> () */ , res /* 326 */ ) {
      return $std_core_hnd.open_at1(i_10709, cont, res);
    });
  }
  else {
    var x_0_10707 = y;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(wild /* () */ ) {
      return x;
    });
  }
  else {
    return x;
  }
}
 
export function parse_eof(input, p) /* forall<a,e> (input : sslice/sslice, p : () -> <parse|e> a) -> e parse-error<a> */  {
  return parse(input, function() {
       
      var x_10718 = p();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(x_0 /* 1784 */ ) {
          return _mlift_parse_eof_10561(x_0);
        });
      }
      else {
        return _mlift_parse_eof_10561(x_10718);
      }
    });
}
 
 
export function _mlift_char_is_10562(msg, _y_x10419) /* (msg : string, maybe<char>) -> parse char */  {
  if (_y_x10419 === null) {
     
    var ev_10720 = $std_core_hnd._evv_at(0);
    var _x9 = ev_10720.hnd._brk_fail;
    return _x9(ev_10720.marker, ev_10720, msg);
  }
  else {
    return _y_x10419.value;
  }
}
 
export function char_is(msg, pred) /* (msg : string, pred : (char) -> bool) -> parse char */  {
   
  var ev_10726 = $std_core_hnd._evv_at(0);
   
  var _x10 = ev_10726.hnd._fun_satisfy;
  var x_10723 = _x10(ev_10726.marker, ev_10726, function(slice /* sslice/sslice */ ) {
      var _x11 = $std_core_sslice.next(slice);
      if (_x11 !== null) {
        if (pred(_x11.value.fst)){
          return $std_core_types.Just($std_core_types.Tuple2(_x11.value.fst, _x11.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10419 /* maybe<char> */ ) {
      return _mlift_char_is_10562(msg, _y_x10419);
    });
  }
  else {
    if (x_10723 === null) {
       
      var ev_0_10729 = $std_core_hnd._evv_at(0);
      var _x10 = ev_0_10729.hnd._brk_fail;
      return _x10(ev_0_10729.marker, ev_0_10729, msg);
    }
    else {
      return x_10723.value;
    }
  }
}
 
export function next_while0(slice, pred, acc) /* (slice : sslice/sslice, pred : (char) -> bool, acc : list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x11 = $std_core_sslice.next(slice);
  if (_x11 !== null) {
    if (pred(_x11.value.fst)){
      {
        // tail call
        var _x12 = $std_core_types.Cons(_x11.value.fst, acc);
        slice = _x11.value.snd;
        acc = _x12;
        continue tailcall;
      }
    }
  }
  if (acc === null) {
    var _x13 = $std_core_types.Nil;
  }
  else {
    var _x13 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, acc);
  }
  return $std_core_types.Tuple2(_x13, slice);
}}
 
 
export function _mlift_chars_are_10563(msg, _y_x10422) /* (msg : string, maybe<list<char>>) -> parse list<char> */  {
  if (_y_x10422 === null) {
     
    var ev_10732 = $std_core_hnd._evv_at(0);
    var _x14 = ev_10732.hnd._brk_fail;
    return _x14(ev_10732.marker, ev_10732, msg);
  }
  else {
    return _y_x10422.value;
  }
}
 
export function chars_are(msg, pred) /* (msg : string, pred : (char) -> bool) -> parse list<char> */  {
   
  var ev_10738 = $std_core_hnd._evv_at(0);
   
  var _x15 = ev_10738.hnd._fun_satisfy;
  var x_10735 = _x15(ev_10738.marker, ev_10738, function(slice /* sslice/sslice */ ) {
      var _x16 = next_while0(slice, pred, $std_core_types.Nil);
      if (_x16.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x16.fst, _x16.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10422 /* maybe<list<char>> */ ) {
      return _mlift_chars_are_10563(msg, _y_x10422);
    });
  }
  else {
    if (x_10735 === null) {
       
      var ev_0_10741 = $std_core_hnd._evv_at(0);
      var _x15 = ev_0_10741.hnd._brk_fail;
      return _x15(ev_0_10741.marker, ev_0_10741, msg);
    }
    else {
      return x_10735.value;
    }
  }
}
 
export function _unroll_next_match_10001(slice, cs) /* (slice : sslice/sslice, cs : list<char>) -> maybe<sslice/sslice> */  { tailcall: while(1)
{
  if (cs === null) {
    return $std_core_types.Just(slice);
  }
  else {
    var _x16 = $std_core_sslice.next(slice);
    if (_x16 !== null) {
      if (((cs.head) === (_x16.value.fst))){
        {
          // tail call
          slice = _x16.value.snd;
          cs = cs.tail;
          continue tailcall;
        }
      }
    }
    return $std_core_types.Nothing;
  }
}}
 
 
export function next_match(slice, cs) /* (slice : sslice/sslice, cs : list<char>) -> maybe<sslice/sslice> */  {
  if (cs === null) {
    return $std_core_types.Just(slice);
  }
  else {
    return _unroll_next_match_10001(slice, cs);
  }
}
 
 
export function _mlift_pstring_10564(s, _y_x10425) /* (s : string, maybe<string>) -> parse string */  {
  if (_y_x10425 === null) {
     
    var ev_10744 = $std_core_hnd._evv_at(0);
    var _x17 = ev_10744.hnd._brk_fail;
    return _x17(ev_10744.marker, ev_10744, s);
  }
  else {
    return _y_x10425.value;
  }
}
 
export function pstring(s) /* (s : string) -> parse string */  {
   
  var ev_10750 = $std_core_hnd._evv_at(0);
   
  var _x18 = ev_10750.hnd._fun_satisfy;
  var x_10747 = _x18(ev_10750.marker, ev_10750, function(slice /* sslice/sslice */ ) {
       
      var cs_10028 = $std_core_string.list(s);
      if (cs_10028 === null) {
        var _x19 = $std_core_types.Just(slice);
      }
      else {
        var _x19 = _unroll_next_match_10001(slice, cs_10028);
      }
      if (_x19 !== null) {
        return $std_core_types.Just($std_core_types.Tuple2(s, _x19.value));
      }
      else {
        return $std_core_types.Nothing;
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10425 /* maybe<string> */ ) {
      return _mlift_pstring_10564(s, _y_x10425);
    });
  }
  else {
    if (x_10747 === null) {
       
      var ev_0_10753 = $std_core_hnd._evv_at(0);
      var _x18 = ev_0_10753.hnd._brk_fail;
      return _x18(ev_0_10753.marker, ev_0_10753, s);
    }
    else {
      return x_10747.value;
    }
  }
}
 
 
export function _mlift_char_10565(msg_10031, _y_x10428) /* (msg@10031 : string, maybe<char>) -> parse char */  {
  if (_y_x10428 === null) {
     
    var ev_10756 = $std_core_hnd._evv_at(0);
    var _x19 = ev_10756.hnd._brk_fail;
    return _x19(ev_10756.marker, ev_10756, msg_10031);
  }
  else {
    return _y_x10428.value;
  }
}
 
export function char(c) /* (c : char) -> parse char */  {
   
  var msg_10031 = $std_core_types._lp__plus__plus__rp_("\'", $std_core_types._lp__plus__plus__rp_($std_core_show.show_char(c), "\'"));
   
  var ev_10762 = $std_core_hnd._evv_at(0);
   
  var _x20 = ev_10762.hnd._fun_satisfy;
  var x_10759 = _x20(ev_10762.marker, ev_10762, function(slice /* sslice/sslice */ ) {
      var _x21 = $std_core_sslice.next(slice);
      if (_x21 !== null) {
        if ((c === (_x21.value.fst))){
          return $std_core_types.Just($std_core_types.Tuple2(_x21.value.fst, _x21.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10428 /* maybe<char> */ ) {
      return _mlift_char_10565(msg_10031, _y_x10428);
    });
  }
  else {
    if (x_10759 === null) {
       
      var ev_0_10765 = $std_core_hnd._evv_at(0);
      var _x20 = ev_0_10765.hnd._brk_fail;
      return _x20(ev_0_10765.marker, ev_0_10765, msg_10031);
    }
    else {
      return x_10759.value;
    }
  }
}
 
 
export function _mlift_no_digit_10566(_y_x10431) /* (maybe<char>) -> parse char */  {
  if (_y_x10431 === null) {
     
    var ev_10768 = $std_core_hnd._evv_at(0);
    var _x21 = ev_10768.hnd._brk_fail;
    return _x21(ev_10768.marker, ev_10768, "not a digit");
  }
  else {
    return _y_x10431.value;
  }
}
 
export function no_digit() /* () -> parse char */  {
   
  var ev_10774 = $std_core_hnd._evv_at(0);
   
  var _x22 = ev_10774.hnd._fun_satisfy;
  var x_10771 = _x22(ev_10774.marker, ev_10774, function(slice /* sslice/sslice */ ) {
      var _x23 = $std_core_sslice.next(slice);
      if (_x23 !== null) {
         
        var b_10039 = (((_x23.value.fst) >= 0x0030)) ? ((_x23.value.fst) <= 0x0039) : false;
        var _x24 = (b_10039) ? false : true;
        if (_x24){
          return $std_core_types.Just($std_core_types.Tuple2(_x23.value.fst, _x23.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_no_digit_10566);
  }
  else {
    if (x_10771 === null) {
       
      var ev_0_10777 = $std_core_hnd._evv_at(0);
      var _x22 = ev_0_10777.hnd._brk_fail;
      return _x22(ev_0_10777.marker, ev_0_10777, "not a digit");
    }
    else {
      return x_10771.value;
    }
  }
}
 
 
export function _mlift_digit_10567(_c_x10436) /* (char) -> int */  {
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var x_10002 = _c_x10436;
   
  var y_10003 = 0x0030;
   
  var x = (($std_core_types._int_sub(x_10002,y_10003)));
   
  var keep = $std_core_hnd._evv_set(w);
  return x;
}
 
 
export function _mlift_digit_10568(_y_x10434) /* (maybe<char>) -> parse int */  {
   
  if (_y_x10434 === null) {
     
    var ev_10785 = $std_core_hnd._evv_at(0);
    var _x23 = ev_10785.hnd._brk_fail;
    var x_10783 = _x23(ev_10785.marker, ev_10785, "digit");
  }
  else {
    var x_10783 = _y_x10434.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_digit_10567);
  }
  else {
    return _mlift_digit_10567(x_10783);
  }
}
 
export function digit() /* () -> parse int */  {
   
  var ev_10791 = $std_core_hnd._evv_at(0);
   
  var _x23 = ev_10791.hnd._fun_satisfy;
  var x_10788 = _x23(ev_10791.marker, ev_10791, function(slice /* sslice/sslice */ ) {
      var _x24 = $std_core_sslice.next(slice);
      if (_x24 !== null) {
        var _x25 = (((_x24.value.fst) >= 0x0030)) ? ((_x24.value.fst) <= 0x0039) : false;
        if (_x25){
          return $std_core_types.Just($std_core_types.Tuple2(_x24.value.fst, _x24.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_digit_10568);
  }
  else {
     
    if (x_10788 === null) {
       
      var ev_0_10797 = $std_core_hnd._evv_at(0);
      var _x23 = ev_0_10797.hnd._brk_fail;
      var x_1_10794 = _x23(ev_0_10797.marker, ev_0_10797, "digit");
    }
    else {
      var x_1_10794 = x_10788.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_digit_10567);
    }
    else {
       
      var w = $std_core_hnd._evv_swap_create0();
       
      var x_10002 = x_1_10794;
       
      var y_10003 = 0x0030;
       
      var x_4 = (($std_core_types._int_sub(x_10002,y_10003)));
       
      var keep = $std_core_hnd._evv_set(w);
      return x_4;
    }
  }
}
 
 
export function _mlift_alpha_10569(_y_x10437) /* (maybe<char>) -> parse char */  {
  if (_y_x10437 === null) {
     
    var ev_10803 = $std_core_hnd._evv_at(0);
    var _x23 = ev_10803.hnd._brk_fail;
    return _x23(ev_10803.marker, ev_10803, "alpha");
  }
  else {
    return _y_x10437.value;
  }
}
 
export function alpha() /* () -> parse char */  {
   
  var ev_10809 = $std_core_hnd._evv_at(0);
   
  var _x24 = ev_10809.hnd._fun_satisfy;
  var x_10806 = _x24(ev_10809.marker, ev_10809, function(slice /* sslice/sslice */ ) {
      var _x25 = $std_core_sslice.next(slice);
      if (_x25 !== null) {
        if ($std_core_char.is_alpha(_x25.value.fst)){
          return $std_core_types.Just($std_core_types.Tuple2(_x25.value.fst, _x25.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_alpha_10569);
  }
  else {
    if (x_10806 === null) {
       
      var ev_0_10812 = $std_core_hnd._evv_at(0);
      var _x24 = ev_0_10812.hnd._brk_fail;
      return _x24(ev_0_10812.marker, ev_0_10812, "alpha");
    }
    else {
      return x_10806.value;
    }
  }
}
 
 
export function _mlift_alpha_num_10570(_y_x10440) /* (maybe<char>) -> parse char */  {
  if (_y_x10440 === null) {
     
    var ev_10815 = $std_core_hnd._evv_at(0);
    var _x25 = ev_10815.hnd._brk_fail;
    return _x25(ev_10815.marker, ev_10815, "alpha-num");
  }
  else {
    return _y_x10440.value;
  }
}
 
export function alpha_num() /* () -> parse char */  {
   
  var ev_10821 = $std_core_hnd._evv_at(0);
   
  var _x26 = ev_10821.hnd._fun_satisfy;
  var x_10818 = _x26(ev_10821.marker, ev_10821, function(slice /* sslice/sslice */ ) {
      var _x27 = $std_core_sslice.next(slice);
      if (_x27 !== null) {
        if ($std_core_char.is_alpha_num(_x27.value.fst)){
          return $std_core_types.Just($std_core_types.Tuple2(_x27.value.fst, _x27.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_alpha_num_10570);
  }
  else {
    if (x_10818 === null) {
       
      var ev_0_10824 = $std_core_hnd._evv_at(0);
      var _x26 = ev_0_10824.hnd._brk_fail;
      return _x26(ev_0_10824.marker, ev_0_10824, "alpha-num");
    }
    else {
      return x_10818.value;
    }
  }
}
 
 
export function _mlift_white_10571(_y_x10443) /* (maybe<char>) -> parse char */  {
  if (_y_x10443 === null) {
     
    var ev_10827 = $std_core_hnd._evv_at(0);
    var _x27 = ev_10827.hnd._brk_fail;
    return _x27(ev_10827.marker, ev_10827, "");
  }
  else {
    return _y_x10443.value;
  }
}
 
export function white() /* () -> parse char */  {
   
  var ev_10833 = $std_core_hnd._evv_at(0);
   
  var _x28 = ev_10833.hnd._fun_satisfy;
  var x_10830 = _x28(ev_10833.marker, ev_10833, function(slice /* sslice/sslice */ ) {
      var _x29 = $std_core_sslice.next(slice);
      if (_x29 !== null) {
        if ($std_core_char.is_white(_x29.value.fst)){
          return $std_core_types.Just($std_core_types.Tuple2(_x29.value.fst, _x29.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_white_10571);
  }
  else {
    if (x_10830 === null) {
       
      var ev_0_10836 = $std_core_hnd._evv_at(0);
      var _x28 = ev_0_10836.hnd._brk_fail;
      return _x28(ev_0_10836.marker, ev_0_10836, "");
    }
    else {
      return x_10830.value;
    }
  }
}
 
 
export function _lift_whitespace_10353(_uniq_slice_10264, _uniq_acc_10266) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x29 = $std_core_sslice.next(_uniq_slice_10264);
  if (_x29 !== null) {
    if ($std_core_char.is_white(_x29.value.fst)){
      {
        // tail call
        var _x30 = $std_core_types.Cons(_x29.value.fst, _uniq_acc_10266);
        _uniq_slice_10264 = _x29.value.snd;
        _uniq_acc_10266 = _x30;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10266 === null) {
    var _x31 = $std_core_types.Nil;
  }
  else {
    var _x31 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10266);
  }
  return $std_core_types.Tuple2(_x31, _uniq_slice_10264);
}}
 
 
export function _mlift_whitespace_10572(_y_x10446) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10446 === null) {
     
    var ev_10841 = $std_core_hnd._evv_at(0);
    var _x32 = ev_10841.hnd._brk_fail;
    var x_10839 = _x32(ev_10841.marker, ev_10841, "");
  }
  else {
    var x_10839 = _y_x10446.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10839);
  }
}
 
export function whitespace() /* () -> parse string */  {
   
  var ev_10847 = $std_core_hnd._evv_at(0);
   
  var _x32 = ev_10847.hnd._fun_satisfy;
  var x_10844 = _x32(ev_10847.marker, ev_10847, function(slice /* sslice/sslice */ ) {
      var _x33 = _lift_whitespace_10353(slice, $std_core_types.Nil);
      if (_x33.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x33.fst, _x33.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_whitespace_10572);
  }
  else {
     
    if (x_10844 === null) {
       
      var ev_0_10852 = $std_core_hnd._evv_at(0);
      var _x32 = ev_0_10852.hnd._brk_fail;
      var x_1_10850 = _x32(ev_0_10852.marker, ev_0_10852, "");
    }
    else {
      var x_1_10850 = x_10844.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
    }
    else {
      return $std_core_string.listchar_fs_string(x_1_10850);
    }
  }
}
 
 
export function _lift_whitespace0_10354(_uniq_slice_10275, _uniq_acc_10277) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x32 = $std_core_sslice.next(_uniq_slice_10275);
  if (_x32 !== null) {
    if ($std_core_char.is_white(_x32.value.fst)){
      {
        // tail call
        var _x33 = $std_core_types.Cons(_x32.value.fst, _uniq_acc_10277);
        _uniq_slice_10275 = _x32.value.snd;
        _uniq_acc_10277 = _x33;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10277 === null) {
    var _x34 = $std_core_types.Nil;
  }
  else {
    var _x34 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10277);
  }
  return $std_core_types.Tuple2(_x34, _uniq_slice_10275);
}}
 
 
export function _mlift_whitespace0_10573(_y_x10450) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10450 === null) {
     
    var ev_10857 = $std_core_hnd._evv_at(0);
    var _x35 = ev_10857.hnd._brk_fail;
    var x_10855 = _x35(ev_10857.marker, ev_10857, "");
  }
  else {
    var x_10855 = _y_x10450.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10855);
  }
}
 
 
export function _mlift_whitespace0_10574(_y_x10449) /* (bool) -> parse string */  {
  if (_y_x10449) {
     
    var ev_10862 = $std_core_hnd._evv_at(0);
     
    var _x35 = ev_10862.hnd._fun_satisfy;
    var x_10860 = _x35(ev_10862.marker, ev_10862, function(slice /* sslice/sslice */ ) {
        var _x36 = _lift_whitespace0_10354(slice, $std_core_types.Nil);
        if (_x36.fst === null) {
          return $std_core_types.Nothing;
        }
        else {
          return $std_core_types.Just($std_core_types.Tuple2(_x36.fst, _x36.snd));
        }
      });
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_whitespace0_10573);
    }
    else {
      return _mlift_whitespace0_10573(x_10860);
    }
  }
  else {
    return "";
  }
}
 
export function whitespace0() /* () -> parse string */  {
   
  var ev_10868 = $std_core_hnd._evv_at(0);
   
  var x_10865 = ev_10868.hnd._ctl_pick(ev_10868.marker, ev_10868);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_whitespace0_10574);
  }
  else {
    if (x_10865) {
       
      var ev_0_10873 = $std_core_hnd._evv_at(0);
       
      var _x35 = ev_0_10873.hnd._fun_satisfy;
      var x_0_10870 = _x35(ev_0_10873.marker, ev_0_10873, function(slice /* sslice/sslice */ ) {
          var _x36 = _lift_whitespace0_10354(slice, $std_core_types.Nil);
          if (_x36.fst === null) {
            return $std_core_types.Nothing;
          }
          else {
            return $std_core_types.Just($std_core_types.Tuple2(_x36.fst, _x36.snd));
          }
        });
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(_mlift_whitespace0_10573);
      }
      else {
         
        if (x_0_10870 === null) {
           
          var ev_1_10878 = $std_core_hnd._evv_at(0);
          var _x35 = ev_1_10878.hnd._brk_fail;
          var x_2_10876 = _x35(ev_1_10878.marker, ev_1_10878, "");
        }
        else {
          var x_2_10876 = x_0_10870.value;
        }
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
        }
        else {
          return $std_core_string.listchar_fs_string(x_2_10876);
        }
      }
    }
    else {
      return "";
    }
  }
}
 
 
export function _lift_digits_10355(_uniq_slice_10286, _uniq_acc_10288) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x35 = $std_core_sslice.next(_uniq_slice_10286);
  if (_x35 !== null) {
    if ($std_core_char.is_digit(_x35.value.fst)){
      {
        // tail call
        var _x36 = $std_core_types.Cons(_x35.value.fst, _uniq_acc_10288);
        _uniq_slice_10286 = _x35.value.snd;
        _uniq_acc_10288 = _x36;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10288 === null) {
    var _x37 = $std_core_types.Nil;
  }
  else {
    var _x37 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10288);
  }
  return $std_core_types.Tuple2(_x37, _uniq_slice_10286);
}}
 
 
export function _mlift_digits_10575(_y_x10454) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10454 === null) {
     
    var ev_10883 = $std_core_hnd._evv_at(0);
    var _x38 = ev_10883.hnd._brk_fail;
    var x_10881 = _x38(ev_10883.marker, ev_10883, "digit");
  }
  else {
    var x_10881 = _y_x10454.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10881);
  }
}
 
export function digits() /* () -> parse string */  {
   
  var ev_10889 = $std_core_hnd._evv_at(0);
   
  var _x38 = ev_10889.hnd._fun_satisfy;
  var x_10886 = _x38(ev_10889.marker, ev_10889, function(slice /* sslice/sslice */ ) {
      var _x39 = _lift_digits_10355(slice, $std_core_types.Nil);
      if (_x39.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x39.fst, _x39.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_digits_10575);
  }
  else {
     
    if (x_10886 === null) {
       
      var ev_0_10894 = $std_core_hnd._evv_at(0);
      var _x38 = ev_0_10894.hnd._brk_fail;
      var x_1_10892 = _x38(ev_0_10894.marker, ev_0_10894, "digit");
    }
    else {
      var x_1_10892 = x_10886.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
    }
    else {
      return $std_core_string.listchar_fs_string(x_1_10892);
    }
  }
}
 
 
export function _lift_digits0_10356(_uniq_slice_10297, _uniq_acc_10299) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x38 = $std_core_sslice.next(_uniq_slice_10297);
  if (_x38 !== null) {
    if ($std_core_char.is_digit(_x38.value.fst)){
      {
        // tail call
        var _x39 = $std_core_types.Cons(_x38.value.fst, _uniq_acc_10299);
        _uniq_slice_10297 = _x38.value.snd;
        _uniq_acc_10299 = _x39;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10299 === null) {
    var _x40 = $std_core_types.Nil;
  }
  else {
    var _x40 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10299);
  }
  return $std_core_types.Tuple2(_x40, _uniq_slice_10297);
}}
 
 
export function _mlift_digits0_10576(_y_x10458) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10458 === null) {
     
    var ev_10899 = $std_core_hnd._evv_at(0);
    var _x41 = ev_10899.hnd._brk_fail;
    var x_10897 = _x41(ev_10899.marker, ev_10899, "digit");
  }
  else {
    var x_10897 = _y_x10458.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10897);
  }
}
 
 
export function _mlift_digits0_10577(_y_x10457) /* (bool) -> parse string */  {
  if (_y_x10457) {
     
    var ev_10904 = $std_core_hnd._evv_at(0);
     
    var _x41 = ev_10904.hnd._fun_satisfy;
    var x_10902 = _x41(ev_10904.marker, ev_10904, function(slice /* sslice/sslice */ ) {
        var _x42 = _lift_digits0_10356(slice, $std_core_types.Nil);
        if (_x42.fst === null) {
          return $std_core_types.Nothing;
        }
        else {
          return $std_core_types.Just($std_core_types.Tuple2(_x42.fst, _x42.snd));
        }
      });
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_digits0_10576);
    }
    else {
      return _mlift_digits0_10576(x_10902);
    }
  }
  else {
    return "0";
  }
}
 
export function digits0() /* () -> parse string */  {
   
  var ev_10910 = $std_core_hnd._evv_at(0);
   
  var x_10907 = ev_10910.hnd._ctl_pick(ev_10910.marker, ev_10910);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_digits0_10577);
  }
  else {
    if (x_10907) {
       
      var ev_0_10915 = $std_core_hnd._evv_at(0);
       
      var _x41 = ev_0_10915.hnd._fun_satisfy;
      var x_0_10912 = _x41(ev_0_10915.marker, ev_0_10915, function(slice /* sslice/sslice */ ) {
          var _x42 = _lift_digits0_10356(slice, $std_core_types.Nil);
          if (_x42.fst === null) {
            return $std_core_types.Nothing;
          }
          else {
            return $std_core_types.Just($std_core_types.Tuple2(_x42.fst, _x42.snd));
          }
        });
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(_mlift_digits0_10576);
      }
      else {
         
        if (x_0_10912 === null) {
           
          var ev_1_10920 = $std_core_hnd._evv_at(0);
          var _x41 = ev_1_10920.hnd._brk_fail;
          var x_2_10918 = _x41(ev_1_10920.marker, ev_1_10920, "digit");
        }
        else {
          var x_2_10918 = x_0_10912.value;
        }
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
        }
        else {
          return $std_core_string.listchar_fs_string(x_2_10918);
        }
      }
    }
    else {
      return "0";
    }
  }
}
 
 
export function _lift_pnat_10357(_uniq_slice_10308, _uniq_acc_10310) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x41 = $std_core_sslice.next(_uniq_slice_10308);
  if (_x41 !== null) {
    if ($std_core_char.is_digit(_x41.value.fst)){
      {
        // tail call
        var _x42 = $std_core_types.Cons(_x41.value.fst, _uniq_acc_10310);
        _uniq_slice_10308 = _x41.value.snd;
        _uniq_acc_10310 = _x42;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10310 === null) {
    var _x43 = $std_core_types.Nil;
  }
  else {
    var _x43 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10310);
  }
  return $std_core_types.Tuple2(_x43, _uniq_slice_10308);
}}
 
 
export function _mlift_pnat_10578(_c_x10464) /* (list<char>) -> int */  {
   
  var _x_x1_0_10538 = $std_core_string.listchar_fs_string(_c_x10464);
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var _x45 = undefined;
  var _x44 = (_x45 !== undefined) ? _x45 : false;
  var x = $std_core_int.xparse(_x_x1_0_10538, _x44);
   
  var keep = $std_core_hnd._evv_set(w);
   
  var w_0 = $std_core_hnd._evv_swap_create0();
   
  var keep_0 = $std_core_hnd._evv_set(w_0);
  return (x === null) ? 0 : x.value;
}
 
 
export function _mlift_pnat_10579(_y_x10462) /* (maybe<list<char>>) -> parse int */  {
   
  if (_y_x10462 === null) {
     
    var ev_10931 = $std_core_hnd._evv_at(0);
    var _x44 = ev_10931.hnd._brk_fail;
    var x_10929 = _x44(ev_10931.marker, ev_10931, "digit");
  }
  else {
    var x_10929 = _y_x10462.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pnat_10578);
  }
  else {
    return _mlift_pnat_10578(x_10929);
  }
}
 
export function pnat() /* () -> parse int */  {
   
  var ev_10937 = $std_core_hnd._evv_at(0);
   
  var _x44 = ev_10937.hnd._fun_satisfy;
  var x_10934 = _x44(ev_10937.marker, ev_10937, function(slice /* sslice/sslice */ ) {
      var _x45 = _lift_pnat_10357(slice, $std_core_types.Nil);
      if (_x45.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x45.fst, _x45.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pnat_10579);
  }
  else {
     
    if (x_10934 === null) {
       
      var ev_0_10943 = $std_core_hnd._evv_at(0);
      var _x44 = ev_0_10943.hnd._brk_fail;
      var x_1_10940 = _x44(ev_0_10943.marker, ev_0_10943, "digit");
    }
    else {
      var x_1_10940 = x_10934.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_pnat_10578);
    }
    else {
       
      var _x_x1_0_10538 = $std_core_string.listchar_fs_string(x_1_10940);
       
      var w = $std_core_hnd._evv_swap_create0();
       
      var _x45 = undefined;
      var _x44 = (_x45 !== undefined) ? _x45 : false;
      var x_3 = $std_core_int.xparse(_x_x1_0_10538, _x44);
       
      var keep = $std_core_hnd._evv_set(w);
       
      var w_0 = $std_core_hnd._evv_swap_create0();
       
      var keep_0 = $std_core_hnd._evv_set(w_0);
      return (x_3 === null) ? 0 : x_3.value;
    }
  }
}
 
 
export function _mlift_none_of_10580(_y_x10465) /* (maybe<char>) -> parse char */  {
  if (_y_x10465 === null) {
     
    var ev_10952 = $std_core_hnd._evv_at(0);
    var _x44 = ev_10952.hnd._brk_fail;
    return _x44(ev_10952.marker, ev_10952, "");
  }
  else {
    return _y_x10465.value;
  }
}
 
export function none_of(chars) /* (chars : string) -> parse char */  {
   
  var ev_10958 = $std_core_hnd._evv_at(0);
   
  var _x45 = ev_10958.hnd._fun_satisfy;
  var x_10955 = _x45(ev_10958.marker, ev_10958, function(slice /* sslice/sslice */ ) {
      var _x46 = $std_core_sslice.next(slice);
      if (_x46 !== null) {
         
        var b_10109 = $std_core_string.contains(chars, $std_core_string.char_fs_string(_x46.value.fst));
        var _x47 = (b_10109) ? false : true;
        if (_x47){
          return $std_core_types.Just($std_core_types.Tuple2(_x46.value.fst, _x46.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_none_of_10580);
  }
  else {
    if (x_10955 === null) {
       
      var ev_0_10961 = $std_core_hnd._evv_at(0);
      var _x45 = ev_0_10961.hnd._brk_fail;
      return _x45(ev_0_10961.marker, ev_0_10961, "");
    }
    else {
      return x_10955.value;
    }
  }
}
 
 
export function _lift_none_of_many1_10358(chars, _uniq_slice_10319, _uniq_acc_10321) /* (chars : string, sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x46 = $std_core_sslice.next(_uniq_slice_10319);
  if (_x46 !== null) {
     
    var b_10116 = $std_core_string.contains(chars, $std_core_string.char_fs_string(_x46.value.fst));
    var _x47 = (b_10116) ? false : true;
    if (_x47){
      {
        // tail call
        var _x48 = $std_core_types.Cons(_x46.value.fst, _uniq_acc_10321);
        _uniq_slice_10319 = _x46.value.snd;
        _uniq_acc_10321 = _x48;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10321 === null) {
    var _x49 = $std_core_types.Nil;
  }
  else {
    var _x49 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10321);
  }
  return $std_core_types.Tuple2(_x49, _uniq_slice_10319);
}}
 
 
export function _mlift_none_of_many1_10581(_y_x10468) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10468 === null) {
     
    var ev_10966 = $std_core_hnd._evv_at(0);
    var _x50 = ev_10966.hnd._brk_fail;
    var x_10964 = _x50(ev_10966.marker, ev_10966, "");
  }
  else {
    var x_10964 = _y_x10468.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_10964);
  }
}
 
export function none_of_many1(chars) /* (chars : string) -> parse string */  {
   
  var ev_10972 = $std_core_hnd._evv_at(0);
   
  var _x50 = ev_10972.hnd._fun_satisfy;
  var x_10969 = _x50(ev_10972.marker, ev_10972, function(slice /* sslice/sslice */ ) {
      var _x51 = _lift_none_of_many1_10358(chars, slice, $std_core_types.Nil);
      if (_x51.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x51.fst, _x51.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_none_of_many1_10581);
  }
  else {
     
    if (x_10969 === null) {
       
      var ev_0_10977 = $std_core_hnd._evv_at(0);
      var _x50 = ev_0_10977.hnd._brk_fail;
      var x_1_10975 = _x50(ev_0_10977.marker, ev_0_10977, "");
    }
    else {
      var x_1_10975 = x_10969.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
    }
    else {
      return $std_core_string.listchar_fs_string(x_1_10975);
    }
  }
}
 
 
export function _mlift_one_of_10582(chars, _y_x10471) /* (chars : string, maybe<char>) -> parse char */  {
  if (_y_x10471 === null) {
     
    var ev_10980 = $std_core_hnd._evv_at(0);
    var _x50 = ev_10980.hnd._brk_fail;
    return _x50(ev_10980.marker, ev_10980, chars);
  }
  else {
    return _y_x10471.value;
  }
}
 
export function one_of(chars) /* (chars : string) -> parse char */  {
   
  var ev_10986 = $std_core_hnd._evv_at(0);
   
  var _x51 = ev_10986.hnd._fun_satisfy;
  var x_10983 = _x51(ev_10986.marker, ev_10986, function(slice /* sslice/sslice */ ) {
      var _x52 = $std_core_sslice.next(slice);
      if (_x52 !== null) {
        if ($std_core_string.contains(chars, $std_core_string.char_fs_string(_x52.value.fst))){
          return $std_core_types.Just($std_core_types.Tuple2(_x52.value.fst, _x52.value.snd));
        }
      }
      return $std_core_types.Nothing;
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10471 /* maybe<char> */ ) {
      return _mlift_one_of_10582(chars, _y_x10471);
    });
  }
  else {
    if (x_10983 === null) {
       
      var ev_0_10989 = $std_core_hnd._evv_at(0);
      var _x51 = ev_0_10989.hnd._brk_fail;
      return _x51(ev_0_10989.marker, ev_0_10989, chars);
    }
    else {
      return x_10983.value;
    }
  }
}
 
 
export function _mlift_many_acc_10583(acc, p, x) /* forall<a,e> (acc : list<a>, p : parser<e,a>, x : a) -> <parse|e> list<a> */  {
  return many_acc(p, $std_core_types.Cons(x, acc));
}
 
 
export function _mlift_many_acc_10584(acc_0, p_0, _y_x10475) /* forall<a,e> (acc : list<a>, p : parser<e,a>, bool) -> <parse|e> list<a> */  {
  if (_y_x10475) {
     
    var x_0_10992 = p_0();
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(x_1 /* 2865 */ ) {
        return _mlift_many_acc_10583(acc_0, p_0, x_1);
      });
    }
    else {
      return _mlift_many_acc_10583(acc_0, p_0, x_0_10992);
    }
  }
  else {
     
    var w = $std_core_hnd._evv_swap_create0();
     
    if (acc_0 === null) {
      var x_2 = $std_core_types.Nil;
    }
    else {
      var x_2 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, acc_0);
    }
     
    var keep = $std_core_hnd._evv_set(w);
    return x_2;
  }
}
 
export function many_acc(p_1, acc_1) /* forall<a,e> (p : parser<e,a>, acc : list<a>) -> <parse|e> list<a> */  { tailcall: while(1)
{
   
  var i_10999 = $std_core_hnd._evv_index(parse_fs__tag);
   
  var w_0 = $std_core_hnd._evv_swap_create1(i_10999);
   
  var ev_11001 = $std_core_hnd._evv_at(0);
   
  var y = ev_11001.hnd._ctl_pick(ev_11001.marker, ev_11001);
   
  var _null_ = $std_core_hnd._evv_set(w_0);
   
  if ($std_core_hnd._yielding()) {
    var x_3_10996 = $std_core_hnd.yield_cont(function(cont /* (326) -> <parse|2866> bool */ , res /* 326 */ ) {
      return $std_core_hnd.open_at1(i_10999, cont, res);
    });
  }
  else {
    var x_3_10996 = y;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10475_0 /* bool */ ) {
      return _mlift_many_acc_10584(acc_1, p_1, _y_x10475_0);
    });
  }
  else {
    if (x_3_10996) {
       
      var x_4_11003 = p_1();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(x_5 /* 2865 */ ) {
          return _mlift_many_acc_10583(acc_1, p_1, x_5);
        });
      }
      else {
        {
          // tail call
          var _x52 = $std_core_types.Cons(x_4_11003, acc_1);
          acc_1 = _x52;
          continue tailcall;
        }
      }
    }
    else {
       
      var w_1 = $std_core_hnd._evv_swap_create0();
       
      if (acc_1 === null) {
        var x_7 = $std_core_types.Nil;
      }
      else {
        var x_7 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, acc_1);
      }
       
      var keep_0 = $std_core_hnd._evv_set(w_1);
      return x_7;
    }
  }
}}
 
 
export function many(p) /* forall<a,e> (p : parser<e,a>) -> <parse|e> list<a> */  {
  return many_acc(p, $std_core_types.Nil);
}
 
 
export function _mlift_many1_10585(_y_x10480, _y_x10481) /* forall<a,e> (a, list<a>) -> <parse|e> list<a> */  {
  return $std_core_types.Cons(_y_x10480, _y_x10481);
}
 
 
export function _mlift_many1_10586(p, _y_x10480) /* forall<a,e> (p : parser<e,a>, a) -> <parse|e> list<a> */  {
   
  var x_11008 = many_acc(p, $std_core_types.Nil);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10481 /* list<2933> */ ) {
      return $std_core_types.Cons(_y_x10480, _y_x10481);
    });
  }
  else {
    return $std_core_types.Cons(_y_x10480, x_11008);
  }
}
 
 
export function many1(p) /* forall<a,e> (p : parser<e,a>) -> <parse|e> list<a> */  {
   
  var x_11012 = p();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10480 /* 2933 */ ) {
      return _mlift_many1_10586(p, _y_x10480);
    });
  }
  else {
     
    var x_0_11015 = many_acc(p, $std_core_types.Nil);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10481 /* list<2933> */ ) {
        return $std_core_types.Cons(x_11012, _y_x10481);
      });
    }
    else {
      return $std_core_types.Cons(x_11012, x_0_11015);
    }
  }
}
 
 
export function _mlift_count_acc_10587(acc, n, p, x) /* forall<a,e> (acc : list<a>, n : int, p : parser<e,a>, x : a) -> <parse|e> list<a> */  {
  return count_acc($std_core_types._int_sub(n,1), $std_core_types.Cons(x, acc), p);
}
 
export function count_acc(n_0, acc_0, p_0) /* forall<a,e> (n : int, acc : list<a>, p : parser<e,a>) -> <parse|e> list<a> */  { tailcall: while(1)
{
  if ($std_core_types._int_le(n_0,0)) {
     
    var w = $std_core_hnd._evv_swap_create0();
     
    if (acc_0 === null) {
      var x_0 = $std_core_types.Nil;
    }
    else {
      var x_0 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, acc_0);
    }
     
    var keep = $std_core_hnd._evv_set(w);
    return x_0;
  }
  else {
     
    var x_1_11022 = p_0();
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(x_2 /* 3034 */ ) {
        return _mlift_count_acc_10587(acc_0, n_0, p_0, x_2);
      });
    }
    else {
      {
        // tail call
        var _x53 = $std_core_types._int_sub(n_0,1);
        var _x54 = $std_core_types.Cons(x_1_11022, acc_0);
        n_0 = _x53;
        acc_0 = _x54;
        continue tailcall;
      }
    }
  }
}}
 
export function count(n, p) /* forall<a,e> (n : int, p : parser<e,a>) -> <parse|e> list<a> */  {
  return count_acc(n, $std_core_types.Nil, p);
}
 
 
export function _mlift_one_of_or_10588(chars, $default, _y_x10486) /* (chars : string, default : char, bool) -> parse char */  {
  if (_y_x10486) {
    return one_of(chars);
  }
  else {
    return $default;
  }
}
 
export function one_of_or(chars, $default) /* (chars : string, default : char) -> parse char */  {
   
  var ev_11028 = $std_core_hnd._evv_at(0);
   
  var x_11025 = ev_11028.hnd._ctl_pick(ev_11028.marker, ev_11028);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10486 /* bool */ ) {
      if (_y_x10486) {
        return one_of(chars);
      }
      else {
        return $default;
      }
    });
  }
  else {
    if (x_11025) {
      return one_of(chars);
    }
    else {
      return $default;
    }
  }
}
 
 
export function _mlift_sign_10589(_y_x10490) /* (maybe<char>) -> parse char */  {
  if (_y_x10490 === null) {
     
    var ev_11033 = $std_core_hnd._evv_at(0);
    var _x55 = ev_11033.hnd._brk_fail;
    return _x55(ev_11033.marker, ev_11033, "+-");
  }
  else {
    return _y_x10490.value;
  }
}
 
 
export function _mlift_sign_10590(_c_x10493) /* (char) -> bool */  {
  return (_c_x10493 === 0x002D);
}
 
 
export function _mlift_sign_10591(_y_x10489) /* (bool) -> parse bool */  {
   
  if (_y_x10489) {
     
    var ev_11040 = $std_core_hnd._evv_at(0);
     
    var _x56 = ev_11040.hnd._fun_satisfy;
    var x_0_11038 = _x56(ev_11040.marker, ev_11040, function(slice /* sslice/sslice */ ) {
        var _x57 = $std_core_sslice.next(slice);
        if (_x57 !== null) {
          if ($std_core_string.contains("+-", $std_core_string.char_fs_string(_x57.value.fst))){
            return $std_core_types.Just($std_core_types.Tuple2(_x57.value.fst, _x57.value.snd));
          }
        }
        return $std_core_types.Nothing;
      });
    if ($std_core_hnd._yielding()) {
      var x_11036 = $std_core_hnd.yield_extend(_mlift_sign_10589);
    }
    else {
      var x_11036 = _mlift_sign_10589(x_0_11038);
    }
  }
  else {
    var x_11036 = 0x002B;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_sign_10590);
  }
  else {
    return (x_11036 === 0x002D);
  }
}
 
export function sign() /* () -> parse bool */  {
   
  var ev_11046 = $std_core_hnd._evv_at(0);
   
  var x_11043 = ev_11046.hnd._ctl_pick(ev_11046.marker, ev_11046);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_sign_10591);
  }
  else {
     
    if (x_11043) {
       
      var ev_0_11053 = $std_core_hnd._evv_at(0);
       
      var _x56 = ev_0_11053.hnd._fun_satisfy;
      var x_1_11051 = _x56(ev_0_11053.marker, ev_0_11053, function(slice /* sslice/sslice */ ) {
          var _x57 = $std_core_sslice.next(slice);
          if (_x57 !== null) {
            if ($std_core_string.contains("+-", $std_core_string.char_fs_string(_x57.value.fst))){
              return $std_core_types.Just($std_core_types.Tuple2(_x57.value.fst, _x57.value.snd));
            }
          }
          return $std_core_types.Nothing;
        });
      if ($std_core_hnd._yielding()) {
        var x_0_11048 = $std_core_hnd.yield_extend(_mlift_sign_10589);
      }
      else {
        var x_0_11048 = _mlift_sign_10589(x_1_11051);
      }
    }
    else {
      var x_0_11048 = 0x002B;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_sign_10590);
    }
    else {
      return (x_0_11048 === 0x002D);
    }
  }
}
 
 
export function _lift_pint_10359(_uniq_slice_10331, _uniq_acc_10333) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x56 = $std_core_sslice.next(_uniq_slice_10331);
  if (_x56 !== null) {
    if ($std_core_char.is_digit(_x56.value.fst)){
      {
        // tail call
        var _x57 = $std_core_types.Cons(_x56.value.fst, _uniq_acc_10333);
        _uniq_slice_10331 = _x56.value.snd;
        _uniq_acc_10333 = _x57;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10333 === null) {
    var _x58 = $std_core_types.Nil;
  }
  else {
    var _x58 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10333);
  }
  return $std_core_types.Tuple2(_x58, _uniq_slice_10331);
}}
 
 
export function _mlift_pint_10592(neg, _c_x10501) /* (neg : bool, list<char>) -> int */  {
   
  var _x_x1_0_10544 = $std_core_string.listchar_fs_string(_c_x10501);
   
  var w = $std_core_hnd._evv_swap_create0();
   
  var _x60 = undefined;
  var _x59 = (_x60 !== undefined) ? _x60 : false;
  var x = $std_core_int.xparse(_x_x1_0_10544, _x59);
   
  var keep = $std_core_hnd._evv_set(w);
   
  var w_0 = $std_core_hnd._evv_swap_create0();
   
  var keep_0 = $std_core_hnd._evv_set(w_0);
  if (neg) {
    var _x59 = (x === null) ? 0 : x.value;
    return $std_core_types._int_negate(_x59);
  }
  else {
    return (x === null) ? 0 : x.value;
  }
}
 
 
export function _mlift_pint_10593(neg, _y_x10499) /* (neg : bool, maybe<list<char>>) -> parse int */  {
   
  if (_y_x10499 === null) {
     
    var ev_11064 = $std_core_hnd._evv_at(0);
    var _x60 = ev_11064.hnd._brk_fail;
    var x_11062 = _x60(ev_11064.marker, ev_11064, "digit");
  }
  else {
    var x_11062 = _y_x10499.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_c_x10501 /* list<char> */ ) {
      return _mlift_pint_10592(neg, _c_x10501);
    });
  }
  else {
    return _mlift_pint_10592(neg, x_11062);
  }
}
 
 
export function _mlift_pint_10594(_y_x10495) /* (maybe<char>) -> parse char */  {
  if (_y_x10495 === null) {
     
    var ev_11067 = $std_core_hnd._evv_at(0);
    var _x60 = ev_11067.hnd._brk_fail;
    return _x60(ev_11067.marker, ev_11067, "+-");
  }
  else {
    return _y_x10495.value;
  }
}
 
 
export function _mlift_pint_10595(_c_x10498) /* (char) -> int */  {
   
  var neg = (_c_x10498 === 0x002D);
   
  var ev_11072 = $std_core_hnd._evv_at(0);
   
  var _x61 = ev_11072.hnd._fun_satisfy;
  var x_11070 = _x61(ev_11072.marker, ev_11072, function(slice_0 /* sslice/sslice */ ) {
      var _x62 = _lift_pint_10359(slice_0, $std_core_types.Nil);
      if (_x62.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x62.fst, _x62.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10499 /* maybe<list<char>> */ ) {
      return _mlift_pint_10593(neg, _y_x10499);
    });
  }
  else {
    return _mlift_pint_10593(neg, x_11070);
  }
}
 
 
export function _mlift_pint_10596(_y_x10494) /* (bool) -> parse int */  {
   
  if (_y_x10494) {
     
    var ev_11079 = $std_core_hnd._evv_at(0);
     
    var _x61 = ev_11079.hnd._fun_satisfy;
    var x_0_11077 = _x61(ev_11079.marker, ev_11079, function(slice /* sslice/sslice */ ) {
        var _x62 = $std_core_sslice.next(slice);
        if (_x62 !== null) {
          if ($std_core_string.contains("+-", $std_core_string.char_fs_string(_x62.value.fst))){
            return $std_core_types.Just($std_core_types.Tuple2(_x62.value.fst, _x62.value.snd));
          }
        }
        return $std_core_types.Nothing;
      });
    if ($std_core_hnd._yielding()) {
      var x_11075 = $std_core_hnd.yield_extend(_mlift_pint_10594);
    }
    else {
      var x_11075 = _mlift_pint_10594(x_0_11077);
    }
  }
  else {
    var x_11075 = 0x002B;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pint_10595);
  }
  else {
    return _mlift_pint_10595(x_11075);
  }
}
 
export function pint() /* () -> parse int */  {
   
  var ev_11085 = $std_core_hnd._evv_at(0);
   
  var x_11082 = ev_11085.hnd._ctl_pick(ev_11085.marker, ev_11085);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_pint_10596);
  }
  else {
     
    if (x_11082) {
       
      var ev_0_11092 = $std_core_hnd._evv_at(0);
       
      var _x61 = ev_0_11092.hnd._fun_satisfy;
      var x_1_11090 = _x61(ev_0_11092.marker, ev_0_11092, function(slice /* sslice/sslice */ ) {
          var _x62 = $std_core_sslice.next(slice);
          if (_x62 !== null) {
            if ($std_core_string.contains("+-", $std_core_string.char_fs_string(_x62.value.fst))){
              return $std_core_types.Just($std_core_types.Tuple2(_x62.value.fst, _x62.value.snd));
            }
          }
          return $std_core_types.Nothing;
        });
      if ($std_core_hnd._yielding()) {
        var x_0_11087 = $std_core_hnd.yield_extend(_mlift_pint_10594);
      }
      else {
        var x_0_11087 = _mlift_pint_10594(x_1_11090);
      }
    }
    else {
      var x_0_11087 = 0x002B;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(_mlift_pint_10595);
    }
    else {
       
      var neg = (x_0_11087 === 0x002D);
       
      var ev_1_11098 = $std_core_hnd._evv_at(0);
       
      var _x61 = ev_1_11098.hnd._fun_satisfy;
      var x_3_11095 = _x61(ev_1_11098.marker, ev_1_11098, function(slice_0 /* sslice/sslice */ ) {
          var _x62 = _lift_pint_10359(slice_0, $std_core_types.Nil);
          if (_x62.fst === null) {
            return $std_core_types.Nothing;
          }
          else {
            return $std_core_types.Just($std_core_types.Tuple2(_x62.fst, _x62.snd));
          }
        });
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10499 /* maybe<list<char>> */ ) {
          return _mlift_pint_10593(neg, _y_x10499);
        });
      }
      else {
         
        if (x_3_11095 === null) {
           
          var ev_2_11104 = $std_core_hnd._evv_at(0);
          var _x61 = ev_2_11104.hnd._brk_fail;
          var x_5_11101 = _x61(ev_2_11104.marker, ev_2_11104, "digit");
        }
        else {
          var x_5_11101 = x_3_11095.value;
        }
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_c_x10501 /* list<char> */ ) {
            return _mlift_pint_10592(neg, _c_x10501);
          });
        }
        else {
           
          var _x_x1_0_10544 = $std_core_string.listchar_fs_string(x_5_11101);
           
          var w = $std_core_hnd._evv_swap_create0();
           
          var _x62 = undefined;
          var _x61 = (_x62 !== undefined) ? _x62 : false;
          var x_7 = $std_core_int.xparse(_x_x1_0_10544, _x61);
           
          var keep = $std_core_hnd._evv_set(w);
           
          var w_0 = $std_core_hnd._evv_swap_create0();
           
          var keep_0 = $std_core_hnd._evv_set(w_0);
          if (neg) {
            var _x61 = (x_7 === null) ? 0 : x_7.value;
            return $std_core_types._int_negate(_x61);
          }
          else {
            return (x_7 === null) ? 0 : x_7.value;
          }
        }
      }
    }
  }
}
 
 
export function _mlift_sep_by1_10597(p, wild) /* forall<a,b,e> (p : parser<e,a>, wild : b) -> <parse|e> a */  {
  return p();
}
 
 
export function _mlift_sep_by1_10598(_y_x10503, _y_x10506) /* forall<a,e> (a, list<a>) -> <parse|e> list<a> */  {
  return $std_core_types.Cons(_y_x10503, _y_x10506);
}
 
 
export function _mlift_sep_by1_10599(p, sep, _y_x10503) /* forall<a,b,e> (p : parser<e,a>, sep : parser<e,b>, a) -> <parse|e> list<a> */  {
   
  var x_11113 = many_acc(function() {
       
      var x_0_11115 = sep();
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(wild /* 3295 */ ) {
          return p();
        });
      }
      else {
        return p();
      }
    }, $std_core_types.Nil);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10506 /* list<3294> */ ) {
      return $std_core_types.Cons(_y_x10503, _y_x10506);
    });
  }
  else {
    return $std_core_types.Cons(_y_x10503, x_11113);
  }
}
 
 
export function sep_by1(p, sep) /* forall<a,b,e> (p : parser<e,a>, sep : parser<e,b>) -> <parse|e> list<a> */  {
   
  var x_11121 = p();
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10503 /* 3294 */ ) {
      return _mlift_sep_by1_10599(p, sep, _y_x10503);
    });
  }
  else {
     
    var x_0_11124 = many_acc(function() {
         
        var x_1_11127 = sep();
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(wild /* 3295 */ ) {
            return p();
          });
        }
        else {
          return p();
        }
      }, $std_core_types.Nil);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10506 /* list<3294> */ ) {
        return $std_core_types.Cons(x_11121, _y_x10506);
      });
    }
    else {
      return $std_core_types.Cons(x_11121, x_0_11124);
    }
  }
}
 
 
export function _mlift_sep_by_10600(p, sep, _y_x10508) /* forall<a,b,e> (p : parser<e,a>, sep : parser<e,b>, bool) -> <parse|e> list<a> */  {
  if (_y_x10508) {
    return sep_by1(p, sep);
  }
  else {
    return $std_core_types.Nil;
  }
}
 
 
export function sep_by(p, sep) /* forall<a,b,e> (p : parser<e,a>, sep : parser<e,b>) -> <parse|e> list<a> */  {
   
  var i_11136 = $std_core_hnd._evv_index(parse_fs__tag);
   
  var w = $std_core_hnd._evv_swap_create1(i_11136);
   
  var ev_11138 = $std_core_hnd._evv_at(0);
   
  var y = ev_11138.hnd._ctl_pick(ev_11138.marker, ev_11138);
   
  var _null_ = $std_core_hnd._evv_set(w);
   
  if ($std_core_hnd._yielding()) {
    var x_11133 = $std_core_hnd.yield_cont(function(cont /* (326) -> <parse|3349> bool */ , res /* 326 */ ) {
      return $std_core_hnd.open_at1(i_11136, cont, res);
    });
  }
  else {
    var x_11133 = y;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10508 /* bool */ ) {
      if (_y_x10508) {
        return sep_by1(p, sep);
      }
      else {
        return $std_core_types.Nil;
      }
    });
  }
  else {
    if (x_11133) {
      return sep_by1(p, sep);
    }
    else {
      return $std_core_types.Nil;
    }
  }
}
 
 
export function _lift_hex_digits_10360(_uniq_slice_10342, _uniq_acc_10344) /* (sslice/sslice, list<char>) -> (list<char>, sslice/sslice) */  { tailcall: while(1)
{
  var _x62 = $std_core_sslice.next(_uniq_slice_10342);
  if (_x62 !== null) {
    if ($std_core_char.is_hex_digit(_x62.value.fst)){
      {
        // tail call
        var _x63 = $std_core_types.Cons(_x62.value.fst, _uniq_acc_10344);
        _uniq_slice_10342 = _x62.value.snd;
        _uniq_acc_10344 = _x63;
        continue tailcall;
      }
    }
  }
  if (_uniq_acc_10344 === null) {
    var _x64 = $std_core_types.Nil;
  }
  else {
    var _x64 = $std_core_list._unroll_reverse_acc_10003($std_core_types.Nil, _uniq_acc_10344);
  }
  return $std_core_types.Tuple2(_x64, _uniq_slice_10342);
}}
 
 
export function _mlift_hex_digits_10601(_y_x10511) /* (maybe<list<char>>) -> parse string */  {
   
  if (_y_x10511 === null) {
     
    var ev_11145 = $std_core_hnd._evv_at(0);
    var _x65 = ev_11145.hnd._brk_fail;
    var x_11143 = _x65(ev_11145.marker, ev_11145, "digit");
  }
  else {
    var x_11143 = _y_x10511.value;
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
  }
  else {
    return $std_core_string.listchar_fs_string(x_11143);
  }
}
 
export function hex_digits() /* () -> parse string */  {
   
  var ev_11151 = $std_core_hnd._evv_at(0);
   
  var _x65 = ev_11151.hnd._fun_satisfy;
  var x_11148 = _x65(ev_11151.marker, ev_11151, function(slice /* sslice/sslice */ ) {
      var _x66 = _lift_hex_digits_10360(slice, $std_core_types.Nil);
      if (_x66.fst === null) {
        return $std_core_types.Nothing;
      }
      else {
        return $std_core_types.Just($std_core_types.Tuple2(_x66.fst, _x66.snd));
      }
    });
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(_mlift_hex_digits_10601);
  }
  else {
     
    if (x_11148 === null) {
       
      var ev_0_11156 = $std_core_hnd._evv_at(0);
      var _x65 = ev_0_11156.hnd._brk_fail;
      var x_1_11154 = _x65(ev_0_11156.marker, ev_0_11156, "digit");
    }
    else {
      var x_1_11154 = x_11148.value;
    }
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend($std_core_string.listchar_fs_string);
    }
    else {
      return $std_core_string.listchar_fs_string(x_1_11154);
    }
  }
}
