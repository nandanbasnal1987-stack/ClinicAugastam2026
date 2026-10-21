import { useEffect, type RefObject } from "react";
import { createScope, type Scope } from "@/lib/utils";

/**
 * Runs `init` against the section element after mount. Every listener, timer,
 * animation frame and observer it creates is tracked and removed on unmount, so
 * nothing is registered twice (React Strict Mode, client navigation).
 */
export function useSectionScript(ref: RefObject<HTMLElement | null>, init: (ctx: Scope) => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scope = createScope(el);
    scope.run(init);
    return () => scope.dispose();
  }, [ref, init]);
}
