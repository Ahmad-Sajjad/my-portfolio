import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.filter((p) => p.hasCaseStudy).map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.id === slug && p.hasCaseStudy);
  if (!p) return { title: "Project not found" };
  return {
    title: p.name,
    description: p.description,
    alternates: { canonical: `/work/${p.id}` },
    openGraph: {
      type: "article",
      title: `${p.name} · ${site.name}`,
      description: p.description,
      url: `/work/${p.id}`,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  // Only case-study projects have detail pages.
  const caseStudies = projects.filter((p) => p.hasCaseStudy);
  const i = caseStudies.findIndex((p) => p.id === slug);
  if (i === -1) notFound();
  const project = caseStudies[i];
  const prev = i > 0 ? caseStudies[i - 1] : null;
  const next = i < caseStudies.length - 1 ? caseStudies[i + 1] : null;

  const hasLive = project.url && project.url !== "#";
  const isExternal = hasLive && /^https?:/i.test(project.url);

  return (
    <main id="main" className="case">
      <div className="wrap">
        <div className="case__topbar">
          <Link href="/work" className="case__back">
            ← Back to all projects
          </Link>
          <div className="case__nav">
            {prev ? (
              <Link href={`/work/${prev.id}`} aria-label={`Previous: ${prev.name}`}>
                ←
              </Link>
            ) : (
              <span aria-hidden style={{ opacity: 0.3 }}>←</span>
            )}
            {next ? (
              <Link href={`/work/${next.id}`} aria-label={`Next: ${next.name}`}>
                →
              </Link>
            ) : (
              <span aria-hidden style={{ opacity: 0.3 }}>→</span>
            )}
          </div>
        </div>

        <header className="case__head">
          <p className="eyebrow">
            {project.category === "ai"
              ? "AI & automation"
              : project.category === "mobile"
                ? "Mobile"
                : "Web"}
            {" · "}
            {project.year}
          </p>
          <h1 className="case__title">{project.name}</h1>
          <p className="case__lead">{project.description}</p>

          <div className="case__cta-row">
            {hasLive && (
              <a
                href={project.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="case__cta-primary"
              >
                Live project <span aria-hidden>↗</span>
              </a>
            )}
            <span className="case__cta-note">Source code is private.</span>
          </div>
        </header>

        {project.image && (
          <figure className="case__hero">
            <Image
              src={project.image}
              alt={`${project.name} product screen`}
              width={2000}
              height={1200}
              sizes="(min-width: 1024px) 1000px, 100vw"
              priority
            />
          </figure>
        )}

        <dl className="case__facts">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Tech stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          {project.platforms && (
            <div>
              <dt>Platforms</dt>
              <dd>{project.platforms.join(", ")}</dd>
            </div>
          )}
          {project.metric && (
            <div>
              <dt>Status</dt>
              <dd>{project.metric}</dd>
            </div>
          )}
        </dl>

        {project.longDescription && (
          <section className="case__section">
            <h2 className="case__section-head">What I built</h2>
            <div className="case__body">
              <p>{project.longDescription}</p>
            </div>
          </section>
        )}

        {next && (
          <aside className="case__next">
            <p className="eyebrow">Next project</p>
            <Link href={`/work/${next.id}`} className="case__next-title">
              {next.name}
              <span aria-hidden>→</span>
            </Link>
          </aside>
        )}
      </div>
    </main>
  );
}
