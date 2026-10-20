import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

/**
 * Home → Selected work. First three featured projects in a varied
 * layout (strongest project gets the larger treatment). Links to full
 * case studies and the complete /work index.
 */
export function SelectedWorkPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;
  const [lead, ...rest] = featured;

  return (
    <section className="section home-work" aria-labelledby="selected-work">
      <div className="wrap">
        <div className="home-work__head">
          <p className="eyebrow">Selected work</p>
          <h2 id="selected-work" className="home-work__title">
            A few things I&rsquo;ve shipped.
          </h2>
        </div>

        <article className="home-work__lead">
          <Link
            href={`/work/${lead.id}`}
            className="home-work__lead-media"
            aria-label={`${lead.name} case study`}
          >
            {lead.image && (
              <Image
                src={lead.image}
                alt={`${lead.name} product screen`}
                width={1600}
                height={1000}
                sizes="(min-width: 1024px) 760px, 100vw"
              />
            )}
          </Link>
          <div className="home-work__lead-body">
            <p className="home-work__row-meta">
              {lead.role} · {lead.year}
            </p>
            <h3 className="home-work__row-title">
              <Link href={`/work/${lead.id}`}>{lead.name}</Link>
            </h3>
            <p className="home-work__row-desc">{lead.description}</p>
            <Link href={`/work/${lead.id}`} className="home-work__row-cue">
              Read case study
              <span aria-hidden>→</span>
            </Link>
          </div>
        </article>

        <ul className="home-work__rest">
          {rest.map((p) => (
            <li key={p.id} className="home-work__row">
              <Link
                href={`/work/${p.id}`}
                className="home-work__row-media"
                aria-label={`${p.name} case study`}
              >
                {p.image && (
                  <Image
                    src={p.image}
                    alt={`${p.name} product screen`}
                    width={1200}
                    height={760}
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                )}
              </Link>
              <div>
                <p className="home-work__row-meta">
                  {p.role} · {p.year}
                </p>
                <h3 className="home-work__row-title">
                  <Link href={`/work/${p.id}`}>{p.name}</Link>
                </h3>
                <p className="home-work__row-desc">{p.description}</p>
                <Link href={`/work/${p.id}`} className="home-work__row-cue">
                  Read case study
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="home-work__all">
          <Link href="/work" className="btn-text">
            See all projects
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
