"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/data/site";

type Item = {
  label: string;
  k: string;
  action: () => void;
};

/**
 * Command palette: opens on `?` (outside inputs) or ⌘K / Ctrl+K.
 * Arrow keys navigate, Enter fires, Escape closes. Items are static
 * — section jumps + email/github/linkedin links.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const items = useMemo<Item[]>(() => {
    const goto = (id: string) => () =>
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    return [
      { label: "Go to Hero", k: "G H", action: goto("top") },
      { label: "Go to About", k: "G A", action: goto("about") },
      { label: "Go to Services", k: "G S", action: goto("services") },
      { label: "Go to Work", k: "G W", action: goto("work") },
      { label: "Go to Words", k: "G R", action: goto("words") },
      { label: "Go to Stack", k: "G T", action: goto("stack") },
      { label: "Go to Contact", k: "G C", action: goto("contact") },
      {
        label: `Email ${site.name.split(" ")[0]}`,
        k: "↗",
        action: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        label: "Open GitHub",
        k: "↗",
        action: () => window.open(site.github, "_blank"),
      },
      {
        label: "Open LinkedIn",
        k: "↗",
        action: () => window.open(site.linkedin, "_blank"),
      },
    ];
  }, []);

  const filtered = useMemo(() => {
    const qq = q.toLowerCase().trim();
    if (!qq) return items;
    return items.filter((i) => i.label.toLowerCase().includes(qq));
  }, [q, items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isTyping =
        e.target instanceof HTMLElement &&
        e.target.matches("input, textarea");
      const openShortcut =
        (e.key === "?" && !isTyping) ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k");

      if (openShortcut) {
        e.preventDefault();
        setOpen(true);
        setQ("");
        setActive(0);
        setTimeout(() => inputRef.current?.focus(), 30);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.action();
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active]);

  return (
    <div
      className={`cmdk-back ${open ? "open" : ""}`}
      onClick={() => setOpen(false)}
      aria-hidden={!open}
    >
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          placeholder="Type a command or search…"
          aria-label="Command search"
        />
        <div className="cmdk-list">
          {filtered.length === 0 && (
            <div
              className="cmdk-item"
              style={{ color: "var(--text-faint)" }}
            >
              no results
            </div>
          )}
          {filtered.map((it, i) => (
            <div
              key={it.label}
              className={`cmdk-item ${i === active ? "active" : ""}`}
              onClick={() => {
                it.action();
                setOpen(false);
              }}
              onMouseEnter={() => setActive(i)}
              role="button"
              tabIndex={0}
            >
              <span>{it.label}</span>
              <span className="k">{it.k}</span>
            </div>
          ))}
        </div>
        <div className="cmdk-hint">
          <span>
            <kbd>↑↓</kbd>navigate
          </span>
          <span>
            <kbd>↵</kbd>select
          </span>
          <span>
            <kbd>esc</kbd>close
          </span>
        </div>
      </div>
    </div>
  );
}
