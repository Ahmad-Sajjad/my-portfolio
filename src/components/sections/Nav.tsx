"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={`${site.name} — back to top`}>
        <div className="mono-mark" aria-hidden>
          {site.monogram}
        </div>
        <span>{site.name.toLowerCase()}</span>
      </a>
      <div className="links">
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="status">
        <span
          className="pulse"
          aria-hidden
          role="presentation"
        />
        <span>available for work</span>
      </div>
    </nav>
  );
}
