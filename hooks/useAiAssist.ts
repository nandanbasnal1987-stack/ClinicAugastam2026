// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 2: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  /* Helper: get element by ID */
      const $ = id => document.getElementById(id),
            fill = $('sec2-fill'),
            hint = $('sec2-hint');

      /* State */
      let sec = 3,          // elapsed seconds
          timer,            // interval for the timer
          typer,            // interval for the typewriter effect
          state = 'live';   // 'live' | 'done' | 'closed'

      /* Cycling prompts shown in the hint line */
      const prompts = [
        'Speak Allergy information…',
        'Say "Penicillin, rash"…',
        'Mention severity and reaction…'
      ];
      let pi = 0;

      /* ----- Typewriter effect for the hint line ----- */
      function type(txt) {
        clearInterval(typer);
        let i = 0;
        hint.className = 'hint';
        typer = ctx.setInterval(() => {
          hint.textContent = txt.slice(0, ++i);
          if (i >= txt.length) clearInterval(typer);
        }, 35);
      }

      /* ----- Increment the timer display ----- */
      function tick() {
        sec++;
        $('sec2-tm').textContent = '00:' + String(sec).padStart(2, '0');
      }

      /* ----- Start / resume recording ----- */
      function start() {
        state = 'live';
        sec = 0;
        $('sec2-tm').textContent = '00:00';
        fill.classList.add('live');
        fill.classList.remove('closed');
        $('sec2-lst').textContent = 'Listening…';
        $('sec2-bt').textContent = 'Stop & Fill';

        clearInterval(timer);
        timer = ctx.setInterval(tick, 1000);

        /* Show the next prompt */
        type(prompts[pi = (pi + 1) % prompts.length]);
      }

      /* ----- Stop recording and show result ----- */
      function stop() {
        state = 'done';
        fill.classList.remove('live');
        clearInterval(timer);
        clearInterval(typer);
        $('sec2-lst').textContent = 'Filled';
        $('sec2-bt').textContent = 'Record again';
        hint.className = 'hint ok';
        hint.textContent = 'Allergy: Penicillin — rash (moderate)';
      }

      /* ----- Button toggles between start / stop ----- */
      $('sec2-btn').onclick = () => state === 'live' ? stop() : start();

      /* ----- Close / pause the panel ----- */
      $('sec2-x').onclick = () => {
        state = 'closed';
        fill.classList.remove('live');
        fill.classList.add('closed');
        clearInterval(timer);
        clearInterval(typer);
        $('sec2-lst').textContent = 'Paused';
        $('sec2-bt').textContent = 'Start';
        hint.textContent = '';
        state = 'done';
      };

      /* ----- Initial boot ----- */
      timer = ctx.setInterval(tick, 1000);
      type(prompts[0]);

}

export function useAiAssist(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
