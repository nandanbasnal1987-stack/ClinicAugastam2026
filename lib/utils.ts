/** Everything a section script may create, tracked so it can be cleaned up. */
export interface Scope {
  root: HTMLElement;
  setInterval: (handler: TimerHandler, ms?: number) => number;
  setTimeout: (handler: TimerHandler, ms?: number) => number;
  raf: (cb: FrameRequestCallback) => number;
  IO: typeof IntersectionObserver;
  run: (fn: (scope: Scope) => void) => void;
  dispose: () => void;
}

/**
 * Creates a cleanup scope for a section script. While `run` executes, every
 * addEventListener call is bound to an AbortController; `dispose` aborts it and
 * clears timers, animation frames and IntersectionObservers.
 */
export function createScope(root: HTMLElement): Scope {
  const ac = new AbortController();
  const intervals = new Set<number>();
  const timeouts = new Set<number>();
  const frames = new Set<number>();
  const observers = new Set<IntersectionObserver>();

  class TrackedIO extends IntersectionObserver {
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      super(cb, opts);
      observers.add(this);
    }
  }

  const scope: Scope = {
    root,
    setInterval: (h, ms) => { const id = window.setInterval(h, ms); intervals.add(id); return id; },
    setTimeout: (h, ms) => { const id = window.setTimeout(h, ms); timeouts.add(id); return id; },
    raf: (cb) => { const id = requestAnimationFrame(cb); frames.add(id); return id; },
    IO: TrackedIO,
    run(fn) {
      const original = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function (
        this: EventTarget,
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions,
      ) {
        const base = typeof options === "object" && options ? options : { capture: !!options };
        return original.call(this, type, listener, { ...base, signal: ac.signal });
      } as typeof original;
      try { fn(scope); } finally { EventTarget.prototype.addEventListener = original; }
    },
    dispose() {
      ac.abort();
      intervals.forEach((id) => clearInterval(id));
      timeouts.forEach((id) => clearTimeout(id));
      frames.forEach((id) => cancelAnimationFrame(id));
      observers.forEach((o) => o.disconnect());
    },
  };
  return scope;
}
