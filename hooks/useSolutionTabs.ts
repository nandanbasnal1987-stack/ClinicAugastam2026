// @ts-nocheck -- original section script, kept line-for-line so behaviour is identical to the HTML site.
import type { RefObject } from "react";
import { useSectionScript } from "./useSectionScript";
import type { Scope } from "@/lib/utils";

/** Section 5: runs the section's interactions once on mount and tears everything down on unmount. */
function init(ctx: Scope) {
  const SEC = ctx.root;
  /* ----- Element references ----- */
      const tabs   = [...SEC.querySelectorAll('.tab')],
            panels = [...SEC.querySelectorAll('.panel')],
            ind    = document.getElementById('sec5-ind');

      const cy    = document.getElementById('sec5-cy'),
            cb    = document.getElementById('sec5-cb'),
            midt  = document.getElementById('sec5-midt'),
            donut = document.getElementById('sec5-donut');

      /* Donut proportions (% of the full circle) */
      const YP = 175 / 245 * 100,   // cash share
            BP = 70  / 245 * 100;   // online share

      let raf;  // requestAnimationFrame handle

      /* ==========================================================================
         UTILITIES
         ========================================================================== */

      /* Generic easing tween (ease-out cubic) */
      function tween(fn, d) {
        cancelAnimationFrame(raf);
        const t0 = performance.now();
        (function f(t) {
          const k = Math.min((t - t0) / d, 1);
          fn(1 - Math.pow(1 - k, 3));
          if (k < 1) raf = ctx.raf(f);
        })(t0);
      }

      /* ==========================================================================
         DONUT CHART ANIMATION
         ========================================================================== */
      function playDonut() {
        midt.textContent = '₹ 0';

        tween(e => {
          /* Sweep the arcs from 0 → target */
          cb.setAttribute('stroke-dasharray', `${BP * e} 100`);
          cy.setAttribute('stroke-dasharray', `${YP * e} 100`);
          cy.setAttribute('stroke-dashoffset', -BP * e);

          /* Count the money value up to ₹ 20,045 */
          midt.textContent = '₹ ' + Math.round(20045 * e).toLocaleString('en-IN');
        }, 1500);
      }

      /* ==========================================================================
         NUMBER COUNTERS (panels 2 & 3)
         ========================================================================== */
      function counters(p) {
        p.querySelectorAll('[data-n]').forEach(el => {
          const v    = +el.dataset.n,
                s    = el.dataset.s || '',
                t0   = performance.now();

          (function f(t) {
            const k = Math.min((t - t0) / 1000, 1);
            el.textContent = Math.round(v * (1 - Math.pow(1 - k, 3))) + s;
            if (k < 1) ctx.raf(f);
          })(t0);
        });
      }

      /* ==========================================================================
         TAB SWITCHING
         ========================================================================== */
      function go(i) {
        /* Update ARIA + active class */
        tabs.forEach((t, k) => t.setAttribute('aria-selected', k === i));
        panels.forEach((p, k) => p.classList.toggle('on', k === i));

        /* Slide the indicator */
        ind.style.translate = `calc(${i * 100}% + ${i * 19}px) 0`;

        /* Trigger the appropriate animation for the newly shown panel */
        if (i === 0) {
          playDonut();
        } else {
          counters(panels[i]);
        }
      }

      /* ----- Click + keyboard handling for tabs ----- */
      tabs.forEach((t, i) => {
        t.onclick = () => go(i);

        t.onkeydown = e => {
          if (e.key === 'ArrowRight') {
            go((i + 1) % 3);
            tabs[(i + 1) % 3].focus();
          }
          if (e.key === 'ArrowLeft') {
            go((i + 2) % 3);
            tabs[(i + 2) % 3].focus();
          }
        };
      });

      /* ==========================================================================
         DONUT HOVER INTERACTIONS
         ========================================================================== */

      /* Legend rows */
      SEC.querySelectorAll('.leg > div').forEach(d => {
        const k = d.dataset.k;

        d.addEventListener('mouseenter', () => {
          donut.classList.add('h' + k);
          midt.innerHTML = k === 'y'
            ? '175<small>Cash</small>'
            : '70<small>Online</small>';
        });

        d.addEventListener('mouseleave', () => {
          donut.classList.remove('hy', 'hb');
          midt.textContent = '₹ 20,045';
        });
      });

      /* Donut arcs themselves */
      [['y', cy], ['b', cb]].forEach(([k, c]) => {
        c.addEventListener('mouseenter', () => {
          donut.classList.add('h' + k);
          midt.innerHTML = k === 'y'
            ? '175<small>Cash</small>'
            : '70<small>Online</small>';
        });

        c.addEventListener('mouseleave', () => {
          donut.classList.remove('hy', 'hb');
          midt.textContent = '₹ 20,045';
        });
      });

      /* ----- Boot: animate the initially visible panel ----- */
      playDonut();

}

export function useSolutionTabs(ref: RefObject<HTMLElement | null>) {
  useSectionScript(ref, init);
}
