// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 14: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
    var yr=document.getElementById('sec14-yr'); if(yr) yr.textContent=new Date().getFullYear();

    var toast=document.getElementById('sec14-toast'),t;
    function say(m){toast.textContent=m;toast.classList.add('show');clearTimeout(t);t=ctx.setTimeout(function(){toast.classList.remove('show')},1800)}

    // placeholder links: stay on page, confirm the click
    SEC.querySelectorAll('footer a[href="#"]').forEach(function(a){
      a.addEventListener('click',function(e){
        e.preventDefault();
        var s=a.getAttribute('data-store');
        var label=s?('Opening '+s):(a.getAttribute('aria-label')||a.textContent.trim());
        say(s?label:'Go to: '+label);
      });
    });

    // mobile accordions
    var mq=window.matchMedia('(max-width:700px)');
    SEC.querySelectorAll('.col').forEach(function(c){
      var b=c.querySelector('button');
      b.addEventListener('click',function(){
        if(!mq.matches) return;
        var o=c.classList.toggle('open'); b.setAttribute('aria-expanded',o);
      });
    });

    document.getElementById('sec14-up').addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });

    // theme toggle
    var root=document.documentElement;
    document.getElementById('sec14-theme')?.addEventListener('click',function(){
      var dark=getComputedStyle(document.getElementById('section-14')).getPropertyValue('--page').trim()==='#0c131f';
      root.setAttribute('data-theme',dark?'light':'dark');
    });

}

export function useFooter(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
