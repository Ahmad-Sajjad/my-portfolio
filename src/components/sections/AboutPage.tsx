import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  SiTypescript, SiJavascript, SiPython, SiC, SiCplusplus, SiSharp, SiKotlin,
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiThreedotjs,
  SiNodedotjs, SiNestjs, SiExpress, SiFastapi,
  SiPostgresql, SiMysql, SiSqlite, SiMongodb, SiRedis, SiFirebase, SiSupabase, SiPrisma,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiLangchain, SiHuggingface,
  SiGit, SiGithub, SiDocker, SiVercel, SiLinux, SiFigma, SiAndroidstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { site } from "@/data/site";

type IconComp = ComponentType<{ size?: number; className?: string; title?: string }>;

type SkillItem = { name: string; Icon: IconComp; color?: string };
type SkillGroup = { label: string; items: SkillItem[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "C", Icon: SiC, color: "#A8B9CC" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "C#", Icon: SiSharp, color: "#512BD4" },
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#0A0A0A" },
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Three.js", Icon: SiThreedotjs, color: "#0A0A0A" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "Express", Icon: SiExpress, color: "#0A0A0A" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Firebase", Icon: SiFirebase, color: "#DD2C00" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    label: "AI & ML",
    items: [
      { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "LangChain", Icon: SiLangchain, color: "#1C3C3C" },
      { name: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#0A0A0A" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#0A0A0A" },
      { name: "VS Code", Icon: VscCode, color: "#007ACC" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Android Studio", Icon: SiAndroidstudio, color: "#3DDC84" },
    ],
  },
];

export function AboutPage() {
  return (
    <main id="main" className="about">
      <div className="wrap">
        <header className="about__head">
          <p className="eyebrow">About</p>
          <h1 className="about__title">
            Engineer, co-founder, product builder.
          </h1>
        </header>

        <section className="about__intro">
          <div className="about__intro-body">
            <p>
              I&rsquo;m Ahmad Sajjad. I design and build software full-stack,
              from the data model and API through to the interface people
              actually use. Today I co-run{" "}
              <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                Reivex Technologies
              </a>{" "}
              as its COO, shipping web, mobile and AI products across a mix of
              clients and companies I co-founded.
            </p>
            <p>
              I studied Computer Science at UET Lahore and won CodeRush 2026,
              Pakistan&rsquo;s national competitive-programming competition.
              I&rsquo;m based in {site.location.city}, {site.location.country}.
            </p>
            <p>
              <Link href="/resume.pdf" className="about__resume">
                Download résumé <span aria-hidden>↓</span>
              </Link>
            </p>
          </div>
          <div className="about__portrait">
            <Image
              src="/ahmad-portrait.webp"
              alt={`${site.name} portrait`}
              width={1254}
              height={1254}
              sizes="(min-width: 900px) 340px, 60vw"
            />
          </div>
        </section>

        <section className="about__block">
          <div className="about__block-label">
            <p className="eyebrow">Experience</p>
          </div>
          <ol className="about__timeline">
            <li>
              <span className="about__timeline-range">2024 — present</span>
              <div>
                <h3>
                  Co-Founder &amp; COO,{" "}
                  <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                    Reivex Technologies
                  </a>
                </h3>
                <p>
                  Co-founded Reivex with Muhammad Ahad Nawaz. Lead engineering
                  delivery across web, mobile and AI products, manage client
                  engagements, and set the team&rsquo;s practices around
                  scoping, code review, and release.
                </p>
              </div>
            </li>
            <li>
              <span className="about__timeline-range">2023 — present</span>
              <div>
                <h3>Co-Founder, Binary Brains</h3>
                <p>
                  A small group I started with university peers to work on
                  side projects, open source, and competitive programming.
                  CodeRush 2026 came out of this group.
                </p>
              </div>
            </li>
            <li>
              <span className="about__timeline-range">2023 — 2027</span>
              <div>
                <h3>BSc Computer Science, UET Lahore</h3>
                <p>
                  Four years at the University of Engineering and Technology
                  Lahore. Electives and final-year focus on distributed
                  systems, data engineering, and machine learning.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="about__block">
          <div className="about__block-label">
            <p className="eyebrow">How I approach engineering</p>
          </div>
          <div className="about__block-body">
            <p>
              Most of the work is scoping, not typing. I spend real time
              turning fuzzy requirements into a shape that can actually be
              built, maintained, and handed off.
            </p>
            <p>
              I like boring architectures that make the next change easy.
              I write code that the next person can read without me in the
              room. I treat deployment, observability, and backups as part of
              the product.
            </p>
            <p>I ship, then iterate. Shipping is where the real feedback is.</p>
          </div>
        </section>

        <section className="about__block about__skills">
          <div className="about__block-label">
            <p className="eyebrow">Technical skills</p>
          </div>
          <div className="about__block-body about__skills-stack">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label} className="about__skill-group">
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map(({ name, Icon, color }) => (
                    <li key={name} title={name}>
                      <span className="about__skill-icon" style={color ? { color } : undefined}>
                        <Icon size={28} />
                      </span>
                      <span className="about__skill-name">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
