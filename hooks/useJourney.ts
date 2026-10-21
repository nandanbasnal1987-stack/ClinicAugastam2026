// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 4: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
    var track=document.getElementById('sec4-track'),rect=document.getElementById('sec4-reveal'),
        pts=[].slice.call(track.querySelectorAll('.pt')),
        reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,raf;

    function run(){
      cancelAnimationFrame(raf);
      pts.forEach(function(p){p.classList.remove('on')});
      if(reduce){rect.setAttribute('width',1416);pts.forEach(function(p){p.classList.add('on')});return}
      var t0=performance.now(),dur=3200;
      rect.setAttribute('width',0);
      (function f(t){
        var p=Math.min((t-t0)/dur,1),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,x=e*1480;
        rect.setAttribute('width',x);
        pts.forEach(function(el){ if(x>=(+el.dataset.x)-90) el.classList.add('on') });
        if(p<1) raf=ctx.raf(f);
      })(t0);
    }

    var seen=false;
    new ctx.IO(function(es,o){
      if(es[0].isIntersecting&&!seen){seen=true;run();o.disconnect()}
    },{threshold:.35}).observe(track);
    document.getElementById('sec4-replay').addEventListener('click',run);

    // click / Enter highlights a step
    var steps=[].slice.call(track.querySelectorAll('.step'));
    steps.forEach(function(s){
      function act(){steps.forEach(function(x){x.classList.remove('act')});s.classList.add('act')}
      s.addEventListener('click',act);
      s.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}});
    });

    var root=document.documentElement;
    document.getElementById('sec4-theme').addEventListener('click',function(){
      var dark=getComputedStyle(document.getElementById('section-4')).getPropertyValue('--bg').trim()==='#0c1320';
      root.setAttribute('data-theme',dark?'light':'dark');
    });

}

export function useJourney(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
