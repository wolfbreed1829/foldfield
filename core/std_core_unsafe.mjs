// Koka generated module: std/core/unsafe, koka version: 3.2.9
"use strict";
 
// imports
import * as $std_core_types from './std_core_types.mjs';
 
// externals
 
// type declarations
 
// declarations
 
 
export function unsafe_total(action) /* forall<a,e> (action : () -> e a) -> a */  {
  return action();
}
 
 
export function pretend_no_ndet(action) /* forall<a,e> (action : () -> <ndet|e> a) -> e a */  {
  return action();
}
 
 
export function collapse_ndet(action) /* forall<a,e> (action : () -> <ndet,ndet|e> a) -> <ndet|e> a */  {
  return action();
}
