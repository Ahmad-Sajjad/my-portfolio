"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import type { Project } from "@/types/portfolio";

type Filter = "All" | "Web" | "Mobile" | "AI";

const ALL_FILTERS: Filter[] = ["All", "Web", "Mobile", "AI"];

function match(p: Project, f: Filter): boolean {
  if (f === "All") return true;
  if (f === "Web") return p.category === "web";
  if (f === "Mobile") return p.category === "mobile";
  if (f === "AI") return p.category === "ai";
  return true;
}

export function WorkIndex() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = (params.get("type") as Filter | null) ?? "All";

  const counts = useMemo(() => {
    const map = {} as Record<Filter, number>;
    for (const f of ALL_FILTERS) {
      map[f] = projects.filter((p) => match(p, f)).length;
    }
    return map;
  }, []);

  const visibleFilters = useMemo(
    () => ALL_FILTERS.filter((f) => f === "All" || counts[f] > 0),
    [counts],
  );

  const list = useMemo(
    () => projects.filter((p) => match(p, active)),
    [active],
  );

  const caseStudies = list.filter((p) => p.hasCaseStudy);
  const listings = list.filter((p) => !p.hasCaseStudy);

  const setFilter = (f: Filter) => {
    const url = f === "All" ? pathname : `${pathname}?type=${encodeURIComponent(f)}`;
    router.replace(url, { scroll: false });
  };

  return (
    <main id="main" className="work">
      <div className="wrap">
        <header className="work__head">
          <p className="eyebrow">Work</p>
          <h1 className="work__title">Selected work</h1>
          <p className="work__intro">
            Three case studies with the full story, and the rest of the
            products I&rsquo;ve shipped. Each live link opens the real thing.
          </p>
        </header>

        <div className="work__filters" role="tablist" aria-label="Project filters">
          {visibleFilters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              className={active === f ? "active" : undefined}
              onClick={() => setFilter(f)}
            >
              {f}
              <sup>{counts[f]}</sup>
            </button>
          ))}
        </div>

        {caseStudies.length > 0 && (
          <section className="work__featured" aria-label="Case studies">
            {caseStudies.map((p, i) => (
              <article
                key={p.id}
                className={`work__band ${i % 2 === 1 ? "flipped" : ""}`}
              >
                <Link
                  href={`/work/${p.id}`}
                  className="work__band-media"
                  aria-label={`${p.name} case study`}
                >
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={`${p.name} product screen`}
                      width={1600}
                      height={1000}
                      sizes="(min-width: 1024px) 640px, 100vw"
                    />
                  )}
                </Link>
                <div className="work__band-body">
                  <p className="work__meta">
                    Case study · {p.role} · {p.year}
                  </p>
                  <h2 className="work__band-title">
                    <Link href={`/work/${p.id}`}>{p.name}</Link>
                  </h2>
                  <p className="work__band-desc">{p.description}</p>
                  <ul className="work__stack">
                    {p.stack.slice(0, 5).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <Link href={`/work/${p.id}`} className="work__band-cue">
                    Read case study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        )}

        {listings.length > 0 && (
          <section className="work__more" aria-label="More projects">
            <h2 className="work__more-head">
              <span className="eyebrow">More projects</span>
            </h2>
            <ul className="work__listings">
              {listings.map((p) => {
                const external = p.url && p.url !== "#" && /^https?:/i.test(p.url);
                const live = p.url && p.url !== "#";
                return (
                  <li key={p.id} className="work__listing">
                    <div className="work__listing-main">
                      <div className="work__listing-head">
                        <h3 className="work__listing-title">{p.name}</h3>
                        <span className="work__listing-meta">
                          {p.role} · {p.year}
                        </span>
                      </div>
                      <p className="work__listing-desc">{p.description}</p>
                      <ul className="work__listing-stack">
                        {p.stack.slice(0, 4).map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="work__listing-side">
                      {live ? (
                        <a
                          href={p.url}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="work__listing-live"
                        >
                          View live <span aria-hidden>↗</span>
                        </a>
                      ) : (
                        <span className="work__listing-note">
                          {p.status === "archived" ? "Archived" : "Private"}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {list.length === 0 && (
          <p className="work__empty">No projects match this filter yet.</p>
        )}
      </div>
    </main>
  );
}
