"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed 2px line at the top of the viewport that fills as the page
 * scrolls. Uses requestAnimationFrame to coalesce scroll events and
 * writes directly to the DOM to skip React re-renders.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    let pending = false;

    const update = () => {
      pending = false;
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      el.style.width = `${pct}%`;
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="scroll-progress" ref={ref} aria-hidden />;
}
