// Browser IO and drawing. Koka owns edits, history, superposition, and wave phase.
import * as core from './core/web_core.mjs?v=3';
const $=id=>document.getElementById(id),canvas=$('fabric'),ctx=canvas.getContext('2d');
const STORE='foldfield.browser.v1',VIEW='foldfield.view.v1',TAU=Math.PI*2;
let snapshot=core.start(),scene=JSON.parse(core.describe(snapshot));
let sines=new Array(3072).fill(0),cosines=sines,field=sines;
let ready=false,polarity=1,selected=-1,width=0,height=0,cursor=null,keyboardCursor={x:31,y:23};
let phase=0,speed=1,playing=false,animation=0,lastFrame=null,drag=null,dragFrame=0;
const topologies=['Open sheet','Cylinder','Möbius strip'],rules=['Single','Mirror pair','Opposed pair'];
const notices=['Click or tap the fabric to plant the first wave.','Saved in this browser. Every edit can be undone.','No earlier state.','No later state.','Sixteen-source limit. Delete, undo, or clear to make room.','That saved field was invalid. Opened an empty sheet.','Loaded a linked field. Make it your own.'];
function status(text,error=false){$('status').textContent=text;$('status').classList.toggle('error',error);}
function metric(){const mx=width<600?17:32,my=30;return {mx,my,cw:width-2*mx-27,ch:height-2*my,shear:27};}
function point(x,y,value=0){const m=metric();return [m.mx+x*m.cw/63+y*m.shear/47,m.my+y*m.ch/47-value*(width<600?15:26)];}
function line(x1,y1,x2,y2,color,lineWidth=1){ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
function draw(editing=true){
  if(!width||!height)return;
  ctx.fillStyle='#0f1818';ctx.fillRect(0,0,width,height);ctx.save();ctx.beginPath();ctx.rect(6,6,width-12,height-12);ctx.clip();
  for(let y=47;y>=0;y--)for(let x=0;x<63;x++){
    const a=field[y*64+x],b=field[y*64+x+1],p=point(x,y,a),q=point(x+1,y,b),z=Math.min(1,Math.abs((a+b)*.5));
    const color=!scene.sources.length?'#293f35':a+b>=0?`rgb(${92+144*z},${111+68*z},${99+10*z})`:`rgb(${70+54*z},${112+77*z},${109+68*z})`;
    line(...p,...q,color,width<600?.65:.85);
  }
  for(let x=0;x<64;x+=4)for(let y=0;y<47;y++)line(...point(x,y,field[y*64+x]),...point(x,y+1,field[(y+1)*64+x]),'#30463b',.65);
  for(const side of [0,1]){
    const p=point(side?63:0,0),q=point(side?63:0,47),color=scene.topology?'#e8ac51':'#3b4d46';
    line(p[0]-7,p[1],q[0]-7,q[1],color,.8);
    if(scene.topology){const end=side&&scene.topology===2?p:q,d=side&&scene.topology===2?1:-1;line(end[0]-7,end[1],end[0]-11,end[1]+d*8,color);line(end[0]-7,end[1],end[0]-3,end[1]+d*8,color);}
  }
  scene.sources.forEach(([x,y,s],index)=>{
    const [px,py]=point(x,y),color=s>0?'#e8ac51':'#88d3c3';
    if(editing&&index===selected){ctx.fillStyle='#0f1818d9';ctx.beginPath();ctx.arc(px,py,11,0,TAU);ctx.fill();ctx.strokeStyle=color;ctx.lineWidth=1;ctx.stroke();}
    ctx.strokeStyle=color;ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(px,py,4.5,0,TAU);ctx.stroke();line(px-2.3,py,px+2.3,py,color);if(s>0)line(px,py-2.3,px,py+2.3,color);
  });
  if(editing&&cursor&&ready&&!drag){const [px,py]=point(cursor.x,cursor.y);ctx.setLineDash([2,3]);ctx.strokeStyle='#c1cdb6';ctx.lineWidth=.8;ctx.beginPath();ctx.arc(px,py,9,0,TAU);ctx.stroke();ctx.setLineDash([]);}
  ctx.restore();
}
function renderPhase(){field=core.frame(sines,cosines,phase);draw();}
function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);width=rect.width;height=rect.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
new ResizeObserver(resize).observe(canvas);

