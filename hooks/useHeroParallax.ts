import { useEffect, type RefObject } from "react";

/** Pointer-driven parallax for the hero background (scene + photo layers). */
export function useHeroParallax(
  hero: RefObject<HTMLElement | null>,
  layers: RefObject<HTMLElement | null>[],
) {
  useEffect(() => {
    const el = hero.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      const t = `translate(${-dx * 26}px, ${-dy * 16}px)`;
      layers.forEach((l) => { if (l.current) l.current.style.transform = t; });
    };
    const reset = () => layers.forEach((l) => { if (l.current) l.current.style.transform = ""; });
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
