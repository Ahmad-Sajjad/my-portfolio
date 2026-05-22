"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/portfolio";
import { ProjectMock } from "./ProjectMock";

type FilterValue = "all" | ProjectCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "all." },
  { value: "web", label: "web." },
  { value: "mobile", label: "mobile." },
  { value: "ai", label: "ai." },
];

/** Projects shown per page. */
const PAGE_SIZE = 5;

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  // Reset to page 1 whenever the filter changes.
  useEffect(() => {
    setPage(1);
  }, [filter]);

  // When the page changes (after first render), scroll the list back into
  // view so the user sees the new page's projects instead of whatever
  // shifted into the viewport from the list shrinking.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section id="work" data-section="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">004 · Selected Work</div>
            <h2 className="section-title">
              Things I&apos;ve shipped <em>recently.</em>
            </h2>
          </div>
          <div className="proj-filters">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                className={filter === f.value ? "active" : ""}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="proj-list" ref={listRef}>
          {visible.map((p, i) => (
            <a
              key={p.name}
              className="proj-item"
              href={p.url}
              target={p.url.startsWith("http") ? "_blank" : undefined}
              rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="idx">
                {String(start + i + 1).padStart(2, "0")}
              </div>
              <div className="thumb">
                <ProjectMock id={p.id} name={p.name} category={p.category} />
              </div>
              <div className="body">
                <div className="name-row">
                  <span className="name">{p.name}</span>
                  <span className="yr">
                    {p.year} · {p.role}
                  </span>
                </div>
                <p className="desc">{p.description}</p>
                <div className="stack">
                  {p.stack.map((t) => (
                    <span key={t} className="t">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="right">
                {p.live ? (
                  <span className="live">
                    <span className="d" aria-hidden />
                    live
                  </span>
                ) : (
                  <span style={{ color: "var(--text-faint)" }}>{p.metric}</span>
                )}
                <span className="arrow">
                  visit <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="proj-pagination" aria-label="Project pages">
            <button
              type="button"
              className="step"
              onClick={goPrev}
              disabled={safePage === 1}
              aria-label="Previous page"
            >
              ← prev
            </button>
            <div className="pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`num ${n === safePage ? "active" : ""}`}
                  onClick={() => setPage(n)}
                  aria-current={n === safePage ? "page" : undefined}
                  aria-label={`Page ${n}`}
                >
                  {String(n).padStart(2, "0")}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="step"
              onClick={goNext}
              disabled={safePage === totalPages}
              aria-label="Next page"
            >
              next →
            </button>
          </nav>
        )}

        <p className="proj-sentence">
          Three years, dozens of repositories, a steady habit of pushing things{" "}
          <em>into production</em> rather than leaving them in a folder called
          experiments/.
        </p>
      </div>
    </section>
  );
}
