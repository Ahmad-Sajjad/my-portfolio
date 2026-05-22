"use client";

import type { MouseEvent } from "react";
import { site } from "@/data/site";

type LenisLike = { scrollTo: (target: number, opts?: { duration?: number }) => void };

export function Footer() {
  const year = new Date().getFullYear();

  // Native anchor links jump instantly on touch because Lenis is mounted
  // with `syncTouch: false` (see SmoothScroll.tsx). Routing the click
  // through the Lenis instance exposed on `window.__lenis` gives us a
  // smooth scroll even on phones, with a native `scrollTo` fallback if
  // Lenis somehow isn't mounted yet.
  const onBackToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="watermark" aria-hidden>
        {site.name.split(" ")[0]}.
      </div>
      <div className="wrap">
        <div className="row">
          <span>
            © {year} {site.name}
          </span>
          <span>Built and designed in {site.location.city} — handcrafted, not assembled.</span>
          <a href="#top" onClick={onBackToTop}>back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