function selectionUI(){
  if(selected>=scene.sources.length)selected=-1;
  $('source-picker').value=String(selected);$('source-picker').disabled=!ready||!scene.sources.length;
  $('delete-source').disabled=!ready||selected<0;
  const hint=selected<0?'Drag a source to move it. Select one to delete.':`Source ${selected+1} selected. Drag or use arrows to move; Delete to remove; Escape to deselect.`;
  if($('selection-hint').textContent!==hint)$('selection-hint').textContent=hint;
}
function select(index){selected=index;selectionUI();draw();}
function update(announce=true){
  scene=JSON.parse(core.describe(snapshot));sines=core.values(snapshot);cosines=core.cosine_values(snapshot);
  if(sines.length!==3072||cosines.length!==3072||sines.some(x=>!Number.isFinite(x))||cosines.some(x=>!Number.isFinite(x)))throw Error('The computation returned an invalid field.');
  $('surface-name').textContent=topologies[scene.topology];$('rule-name').textContent=rules[scene.rule];
  $('count').textContent=String(scene.sources.length).padStart(2,'0');$('seam').textContent=['EDGES FREE','EDGES JOINED','ONE HALF TWIST'][scene.topology];
  $('empty').hidden=scene.sources.length>0||!ready;$('undo').disabled=!scene.undo;$('redo').disabled=!scene.redo;
  const options=[new Option('Select a source','-1'),...scene.sources.map(([x,y,sign],i)=>new Option(`Source ${i+1} · ${sign>0?'+':'−'} · ${x}, ${y}`,String(i)))];
  $('source-picker').replaceChildren(...options);selectionUI();
  canvas.setAttribute('aria-label',`Wave fabric, ${scene.sources.length} sources, ${topologies[scene.topology]}. Drag sources to move. Arrow keys move the cursor or selected source; Enter plants a source.`);
  renderPhase();syncAnimation();
  if(announce)status(notices[scene.notice]||notices[1],scene.notice>=2&&scene.notice<=5);
}
function viewState(){return JSON.stringify({model:core.share(snapshot),phase,speed});}
function persist(){
  try{localStorage.setItem(STORE,snapshot);localStorage.setItem(VIEW,viewState());if(location.hash)history.replaceState(null,'',location.pathname+location.search);}
  catch{status('The field is ready, but browser storage could not save it. Share a pattern link to keep it.',true);}
}
function saveView(){try{localStorage.setItem(VIEW,viewState());}catch{status('Browser storage could not save this moment. Share a pattern link to keep it.',true);}}
function commit(next){const previous=snapshot;try{snapshot=next;update();persist();}catch(error){snapshot=previous;update(false);status(error.message,true);}}
function act(event,x=0,y=0){
  if(!ready)return;cancelDrag();const next=core.dispatch(snapshot,event,x,y),nextScene=JSON.parse(core.describe(next));
  if((event===1||event===2)&&nextScene.sources.length>scene.sources.length)selected=scene.sources.length;
  else if([82,90,89].includes(event))selected=-1;
  commit(next);
}
function removeSelected(){if(!ready||selected<0)return;cancelDrag();const next=core.remove_source(snapshot,selected);selected=-1;commit(next);}
function nudge(dx,dy){
  if(selected<0)return;cancelDrag();const source=scene.sources[selected],x=Math.max(0,Math.min(63,source[0]+dx)),y=Math.max(0,Math.min(47,source[1]+dy));
  keyboardCursor={x,y};commit(core.move_source(snapshot,selected,x,y));
}

