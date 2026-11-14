// Koka generated module: std/core/char, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
import * as $std_core_int from './std_core_int.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function cmp(x, y) /* (x : char, y : char) -> order */  {
  if ((x < y)) {
    return $std_core_types.Lt;
  }
  else {
    return ((x > y)) ? $std_core_types.Gt : $std_core_types.Eq;
  }
}
 
 
export function order2(x, y) /* (x : char, y : char) -> order2<char> */  {
  if ((x === y)) {
    return $std_core_types.Eq2(x);
  }
  else {
    if ((x < y)) {
      return $std_core_types.Lt2(x, y);
    }
    else {
      return $std_core_types.Gt2(y, x);
    }
  }
}
 
 
export function _lp__plus__rp_(c, d) /* (c : char, d : char) -> char */  {
   
  var x_10000 = c;
   
  var y_10001 = d;
  return (($std_core_types._int_add(x_10000,y_10001)));
}
 
 
export function _lp__dash__rp_(c, d) /* (c : char, d : char) -> char */  {
   
  var x_10002 = c;
   
  var y_10003 = d;
  return (($std_core_types._int_sub(x_10002,y_10003)));
}
 
 
export function is_lower(c) /* (c : char) -> bool */  {
  return ((c >= 0x0061)) ? (c <= 0x007A) : false;
}
 
 
export function is_upper(c) /* (c : char) -> bool */  {
  return ((c >= 0x0041)) ? (c <= 0x005A) : false;
}
 
 
export function is_digit(c) /* (c : char) -> bool */  {
  return ((c >= 0x0030)) ? (c <= 0x0039) : false;
}
 
 
export function is_hex_digit(c) /* (c : char) -> bool */  {
  if ((c >= 0x0030)) {
    if ((c <= 0x0039)) {
      return true;
    }
    else {
      if ((c >= 0x0061)) {
        if ((c <= 0x0066)) {
          return true;
        }
        else {
          return ((c >= 0x0041)) ? (c <= 0x0046) : false;
        }
      }
      else {
        return ((c >= 0x0041)) ? (c <= 0x0046) : false;
      }
    }
  }
  else {
    if ((c >= 0x0061)) {
      if ((c <= 0x0066)) {
        return true;
      }
      else {
        return ((c >= 0x0041)) ? (c <= 0x0046) : false;
      }
    }
    else {
      return ((c >= 0x0041)) ? (c <= 0x0046) : false;
    }
  }
}
 
 
export function is_alpha(c) /* (c : char) -> bool */  {
  if ((c >= 0x0061)) {
    if ((c <= 0x007A)) {
      return true;
    }
    else {
      return ((c >= 0x0041)) ? (c <= 0x005A) : false;
    }
  }
  else {
    return ((c >= 0x0041)) ? (c <= 0x005A) : false;
  }
}
 
 
export function is_alpha_num(c) /* (c : char) -> bool */  {
  var _x0 = is_alpha(c);
  if (_x0) {
    return true;
  }
  else {
    return ((c >= 0x0030)) ? (c <= 0x0039) : false;
  }
}
 
 
export function is_ascii(c) /* (c : char) -> bool */  {
  return (c <= 0x007F);
}
 
 
export function is_control(c) /* (c : char) -> bool */  {
  return (c < 0x0020);
}
 
 
export function is_white(c) /* (c : char) -> bool */  {
  if ((c === 0x0020)) {
    return true;
  }
  else {
    if ((c === 0x0009)) {
      return true;
    }
    else {
      return ((c === 0x000A)) ? true : (c === 0x000D);
    }
  }
}
