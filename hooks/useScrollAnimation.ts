// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 3: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
    var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;

    function count(el){
      var to=+el.dataset.n; if(reduce){el.textContent=to;return}
      var t0=performance.now(),d=1300;
      (function f(t){var p=Math.min((t-t0)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(to*e);if(p<1)ctx.raf(f)})(t0);
    }

    var io=new ctx.IO(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        e.target.classList.add('on');
        e.target.querySelectorAll('[data-n]').forEach(count);
        io.unobserve(e.target);
      });
    },{threshold:.15});
    SEC.querySelectorAll('.rv').forEach(function(el){io.observe(el)});

    // subtle pointer glow-tilt on cards
    SEC.querySelectorAll('.card').forEach(function(c){
      var p=c.querySelector('.photo');
      c.addEventListener('mousemove',function(e){
        if(reduce) return;
        var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        p.style.transformOrigin=(50+x*40)+'% '+(50+y*40)+'%';
      });
    });

    var root=document.documentElement;
    document.getElementById('sec3-theme').addEventListener('click',function(){
      var dark=getComputedStyle(document.getElementById('section-3')).getPropertyValue('--bg').trim()==='#0c1320';
      root.setAttribute('data-theme',dark?'light':'dark');
    });

}

export function useScrollAnimation(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