function coordinate(e,clamp=false){
  const r=canvas.getBoundingClientRect(),m=metric(),py=(e.clientY-r.top-m.my)*47/m.ch,px=(e.clientX-r.left-m.mx-py*m.shear/47)*63/m.cw;
  if(!clamp&&(px<-.5||px>63.5||py<-.5||py>47.5))return null;
  return {x:Math.max(0,Math.min(63,Math.round(px))),y:Math.max(0,Math.min(47,Math.round(py)))};
}
function hitSource(e){
  const r=canvas.getBoundingClientRect(),radius=e.pointerType==='touch'?22:14;
  let result=-1,best=radius;
  scene.sources.forEach(([x,y],i)=>{const p=point(x,y),d=Math.hypot(p[0]-(e.clientX-r.left),p[1]-(e.clientY-r.top));if(d<best||(d===best&&i===selected)){best=d;result=i;}});
  return result;
}
function flushDrag(){
  if(dragFrame){cancelAnimationFrame(dragFrame);dragFrame=0;}
  if(!drag?.moved||!drag.pending)return;
  const {x,y}=drag.pending;drag.pending=null;keyboardCursor={x,y};cursor={x,y};
  snapshot=core.move_source(drag.base,drag.index,x,y);update(false);
}
function finishDrag(cancel=false){
  if(!drag)return;
  const active=drag;if(!cancel)flushDrag();
  if(dragFrame){cancelAnimationFrame(dragFrame);dragFrame=0;}
  drag=null;canvas.style.cursor='grab';
  if(canvas.hasPointerCapture(active.id))canvas.releasePointerCapture(active.id);
  if(cancel){snapshot=active.base;update(false);status('Move canceled.');}
  else if(active.moved){update();persist();}
  else draw();
}
function cancelDrag(){finishDrag(true);}
canvas.addEventListener('pointerdown',e=>{
  if(!ready||drag||(e.button!==0&&e.button!==2))return;
  const hit=e.button===0?hitSource(e):-1,p=coordinate(e);if(hit<0&&!p)return;
  e.preventDefault();canvas.focus({preventScroll:true});
  if(hit>=0){select(hit);keyboardCursor={x:scene.sources[hit][0],y:scene.sources[hit][1]};cursor=null;drag={id:e.pointerId,index:hit,base:snapshot,startX:e.clientX,startY:e.clientY,moved:false,pending:null};canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';}
  else{keyboardCursor=p;cursor=p;act(e.button===2?2:polarity,p.x,p.y);}
});
canvas.addEventListener('pointermove',e=>{
  if(drag){if(e.pointerId!==drag.id)return;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>4)drag.moved=true;if(drag.moved){drag.pending=coordinate(e,true);if(!dragFrame)dragFrame=requestAnimationFrame(flushDrag);}return;}
  if(e.pointerType==='touch')return;const hit=hitSource(e);canvas.style.cursor=hit>=0?'grab':'crosshair';cursor=hit>=0?null:coordinate(e);draw();
});
canvas.addEventListener('pointerup',e=>{if(drag?.id===e.pointerId){if(drag.moved)drag.pending=coordinate(e,true);finishDrag();}});
canvas.addEventListener('pointercancel',e=>{if(drag?.id===e.pointerId)cancelDrag();});
canvas.addEventListener('lostpointercapture',e=>{if(drag?.id===e.pointerId)cancelDrag();});
canvas.addEventListener('pointerleave',()=>{if(!drag){cursor=null;draw();}});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('keydown',e=>{
  if(!ready)return;
  if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
    e.preventDefault();const dx=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0,dy=e.key==='ArrowDown'?1:e.key==='ArrowUp'?-1:0;
    if(selected>=0)nudge(dx,dy);else{keyboardCursor.x=Math.max(0,Math.min(63,keyboardCursor.x+dx));keyboardCursor.y=Math.max(0,Math.min(47,keyboardCursor.y+dy));cursor={...keyboardCursor};draw();}
  }else if(e.key==='Enter'||e.key===' '){e.preventDefault();act(e.shiftKey?2:polarity,keyboardCursor.x,keyboardCursor.y);}
});
window.addEventListener('blur',cancelDrag);
$('source-picker').onchange=e=>{cancelDrag();select(Number(e.target.value));if(selected>=0)keyboardCursor={x:scene.sources[selected][0],y:scene.sources[selected][1]};};
$('delete-source').onclick=removeSelected;

