// Browser adapter: canvas, input, storage, clipboard, downloads and asset IO.
// Domain transitions and superposition execute in compiled Koka (core/).
import * as core from './core/web_core.mjs';
const $=id=>document.getElementById(id),canvas=$('fabric'),ctx=canvas.getContext('2d');
const STORE='foldfield.browser.v1';
let snapshot=core.start(),scene=JSON.parse(core.describe(snapshot)),field=new Array(3072).fill(0),ready=false,polarity=1;
let width=0,height=0,cursor=null,keyboardCursor={x:31,y:23};
const topologies=['Open sheet','Cylinder','Möbius strip'],rules=['Single','Mirror pair','Opposed pair'];
const notices=['Click or tap the fabric to plant the first wave.','Saved in this browser. Every edit can be undone.','No earlier state.','No later state.','Sixteen-source limit. Undo or clear to make room.','That saved field was invalid. Opened an empty sheet.','Loaded a linked field. Make it your own.'];
function status(text,error=false){$('status').textContent=text;$('status').classList.toggle('error',error);}
function metric(){const mx=width<600?17:32,my=30;return {mx,my,cw:width-2*mx-27,ch:height-2*my,shear:27};}
function point(x,y,value=0){const m=metric();return [m.mx+x*m.cw/63+y*m.shear/47,m.my+y*m.ch/47-value*(width<600?15:26)];}
function line(x1,y1,x2,y2,color,lineWidth=1){ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
function draw(){
  if(!width||!height)return;ctx.fillStyle='#0f1818';ctx.fillRect(0,0,width,height);ctx.save();ctx.beginPath();ctx.rect(6,6,width-12,height-12);ctx.clip();
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
  for(const [x,y,s] of scene.sources){const [px,py]=point(x,y),color=s>0?'#e8ac51':'#88d3c3';ctx.strokeStyle=color;ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(px,py,4.5,0,Math.PI*2);ctx.stroke();line(px-2.3,py,px+2.3,py,color);if(s>0)line(px,py-2.3,px,py+2.3,color);}
  if(cursor&&ready){const [px,py]=point(cursor.x,cursor.y);ctx.setLineDash([2,3]);ctx.strokeStyle='#c1cdb6';ctx.lineWidth=.8;ctx.beginPath();ctx.arc(px,py,9,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}
  ctx.restore();
}
function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);width=rect.width;height=rect.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
new ResizeObserver(resize).observe(canvas);
function update(){
  scene=JSON.parse(core.describe(snapshot));field=core.values(snapshot);
  if(field.length!==3072||field.some(x=>!Number.isFinite(x)))throw Error('The computation returned an invalid field.');
  $('surface-name').textContent=topologies[scene.topology];$('rule-name').textContent=rules[scene.rule];$('count').textContent=String(scene.sources.length).padStart(2,'0');$('seam').textContent=['EDGES FREE','EDGES JOINED','ONE HALF TWIST'][scene.topology];
  $('empty').hidden=scene.sources.length>0||!ready;$('undo').disabled=!scene.undo;$('redo').disabled=!scene.redo;canvas.setAttribute('aria-label',`Wave fabric, ${scene.sources.length} sources, ${topologies[scene.topology]}. Arrow keys move a cursor; Enter places a source.`);draw();status(notices[scene.notice]||notices[1],scene.notice>=2&&scene.notice<=5);
}
function act(event,x=0,y=0){if(!ready)return;const previous=snapshot;try{snapshot=core.dispatch(snapshot,event,x,y);update();try{localStorage.setItem(STORE,snapshot);if(location.hash)history.replaceState(null,'',location.pathname+location.search);}catch{status('The field is ready, but browser storage could not save it. Share a pattern link to keep it.',true);}}catch(error){snapshot=previous;status(error.message,true);}}
function coordinate(e){const r=canvas.getBoundingClientRect(),m=metric(),py=(e.clientY-r.top-m.my)*47/m.ch,px=(e.clientX-r.left-m.mx-py*m.shear/47)*63/m.cw;if(px<-.5||px>63.5||py<-.5||py>47.5)return null;return {x:Math.max(0,Math.min(63,Math.round(px))),y:Math.max(0,Math.min(47,Math.round(py)))};}
canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;cursor=coordinate(e);draw();});canvas.addEventListener('pointerleave',()=>{cursor=null;draw();});
canvas.addEventListener('pointerdown',e=>{if(e.button!==0&&e.button!==2)return;const p=coordinate(e);if(!p)return;e.preventDefault();canvas.focus({preventScroll:true});keyboardCursor=p;cursor=p;act(e.button===2?2:polarity,p.x,p.y);});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();keyboardCursor.x=Math.max(0,Math.min(63,keyboardCursor.x+(e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0)));keyboardCursor.y=Math.max(0,Math.min(47,keyboardCursor.y+(e.key==='ArrowDown'?1:e.key==='ArrowUp'?-1:0)));cursor={...keyboardCursor};draw();}else if(e.key==='Enter'||e.key===' '){e.preventDefault();act(e.shiftKey?2:polarity,keyboardCursor.x,keyboardCursor.y);}});
function choose(sign){polarity=sign;$('positive').setAttribute('aria-pressed',String(sign===1));$('negative').setAttribute('aria-pressed',String(sign===2));}
$('positive').onclick=()=>choose(1);$('negative').onclick=()=>choose(2);
for(const [id,event] of [['topology',84],['rule',77],['undo',90],['redo',89],['clear',82]])$(id).onclick=()=>act(event);
function help(){if($('guide').open)$('guide').close();else $('guide').showModal();}
$('help').onclick=help;for(const dialog of document.querySelectorAll('dialog')){dialog.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});}
async function exportImage(){if(!ready)return;const old=cursor;cursor=null;draw();const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));cursor=old;draw();if(!blob){status('The browser could not create an image.',true);return;}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`foldfield-${new Date().toISOString().replace(/[:.]/g,'-')}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);status('PNG prepared for download.');}
$('export').onclick=exportImage;
$('share').onclick=()=>{$('pattern-link').value=location.origin+location.pathname+'#'+encodeURIComponent(core.share(snapshot));$('copy-status').textContent='';$('share-dialog').showModal();};
$('copy-link').onclick=async()=>{try{await navigator.clipboard.writeText($('pattern-link').value);$('copy-status').textContent='Copied. Anyone with the link can open this field.';}catch{$('pattern-link').focus();$('pattern-link').select();$('copy-status').textContent='Select and copy the link above; clipboard access was unavailable.';}};
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.target instanceof HTMLInputElement||document.querySelector('dialog[open]'))return;const key=e.key.toUpperCase();if(key==='H'){e.preventDefault();help();return;}if(key==='E'){e.preventDefault();exportImage();return;}const events={T:84,M:77,Z:90,Y:89,R:82};if(events[key]){e.preventDefault();act(events[key]);}});
function readInitial(){if(location.hash.length>1){try{if(location.hash.length>2000)throw Error();snapshot=core.from_link(decodeURIComponent(location.hash.slice(1)));}catch{snapshot=core.from_link('invalid');}}else{try{const saved=localStorage.getItem(STORE)||'';snapshot=core.restore(saved.length<=100000?saved:'invalid');}catch{snapshot=core.start();}}}
window.addEventListener('hashchange',()=>{if(ready){readInitial();update();}});
async function load(){
  ready=false;$('failure').hidden=true;$('loading').hidden=false;$('empty').hidden=true;
  try{
    if(!core.check_core())throw Error('The gesture engine failed its self-check.');
    const [manifestResponse,dataResponse]=await Promise.all([fetch('./kernels.json'),fetch('./kernels.bin.gz')]);if(!manifestResponse.ok||!dataResponse.ok)throw Error('The wave data could not be loaded.');
    const manifest=await manifestResponse.json();let bytes=await dataResponse.arrayBuffer();$('loading').textContent='Checking the wave bank…';
    if(new Uint8Array(bytes)[0]===31){if(!globalThis.DecompressionStream)throw Error('This browser needs DecompressionStream support. Try a current browser.');bytes=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();}
    const header=new DataView(bytes);if(bytes.byteLength!==1769492||header.getUint32(0,true)!==0x314b4646||header.getUint32(4,true)!==1||header.getUint32(8,true)!==3||header.getUint32(12,true)!==48||header.getUint32(16,true)!==3072)throw Error('The wave bank has an invalid format.');
    const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),v=>v.toString(16).padStart(2,'0')).join('');if(digest!==manifest.sha256)throw Error('The wave bank did not pass its integrity check.');
    const kernels=new Float32Array(bytes,20);if(kernels.some(x=>!Number.isFinite(x)))throw Error('The wave bank contains invalid values.');globalThis.foldfieldKernels=kernels;
    readInitial();ready=true;for(const id of ['topology','rule','positive','negative','clear','export','share'])$(id).disabled=false;$('loading').hidden=true;update();document.documentElement.dataset.ready='true';
  }catch(error){$('loading').hidden=true;$('failure').hidden=false;$('failure-message').textContent=error.message;status('The instrument is not ready. Retry loading to continue.',true);}
}
$('retry').onclick=load;resize();load();
