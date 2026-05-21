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
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode etc. — ignore */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}

/**
 * Small icon button that toggles dark / light. Drops into the nav.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      style={{
        appearance: "none",
        background: "transparent",
        border: "1px solid var(--border)",
        color: "var(--text-dim)",
        width: 28,
        height: 28,
        borderRadius: "50%",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        lineHeight: 1,
        transition: "color 0.2s, border-color 0.2s",
      }}
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}