function syncAnimation(){
  const active=ready&&playing&&scene.sources.length>0&&!document.hidden;
  if(active&&!animation)animation=requestAnimationFrame(tick);
  if(!active){if(animation)cancelAnimationFrame(animation);animation=0;lastFrame=null;}
}
function tick(now){
  animation=0;if(!ready||!playing||!scene.sources.length||document.hidden){lastFrame=null;return;}
  if(lastFrame===null)lastFrame=now;
  if(now-lastFrame>=1000/30){phase=(phase+Math.min((now-lastFrame)/1000,.15)*speed*1.4)%TAU;lastFrame=now;renderPhase();}
  syncAnimation();
}
function motionUI(){
  $('play-label').textContent=playing?'Pause':'Play';$('play').setAttribute('aria-pressed',String(playing));
  $('speed').value=String(speed);$('speed-value').textContent=`${speed}×`;$('speed').setAttribute('aria-valuetext',`${speed} times normal speed`);
}
function setPlaying(value){playing=value;lastFrame=null;motionUI();syncAnimation();}
$('play').onclick=()=>{if(!ready)return;cancelDrag();setPlaying(!playing);status(playing?'Waves in motion. Pause to hold a moment.':'Paused. Export or share this moment.');persist();};
$('speed').oninput=e=>{cancelDrag();speed=Number(e.target.value);motionUI();persist();};
$('rewind').onclick=()=>{if(!ready)return;cancelDrag();setPlaying(false);phase=0;renderPhase();persist();status('Rewound to the starting wave.');};
document.addEventListener('visibilitychange',()=>{cancelDrag();lastFrame=null;if(document.hidden)saveView();syncAnimation();});
window.addEventListener('pagehide',()=>{cancelDrag();if(ready)saveView();});

