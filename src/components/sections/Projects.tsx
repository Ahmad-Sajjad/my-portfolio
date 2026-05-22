"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { ProjectMock } from "./ProjectMock";
import { ProjectModal } from "./ProjectModal";

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
  const [openProject, setOpenProject] = useState<Project | null>(null);
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

        <div
          className="proj-list"
          ref={listRef}
          key={`${filter}-${safePage}`}
        >
          {visible.map((p, i) => (
            <div
              key={p.name}
              className="proj-item"
              role="button"
              tabIndex={0}
              onClick={() => setOpenProject(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenProject(p);
                }
              }}
              aria-label={`Read more about ${p.name}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="idx">
                {String(start + i + 1).padStart(2, "0")}
              </div>
              <div className="thumb">
                <ProjectMock image={p.image} name={p.name} />
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
                {p.status === "archived" ? (
                  <span className="archived-badge">archived</span>
                ) : p.url !== "#" ? (
                  <a
                    className="visit-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${p.name}`}
                  >
                    visit <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <span className="metric">{p.metric}</span>
                )}
                <span className="read-more-label" aria-hidden>
                  read more <span>→</span>
                </span>
              </div>
            </div>
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

      <ProjectModal
        project={openProject}
        onClose={() => setOpenProject(null)}
      />
    </section>
  );
}
