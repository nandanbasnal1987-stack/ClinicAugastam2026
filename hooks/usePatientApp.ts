// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 6: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  const wrap=document.getElementById('sec6-wrap'),art=document.getElementById('sec6-art');
  function fit(){const w=innerWidth;if(w>900){wrap.style.setProperty('--k',Math.min(1,w/1416));wrap.style.setProperty('--a',1)}else{wrap.style.setProperty('--k',1);wrap.style.setProperty('--a',Math.min(1,w/800))}}
  fit();addEventListener('resize',fit);
  /* phone tilt + hand parallax */
  const ph=document.getElementById('sec6-ph'),hand=document.getElementById('sec6-hand'),thumb=document.getElementById('sec6-thumb');
  wrap.addEventListener('pointermove',e=>{const r=wrap.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
    ph.style.transform=`rotateY(${dx*14}deg) rotateX(${-dy*10}deg)`;hand.style.translate=`${dx*10}px ${dy*6}px`;thumb.style.translate=`${dx*16}px ${dy*8}px`});
  wrap.addEventListener('pointerleave',()=>{ph.style.transform='';hand.style.translate='';thumb.style.translate=''});
  /* bullets drive the app screen */
  const sc=document.getElementById('sec6-sc'),items=[...SEC.querySelectorAll('#sec6-list li')],bell=document.getElementById('sec6-bell');
  let cur=-1,auto;
  function show(i){cur=i;items.forEach((l,k)=>l.classList.toggle('on',k===i));const l=items[i],g=l.dataset.go,hl=l.dataset.hl;
    sc.scrollTo({top:g==='0'?0:document.getElementById(g).offsetTop-60});
    SEC.querySelectorAll('.tile,.home div').forEach(t=>t.classList.remove('hl'));
    if(hl==='appt'||hl==='tele')SEC.querySelector(`[data-k=${hl}]`).classList.add('hl');
    if(hl==='home')SEC.querySelectorAll('.home div').forEach(t=>t.classList.add('hl'));
    bell.classList.remove('ring');if(hl==='bell'){void bell.offsetWidth;bell.classList.add('ring')}}
  items.forEach((l,i)=>{l.addEventListener('mouseenter',()=>{clearInterval(auto);show(i)});l.addEventListener('click',()=>{clearInterval(auto);show(i)})});
  show(0);auto=ctx.setInterval(()=>show((cur+1)%items.length),3200);
  /* tiles select */
  SEC.querySelectorAll('.tile').forEach(t=>t.addEventListener('click',()=>t.classList.toggle('sel')));

}

export function usePatientApp(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