function choose(sign){polarity=sign;$('positive').setAttribute('aria-pressed',String(sign===1));$('negative').setAttribute('aria-pressed',String(sign===2));}
$('positive').onclick=()=>choose(1);$('negative').onclick=()=>choose(2);
for(const [id,event] of [['topology',84],['rule',77],['undo',90],['redo',89],['clear',82]])$(id).onclick=()=>act(event);
function help(){cancelDrag();if($('guide').open)$('guide').close();else $('guide').showModal();}
$('help').onclick=help;
for(const dialog of document.querySelectorAll('dialog')){
  dialog.querySelector('.close').onclick=()=>dialog.close();
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
}
async function exportImage(){
  if(!ready)return;cancelDrag();setPlaying(false);persist();draw(false);
  const pending=new Promise(resolve=>canvas.toBlob(resolve,'image/png'));draw();const blob=await pending;
  if(!blob){status('The browser could not create an image.',true);return;}
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`foldfield-${new Date().toISOString().replace(/[:.]/g,'-')}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);status('Paused frame prepared for PNG download.');
}
$('export').onclick=exportImage;
$('share').onclick=()=>{
  cancelDrag();setPlaying(false);persist();
  $('pattern-link').value=location.origin+location.pathname+'#'+encodeURIComponent(core.share(snapshot))+`&phase=${phase.toFixed(8)}&speed=${speed}`;
  $('copy-status').textContent='';$('share-dialog').showModal();
};
$('copy-link').onclick=async()=>{try{await navigator.clipboard.writeText($('pattern-link').value);$('copy-status').textContent='Copied. Anyone with the link can open this field.';}catch{$('pattern-link').focus();$('pattern-link').select();$('copy-status').textContent='Select and copy the link above; clipboard access was unavailable.';}};
document.addEventListener('keydown',e=>{
  if(e.ctrlKey||e.metaKey||e.altKey||e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement||document.querySelector('dialog[open]'))return;
  if(e.key==='Escape'){e.preventDefault();if(drag)cancelDrag();else{cursor=null;select(-1);}return;}
  if(e.key==='Delete'||e.key==='Backspace'){if(selected>=0){e.preventDefault();removeSelected();}return;}
  const key=e.key.toUpperCase();
  if(key==='H'){e.preventDefault();help();return;}if(key==='E'){e.preventDefault();exportImage();return;}if(key==='P'){e.preventDefault();$('play').click();return;}
  const events={T:84,M:77,Z:90,Y:89,R:82};if(events[key]){e.preventDefault();act(events[key]);}
});
function restoreView(view){
  phase=Number.isFinite(view?.phase)?((view.phase%TAU)+TAU)%TAU:0;
  speed=Number.isFinite(view?.speed)&&view.speed>=.25&&view.speed<=2?Math.round(view.speed*4)/4:1;
}
function readInitial(){
  selected=-1;phase=0;speed=1;setPlaying(false);
  if(location.hash.length>1){
    try{if(location.hash.length>2000)throw Error();const [model,...parts]=location.hash.slice(1).split('&');snapshot=core.from_link(decodeURIComponent(model));const view=new URLSearchParams(parts.join('&'));restoreView({phase:Number(view.get('phase')||0),speed:Number(view.get('speed')||1)});}catch{snapshot=core.from_link('invalid');}
  }else{
    try{const saved=localStorage.getItem(STORE)||'';snapshot=core.restore(saved.length<=100000?saved:'invalid');const raw=localStorage.getItem(VIEW)||'';if(raw.length<2000){try{const view=JSON.parse(raw);if(view.model===core.share(snapshot))restoreView(view);}catch{}}}catch{snapshot=core.start();}
  }
  motionUI();
}
window.addEventListener('hashchange',()=>{if(ready){cancelDrag();readInitial();update();}});
async function loadBank(name,basis){
  const [manifestResponse,dataResponse]=await Promise.all([fetch(`./${name}.json`,{cache:'no-cache'}),fetch(`./${name}.bin.gz`,{cache:'no-cache'})]);
  if(!manifestResponse.ok||!dataResponse.ok)throw Error('The wave data could not be loaded.');
  const manifest=await manifestResponse.json();let bytes=await dataResponse.arrayBuffer();
  if(new Uint8Array(bytes)[0]===31){if(!globalThis.DecompressionStream)throw Error('This browser needs DecompressionStream support. Try a current browser.');bytes=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();}
  const header=new DataView(bytes);
  if(bytes.byteLength!==1769492||header.getUint32(0,true)!==0x314b4646||header.getUint32(4,true)!==1||header.getUint32(8,true)!==3||header.getUint32(12,true)!==48||header.getUint32(16,true)!==3072||manifest.basis!==basis)throw Error('The wave bank has an invalid format.');
  const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),v=>v.toString(16).padStart(2,'0')).join('');
  if(digest!==manifest.sha256)throw Error('The wave bank did not pass its integrity check.');
  const bank=new Float32Array(bytes,20);if(bank.some(x=>!Number.isFinite(x)))throw Error('The wave bank contains invalid values.');return bank;
}
async function load(){
  ready=false;setPlaying(false);delete document.documentElement.dataset.ready;
  $('failure').hidden=true;$('loading').hidden=false;$('empty').hidden=true;
  try{
    if(!core.check_core())throw Error('The gesture engine failed its self-check.');
    $('loading').textContent='Checking the wave banks…';
    [globalThis.foldfieldKernels,globalThis.foldfieldCosines]=await Promise.all([loadBank('kernels','sin'),loadBank('cosines','cos')]);
    readInitial();ready=true;
    for(const id of ['topology','rule','positive','negative','clear','export','share','play','speed','rewind'])$(id).disabled=false;
    $('loading').hidden=true;update();document.documentElement.dataset.ready='true';
  }catch(error){$('loading').hidden=true;$('failure').hidden=false;$('failure-message').textContent=error.message;status('The instrument is not ready. Retry loading to continue.',true);}
}
$('retry').onclick=load;resize();load();
