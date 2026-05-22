"use client";

import { useEffect, useRef } from "react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

/**
 * Fullscreen slide-down navigation overlay shown on phones (≤640px).
 * Triggered from the hamburger button in Nav.tsx. While open: body
 * scroll is locked, Escape closes, focus is trapped between the close
 * button and the last link.
 */
export function MobileMenu({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const overlay = overlayRef.current;

    // Lock background scroll. Restore the prior value on cleanup so we
    // don't fight any future Lenis modal-style overrides.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the first focusable element (the close button) so keyboard
    // users land inside the overlay.
    const focusables = overlay?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      ref={overlayRef}
      className={`mobile-menu ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
    >
      <button
        type="button"
        className="mobile-menu-close"
        aria-label="Close menu"
        onClick={onClose}
      >
        ×
      </button>
      <nav className="mobile-menu-nav">
        {navLinks.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={onClose}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="mobile-menu-foot">
        <div className="mobile-menu-status">
          <span className="pulse" aria-hidden />
          <span>available for work</span>
        </div>
        <a
          className="mobile-menu-email"
          href={`mailto:${site.email}`}
          onClick={onClose}
        >
          {site.email} <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
