// Exercise the compiled Koka browser core against independently traversed graphs
// and the actual native Pony -> Uiua pipeline. No browser adapter math is used.
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,rmSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import * as core from '../web/dist/core/web_core.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const checks=[];const check=(name,condition)=>{assert.ok(condition,name);checks.push(name);console.log('PASS',name);};
const data=gunzipSync(readFileSync(path.join(root,'web/dist/kernels.bin.gz')));
const manifest=JSON.parse(readFileSync(path.join(root,'web/dist/kernels.json')));
check('Atlas integrity and header',createHash('sha256').update(data).digest('hex')===manifest.sha256&&data.toString('ascii',0,4)==='FFK1'&&data.length===1769492);
const kernels=new Float32Array(442368);for(let i=0;i<kernels.length;i++)kernels[i]=data.readFloatLE(20+i*4);globalThis.foldfieldKernels=kernels;
check('Koka multi-shot effects and shared parser',core.check_core());
const desc=s=>JSON.parse(core.describe(s)),link=(top,sources,rule=0)=>core.from_link(`FOLDFIELD1|${top}|${rule}|${sources.map(s=>s.join(',')).join(';')}`);
let s=core.start();check('Empty field is exactly zero',core.values(s).every(x=>x===0));
s=core.dispatch(s,77,0,0);s=core.dispatch(s,1,12,8);check('Mirror gesture creates two sources',JSON.stringify(desc(s).sources)==='[[12,8,1],[51,39,1]]');
s=core.dispatch(s,77,0,0);s=core.dispatch(s,2,20,30);check('Opposed gesture preserves polarity',JSON.stringify(desc(s).sources.slice(2))==='[[20,30,-1],[43,17,1]]');
const before=s;s=core.dispatch(s,82,0,0);check('Clear removes sources',desc(s).sources.length===0);s=core.dispatch(s,90,0,0);check('Undo restores complete model',core.share(s)===core.share(before));s=core.dispatch(s,89,0,0);check('Redo reapplies clear',desc(s).sources.length===0);s=core.dispatch(s,90,0,0);s=core.dispatch(s,84,0,0);check('New edit clears redo',desc(s).redo===0);
check('Saved history and linked model round trips',core.restore(s)===s&&core.share(core.from_link(core.share(s)))===core.share(s));
for(const bad of ['bad','FOLDFIELD1|3|0|','FOLDFIELD1|0|0|64,1,1','FOLDFIELD1|0|0|1,1,0','FOLDFIELD1|0|0|'+Array(5000).fill('0,0,1').join(';')])check('Reject malformed model '+bad.slice(0,24),desc(core.from_link(bad)).notice===5);
s=link(0,Array(15).fill([2,3,1]),1);const rejected=core.dispatch(s,1,5,5);check('Paired placement is atomic at source limit',desc(rejected).sources.length===15&&desc(rejected).notice===4);
s=core.start();for(let i=0;i<180;i++)s=core.dispatch(s,84,0,0);check('History bounded at 128',desc(s).undo===128);
check('Coincident opposing waves cancel exactly',core.values(link(2,[[24,13,1],[24,13,-1]])).every(x=>x===0));
function reference(top,sx,sy){const d=new Int32Array(3072).fill(-1),q=[sy*64+sx];d[q[0]]=0;for(let h=0;h<q.length;h++){const i=q[h],x=i%64,y=Math.floor(i/64),ns=[];if(x)ns.push(i-1);else if(top)ns.push((top===2?47-y:y)*64+63);if(x<63)ns.push(i+1);else if(top)ns.push((top===2?47-y:y)*64);if(y)ns.push(i-64);if(y<47)ns.push(i+64);for(const n of ns)if(d[n]<0){d[n]=d[i]+1;q.push(n);}}return d;}
let seed=20261113;const random=n=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};let maxError=0,nativeError=0;
const work=mkdtempSync(path.join(root,'build/web-test-'));
try{for(let top=0;top<3;top++){
  for(let trial=0;trial<10;trial++){
    const sources=trial===0?[[0,0,1],[63,47,-1],[31,24,1]]:Array.from({length:trial===9?16:1+random(8)},()=>[random(64),random(48),random(2)?1:-1]);
    const actual=core.values(link(top,sources));const distances=sources.map(([x,y])=>reference(top,x,y));
    for(let i=0;i<3072;i++){const expected=sources.reduce((v,source,j)=>v+source[2]*Math.sin(.55*distances[j][i])/(1+.035*(distances[j][i]+1)),0)/Math.sqrt(sources.length);maxError=Math.max(maxError,Math.abs(expected-actual[i]));}
    if(trial===0||trial===9){const travel=execFileSync(path.join(root,'dist/Foldfield/wave.exe'),[String(top),sources.map(s=>s.join(',')).join(';')],{timeout:20000,maxBuffer:4*1024*1024});writeFileSync(path.join(work,'travel.json'),travel);execFileSync(path.join(root,'dist/Foldfield/uiua.exe'),['run','--no-format',path.join(root,'dist/Foldfield/field.ua')],{cwd:work,timeout:20000});const native=JSON.parse(readFileSync(path.join(work,'field.json')));for(let i=0;i<3072;i++)nativeError=Math.max(nativeError,Math.abs(native[i]-actual[i]));}
  }
  check(`Topology ${top}: translated atlas agrees with independent BFS and wave law`,maxError<1e-6);
}
check('Compiled Koka browser field agrees with Pony + Uiua native field',nativeError<1e-6);
}finally{assert.ok(path.resolve(work).startsWith(path.join(root,'build')+path.sep));rmSync(work,{recursive:true,force:true});}
writeFileSync(path.join(root,'build/web-core-results.json'),JSON.stringify({passed:checks.length,checks,compared_cells:30*3072,native_compared_cells:6*3072,maximum_scalar_error:maxError,maximum_native_error:nativeError,tolerance:1e-6},null,2));
