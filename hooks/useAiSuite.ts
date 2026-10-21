// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 9: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  /* fit hero canvas */
  const hero=document.getElementById('sec9-hero'),cv=document.getElementById('sec9-canvas');
  function fit(){const k=Math.min(1,innerWidth/1107);cv.style.setProperty('--k',k);hero.style.height=(1180*k)+'px'}
  fit();addEventListener('resize',fit);
  /* orbit parallax + ring highlight + click ping */
  const orbits=[...SEC.querySelectorAll('.orbit')];
  hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
    orbits.forEach(o=>{const d=+o.dataset.d;o.style.setProperty('--x',(-dx*d*2)+'px');o.style.setProperty('--y',(-dy*d*2)+'px')})});
  hero.addEventListener('pointerleave',()=>orbits.forEach(o=>{o.style.setProperty('--x','0px');o.style.setProperty('--y','0px')}));
  SEC.querySelectorAll('.node').forEach(n=>{const o=orbits[n.parentElement.classList.contains('r')?1:0];
    ['pointerenter','focus'].forEach(t=>n.addEventListener(t,()=>o.classList.add('act')));
    ['pointerleave','blur'].forEach(t=>n.addEventListener(t,()=>o.classList.remove('act')));
    n.addEventListener('click',()=>{n.classList.remove('ping');void n.offsetWidth;n.classList.add('ping')})});
  /* waveform */
  const w=document.getElementById('sec9-wave');w.replaceChildren();
  [30,60,90,40,110,150,60,200,120,70,160,100,230,140,90,130,70,170,50,110,60,40,80,30].forEach((h,i)=>{const b=document.createElement('b');b.style.setProperty('--h',h*.85);b.style.setProperty('--i',i);w.appendChild(b)});
  /* notes tabs */
  const sets=[[["Chief Complaints","Viral fever — for 5 days"],["Diagnosis","Viral fever — Active; 5 days"],["Medication","Dolo 650"],["Plan of Care","Tests will be arranged"]],[["Subjective","Fever, body ache"],["Objective","Temp 101°F"],["Assessment","Viral fever"],["Plan","Rest, fluids, Dolo 650"]]];
  const n=document.getElementById('sec9-notes');const draw=i=>n.innerHTML=sets[i].map(s=>`<div class="sec"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('');draw(0);
  SEC.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{SEC.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));t.classList.add('on');draw(+t.dataset.t)});
  /* recorder */
  const rec=document.getElementById('sec9-rec'),rt=document.getElementById('sec9-rt');let tm;
  rec.querySelector('button').onclick=()=>{const on=rec.classList.toggle('live');clearInterval(tm);
    if(on){let s=0;rt.textContent='Recording… 0:00';tm=ctx.setInterval(()=>{s++;rt.textContent='Recording… 0:'+String(s).padStart(2,'0')},1000)}else rt.textContent='Tap the mic to start recording'};
  /* OCR extract */
  const doc=document.getElementById('sec9-doc');
  doc.onclick=()=>{const f=[...SEC.querySelectorAll('.field')];f.forEach(x=>x.classList.remove('show'));document.getElementById('sec9-dl').textContent='extracting…';
    f.forEach((x,i)=>ctx.setTimeout(()=>{x.classList.add('show');if(i==f.length-1)document.getElementById('sec9-dl').textContent='click to replace'},350*(i+1)))};

}

export function useAiSuite(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
