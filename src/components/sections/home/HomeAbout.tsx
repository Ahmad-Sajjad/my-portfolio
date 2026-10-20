import Link from "next/link";
import type { ComponentType } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";
import { site } from "@/data/site";

type IconComp = ComponentType<{ size?: number; title?: string }>;

const CORE_STACK: { name: string; Icon: IconComp; color: string }[] = [
  { name: "Next.js", Icon: SiNextdotjs, color: "#0A0A0A" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
];

const FACTS = [
  { k: "Role", v: "Co-Founder & COO, Reivex Technologies" },
  { k: "Education", v: "BSc Computer Science, UET Lahore" },
  { k: "Shipped", v: "24+ products since 2022" },
  { k: "Industries", v: "SaaS, e-commerce, manufacturing, EdTech, AI" },
  { k: "Recognition", v: "CodeRush 2026 winner" },
  { k: "Based in", v: `${site.location.city}, ${site.location.country}` },
];

/**
 * Home → About me. Compact bio + four facts + a core-stack icon strip.
 * Deep timeline, approach and full tech list live on /about.
 */
export function HomeAbout() {
  return (
    <section className="section home-about" aria-labelledby="home-about">
      <div className="wrap">
        <div className="home-about__head">
          <p className="eyebrow">About me</p>
        </div>

        <div className="home-about__grid">
          <div className="home-about__body">
            <p>
              I design and build software end-to-end, from data model to the
              interface people actually use. I co-run{" "}
              <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                Reivex Technologies
              </a>{" "}
              as its COO, where I lead delivery across web, mobile and AI
              products for clients and companies I co-founded.
            </p>
            <p>
              I studied Computer Science at UET Lahore and won CodeRush 2026,
              Pakistan&rsquo;s national competitive-programming competition.
            </p>
            <div className="home-about__cta">
              <Link href="/about" className="btn-ghost">
                Read more about me
                <span aria-hidden>→</span>
              </Link>
              <a href="/resume.pdf" className="home-about__resume">
                Résumé <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

          <dl className="home-about__facts">
            {FACTS.map((f) => (
              <div key={f.k} className="home-about__fact">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="home-about__stack">
          <p className="eyebrow home-about__stack-label">Core stack</p>
          <ul>
            {CORE_STACK.map(({ name, Icon, color }) => (
              <li key={name} title={name} aria-label={name}>
                <span className="home-about__stack-icon" style={{ color }}>
                  <Icon size={28} />
                </span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
