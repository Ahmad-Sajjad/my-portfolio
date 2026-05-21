"use client";

import { useMemo, useState } from "react";
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

export function Projects() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

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

        <div className="proj-list">
          {filtered.map((p, i) => (
            <a
              key={p.id}
              className="proj-item"
              href={p.url}
              target={p.url.startsWith("http") ? "_blank" : undefined}
              rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="thumb">
                <ProjectMock id={p.id} />
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

        <p className="proj-sentence">
          Three years, dozens of repositories, a steady habit of pushing things{" "}
          <em>into production</em> rather than leaving them in a folder called
          experiments/.
        </p>
      </div>
    </section>
  );
}
