"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

/**
 * Light/dark theme toggle. Initial value is read from `localStorage`
 * by the small synchronous script in `layout.tsx`, which prevents a
 * flash on first paint. This hook keeps a React mirror of that value
 * and writes back to both `<html data-theme>` and storage on change.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    if (t === "light" || t === "dark") setTheme(t);
  }, []);

  const toggle = useCallback(() => {
    const current = (document.documentElement.getAttribute("data-theme") ??
      "light") as Theme;
    const next: Theme = current === "dark" ? "light" : "dark";

    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode etc. — ignore */
      }
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Modern path: browser cross-fades the old and new theme for us.
    type DocWithVT = Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    const doc = document as DocWithVT;
    if (!reducedMotion && typeof doc.startViewTransition === "function") {
      doc.startViewTransition(apply);
      return;
    }

    // Fallback: temporarily enable color/bg/border transitions on everything,
    // remove the class after the animation so we don't interfere with hovers.
    if (!reducedMotion) {
      document.documentElement.classList.add("theme-animating");
      window.setTimeout(() => {
        document.documentElement.classList.remove("theme-animating");
      }, 500);
    }
    apply();
  }, []);

  return { theme, toggle };
}

/**
 * Small icon button that toggles dark / light. Drops into the nav.
 * Shown icon = current theme (sun in light, moon in dark).
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="theme-toggle"
    >
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
