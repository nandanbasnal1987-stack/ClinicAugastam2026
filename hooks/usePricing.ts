// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 11: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  /* count-up prices when scrolled into view / replay on hover */
  function count(el){const v=+el.dataset.v,t0=performance.now(),d=1100;cancelAnimationFrame(el._r);
    (function f(t){const k=Math.min((t-t0)/d,1);el.textContent='$'+Math.round(v*(1-Math.pow(1-k,3)));if(k<1)el._r=ctx.raf(f)})(t0)}
  const io=new ctx.IO(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);io.unobserve(e.target)}}),{threshold:.6});
  SEC.querySelectorAll('.n').forEach(n=>{io.observe(n);n.closest('.card').addEventListener('mouseenter',()=>count(n))});
  /* click: make a card the active plan + button ripple */
  const cards=[...SEC.querySelectorAll('.card')];
  cards.forEach(c=>c.addEventListener('click',e=>{
    const b=c.querySelector('.btn');
    if(e.target.closest('.btn')){const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,p=document.createElement('span');
      p.className='ripple';p.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;b.appendChild(p);ctx.setTimeout(()=>p.remove(),650)}
  }));

}

export function usePricing(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
