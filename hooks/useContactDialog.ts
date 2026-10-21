// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 12: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
    var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
    var cta=document.getElementById('sec12-cta'),photo=document.getElementById('sec12-photo');
    // gentle parallax on the photo
    cta.addEventListener('mousemove',function(e){
      if(reduce) return;
      var r=cta.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      photo.style.translate=(-x*18)+'px '+(-y*12)+'px';
    });
    cta.addEventListener('mouseleave',function(){photo.style.translate='0 0'});

    var d=document.getElementById('sec12-dlg'),f=document.getElementById('sec12-f');
    document.getElementById('sec12-demo').addEventListener('click',function(){d.classList.remove('done');f.reset();d.showModal()});
    document.getElementById('sec12-cancel').addEventListener('click',function(){d.close()});
    document.getElementById('sec12-close').addEventListener('click',function(){d.close()});
    f.addEventListener('submit',function(e){e.preventDefault();d.classList.add('done')});
    d.addEventListener('click',function(e){if(e.target===d)d.close()});
    document.getElementById('sec12-visit').addEventListener('click',function(e){e.preventDefault()});

    var root=document.documentElement;
    document.getElementById('sec12-theme').addEventListener('click',function(){
      var dark=getComputedStyle(document.getElementById('section-12')).getPropertyValue('--bg').trim()==='#0c1320';
      root.setAttribute('data-theme',dark?'light':'dark');
    });

}

export function useContactDialog(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
