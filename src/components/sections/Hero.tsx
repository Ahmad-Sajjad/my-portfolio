import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { hero } from "@/data/hero";
import { renderSegments } from "@/lib/segments";

export function Hero() {
  return (
    <section className="hero" id="top" data-section="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>{renderSegments(hero.headline)}</h1>
            <p className="sub">{hero.sub}</p>
            <div className="ctas">
              <Link className="btn-primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <span className="arr" aria-hidden>
                  →
                </span>
              </Link>
              <Link className="btn-ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </div>

            <p className="hero-meta-line">
              <span>Based in {site.location.city}, {site.location.country}</span>
              <span className="hero-meta-sep" aria-hidden>·</span>
              <span>
                Co-Founder &amp; COO,{" "}
                <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                  {site.company.name}
                </a>
              </span>
            </p>
          </div>

          <div className="hero-portrait">
            <Image
              src="/ahmad-portrait.webp"
              alt={`${site.name} portrait`}
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 900px) 380px, 70vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
