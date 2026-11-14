// Koka generated module: std/core/undiv, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function pretend_no_div(action) /* forall<a,e> (action : () -> <div|e> a) -> e a */  {
  return action();
}
 
 
export function collapse_div(action) /* forall<a,e> (action : () -> <div,div|e> a) -> <div|e> a */  {
  return action();
}
