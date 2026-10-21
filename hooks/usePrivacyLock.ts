// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 10: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  const wrap=document.getElementById('sec10-wrap'),lock=document.getElementById('sec10-lock'),sh=document.getElementById('sec10-sh');
  function fit(){const w=innerWidth;wrap.style.setProperty('--k',w>900?Math.min(1,w/1416):1);wrap.style.setProperty('--a',Math.min(1,(w-48)/360))}fit();addEventListener('resize',fit);
  let seen=false;
  function lockUp(){lock.classList.remove('in','closed','flash');void lock.offsetWidth;lock.classList.add('in');
    ctx.setTimeout(()=>{lock.classList.add('closed','flash');ctx.setTimeout(()=>lock.classList.remove('flash'),500)},5*130+700)}
  new ctx.IO(es=>es.forEach(e=>{if(e.isIntersecting&&!seen){seen=true;lockUp()}}),{threshold:.4}).observe(wrap);
  /* click the shackle / lock to unlock and relock; hover peeks */
  sh.addEventListener('click',()=>{if(lock.classList.contains('closed')){lock.classList.remove('closed','flash')}else{lock.classList.add('closed','flash');ctx.setTimeout(()=>lock.classList.remove('flash'),500)}});
  sh.addEventListener('pointerenter',()=>{if(lock.classList.contains('closed'))lock.classList.add('peek')});
  sh.addEventListener('pointerleave',()=>lock.classList.remove('peek'));
  lock.querySelectorAll('.pill').forEach(p=>{p.addEventListener('pointerenter',()=>{if(lock.classList.contains('closed'))lock.classList.add('peek')});p.addEventListener('pointerleave',()=>lock.classList.remove('peek'))});

}

export function usePrivacyLock(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
