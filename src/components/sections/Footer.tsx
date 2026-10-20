"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { site } from "@/data/site";

type LenisLike = { scrollTo: (t: number, o?: { duration?: number }) => void };

function scrollToTop(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.0 });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

/**
 * Compact site footer. Shows a short note about who the site belongs to,
 * the real contact channels, and the four main routes. No slogans, no
 * fake availability, no decorative blocks.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-plain">
      <div className="wrap">
        <div className="footer-plain__grid">
          <div className="footer-plain__col">
            <h3 className="footer-plain__label">About</h3>
            <p className="footer-plain__body">
              {site.name}, a full-stack engineer and co-founder of{" "}
              {site.company.name}, based in {site.location.city},{" "}
              {site.location.country}.
            </p>
          </div>

          <div className="footer-plain__col">
            <h3 className="footer-plain__label">Elsewhere</h3>
            <ul className="footer-plain__list">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              {site.twitter && (
                <li>
                  <a
                    href={`https://x.com/${site.twitter.replace(/^@/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X / Twitter
                  </a>
                </li>
              )}
              <li>
                <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                  {site.company.name}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-plain__col">
            <h3 className="footer-plain__label">Site</h3>
            <ul className="footer-plain__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-plain__base">
          <span>
            © {year} {site.name}
          </span>
          <a href="#top" onClick={scrollToTop}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
