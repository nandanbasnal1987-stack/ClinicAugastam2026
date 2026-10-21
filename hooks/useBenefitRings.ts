// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 8: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  const rings=SEC.querySelectorAll('.ring');
  function play(r){
    const v=+r.dataset.v,p=r.querySelector('.p'),b=r.querySelector('b');
    p.style.transition='none';p.style.strokeDasharray='0 100';p.getBoundingClientRect();
    p.style.transition='';p.style.strokeDasharray=v+' 100';
    const t0=performance.now(),d=1800;
    (function f(t){const k=Math.min((t-t0)/d,1),e=1-Math.pow(1-k,4);b.textContent=Math.round(v*e)+'%';if(k<1)ctx.raf(f)})(t0);
  }
  const io=new ctx.IO(es=>es.forEach(e=>{if(e.isIntersecting){play(e.target);io.unobserve(e.target)}}),{threshold:.4});
  rings.forEach((r,i)=>{io.observe(r);r.addEventListener('click',()=>play(r));r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();play(r)}})});

}

export function useBenefitRings(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
