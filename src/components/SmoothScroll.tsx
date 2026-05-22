"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Mounts a Lenis smooth-scroll instance on the page. Replaces the
 * browser's native scroll with a velocity-based ease curve for a
 * buttery editorial feel. Respects `prefers-reduced-motion`
 * automatically (Lenis disables itself when the user has opted out).
 *
 * Drop into `app/page.tsx` once — no props needed. Anchor clicks,
 * `scrollIntoView({ behavior: "smooth" })` calls, and wheel/trackpad
 * input all flow through it.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Lower lerp = smoother / slower. 0.08–0.12 is the editorial sweet spot.
      lerp: 0.09,
      smoothWheel: true,
      // Touch devices stay native — Lenis on touch tends to feel sluggish.
      syncTouch: false,
    });

    // Expose so modals (and anything else that needs to lock page scroll)
    // can call lenis.stop() / lenis.start() without prop-drilling a ref.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
