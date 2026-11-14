async (page) => {
  const checks=[],check=(name,value)=>{if(!value)throw Error(name);checks.push(name);};
  // The automation window can be occluded. Activate it for a real rAF sample.
  await page.bringToFront();const cdp=await page.context().newCDPSession(page);
  await cdp.send('Emulation.setFocusEmulationEnabled',{enabled:true});await cdp.send('Page.setWebLifecycleState',{state:'active'});
  const model='FOLDFIELD1|2|0|'+Array.from({length:16},(_,i)=>`${i*4},${i*7%48},${i%2?1:-1}`).join(';');
  await page.setViewportSize({width:1440,height:1000});await page.goto('http://127.0.0.1:4179/#'+encodeURIComponent(model));await page.waitForSelector('html[data-ready="true"]');
  await page.locator('#play').click();
  const sample=await page.evaluate(async()=>{const ctx=document.getElementById('fabric').getContext('2d'),original=ctx.fillRect;let frames=0;ctx.fillRect=function(...args){frames++;return original.apply(this,args);};const start=performance.now();await new Promise(r=>setTimeout(r,1000));ctx.fillRect=original;return {frames,elapsed_ms:performance.now()-start};});
  await page.locator('#play').click();check('Sixteen-source field animates continuously',sample.frames>=15);
  const phases=[];
  for(const key of ['Home','End']){await page.locator('#rewind').click();await page.locator('#speed').focus();await page.keyboard.press(key);await page.locator('#play').click();await page.waitForTimeout(600);await page.locator('#play').click();phases.push(await page.evaluate(()=>JSON.parse(localStorage.getItem('foldfield.view.v1')).phase));}
  check('Speed control changes actual phase progression',phases[1]>phases[0]*3&&phases[0]>0);
  const state=await page.evaluate(async()=>JSON.parse((await import('./core/web_core.mjs?v=3')).describe(localStorage.getItem('foldfield.browser.v1'))));
  check('Motion preserves sixteen sources and empty undo history',state.sources.length===16&&state.undo===0);
  await page.screenshot({path:'C:/experimentalbuilds/experiment-zero/build/motion-maximum.png',fullPage:true});await cdp.detach();
  return {passed:checks.length,checks,frames_in_sample:sample.frames,sample_ms:sample.elapsed_ms,quarter_speed_phase:phases[0],double_speed_phase:phases[1],method:'Visible lifecycle and emulated focus enabled for the automation window; count actual canvas draws during one second.'};
}
