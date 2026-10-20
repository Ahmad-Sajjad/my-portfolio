"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";
import { MobileMenu } from "./MobileMenu";

/**
 * Top navigation shown on every page.
 * Left: wordmark. Centre: route links. Right: Get in touch.
 * Active route picks up a thin REIVEX-blue underline.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile sheet when the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link
          className="nav__brand"
          href="/"
          aria-label={`${site.name} — home`}
        >
          <span className="nav__wordmark">{site.name}</span>
        </Link>

        <div className="nav__links">
          {navLinks.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="nav__right">
          <Link href="/contact" className="nav__cta">
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
