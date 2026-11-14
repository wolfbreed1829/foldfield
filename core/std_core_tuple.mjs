// Koka generated module: std/core/tuple, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_hnd from './std_core_hnd.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function tuple2_fs__mlift_map_10253(_y_x10100, _y_x10101) /* forall<a,e> (a, a) -> e (a, a) */  {
  return $std_core_types.Tuple2(_y_x10100, _y_x10101);
}
 
 
export function tuple2_fs__mlift_map_10254(f, t, _y_x10100) /* forall<a,b,e> (f : (a) -> e b, t : (a, a), b) -> e (b, b) */  {
   
  var _x0 = t.snd;
  var x_10315 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10101 /* 537 */ ) {
      return $std_core_types.Tuple2(_y_x10100, _y_x10101);
    });
  }
  else {
    return $std_core_types.Tuple2(_y_x10100, x_10315);
  }
}
 
 
export function tuple2_fs_map(t, f) /* forall<a,b,e> (t : (a, a), f : (a) -> e b) -> e (b, b) */  {
   
  var _x0 = t.fst;
  var x_10319 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10100 /* 537 */ ) {
      return tuple2_fs__mlift_map_10254(f, t, _y_x10100);
    });
  }
  else {
     
    var _x0 = t.snd;
    var x_0_10322 = f(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10101 /* 537 */ ) {
        return $std_core_types.Tuple2(x_10319, _y_x10101);
      });
    }
    else {
      return $std_core_types.Tuple2(x_10319, x_0_10322);
    }
  }
}
 
 
export function tuple3_fs__mlift_map_10255(_y_x10102, _y_x10103, _y_x10104) /* forall<a,e> (a, a, a) -> e (a, a, a) */  {
  return $std_core_types.Tuple3(_y_x10102, _y_x10103, _y_x10104);
}
 
 
export function tuple3_fs__mlift_map_10256(_y_x10102, f, t, _y_x10103) /* forall<a,b,e> (b, f : (a) -> e b, t : (a, a, a), b) -> e (b, b, b) */  {
   
  var _x0 = t.thd;
  var x_10327 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10104 /* 697 */ ) {
      return $std_core_types.Tuple3(_y_x10102, _y_x10103, _y_x10104);
    });
  }
  else {
    return $std_core_types.Tuple3(_y_x10102, _y_x10103, x_10327);
  }
}
 
 
export function tuple3_fs__mlift_map_10257(f, t, _y_x10102) /* forall<a,b,e> (f : (a) -> e b, t : (a, a, a), b) -> e (b, b, b) */  {
   
  var _x0 = t.snd;
  var x_10332 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10103 /* 697 */ ) {
      return tuple3_fs__mlift_map_10256(_y_x10102, f, t, _y_x10103);
    });
  }
  else {
    return tuple3_fs__mlift_map_10256(_y_x10102, f, t, x_10332);
  }
}
 
 
export function tuple3_fs_map(t, f) /* forall<a,b,e> (t : (a, a, a), f : (a) -> e b) -> e (b, b, b) */  {
   
  var _x0 = t.fst;
  var x_10334 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10102 /* 697 */ ) {
      return tuple3_fs__mlift_map_10257(f, t, _y_x10102);
    });
  }
  else {
     
    var _x0 = t.snd;
    var x_0_10337 = f(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10103 /* 697 */ ) {
        return tuple3_fs__mlift_map_10256(x_10334, f, t, _y_x10103);
      });
    }
    else {
       
      var _x0 = t.thd;
      var x_1_10340 = f(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10104 /* 697 */ ) {
          return $std_core_types.Tuple3(x_10334, x_0_10337, _y_x10104);
        });
      }
      else {
        return $std_core_types.Tuple3(x_10334, x_0_10337, x_1_10340);
      }
    }
  }
}
 
 
export function tuple4_fs__mlift_map_10258(_y_x10105, _y_x10106, _y_x10107, _y_x10108) /* forall<a,e> (a, a, a, a) -> e (a, a, a, a) */  {
  return $std_core_types.Tuple4(_y_x10105, _y_x10106, _y_x10107, _y_x10108);
}
 
 
export function tuple4_fs__mlift_map_10259(_y_x10105, _y_x10106, f, t, _y_x10107) /* forall<a,b,e> (b, b, f : (a) -> e b, t : (a, a, a, a), b) -> e (b, b, b, b) */  {
   
  var _x0 = t.field4;
  var x_10346 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10108 /* 903 */ ) {
      return $std_core_types.Tuple4(_y_x10105, _y_x10106, _y_x10107, _y_x10108);
    });
  }
  else {
    return $std_core_types.Tuple4(_y_x10105, _y_x10106, _y_x10107, x_10346);
  }
}
 
 
export function tuple4_fs__mlift_map_10260(_y_x10105, f, t, _y_x10106) /* forall<a,b,e> (b, f : (a) -> e b, t : (a, a, a, a), b) -> e (b, b, b, b) */  {
   
  var _x0 = t.thd;
  var x_10352 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10107 /* 903 */ ) {
      return tuple4_fs__mlift_map_10259(_y_x10105, _y_x10106, f, t, _y_x10107);
    });
  }
  else {
    return tuple4_fs__mlift_map_10259(_y_x10105, _y_x10106, f, t, x_10352);
  }
}
 
 
export function tuple4_fs__mlift_map_10261(f, t, _y_x10105) /* forall<a,b,e> (f : (a) -> e b, t : (a, a, a, a), b) -> e (b, b, b, b) */  {
   
  var _x0 = t.snd;
  var x_10354 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10106 /* 903 */ ) {
      return tuple4_fs__mlift_map_10260(_y_x10105, f, t, _y_x10106);
    });
  }
  else {
    return tuple4_fs__mlift_map_10260(_y_x10105, f, t, x_10354);
  }
}
 
 
export function tuple4_fs_map(t, f) /* forall<a,b,e> (t : (a, a, a, a), f : (a) -> e b) -> e (b, b, b, b) */  {
   
  var _x0 = t.fst;
  var x_10356 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10105 /* 903 */ ) {
      return tuple4_fs__mlift_map_10261(f, t, _y_x10105);
    });
  }
  else {
     
    var _x0 = t.snd;
    var x_0_10359 = f(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10106 /* 903 */ ) {
        return tuple4_fs__mlift_map_10260(x_10356, f, t, _y_x10106);
      });
    }
    else {
       
      var _x0 = t.thd;
      var x_1_10362 = f(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10107 /* 903 */ ) {
          return tuple4_fs__mlift_map_10259(x_10356, x_0_10359, f, t, _y_x10107);
        });
      }
      else {
         
        var _x0 = t.field4;
        var x_2_10365 = f(_x0);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10108 /* 903 */ ) {
            return $std_core_types.Tuple4(x_10356, x_0_10359, x_1_10362, _y_x10108);
          });
        }
        else {
          return $std_core_types.Tuple4(x_10356, x_0_10359, x_1_10362, x_2_10365);
        }
      }
    }
  }
}
 
 
export function tuple5_fs__mlift_map_10262(_y_x10109, _y_x10110, _y_x10111, _y_x10112, _y_x10113) /* forall<a,e> (a, a, a, a, a) -> e (a, a, a, a, a) */  {
  return $std_core_types.Tuple5(_y_x10109, _y_x10110, _y_x10111, _y_x10112, _y_x10113);
}
 
 
export function tuple5_fs__mlift_map_10263(_y_x10109, _y_x10110, _y_x10111, f, t, _y_x10112) /* forall<a,b,e> (b, b, b, f : (a) -> e b, t : (a, a, a, a, a), b) -> e (b, b, b, b, b) */  {
   
  var _x0 = t.field5;
  var x_10372 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10113 /* 1138 */ ) {
      return $std_core_types.Tuple5(_y_x10109, _y_x10110, _y_x10111, _y_x10112, _y_x10113);
    });
  }
  else {
    return $std_core_types.Tuple5(_y_x10109, _y_x10110, _y_x10111, _y_x10112, x_10372);
  }
}
 
 
export function tuple5_fs__mlift_map_10264(_y_x10109, _y_x10110, f, t, _y_x10111) /* forall<a,b,e> (b, b, f : (a) -> e b, t : (a, a, a, a, a), b) -> e (b, b, b, b, b) */  {
   
  var _x0 = t.field4;
  var x_10379 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10112 /* 1138 */ ) {
      return tuple5_fs__mlift_map_10263(_y_x10109, _y_x10110, _y_x10111, f, t, _y_x10112);
    });
  }
  else {
    return tuple5_fs__mlift_map_10263(_y_x10109, _y_x10110, _y_x10111, f, t, x_10379);
  }
}
 
 
export function tuple5_fs__mlift_map_10265(_y_x10109, f, t, _y_x10110) /* forall<a,b,e> (b, f : (a) -> e b, t : (a, a, a, a, a), b) -> e (b, b, b, b, b) */  {
   
  var _x0 = t.thd;
  var x_10381 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10111 /* 1138 */ ) {
      return tuple5_fs__mlift_map_10264(_y_x10109, _y_x10110, f, t, _y_x10111);
    });
  }
  else {
    return tuple5_fs__mlift_map_10264(_y_x10109, _y_x10110, f, t, x_10381);
  }
}
 
 
export function tuple5_fs__mlift_map_10266(f, t, _y_x10109) /* forall<a,b,e> (f : (a) -> e b, t : (a, a, a, a, a), b) -> e (b, b, b, b, b) */  {
   
  var _x0 = t.snd;
  var x_10383 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10110 /* 1138 */ ) {
      return tuple5_fs__mlift_map_10265(_y_x10109, f, t, _y_x10110);
    });
  }
  else {
    return tuple5_fs__mlift_map_10265(_y_x10109, f, t, x_10383);
  }
}
 
 
export function tuple5_fs_map(t, f) /* forall<a,b,e> (t : (a, a, a, a, a), f : (a) -> e b) -> e (b, b, b, b, b) */  {
   
  var _x0 = t.fst;
  var x_10385 = f(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10109 /* 1138 */ ) {
      return tuple5_fs__mlift_map_10266(f, t, _y_x10109);
    });
  }
  else {
     
    var _x0 = t.snd;
    var x_0_10388 = f(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10110 /* 1138 */ ) {
        return tuple5_fs__mlift_map_10265(x_10385, f, t, _y_x10110);
      });
    }
    else {
       
      var _x0 = t.thd;
      var x_1_10391 = f(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10111 /* 1138 */ ) {
          return tuple5_fs__mlift_map_10264(x_10385, x_0_10388, f, t, _y_x10111);
        });
      }
      else {
         
        var _x0 = t.field4;
        var x_2_10394 = f(_x0);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10112 /* 1138 */ ) {
            return tuple5_fs__mlift_map_10263(x_10385, x_0_10388, x_1_10391, f, t, _y_x10112);
          });
        }
        else {
           
          var _x0 = t.field5;
          var x_3_10397 = f(_x0);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10113 /* 1138 */ ) {
              return $std_core_types.Tuple5(x_10385, x_0_10388, x_1_10391, x_2_10394, _y_x10113);
            });
          }
          else {
            return $std_core_types.Tuple5(x_10385, x_0_10388, x_1_10391, x_2_10394, x_3_10397);
          }
        }
      }
    }
  }
}
 
 
export function unit_fs__lp__eq__eq__rp_(a, b) /* (a : (), b : ()) -> bool */  {
  return true;
}
 
 
export function tuple2_fs__lp__at_mlift_x10267_eq__eq__rp_(_implicit_fs_snd_fs__lp__eq__eq__rp_, y1, y2, _y_x10114) /* forall<a,e> (?snd/(==) : (a, a) -> e bool, y1 : a, y2 : a, bool) -> e bool */  {
  if (_y_x10114) {
    return _implicit_fs_snd_fs__lp__eq__eq__rp_(y1, y2);
  }
  else {
    return false;
  }
}
 
 
export function tuple2_fs__lp__eq__eq__rp_(_pat_x36__22, _pat_x36__39, _implicit_fs_fst_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_) /* forall<a,b,e> ((a, b), (a, b), ?fst/(==) : (a, a) -> e bool, ?snd/(==) : (b, b) -> e bool) -> e bool */  {
   
  var x_10405 = _implicit_fs_fst_fs__lp__eq__eq__rp_(_pat_x36__22.fst, _pat_x36__39.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10114 /* bool */ ) {
      if (_y_x10114) {
        return _implicit_fs_snd_fs__lp__eq__eq__rp_(_pat_x36__22.snd, _pat_x36__39.snd);
      }
      else {
        return false;
      }
    });
  }
  else {
    if (x_10405) {
      return _implicit_fs_snd_fs__lp__eq__eq__rp_(_pat_x36__22.snd, _pat_x36__39.snd);
    }
    else {
      return false;
    }
  }
}
 
 
export function tuple3_fs__lp__at_mlift_x10268_eq__eq__rp_(_implicit_fs_thd_fs__lp__eq__eq__rp_, z1, z2, _y_x10120) /* forall<a,e> (?thd/(==) : (a, a) -> e bool, z1 : a, z2 : a, bool) -> e bool */  {
  if (_y_x10120) {
    return _implicit_fs_thd_fs__lp__eq__eq__rp_(z1, z2);
  }
  else {
    return false;
  }
}
 
 
export function tuple3_fs__lp__at_mlift_x10269_eq__eq__rp_(_implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, y1, y2, z1, z2, _y_x10119) /* forall<a,b,e> (?snd/(==) : (a, a) -> e bool, ?thd/(==) : (b, b) -> e bool, y1 : a, y2 : a, z1 : b, z2 : b, bool) -> e bool */  {
  if (_y_x10119) {
     
    var x_10412 = _implicit_fs_snd_fs__lp__eq__eq__rp_(y1, y2);
     
    var next_10413 = function(_y_x10120 /* bool */ ) {
      if (_y_x10120) {
        return _implicit_fs_thd_fs__lp__eq__eq__rp_(z1, z2);
      }
      else {
        return false;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10413);
    }
    else {
      return next_10413(x_10412);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple3_fs__lp__eq__eq__rp_(_pat_x40__22, _pat_x40__44, _implicit_fs_fst_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_) /* forall<a,b,c,e> ((a, b, c), (a, b, c), ?fst/(==) : (a, a) -> e bool, ?snd/(==) : (b, b) -> e bool, ?thd/(==) : (c, c) -> e bool) -> e bool */  {
   
  var x_10418 = _implicit_fs_fst_fs__lp__eq__eq__rp_(_pat_x40__22.fst, _pat_x40__44.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10119 /* bool */ ) {
      return tuple3_fs__lp__at_mlift_x10269_eq__eq__rp_(_implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _pat_x40__22.snd, _pat_x40__44.snd, _pat_x40__22.thd, _pat_x40__44.thd, _y_x10119);
    });
  }
  else {
    if (x_10418) {
       
      var x_0_10421 = _implicit_fs_snd_fs__lp__eq__eq__rp_(_pat_x40__22.snd, _pat_x40__44.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10120 /* bool */ ) {
          if (_y_x10120) {
            return _implicit_fs_thd_fs__lp__eq__eq__rp_(_pat_x40__22.thd, _pat_x40__44.thd);
          }
          else {
            return false;
          }
        });
      }
      else {
        if (x_0_10421) {
          return _implicit_fs_thd_fs__lp__eq__eq__rp_(_pat_x40__22.thd, _pat_x40__44.thd);
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
}
 
 
export function tuple4_fs__lp__at_mlift_x10270_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, w1, w2, _y_x10128) /* forall<a,e> (?field4/(==) : (a, a) -> e bool, w1 : a, w2 : a, bool) -> e bool */  {
  if (_y_x10128) {
    return _implicit_fs_field4_fs__lp__eq__eq__rp_(w1, w2);
  }
  else {
    return false;
  }
}
 
 
export function tuple4_fs__lp__at_mlift_x10271_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, w1, w2, z1, z2, _y_x10127) /* forall<a,b,e> (?field4/(==) : (b, b) -> e bool, ?thd/(==) : (a, a) -> e bool, w1 : b, w2 : b, z1 : a, z2 : a, bool) -> e bool */  {
  if (_y_x10127) {
     
    var x_10428 = _implicit_fs_thd_fs__lp__eq__eq__rp_(z1, z2);
     
    var next_10429 = function(_y_x10128 /* bool */ ) {
      if (_y_x10128) {
        return _implicit_fs_field4_fs__lp__eq__eq__rp_(w1, w2);
      }
      else {
        return false;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10429);
    }
    else {
      return next_10429(x_10428);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple4_fs__lp__at_mlift_x10272_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, w1, w2, y1, y2, z1, z2, _y_x10126) /* forall<a,b,c,e> (?field4/(==) : (c, c) -> e bool, ?snd/(==) : (a, a) -> e bool, ?thd/(==) : (b, b) -> e bool, w1 : c, w2 : c, y1 : a, y2 : a, z1 : b, z2 : b, bool) -> e bool */  {
  if (_y_x10126) {
     
    var x_10434 = _implicit_fs_snd_fs__lp__eq__eq__rp_(y1, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10127 /* bool */ ) {
        return tuple4_fs__lp__at_mlift_x10271_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, w1, w2, z1, z2, _y_x10127);
      });
    }
    else {
      return tuple4_fs__lp__at_mlift_x10271_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, w1, w2, z1, z2, x_10434);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple4_fs__lp__eq__eq__rp_(_pat_x44__22, _pat_x44__49, _implicit_fs_fst_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _implicit_fs_field4_fs__lp__eq__eq__rp_) /* forall<a,b,c,d,e> ((a, b, c, d), (a, b, c, d), ?fst/(==) : (a, a) -> e bool, ?snd/(==) : (b, b) -> e bool, ?thd/(==) : (c, c) -> e bool, ?field4/(==) : (d, d) -> e bool) -> e bool */  {
   
  var x_10436 = _implicit_fs_fst_fs__lp__eq__eq__rp_(_pat_x44__22.fst, _pat_x44__49.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10126 /* bool */ ) {
      return tuple4_fs__lp__at_mlift_x10272_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _pat_x44__22.field4, _pat_x44__49.field4, _pat_x44__22.snd, _pat_x44__49.snd, _pat_x44__22.thd, _pat_x44__49.thd, _y_x10126);
    });
  }
  else {
    if (x_10436) {
       
      var x_0_10439 = _implicit_fs_snd_fs__lp__eq__eq__rp_(_pat_x44__22.snd, _pat_x44__49.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10127 /* bool */ ) {
          return tuple4_fs__lp__at_mlift_x10271_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _pat_x44__22.field4, _pat_x44__49.field4, _pat_x44__22.thd, _pat_x44__49.thd, _y_x10127);
        });
      }
      else {
        if (x_0_10439) {
           
          var x_1_10442 = _implicit_fs_thd_fs__lp__eq__eq__rp_(_pat_x44__22.thd, _pat_x44__49.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10128 /* bool */ ) {
              if (_y_x10128) {
                return _implicit_fs_field4_fs__lp__eq__eq__rp_(_pat_x44__22.field4, _pat_x44__49.field4);
              }
              else {
                return false;
              }
            });
          }
          else {
            if (x_1_10442) {
              return _implicit_fs_field4_fs__lp__eq__eq__rp_(_pat_x44__22.field4, _pat_x44__49.field4);
            }
            else {
              return false;
            }
          }
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
}
 
 
export function tuple5_fs__lp__at_mlift_x10273_eq__eq__rp_(_implicit_fs_field5_fs__lp__eq__eq__rp_, v1, v2, _y_x10138) /* forall<e,a> (?field5/(==) : (a, a) -> e bool, v1 : a, v2 : a, bool) -> e bool */  {
  if (_y_x10138) {
    return _implicit_fs_field5_fs__lp__eq__eq__rp_(v1, v2);
  }
  else {
    return false;
  }
}
 
 
export function tuple5_fs__lp__at_mlift_x10274_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, v1, v2, w1, w2, _y_x10137) /* forall<a,e,b> (?field4/(==) : (a, a) -> e bool, ?field5/(==) : (b, b) -> e bool, v1 : b, v2 : b, w1 : a, w2 : a, bool) -> e bool */  {
  if (_y_x10137) {
     
    var x_10449 = _implicit_fs_field4_fs__lp__eq__eq__rp_(w1, w2);
     
    var next_10450 = function(_y_x10138 /* bool */ ) {
      if (_y_x10138) {
        return _implicit_fs_field5_fs__lp__eq__eq__rp_(v1, v2);
      }
      else {
        return false;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10450);
    }
    else {
      return next_10450(x_10449);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple5_fs__lp__at_mlift_x10275_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, v1, v2, w1, w2, z1, z2, _y_x10136) /* forall<a,b,e,c> (?field4/(==) : (b, b) -> e bool, ?field5/(==) : (c, c) -> e bool, ?thd/(==) : (a, a) -> e bool, v1 : c, v2 : c, w1 : b, w2 : b, z1 : a, z2 : a, bool) -> e bool */  {
  if (_y_x10136) {
     
    var x_10455 = _implicit_fs_thd_fs__lp__eq__eq__rp_(z1, z2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10137 /* bool */ ) {
        return tuple5_fs__lp__at_mlift_x10274_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, v1, v2, w1, w2, _y_x10137);
      });
    }
    else {
      return tuple5_fs__lp__at_mlift_x10274_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, v1, v2, w1, w2, x_10455);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple5_fs__lp__at_mlift_x10276_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, v1, v2, w1, w2, y1, y2, z1, z2, _y_x10135) /* forall<a,b,c,e,d> (?field4/(==) : (c, c) -> e bool, ?field5/(==) : (d, d) -> e bool, ?snd/(==) : (a, a) -> e bool, ?thd/(==) : (b, b) -> e bool, v1 : d, v2 : d, w1 : c, w2 : c, y1 : a, y2 : a, z1 : b, z2 : b, bool) -> e bool */  {
  if (_y_x10135) {
     
    var x_10457 = _implicit_fs_snd_fs__lp__eq__eq__rp_(y1, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10136 /* bool */ ) {
        return tuple5_fs__lp__at_mlift_x10275_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, v1, v2, w1, w2, z1, z2, _y_x10136);
      });
    }
    else {
      return tuple5_fs__lp__at_mlift_x10275_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, v1, v2, w1, w2, z1, z2, x_10457);
    }
  }
  else {
    return false;
  }
}
 
 
export function tuple5_fs__lp__eq__eq__rp_(_pat_x50__22, _pat_x50__54, _implicit_fs_fst_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_) /* forall<a,b,c,d,e,a1> ((a, b, c, d, a1), (a, b, c, d, a1), ?fst/(==) : (a, a) -> e bool, ?snd/(==) : (b, b) -> e bool, ?thd/(==) : (c, c) -> e bool, ?field4/(==) : (d, d) -> e bool, ?field5/(==) : (a1, a1) -> e bool) -> e bool */  {
   
  var x_10459 = _implicit_fs_fst_fs__lp__eq__eq__rp_(_pat_x50__22.fst, _pat_x50__54.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10135 /* bool */ ) {
      return tuple5_fs__lp__at_mlift_x10276_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_snd_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _pat_x50__22.field5, _pat_x50__54.field5, _pat_x50__22.field4, _pat_x50__54.field4, _pat_x50__22.snd, _pat_x50__54.snd, _pat_x50__22.thd, _pat_x50__54.thd, _y_x10135);
    });
  }
  else {
    if (x_10459) {
       
      var x_0_10462 = _implicit_fs_snd_fs__lp__eq__eq__rp_(_pat_x50__22.snd, _pat_x50__54.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10136 /* bool */ ) {
          return tuple5_fs__lp__at_mlift_x10275_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _implicit_fs_thd_fs__lp__eq__eq__rp_, _pat_x50__22.field5, _pat_x50__54.field5, _pat_x50__22.field4, _pat_x50__54.field4, _pat_x50__22.thd, _pat_x50__54.thd, _y_x10136);
        });
      }
      else {
        if (x_0_10462) {
           
          var x_1_10465 = _implicit_fs_thd_fs__lp__eq__eq__rp_(_pat_x50__22.thd, _pat_x50__54.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10137 /* bool */ ) {
              return tuple5_fs__lp__at_mlift_x10274_eq__eq__rp_(_implicit_fs_field4_fs__lp__eq__eq__rp_, _implicit_fs_field5_fs__lp__eq__eq__rp_, _pat_x50__22.field5, _pat_x50__54.field5, _pat_x50__22.field4, _pat_x50__54.field4, _y_x10137);
            });
          }
          else {
            if (x_1_10465) {
               
              var x_2_10468 = _implicit_fs_field4_fs__lp__eq__eq__rp_(_pat_x50__22.field4, _pat_x50__54.field4);
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_y_x10138 /* bool */ ) {
                  if (_y_x10138) {
                    return _implicit_fs_field5_fs__lp__eq__eq__rp_(_pat_x50__22.field5, _pat_x50__54.field5);
                  }
                  else {
                    return false;
                  }
                });
              }
              else {
                if (x_2_10468) {
                  return _implicit_fs_field5_fs__lp__eq__eq__rp_(_pat_x50__22.field5, _pat_x50__54.field5);
                }
                else {
                  return false;
                }
              }
            }
            else {
              return false;
            }
          }
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }
}
 
 
export function unit_fs_cmp(a, b) /* (a : (), b : ()) -> order */  {
  return $std_core_types.Eq;
}
 
 
export function tuple2_fs__mlift_cmp_10277(_implicit_fs_snd_fs_cmp, y1, y2, _y_x10146) /* forall<a,e> (?snd/cmp : (a, a) -> e order, y1 : a, y2 : a, order) -> e order */  {
  if (_y_x10146 === 2) {
    return _implicit_fs_snd_fs_cmp(y1, y2);
  }
  else {
    return _y_x10146;
  }
}
 
 
export function tuple2_fs_cmp(_pat_x60__21, _pat_x60__38, _implicit_fs_fst_fs_cmp, _implicit_fs_snd_fs_cmp) /* forall<a,b,e> ((a, b), (a, b), ?fst/cmp : (a, a) -> e order, ?snd/cmp : (b, b) -> e order) -> e order */  {
   
  var x_10475 = _implicit_fs_fst_fs_cmp(_pat_x60__21.fst, _pat_x60__38.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10146 /* order */ ) {
      if (_y_x10146 === 2) {
        return _implicit_fs_snd_fs_cmp(_pat_x60__21.snd, _pat_x60__38.snd);
      }
      else {
        return _y_x10146;
      }
    });
  }
  else {
    if (x_10475 === 2) {
      return _implicit_fs_snd_fs_cmp(_pat_x60__21.snd, _pat_x60__38.snd);
    }
    else {
      return x_10475;
    }
  }
}
 
 
export function tuple3_fs__mlift_cmp_10278(_implicit_fs_thd_fs_cmp, z1, z2, _y_x10152) /* forall<a,e> (?thd/cmp : (a, a) -> e order, z1 : a, z2 : a, order) -> e order */  {
  if (_y_x10152 === 2) {
    return _implicit_fs_thd_fs_cmp(z1, z2);
  }
  else {
    return _y_x10152;
  }
}
 
 
export function tuple3_fs__mlift_cmp_10279(_implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, y1, y2, z1, z2, _y_x10151) /* forall<a,b,e> (?snd/cmp : (a, a) -> e order, ?thd/cmp : (b, b) -> e order, y1 : a, y2 : a, z1 : b, z2 : b, order) -> e order */  {
  if (_y_x10151 === 2) {
     
    var x_10482 = _implicit_fs_snd_fs_cmp(y1, y2);
     
    var next_10483 = function(_y_x10152 /* order */ ) {
      if (_y_x10152 === 2) {
        return _implicit_fs_thd_fs_cmp(z1, z2);
      }
      else {
        return _y_x10152;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10483);
    }
    else {
      return next_10483(x_10482);
    }
  }
  else {
    return _y_x10151;
  }
}
 
 
export function tuple3_fs_cmp(_pat_x66__26, _pat_x66__48, _implicit_fs_fst_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp) /* forall<a,b,c,e> ((a, b, c), (a, b, c), ?fst/cmp : (a, a) -> e order, ?snd/cmp : (b, b) -> e order, ?thd/cmp : (c, c) -> e order) -> e order */  {
   
  var x_10488 = _implicit_fs_fst_fs_cmp(_pat_x66__26.fst, _pat_x66__48.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10151 /* order */ ) {
      return tuple3_fs__mlift_cmp_10279(_implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, _pat_x66__26.snd, _pat_x66__48.snd, _pat_x66__26.thd, _pat_x66__48.thd, _y_x10151);
    });
  }
  else {
    if (x_10488 === 2) {
       
      var x_0_10491 = _implicit_fs_snd_fs_cmp(_pat_x66__26.snd, _pat_x66__48.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10152 /* order */ ) {
          if (_y_x10152 === 2) {
            return _implicit_fs_thd_fs_cmp(_pat_x66__26.thd, _pat_x66__48.thd);
          }
          else {
            return _y_x10152;
          }
        });
      }
      else {
        if (x_0_10491 === 2) {
          return _implicit_fs_thd_fs_cmp(_pat_x66__26.thd, _pat_x66__48.thd);
        }
        else {
          return x_0_10491;
        }
      }
    }
    else {
      return x_10488;
    }
  }
}
 
 
export function tuple4_fs__mlift_cmp_10280(_implicit_fs_field4_fs_cmp, w1, w2, _y_x10160) /* forall<a,e> (?field4/cmp : (a, a) -> e order, w1 : a, w2 : a, order) -> e order */  {
  if (_y_x10160 === 2) {
    return _implicit_fs_field4_fs_cmp(w1, w2);
  }
  else {
    return _y_x10160;
  }
}
 
 
export function tuple4_fs__mlift_cmp_10281(_implicit_fs_field4_fs_cmp, _implicit_fs_thd_fs_cmp, w1, w2, z1, z2, _y_x10159) /* forall<a,b,e> (?field4/cmp : (b, b) -> e order, ?thd/cmp : (a, a) -> e order, w1 : b, w2 : b, z1 : a, z2 : a, order) -> e order */  {
  if (_y_x10159 === 2) {
     
    var x_10498 = _implicit_fs_thd_fs_cmp(z1, z2);
     
    var next_10499 = function(_y_x10160 /* order */ ) {
      if (_y_x10160 === 2) {
        return _implicit_fs_field4_fs_cmp(w1, w2);
      }
      else {
        return _y_x10160;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10499);
    }
    else {
      return next_10499(x_10498);
    }
  }
  else {
    return _y_x10159;
  }
}
 
 
export function tuple4_fs__mlift_cmp_10282(_implicit_fs_field4_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, w1, w2, y1, y2, z1, z2, _y_x10158) /* forall<a,b,c,e> (?field4/cmp : (c, c) -> e order, ?snd/cmp : (a, a) -> e order, ?thd/cmp : (b, b) -> e order, w1 : c, w2 : c, y1 : a, y2 : a, z1 : b, z2 : b, order) -> e order */  {
  if (_y_x10158 === 2) {
     
    var x_10504 = _implicit_fs_snd_fs_cmp(y1, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10159 /* order */ ) {
        return tuple4_fs__mlift_cmp_10281(_implicit_fs_field4_fs_cmp, _implicit_fs_thd_fs_cmp, w1, w2, z1, z2, _y_x10159);
      });
    }
    else {
      return tuple4_fs__mlift_cmp_10281(_implicit_fs_field4_fs_cmp, _implicit_fs_thd_fs_cmp, w1, w2, z1, z2, x_10504);
    }
  }
  else {
    return _y_x10158;
  }
}
 
 
export function tuple4_fs_cmp(_pat_x74__26, _pat_x74__53, _implicit_fs_fst_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, _implicit_fs_field4_fs_cmp) /* forall<a,b,c,d,e> ((a, b, c, d), (a, b, c, d), ?fst/cmp : (a, a) -> e order, ?snd/cmp : (b, b) -> e order, ?thd/cmp : (c, c) -> e order, ?field4/cmp : (d, d) -> e order) -> e order */  {
   
  var x_10506 = _implicit_fs_fst_fs_cmp(_pat_x74__26.fst, _pat_x74__53.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10158 /* order */ ) {
      return tuple4_fs__mlift_cmp_10282(_implicit_fs_field4_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, _pat_x74__26.field4, _pat_x74__53.field4, _pat_x74__26.snd, _pat_x74__53.snd, _pat_x74__26.thd, _pat_x74__53.thd, _y_x10158);
    });
  }
  else {
    if (x_10506 === 2) {
       
      var x_0_10509 = _implicit_fs_snd_fs_cmp(_pat_x74__26.snd, _pat_x74__53.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10159 /* order */ ) {
          return tuple4_fs__mlift_cmp_10281(_implicit_fs_field4_fs_cmp, _implicit_fs_thd_fs_cmp, _pat_x74__26.field4, _pat_x74__53.field4, _pat_x74__26.thd, _pat_x74__53.thd, _y_x10159);
        });
      }
      else {
        if (x_0_10509 === 2) {
           
          var x_1_10512 = _implicit_fs_thd_fs_cmp(_pat_x74__26.thd, _pat_x74__53.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10160 /* order */ ) {
              if (_y_x10160 === 2) {
                return _implicit_fs_field4_fs_cmp(_pat_x74__26.field4, _pat_x74__53.field4);
              }
              else {
                return _y_x10160;
              }
            });
          }
          else {
            if (x_1_10512 === 2) {
              return _implicit_fs_field4_fs_cmp(_pat_x74__26.field4, _pat_x74__53.field4);
            }
            else {
              return x_1_10512;
            }
          }
        }
        else {
          return x_0_10509;
        }
      }
    }
    else {
      return x_10506;
    }
  }
}
 
 
export function tuple5_fs__mlift_cmp_10283(_implicit_fs_field5_fs_cmp, v1, v2, _y_x10170) /* forall<e,a> (?field5/cmp : (a, a) -> e order, v1 : a, v2 : a, order) -> e order */  {
  if (_y_x10170 === 2) {
    return _implicit_fs_field5_fs_cmp(v1, v2);
  }
  else {
    return _y_x10170;
  }
}
 
 
export function tuple5_fs__mlift_cmp_10284(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, v1, v2, w1, w2, _y_x10169) /* forall<a,e,b> (?field4/cmp : (a, a) -> e order, ?field5/cmp : (b, b) -> e order, v1 : b, v2 : b, w1 : a, w2 : a, order) -> e order */  {
  if (_y_x10169 === 2) {
     
    var x_10519 = _implicit_fs_field4_fs_cmp(w1, w2);
     
    var next_10520 = function(_y_x10170 /* order */ ) {
      if (_y_x10170 === 2) {
        return _implicit_fs_field5_fs_cmp(v1, v2);
      }
      else {
        return _y_x10170;
      }
    };
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(next_10520);
    }
    else {
      return next_10520(x_10519);
    }
  }
  else {
    return _y_x10169;
  }
}
 
 
export function tuple5_fs__mlift_cmp_10285(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_thd_fs_cmp, v1, v2, w1, w2, z1, z2, _y_x10168) /* forall<a,b,e,c> (?field4/cmp : (b, b) -> e order, ?field5/cmp : (c, c) -> e order, ?thd/cmp : (a, a) -> e order, v1 : c, v2 : c, w1 : b, w2 : b, z1 : a, z2 : a, order) -> e order */  {
  if (_y_x10168 === 2) {
     
    var x_10525 = _implicit_fs_thd_fs_cmp(z1, z2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10169 /* order */ ) {
        return tuple5_fs__mlift_cmp_10284(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, v1, v2, w1, w2, _y_x10169);
      });
    }
    else {
      return tuple5_fs__mlift_cmp_10284(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, v1, v2, w1, w2, x_10525);
    }
  }
  else {
    return _y_x10168;
  }
}
 
 
export function tuple5_fs__mlift_cmp_10286(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, v1, v2, w1, w2, y1, y2, z1, z2, _y_x10167) /* forall<a,b,c,e,d> (?field4/cmp : (c, c) -> e order, ?field5/cmp : (d, d) -> e order, ?snd/cmp : (a, a) -> e order, ?thd/cmp : (b, b) -> e order, v1 : d, v2 : d, w1 : c, w2 : c, y1 : a, y2 : a, z1 : b, z2 : b, order) -> e order */  {
  if (_y_x10167 === 2) {
     
    var x_10527 = _implicit_fs_snd_fs_cmp(y1, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10168 /* order */ ) {
        return tuple5_fs__mlift_cmp_10285(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_thd_fs_cmp, v1, v2, w1, w2, z1, z2, _y_x10168);
      });
    }
    else {
      return tuple5_fs__mlift_cmp_10285(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_thd_fs_cmp, v1, v2, w1, w2, z1, z2, x_10527);
    }
  }
  else {
    return _y_x10167;
  }
}
 
 
export function tuple5_fs_cmp(_pat_x86__26, _pat_x86__58, _implicit_fs_fst_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, _implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp) /* forall<a,b,c,d,e,a1> ((a, b, c, d, a1), (a, b, c, d, a1), ?fst/cmp : (a, a) -> e order, ?snd/cmp : (b, b) -> e order, ?thd/cmp : (c, c) -> e order, ?field4/cmp : (d, d) -> e order, ?field5/cmp : (a1, a1) -> e order) -> e order */  {
   
  var x_10529 = _implicit_fs_fst_fs_cmp(_pat_x86__26.fst, _pat_x86__58.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10167 /* order */ ) {
      return tuple5_fs__mlift_cmp_10286(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_snd_fs_cmp, _implicit_fs_thd_fs_cmp, _pat_x86__26.field5, _pat_x86__58.field5, _pat_x86__26.field4, _pat_x86__58.field4, _pat_x86__26.snd, _pat_x86__58.snd, _pat_x86__26.thd, _pat_x86__58.thd, _y_x10167);
    });
  }
  else {
    if (x_10529 === 2) {
       
      var x_0_10532 = _implicit_fs_snd_fs_cmp(_pat_x86__26.snd, _pat_x86__58.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10168 /* order */ ) {
          return tuple5_fs__mlift_cmp_10285(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _implicit_fs_thd_fs_cmp, _pat_x86__26.field5, _pat_x86__58.field5, _pat_x86__26.field4, _pat_x86__58.field4, _pat_x86__26.thd, _pat_x86__58.thd, _y_x10168);
        });
      }
      else {
        if (x_0_10532 === 2) {
           
          var x_1_10535 = _implicit_fs_thd_fs_cmp(_pat_x86__26.thd, _pat_x86__58.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10169 /* order */ ) {
              return tuple5_fs__mlift_cmp_10284(_implicit_fs_field4_fs_cmp, _implicit_fs_field5_fs_cmp, _pat_x86__26.field5, _pat_x86__58.field5, _pat_x86__26.field4, _pat_x86__58.field4, _y_x10169);
            });
          }
          else {
            if (x_1_10535 === 2) {
               
              var x_2_10538 = _implicit_fs_field4_fs_cmp(_pat_x86__26.field4, _pat_x86__58.field4);
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_y_x10170 /* order */ ) {
                  if (_y_x10170 === 2) {
                    return _implicit_fs_field5_fs_cmp(_pat_x86__26.field5, _pat_x86__58.field5);
                  }
                  else {
                    return _y_x10170;
                  }
                });
              }
              else {
                if (x_2_10538 === 2) {
                  return _implicit_fs_field5_fs_cmp(_pat_x86__26.field5, _pat_x86__58.field5);
                }
                else {
                  return x_2_10538;
                }
              }
            }
            else {
              return x_1_10535;
            }
          }
        }
        else {
          return x_0_10532;
        }
      }
    }
    else {
      return x_10529;
    }
  }
}
 
 
export function unit_fs_order2(a, b) /* (a : (), b : ()) -> order2<()> */  {
  return $std_core_types.Eq2(a);
}
 
 
export function tuple2_fs__mlift_order2_10287(z1, _y_x10179) /* forall<a,b,e> (z1 : a, order2<b>) -> e order2<(a, b)> */  {
  if (_y_x10179._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Tuple2(z1, _y_x10179.eq));
  }
  else if (_y_x10179._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple2(z1, _y_x10179.lt), $std_core_types.Tuple2(z1, _y_x10179.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple2(z1, _y_x10179.lt), $std_core_types.Tuple2(z1, _y_x10179.gt));
  }
}
 
 
export function tuple2_fs__mlift_order2_10288(_implicit_fs_b_fs_order2, x2, y2, _y_x10178) /* forall<a,b,e> (?b/order2 : (b, b) -> e order2<b>, x2 : b, y2 : b, order2<a>) -> e order2<(a, b)> */  {
  if (_y_x10178._tag === 2) {
     
    var x_10545 = _implicit_fs_b_fs_order2(x2, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10179 /* order2<2698> */ ) {
        return tuple2_fs__mlift_order2_10287(_y_x10178.eq, _y_x10179);
      });
    }
    else {
      return tuple2_fs__mlift_order2_10287(_y_x10178.eq, x_10545);
    }
  }
  else if (_y_x10178._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple2(_y_x10178.lt, x2), $std_core_types.Tuple2(_y_x10178.gt, y2));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple2(_y_x10178.lt, y2), $std_core_types.Tuple2(_y_x10178.gt, x2));
  }
}
 
 
export function tuple2_fs_order2(_pat_x104__24, _pat_x104__42, _implicit_fs_a_fs_order2, _implicit_fs_b_fs_order2) /* forall<a,b,e> ((a, b), (a, b), ?a/order2 : (a, a) -> e order2<a>, ?b/order2 : (b, b) -> e order2<b>) -> e order2<(a, b)> */  {
   
  var x_10547 = _implicit_fs_a_fs_order2(_pat_x104__24.fst, _pat_x104__42.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10178 /* order2<2697> */ ) {
      return tuple2_fs__mlift_order2_10288(_implicit_fs_b_fs_order2, _pat_x104__24.snd, _pat_x104__42.snd, _y_x10178);
    });
  }
  else {
    if (x_10547._tag === 2) {
       
      var x_0_10550 = _implicit_fs_b_fs_order2(_pat_x104__24.snd, _pat_x104__42.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10179 /* order2<2698> */ ) {
          return tuple2_fs__mlift_order2_10287(x_10547.eq, _y_x10179);
        });
      }
      else {
        if (x_0_10550._tag === 2) {
          return $std_core_types.Eq2($std_core_types.Tuple2(x_10547.eq, x_0_10550.eq));
        }
        else if (x_0_10550._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Tuple2(x_10547.eq, x_0_10550.lt), $std_core_types.Tuple2(x_10547.eq, x_0_10550.gt));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Tuple2(x_10547.eq, x_0_10550.lt), $std_core_types.Tuple2(x_10547.eq, x_0_10550.gt));
        }
      }
    }
    else if (x_10547._tag === 1) {
      return $std_core_types.Lt2($std_core_types.Tuple2(x_10547.lt, _pat_x104__24.snd), $std_core_types.Tuple2(x_10547.gt, _pat_x104__42.snd));
    }
    else {
      return $std_core_types.Gt2($std_core_types.Tuple2(x_10547.lt, _pat_x104__42.snd), $std_core_types.Tuple2(x_10547.gt, _pat_x104__24.snd));
    }
  }
}
 
 
export function tuple3_fs__mlift_order2_10289(z1, z2, _y_x10185) /* forall<a,b,c,e> (z1 : a, z2 : b, order2<c>) -> e order2<(a, b, c)> */  {
  if (_y_x10185._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Tuple3(z1, z2, _y_x10185.eq));
  }
  else if (_y_x10185._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple3(z1, z2, _y_x10185.lt), $std_core_types.Tuple3(z1, z2, _y_x10185.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple3(z1, z2, _y_x10185.lt), $std_core_types.Tuple3(z1, z2, _y_x10185.gt));
  }
}
 
 
export function tuple3_fs__mlift_order2_10290(_implicit_fs_c_fs_order2, x3, y3, z1, _y_x10184) /* forall<a,b,c,e> (?c/order2 : (c, c) -> e order2<c>, x3 : c, y3 : c, z1 : a, order2<b>) -> e order2<(a, b, c)> */  {
  if (_y_x10184._tag === 2) {
     
    var x_10553 = _implicit_fs_c_fs_order2(x3, y3);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10185 /* order2<3162> */ ) {
        return tuple3_fs__mlift_order2_10289(z1, _y_x10184.eq, _y_x10185);
      });
    }
    else {
      return tuple3_fs__mlift_order2_10289(z1, _y_x10184.eq, x_10553);
    }
  }
  else if (_y_x10184._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple3(z1, _y_x10184.lt, x3), $std_core_types.Tuple3(z1, _y_x10184.gt, y3));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple3(z1, _y_x10184.lt, y3), $std_core_types.Tuple3(z1, _y_x10184.gt, x3));
  }
}
 
 
export function tuple3_fs__mlift_order2_10291(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, x2, x3, y2, y3, _y_x10183) /* forall<a,b,c,e> (?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>, x2 : b, x3 : c, y2 : b, y3 : c, order2<a>) -> e order2<(a, b, c)> */  {
  if (_y_x10183._tag === 2) {
     
    var x_10555 = _implicit_fs_b_fs_order2(x2, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10184 /* order2<3161> */ ) {
        return tuple3_fs__mlift_order2_10290(_implicit_fs_c_fs_order2, x3, y3, _y_x10183.eq, _y_x10184);
      });
    }
    else {
      return tuple3_fs__mlift_order2_10290(_implicit_fs_c_fs_order2, x3, y3, _y_x10183.eq, x_10555);
    }
  }
  else if (_y_x10183._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple3(_y_x10183.lt, x2, x3), $std_core_types.Tuple3(_y_x10183.gt, y2, y3));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple3(_y_x10183.lt, y2, y3), $std_core_types.Tuple3(_y_x10183.gt, x2, x3));
  }
}
 
 
export function tuple3_fs_order2(_pat_x115__24, _pat_x115__49, _implicit_fs_a_fs_order2, _implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2) /* forall<a,b,c,e> ((a, b, c), (a, b, c), ?a/order2 : (a, a) -> e order2<a>, ?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>) -> e order2<(a, b, c)> */  {
   
  var x_10557 = _implicit_fs_a_fs_order2(_pat_x115__24.fst, _pat_x115__49.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10183 /* order2<3160> */ ) {
      return tuple3_fs__mlift_order2_10291(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _pat_x115__24.snd, _pat_x115__24.thd, _pat_x115__49.snd, _pat_x115__49.thd, _y_x10183);
    });
  }
  else {
    if (x_10557._tag === 2) {
       
      var x_0_10560 = _implicit_fs_b_fs_order2(_pat_x115__24.snd, _pat_x115__49.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10184 /* order2<3161> */ ) {
          return tuple3_fs__mlift_order2_10290(_implicit_fs_c_fs_order2, _pat_x115__24.thd, _pat_x115__49.thd, x_10557.eq, _y_x10184);
        });
      }
      else {
        if (x_0_10560._tag === 2) {
           
          var x_1_10563 = _implicit_fs_c_fs_order2(_pat_x115__24.thd, _pat_x115__49.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10185 /* order2<3162> */ ) {
              return tuple3_fs__mlift_order2_10289(x_10557.eq, x_0_10560.eq, _y_x10185);
            });
          }
          else {
            if (x_1_10563._tag === 2) {
              return $std_core_types.Eq2($std_core_types.Tuple3(x_10557.eq, x_0_10560.eq, x_1_10563.eq));
            }
            else if (x_1_10563._tag === 1) {
              return $std_core_types.Lt2($std_core_types.Tuple3(x_10557.eq, x_0_10560.eq, x_1_10563.lt), $std_core_types.Tuple3(x_10557.eq, x_0_10560.eq, x_1_10563.gt));
            }
            else {
              return $std_core_types.Gt2($std_core_types.Tuple3(x_10557.eq, x_0_10560.eq, x_1_10563.lt), $std_core_types.Tuple3(x_10557.eq, x_0_10560.eq, x_1_10563.gt));
            }
          }
        }
        else if (x_0_10560._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Tuple3(x_10557.eq, x_0_10560.lt, _pat_x115__24.thd), $std_core_types.Tuple3(x_10557.eq, x_0_10560.gt, _pat_x115__49.thd));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Tuple3(x_10557.eq, x_0_10560.lt, _pat_x115__49.thd), $std_core_types.Tuple3(x_10557.eq, x_0_10560.gt, _pat_x115__24.thd));
        }
      }
    }
    else if (x_10557._tag === 1) {
      return $std_core_types.Lt2($std_core_types.Tuple3(x_10557.lt, _pat_x115__24.snd, _pat_x115__24.thd), $std_core_types.Tuple3(x_10557.gt, _pat_x115__49.snd, _pat_x115__49.thd));
    }
    else {
      return $std_core_types.Gt2($std_core_types.Tuple3(x_10557.lt, _pat_x115__49.snd, _pat_x115__49.thd), $std_core_types.Tuple3(x_10557.gt, _pat_x115__24.snd, _pat_x115__24.thd));
    }
  }
}
 
 
export function tuple4_fs__mlift_order2_10292(z1, z2, z3, _y_x10193) /* forall<a,b,c,d,e> (z1 : a, z2 : b, z3 : c, order2<d>) -> e order2<(a, b, c, d)> */  {
  if (_y_x10193._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Tuple4(z1, z2, z3, _y_x10193.eq));
  }
  else if (_y_x10193._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple4(z1, z2, z3, _y_x10193.lt), $std_core_types.Tuple4(z1, z2, z3, _y_x10193.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple4(z1, z2, z3, _y_x10193.lt), $std_core_types.Tuple4(z1, z2, z3, _y_x10193.gt));
  }
}
 
 
export function tuple4_fs__mlift_order2_10293(_implicit_fs_field4_fs_order2, x4, y4, z1, z2, _y_x10192) /* forall<a,b,c,d,e> (?field4/order2 : (d, d) -> e order2<d>, x4 : d, y4 : d, z1 : a, z2 : b, order2<c>) -> e order2<(a, b, c, d)> */  {
  if (_y_x10192._tag === 2) {
     
    var x_10566 = _implicit_fs_field4_fs_order2(x4, y4);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10193 /* order2<3836> */ ) {
        return tuple4_fs__mlift_order2_10292(z1, z2, _y_x10192.eq, _y_x10193);
      });
    }
    else {
      return tuple4_fs__mlift_order2_10292(z1, z2, _y_x10192.eq, x_10566);
    }
  }
  else if (_y_x10192._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple4(z1, z2, _y_x10192.lt, x4), $std_core_types.Tuple4(z1, z2, _y_x10192.gt, y4));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple4(z1, z2, _y_x10192.lt, y4), $std_core_types.Tuple4(z1, z2, _y_x10192.gt, x4));
  }
}
 
 
export function tuple4_fs__mlift_order2_10294(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, x3, x4, y3, y4, z1, _y_x10191) /* forall<a,b,c,d,e> (?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>, x3 : c, x4 : d, y3 : c, y4 : d, z1 : a, order2<b>) -> e order2<(a, b, c, d)> */  {
  if (_y_x10191._tag === 2) {
     
    var x_10568 = _implicit_fs_c_fs_order2(x3, y3);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10192 /* order2<3835> */ ) {
        return tuple4_fs__mlift_order2_10293(_implicit_fs_field4_fs_order2, x4, y4, z1, _y_x10191.eq, _y_x10192);
      });
    }
    else {
      return tuple4_fs__mlift_order2_10293(_implicit_fs_field4_fs_order2, x4, y4, z1, _y_x10191.eq, x_10568);
    }
  }
  else if (_y_x10191._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple4(z1, _y_x10191.lt, x3, x4), $std_core_types.Tuple4(z1, _y_x10191.gt, y3, y4));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple4(z1, _y_x10191.lt, y3, y4), $std_core_types.Tuple4(z1, _y_x10191.gt, x3, x4));
  }
}
 
 
export function tuple4_fs__mlift_order2_10295(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, x2, x3, x4, y2, y3, y4, _y_x10190) /* forall<a,b,c,d,e> (?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>, x2 : b, x3 : c, x4 : d, y2 : b, y3 : c, y4 : d, order2<a>) -> e order2<(a, b, c, d)> */  {
  if (_y_x10190._tag === 2) {
     
    var x_10570 = _implicit_fs_b_fs_order2(x2, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10191 /* order2<3834> */ ) {
        return tuple4_fs__mlift_order2_10294(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, x3, x4, y3, y4, _y_x10190.eq, _y_x10191);
      });
    }
    else {
      return tuple4_fs__mlift_order2_10294(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, x3, x4, y3, y4, _y_x10190.eq, x_10570);
    }
  }
  else if (_y_x10190._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple4(_y_x10190.lt, x2, x3, x4), $std_core_types.Tuple4(_y_x10190.gt, y2, y3, y4));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple4(_y_x10190.lt, y2, y3, y4), $std_core_types.Tuple4(_y_x10190.gt, x2, x3, x4));
  }
}
 
 
export function tuple4_fs_order2(_pat_x130__24, _pat_x130__56, _implicit_fs_a_fs_order2, _implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2) /* forall<a,b,c,d,e> ((a, b, c, d), (a, b, c, d), ?a/order2 : (a, a) -> e order2<a>, ?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>) -> e order2<(a, b, c, d)> */  {
   
  var x_10572 = _implicit_fs_a_fs_order2(_pat_x130__24.fst, _pat_x130__56.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10190 /* order2<3833> */ ) {
      return tuple4_fs__mlift_order2_10295(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _pat_x130__24.snd, _pat_x130__24.thd, _pat_x130__24.field4, _pat_x130__56.snd, _pat_x130__56.thd, _pat_x130__56.field4, _y_x10190);
    });
  }
  else {
    if (x_10572._tag === 2) {
       
      var x_0_10575 = _implicit_fs_b_fs_order2(_pat_x130__24.snd, _pat_x130__56.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10191 /* order2<3834> */ ) {
          return tuple4_fs__mlift_order2_10294(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _pat_x130__24.thd, _pat_x130__24.field4, _pat_x130__56.thd, _pat_x130__56.field4, x_10572.eq, _y_x10191);
        });
      }
      else {
        if (x_0_10575._tag === 2) {
           
          var x_1_10578 = _implicit_fs_c_fs_order2(_pat_x130__24.thd, _pat_x130__56.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10192 /* order2<3835> */ ) {
              return tuple4_fs__mlift_order2_10293(_implicit_fs_field4_fs_order2, _pat_x130__24.field4, _pat_x130__56.field4, x_10572.eq, x_0_10575.eq, _y_x10192);
            });
          }
          else {
            if (x_1_10578._tag === 2) {
               
              var x_2_10581 = _implicit_fs_field4_fs_order2(_pat_x130__24.field4, _pat_x130__56.field4);
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_y_x10193 /* order2<3836> */ ) {
                  return tuple4_fs__mlift_order2_10292(x_10572.eq, x_0_10575.eq, x_1_10578.eq, _y_x10193);
                });
              }
              else {
                if (x_2_10581._tag === 2) {
                  return $std_core_types.Eq2($std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.eq, x_2_10581.eq));
                }
                else if (x_2_10581._tag === 1) {
                  return $std_core_types.Lt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.eq, x_2_10581.lt), $std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.eq, x_2_10581.gt));
                }
                else {
                  return $std_core_types.Gt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.eq, x_2_10581.lt), $std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.eq, x_2_10581.gt));
                }
              }
            }
            else if (x_1_10578._tag === 1) {
              return $std_core_types.Lt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.lt, _pat_x130__24.field4), $std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.gt, _pat_x130__56.field4));
            }
            else {
              return $std_core_types.Gt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.lt, _pat_x130__56.field4), $std_core_types.Tuple4(x_10572.eq, x_0_10575.eq, x_1_10578.gt, _pat_x130__24.field4));
            }
          }
        }
        else if (x_0_10575._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.lt, _pat_x130__24.thd, _pat_x130__24.field4), $std_core_types.Tuple4(x_10572.eq, x_0_10575.gt, _pat_x130__56.thd, _pat_x130__56.field4));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Tuple4(x_10572.eq, x_0_10575.lt, _pat_x130__56.thd, _pat_x130__56.field4), $std_core_types.Tuple4(x_10572.eq, x_0_10575.gt, _pat_x130__24.thd, _pat_x130__24.field4));
        }
      }
    }
    else if (x_10572._tag === 1) {
      return $std_core_types.Lt2($std_core_types.Tuple4(x_10572.lt, _pat_x130__24.snd, _pat_x130__24.thd, _pat_x130__24.field4), $std_core_types.Tuple4(x_10572.gt, _pat_x130__56.snd, _pat_x130__56.thd, _pat_x130__56.field4));
    }
    else {
      return $std_core_types.Gt2($std_core_types.Tuple4(x_10572.lt, _pat_x130__56.snd, _pat_x130__56.thd, _pat_x130__56.field4), $std_core_types.Tuple4(x_10572.gt, _pat_x130__24.snd, _pat_x130__24.thd, _pat_x130__24.field4));
    }
  }
}
 
 
export function tuple5_fs__mlift_order2_10296(z1, z2, z3, z4, _y_x10203) /* forall<a,b,c,d,e,a1> (z1 : a, z2 : b, z3 : c, z4 : d, order2<a1>) -> e order2<(a, b, c, d, a1)> */  {
  if (_y_x10203._tag === 2) {
    return $std_core_types.Eq2($std_core_types.Tuple5(z1, z2, z3, z4, _y_x10203.eq));
  }
  else if (_y_x10203._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple5(z1, z2, z3, z4, _y_x10203.lt), $std_core_types.Tuple5(z1, z2, z3, z4, _y_x10203.gt));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple5(z1, z2, z3, z4, _y_x10203.lt), $std_core_types.Tuple5(z1, z2, z3, z4, _y_x10203.gt));
  }
}
 
 
export function tuple5_fs__mlift_order2_10297(_implicit_fs_field5_fs_order2, x5, y5, z1, z2, z3, _y_x10202) /* forall<a,b,c,d,e,a1> (?field5/order2 : (a1, a1) -> e order2<a1>, x5 : a1, y5 : a1, z1 : a, z2 : b, z3 : c, order2<d>) -> e order2<(a, b, c, d, a1)> */  {
  if (_y_x10202._tag === 2) {
     
    var x_10584 = _implicit_fs_field5_fs_order2(x5, y5);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10203 /* order2<4753> */ ) {
        return tuple5_fs__mlift_order2_10296(z1, z2, z3, _y_x10202.eq, _y_x10203);
      });
    }
    else {
      return tuple5_fs__mlift_order2_10296(z1, z2, z3, _y_x10202.eq, x_10584);
    }
  }
  else if (_y_x10202._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple5(z1, z2, z3, _y_x10202.lt, x5), $std_core_types.Tuple5(z1, z2, z3, _y_x10202.gt, y5));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple5(z1, z2, z3, _y_x10202.lt, y5), $std_core_types.Tuple5(z1, z2, z3, _y_x10202.gt, x5));
  }
}
 
 
export function tuple5_fs__mlift_order2_10298(_implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x4, x5, y4, y5, z1, z2, _y_x10201) /* forall<a,b,c,d,e,a1> (?field4/order2 : (d, d) -> e order2<d>, ?field5/order2 : (a1, a1) -> e order2<a1>, x4 : d, x5 : a1, y4 : d, y5 : a1, z1 : a, z2 : b, order2<c>) -> e order2<(a, b, c, d, a1)> */  {
  if (_y_x10201._tag === 2) {
     
    var x_10586 = _implicit_fs_field4_fs_order2(x4, y4);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10202 /* order2<4751> */ ) {
        return tuple5_fs__mlift_order2_10297(_implicit_fs_field5_fs_order2, x5, y5, z1, z2, _y_x10201.eq, _y_x10202);
      });
    }
    else {
      return tuple5_fs__mlift_order2_10297(_implicit_fs_field5_fs_order2, x5, y5, z1, z2, _y_x10201.eq, x_10586);
    }
  }
  else if (_y_x10201._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple5(z1, z2, _y_x10201.lt, x4, x5), $std_core_types.Tuple5(z1, z2, _y_x10201.gt, y4, y5));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple5(z1, z2, _y_x10201.lt, y4, y5), $std_core_types.Tuple5(z1, z2, _y_x10201.gt, x4, x5));
  }
}
 
 
export function tuple5_fs__mlift_order2_10299(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x3, x4, x5, y3, y4, y5, z1, _y_x10200) /* forall<a,b,c,d,e,a1> (?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>, ?field5/order2 : (a1, a1) -> e order2<a1>, x3 : c, x4 : d, x5 : a1, y3 : c, y4 : d, y5 : a1, z1 : a, order2<b>) -> e order2<(a, b, c, d, a1)> */  {
  if (_y_x10200._tag === 2) {
     
    var x_10588 = _implicit_fs_c_fs_order2(x3, y3);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10201 /* order2<4750> */ ) {
        return tuple5_fs__mlift_order2_10298(_implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x4, x5, y4, y5, z1, _y_x10200.eq, _y_x10201);
      });
    }
    else {
      return tuple5_fs__mlift_order2_10298(_implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x4, x5, y4, y5, z1, _y_x10200.eq, x_10588);
    }
  }
  else if (_y_x10200._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple5(z1, _y_x10200.lt, x3, x4, x5), $std_core_types.Tuple5(z1, _y_x10200.gt, y3, y4, y5));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple5(z1, _y_x10200.lt, y3, y4, y5), $std_core_types.Tuple5(z1, _y_x10200.gt, x3, x4, x5));
  }
}
 
 
export function tuple5_fs__mlift_order2_10300(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x2, x3, x4, x5, y2, y3, y4, y5, _y_x10199) /* forall<a,b,c,d,e,a1> (?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>, ?field5/order2 : (a1, a1) -> e order2<a1>, x2 : b, x3 : c, x4 : d, x5 : a1, y2 : b, y3 : c, y4 : d, y5 : a1, order2<a>) -> e order2<(a, b, c, d, a1)> */  {
  if (_y_x10199._tag === 2) {
     
    var x_10590 = _implicit_fs_b_fs_order2(x2, y2);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10200 /* order2<4749> */ ) {
        return tuple5_fs__mlift_order2_10299(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x3, x4, x5, y3, y4, y5, _y_x10199.eq, _y_x10200);
      });
    }
    else {
      return tuple5_fs__mlift_order2_10299(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, x3, x4, x5, y3, y4, y5, _y_x10199.eq, x_10590);
    }
  }
  else if (_y_x10199._tag === 1) {
    return $std_core_types.Lt2($std_core_types.Tuple5(_y_x10199.lt, x2, x3, x4, x5), $std_core_types.Tuple5(_y_x10199.gt, y2, y3, y4, y5));
  }
  else {
    return $std_core_types.Gt2($std_core_types.Tuple5(_y_x10199.lt, y2, y3, y4, y5), $std_core_types.Tuple5(_y_x10199.gt, x2, x3, x4, x5));
  }
}
 
 
export function tuple5_fs_order2(_pat_x148__24, _pat_x148__63, _implicit_fs_a_fs_order2, _implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2) /* forall<a,b,c,d,e,a1> ((a, b, c, d, a1), (a, b, c, d, a1), ?a/order2 : (a, a) -> e order2<a>, ?b/order2 : (b, b) -> e order2<b>, ?c/order2 : (c, c) -> e order2<c>, ?field4/order2 : (d, d) -> e order2<d>, ?field5/order2 : (a1, a1) -> e order2<a1>) -> e order2<(a, b, c, d, a1)> */  {
   
  var x_10592 = _implicit_fs_a_fs_order2(_pat_x148__24.fst, _pat_x148__63.fst);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10199 /* order2<4748> */ ) {
      return tuple5_fs__mlift_order2_10300(_implicit_fs_b_fs_order2, _implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, _pat_x148__24.snd, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5, _pat_x148__63.snd, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5, _y_x10199);
    });
  }
  else {
    if (x_10592._tag === 2) {
       
      var x_0_10595 = _implicit_fs_b_fs_order2(_pat_x148__24.snd, _pat_x148__63.snd);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10200 /* order2<4749> */ ) {
          return tuple5_fs__mlift_order2_10299(_implicit_fs_c_fs_order2, _implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5, x_10592.eq, _y_x10200);
        });
      }
      else {
        if (x_0_10595._tag === 2) {
           
          var x_1_10598 = _implicit_fs_c_fs_order2(_pat_x148__24.thd, _pat_x148__63.thd);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10201 /* order2<4750> */ ) {
              return tuple5_fs__mlift_order2_10298(_implicit_fs_field4_fs_order2, _implicit_fs_field5_fs_order2, _pat_x148__24.field4, _pat_x148__24.field5, _pat_x148__63.field4, _pat_x148__63.field5, x_10592.eq, x_0_10595.eq, _y_x10201);
            });
          }
          else {
            if (x_1_10598._tag === 2) {
               
              var x_2_10601 = _implicit_fs_field4_fs_order2(_pat_x148__24.field4, _pat_x148__63.field4);
              if ($std_core_hnd._yielding()) {
                return $std_core_hnd.yield_extend(function(_y_x10202 /* order2<4751> */ ) {
                  return tuple5_fs__mlift_order2_10297(_implicit_fs_field5_fs_order2, _pat_x148__24.field5, _pat_x148__63.field5, x_10592.eq, x_0_10595.eq, x_1_10598.eq, _y_x10202);
                });
              }
              else {
                if (x_2_10601._tag === 2) {
                   
                  var x_3_10604 = _implicit_fs_field5_fs_order2(_pat_x148__24.field5, _pat_x148__63.field5);
                  if ($std_core_hnd._yielding()) {
                    return $std_core_hnd.yield_extend(function(_y_x10203 /* order2<4753> */ ) {
                      return tuple5_fs__mlift_order2_10296(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, _y_x10203);
                    });
                  }
                  else {
                    if (x_3_10604._tag === 2) {
                      return $std_core_types.Eq2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, x_3_10604.eq));
                    }
                    else if (x_3_10604._tag === 1) {
                      return $std_core_types.Lt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, x_3_10604.lt), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, x_3_10604.gt));
                    }
                    else {
                      return $std_core_types.Gt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, x_3_10604.lt), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.eq, x_3_10604.gt));
                    }
                  }
                }
                else if (x_2_10601._tag === 1) {
                  return $std_core_types.Lt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.lt, _pat_x148__24.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.gt, _pat_x148__63.field5));
                }
                else {
                  return $std_core_types.Gt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.lt, _pat_x148__63.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.eq, x_2_10601.gt, _pat_x148__24.field5));
                }
              }
            }
            else if (x_1_10598._tag === 1) {
              return $std_core_types.Lt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.lt, _pat_x148__24.field4, _pat_x148__24.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.gt, _pat_x148__63.field4, _pat_x148__63.field5));
            }
            else {
              return $std_core_types.Gt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.lt, _pat_x148__63.field4, _pat_x148__63.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.eq, x_1_10598.gt, _pat_x148__24.field4, _pat_x148__24.field5));
            }
          }
        }
        else if (x_0_10595._tag === 1) {
          return $std_core_types.Lt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.lt, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.gt, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5));
        }
        else {
          return $std_core_types.Gt2($std_core_types.Tuple5(x_10592.eq, x_0_10595.lt, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5), $std_core_types.Tuple5(x_10592.eq, x_0_10595.gt, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5));
        }
      }
    }
    else if (x_10592._tag === 1) {
      return $std_core_types.Lt2($std_core_types.Tuple5(x_10592.lt, _pat_x148__24.snd, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5), $std_core_types.Tuple5(x_10592.gt, _pat_x148__63.snd, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5));
    }
    else {
      return $std_core_types.Gt2($std_core_types.Tuple5(x_10592.lt, _pat_x148__63.snd, _pat_x148__63.thd, _pat_x148__63.field4, _pat_x148__63.field5), $std_core_types.Tuple5(x_10592.gt, _pat_x148__24.snd, _pat_x148__24.thd, _pat_x148__24.field4, _pat_x148__24.field5));
    }
  }
}
 
 
export function unit_fs_show(u) /* (u : ()) -> string */  {
  return "()";
}
 
 
export function tuple2_fs__mlift_show_10301(_y_x10210, _y_x10211) /* forall<e> (string, string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(_y_x10210, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10211, ")"))));
}
 
 
export function tuple2_fs__mlift_show_10302(_implicit_fs_snd_fs_show, x, _y_x10210) /* forall<a,b,e> (?snd/show : (b) -> e string, x : (a, b), string) -> e string */  {
   
  var _x0 = x.snd;
  var x_0_10607 = _implicit_fs_snd_fs_show(_x0);
   
  function next_10608(_y_x10211) /* (string) -> 5015 string */  {
    return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(_y_x10210, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10211, ")"))));
  }
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(next_10608);
  }
  else {
    return next_10608(x_0_10607);
  }
}
 
 
export function tuple2_fs_show(x, _implicit_fs_fst_fs_show, _implicit_fs_snd_fs_show) /* forall<a,b,e> (x : (a, b), ?fst/show : (a) -> e string, ?snd/show : (b) -> e string) -> e string */  {
   
  var _x0 = x.fst;
  var x_0_10611 = _implicit_fs_fst_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10210 /* string */ ) {
      return tuple2_fs__mlift_show_10302(_implicit_fs_snd_fs_show, x, _y_x10210);
    });
  }
  else {
     
    var _x0 = x.snd;
    var x_1_10614 = _implicit_fs_snd_fs_show(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10211 /* string */ ) {
        return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(x_0_10611, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10211, ")"))));
      });
    }
    else {
      return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(x_0_10611, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_1_10614, ")"))));
    }
  }
}
 
 
export function tuple3_fs__mlift_show_10303(_y_x10212, _y_x10213, _y_x10214) /* forall<e> (string, string, string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(_y_x10212, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10213, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10214, ")"))))));
}
 
 
export function tuple3_fs__mlift_show_10304(_y_x10212, _implicit_fs_thd_fs_show, x, _y_x10213) /* forall<a,b,c,e> (string, ?thd/show : (c) -> e string, x : (a, b, c), string) -> e string */  {
   
  var _x0 = x.thd;
  var x_0_10619 = _implicit_fs_thd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10214 /* string */ ) {
      return tuple3_fs__mlift_show_10303(_y_x10212, _y_x10213, _y_x10214);
    });
  }
  else {
    return tuple3_fs__mlift_show_10303(_y_x10212, _y_x10213, x_0_10619);
  }
}
 
 
export function tuple3_fs__mlift_show_10305(_implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10212) /* forall<a,b,c,e> (?snd/show : (b) -> e string, ?thd/show : (c) -> e string, x : (a, b, c), string) -> e string */  {
   
  var _x0 = x.snd;
  var x_0_10621 = _implicit_fs_snd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10213 /* string */ ) {
      return tuple3_fs__mlift_show_10304(_y_x10212, _implicit_fs_thd_fs_show, x, _y_x10213);
    });
  }
  else {
    return tuple3_fs__mlift_show_10304(_y_x10212, _implicit_fs_thd_fs_show, x, x_0_10621);
  }
}
 
 
export function tuple3_fs_show(x, _implicit_fs_fst_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show) /* forall<a,b,c,e> (x : (a, b, c), ?fst/show : (a) -> e string, ?snd/show : (b) -> e string, ?thd/show : (c) -> e string) -> e string */  {
   
  var _x0 = x.fst;
  var x_0_10623 = _implicit_fs_fst_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10212 /* string */ ) {
      return tuple3_fs__mlift_show_10305(_implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10212);
    });
  }
  else {
     
    var _x0 = x.snd;
    var x_1_10626 = _implicit_fs_snd_fs_show(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10213 /* string */ ) {
        return tuple3_fs__mlift_show_10304(x_0_10623, _implicit_fs_thd_fs_show, x, _y_x10213);
      });
    }
    else {
       
      var _x0 = x.thd;
      var x_2_10629 = _implicit_fs_thd_fs_show(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10214 /* string */ ) {
          return tuple3_fs__mlift_show_10303(x_0_10623, x_1_10626, _y_x10214);
        });
      }
      else {
        return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(x_0_10623, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_1_10626, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_2_10629, ")"))))));
      }
    }
  }
}
 
 
export function tuple4_fs__mlift_show_10306(_y_x10215, _y_x10216, _y_x10217, _y_x10218) /* forall<e> (string, string, string, string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(_y_x10215, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10216, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10217, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10218, ")"))))))));
}
 
 
export function tuple4_fs__mlift_show_10307(_y_x10215, _y_x10216, _implicit_fs_field4_fs_show, x, _y_x10217) /* forall<a,b,c,d,e> (string, string, ?field4/show : (d) -> e string, x : (a, b, c, d), string) -> e string */  {
   
  var _x0 = x.field4;
  var x_0_10632 = _implicit_fs_field4_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10218 /* string */ ) {
      return tuple4_fs__mlift_show_10306(_y_x10215, _y_x10216, _y_x10217, _y_x10218);
    });
  }
  else {
    return tuple4_fs__mlift_show_10306(_y_x10215, _y_x10216, _y_x10217, x_0_10632);
  }
}
 
 
export function tuple4_fs__mlift_show_10308(_y_x10215, _implicit_fs_field4_fs_show, _implicit_fs_thd_fs_show, x, _y_x10216) /* forall<a,b,c,d,e> (string, ?field4/show : (d) -> e string, ?thd/show : (c) -> e string, x : (a, b, c, d), string) -> e string */  {
   
  var _x0 = x.thd;
  var x_0_10634 = _implicit_fs_thd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10217 /* string */ ) {
      return tuple4_fs__mlift_show_10307(_y_x10215, _y_x10216, _implicit_fs_field4_fs_show, x, _y_x10217);
    });
  }
  else {
    return tuple4_fs__mlift_show_10307(_y_x10215, _y_x10216, _implicit_fs_field4_fs_show, x, x_0_10634);
  }
}
 
 
export function tuple4_fs__mlift_show_10309(_implicit_fs_field4_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10215) /* forall<a,b,c,d,e> (?field4/show : (d) -> e string, ?snd/show : (b) -> e string, ?thd/show : (c) -> e string, x : (a, b, c, d), string) -> e string */  {
   
  var _x0 = x.snd;
  var x_0_10636 = _implicit_fs_snd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10216 /* string */ ) {
      return tuple4_fs__mlift_show_10308(_y_x10215, _implicit_fs_field4_fs_show, _implicit_fs_thd_fs_show, x, _y_x10216);
    });
  }
  else {
    return tuple4_fs__mlift_show_10308(_y_x10215, _implicit_fs_field4_fs_show, _implicit_fs_thd_fs_show, x, x_0_10636);
  }
}
 
 
export function tuple4_fs_show(x, _implicit_fs_fst_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, _implicit_fs_field4_fs_show) /* forall<a,b,c,d,e> (x : (a, b, c, d), ?fst/show : (a) -> e string, ?snd/show : (b) -> e string, ?thd/show : (c) -> e string, ?field4/show : (d) -> e string) -> e string */  {
   
  var _x0 = x.fst;
  var x_0_10638 = _implicit_fs_fst_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10215 /* string */ ) {
      return tuple4_fs__mlift_show_10309(_implicit_fs_field4_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10215);
    });
  }
  else {
     
    var _x0 = x.snd;
    var x_1_10641 = _implicit_fs_snd_fs_show(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10216 /* string */ ) {
        return tuple4_fs__mlift_show_10308(x_0_10638, _implicit_fs_field4_fs_show, _implicit_fs_thd_fs_show, x, _y_x10216);
      });
    }
    else {
       
      var _x0 = x.thd;
      var x_2_10644 = _implicit_fs_thd_fs_show(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10217 /* string */ ) {
          return tuple4_fs__mlift_show_10307(x_0_10638, x_1_10641, _implicit_fs_field4_fs_show, x, _y_x10217);
        });
      }
      else {
         
        var _x0 = x.field4;
        var x_3_10647 = _implicit_fs_field4_fs_show(_x0);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10218 /* string */ ) {
            return tuple4_fs__mlift_show_10306(x_0_10638, x_1_10641, x_2_10644, _y_x10218);
          });
        }
        else {
          return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(x_0_10638, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_1_10641, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_2_10644, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_3_10647, ")"))))))));
        }
      }
    }
  }
}
 
 
export function tuple5_fs__mlift_show_10310(_y_x10219, _y_x10220, _y_x10221, _y_x10222, _y_x10223) /* forall<e> (string, string, string, string, string) -> e string */  {
  return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(_y_x10219, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10220, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10221, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10222, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(_y_x10223, ")"))))))))));
}
 
 
export function tuple5_fs__mlift_show_10311(_y_x10219, _y_x10220, _y_x10221, _implicit_fs_field5_fs_show, x, _y_x10222) /* forall<a,b,c,d,e,a1> (string, string, string, ?field5/show : (a1) -> e string, x : (a, b, c, d, a1), string) -> e string */  {
   
  var _x0 = x.field5;
  var x_0_10650 = _implicit_fs_field5_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10223 /* string */ ) {
      return tuple5_fs__mlift_show_10310(_y_x10219, _y_x10220, _y_x10221, _y_x10222, _y_x10223);
    });
  }
  else {
    return tuple5_fs__mlift_show_10310(_y_x10219, _y_x10220, _y_x10221, _y_x10222, x_0_10650);
  }
}
 
 
export function tuple5_fs__mlift_show_10312(_y_x10219, _y_x10220, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, x, _y_x10221) /* forall<a,b,c,d,e,a1> (string, string, ?field4/show : (d) -> e string, ?field5/show : (a1) -> e string, x : (a, b, c, d, a1), string) -> e string */  {
   
  var _x0 = x.field4;
  var x_0_10652 = _implicit_fs_field4_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10222 /* string */ ) {
      return tuple5_fs__mlift_show_10311(_y_x10219, _y_x10220, _y_x10221, _implicit_fs_field5_fs_show, x, _y_x10222);
    });
  }
  else {
    return tuple5_fs__mlift_show_10311(_y_x10219, _y_x10220, _y_x10221, _implicit_fs_field5_fs_show, x, x_0_10652);
  }
}
 
 
export function tuple5_fs__mlift_show_10313(_y_x10219, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_thd_fs_show, x, _y_x10220) /* forall<a,b,c,d,e,a1> (string, ?field4/show : (d) -> e string, ?field5/show : (a1) -> e string, ?thd/show : (c) -> e string, x : (a, b, c, d, a1), string) -> e string */  {
   
  var _x0 = x.thd;
  var x_0_10654 = _implicit_fs_thd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10221 /* string */ ) {
      return tuple5_fs__mlift_show_10312(_y_x10219, _y_x10220, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, x, _y_x10221);
    });
  }
  else {
    return tuple5_fs__mlift_show_10312(_y_x10219, _y_x10220, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, x, x_0_10654);
  }
}
 
 
export function tuple5_fs__mlift_show_10314(_implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10219) /* forall<a,b,c,d,e,a1> (?field4/show : (d) -> e string, ?field5/show : (a1) -> e string, ?snd/show : (b) -> e string, ?thd/show : (c) -> e string, x : (a, b, c, d, a1), string) -> e string */  {
   
  var _x0 = x.snd;
  var x_0_10656 = _implicit_fs_snd_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10220 /* string */ ) {
      return tuple5_fs__mlift_show_10313(_y_x10219, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_thd_fs_show, x, _y_x10220);
    });
  }
  else {
    return tuple5_fs__mlift_show_10313(_y_x10219, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_thd_fs_show, x, x_0_10656);
  }
}
 
 
export function tuple5_fs_show(x, _implicit_fs_fst_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show) /* forall<a,b,c,d,e,a1> (x : (a, b, c, d, a1), ?fst/show : (a) -> e string, ?snd/show : (b) -> e string, ?thd/show : (c) -> e string, ?field4/show : (d) -> e string, ?field5/show : (a1) -> e string) -> e string */  {
   
  var _x0 = x.fst;
  var x_0_10658 = _implicit_fs_fst_fs_show(_x0);
  if ($std_core_hnd._yielding()) {
    return $std_core_hnd.yield_extend(function(_y_x10219 /* string */ ) {
      return tuple5_fs__mlift_show_10314(_implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_snd_fs_show, _implicit_fs_thd_fs_show, x, _y_x10219);
    });
  }
  else {
     
    var _x0 = x.snd;
    var x_1_10661 = _implicit_fs_snd_fs_show(_x0);
    if ($std_core_hnd._yielding()) {
      return $std_core_hnd.yield_extend(function(_y_x10220 /* string */ ) {
        return tuple5_fs__mlift_show_10313(x_0_10658, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, _implicit_fs_thd_fs_show, x, _y_x10220);
      });
    }
    else {
       
      var _x0 = x.thd;
      var x_2_10664 = _implicit_fs_thd_fs_show(_x0);
      if ($std_core_hnd._yielding()) {
        return $std_core_hnd.yield_extend(function(_y_x10221 /* string */ ) {
          return tuple5_fs__mlift_show_10312(x_0_10658, x_1_10661, _implicit_fs_field4_fs_show, _implicit_fs_field5_fs_show, x, _y_x10221);
        });
      }
      else {
         
        var _x0 = x.field4;
        var x_3_10667 = _implicit_fs_field4_fs_show(_x0);
        if ($std_core_hnd._yielding()) {
          return $std_core_hnd.yield_extend(function(_y_x10222 /* string */ ) {
            return tuple5_fs__mlift_show_10311(x_0_10658, x_1_10661, x_2_10664, _implicit_fs_field5_fs_show, x, _y_x10222);
          });
        }
        else {
           
          var _x0 = x.field5;
          var x_4_10670 = _implicit_fs_field5_fs_show(_x0);
          if ($std_core_hnd._yielding()) {
            return $std_core_hnd.yield_extend(function(_y_x10223 /* string */ ) {
              return tuple5_fs__mlift_show_10310(x_0_10658, x_1_10661, x_2_10664, x_3_10667, _y_x10223);
            });
          }
          else {
            return $std_core_types._lp__plus__plus__rp_("(", $std_core_types._lp__plus__plus__rp_(x_0_10658, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_1_10661, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_2_10664, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_3_10667, $std_core_types._lp__plus__plus__rp_(",", $std_core_types._lp__plus__plus__rp_(x_4_10670, ")"))))))))));
          }
        }
      }
    }
  }
}
 
 
export function show_tuple(x, showfst, showsnd) /* forall<a,b,e> (x : (a, b), showfst : (a) -> e string, showsnd : (b) -> e string) -> e string */  {
  return tuple2_fs_show(x, showfst, showsnd);
}
