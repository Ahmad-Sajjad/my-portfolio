import type { SVGProps } from "react";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiSharp,
  SiOpenjdk,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiMui,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiLangchain,
  SiHuggingface,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiFigma,
  SiAndroidstudio,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { skillGroups } from "@/data/skills";
import { SectionHead } from "./SectionHead";

/**
 * Vercel favicon-style mark: black circle with white triangle inside.
 * Matches the badge Vercel uses for app icons / favicons. Uses
 * currentColor for the circle so the per-skill color in COLORS still
 * applies; the inner triangle stays white.
 */
const VercelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path d="M6 16.5h12L12 6.5z" fill="#FFFFFF" />
  </svg>
);

/**
 * Brand color per skill (from simpleicons.org). Used as the icon color
 * so each tile shows the recognisable brand mark in full color.
 * Black-on-white logos (Next.js, Three.js, Express, GitHub, Vercel,
 * LangChain) keep their black mark — looks crisp on the surface bg.
 */
const COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  C: "#A8B9CC",
  "C++": "#00599C",
  "C#": "#512BD4",
  Java: "#007396",
  Kotlin: "#7F52FF",
  React: "#61DAFB",
  "Next.js": "#0C0C0C",
  Tailwind: "#06B6D4",
  "Three.js": "#0C0C0C",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Material UI": "#007FFF",
  "Node.js": "#5FA04E",
  NestJS: "#E0234E",
  Express: "#0C0C0C",
  FastAPI: "#009688",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  SQLite: "#003B57",
  MongoDB: "#47A248",
  Redis: "#FF4438",
  Firebase: "#DD2C00",
  Supabase: "#3FCF8E",
  Prisma: "#2D3748",
  TensorFlow: "#FF6F00",
  PyTorch: "#EE4C2C",
  "scikit-learn": "#F7931E",
  OpenCV: "#5C3EE8",
  LangChain: "#0C0C0C",
  "Hugging Face": "#FFD21E",
  Git: "#F05032",
  GitHub: "#0C0C0C",
  Docker: "#2496ED",
  Vercel: "#0C0C0C",
  "VS Code": "#007ACC",
  Linux: "#FCC624",
  Figma: "#F24E1E",
  "Android Studio": "#3DDC84",
};

/**
 * Map skill name -> icon component. Names must match exactly the strings
 * in src/data/skills.ts. Any name not in this map falls back to a small
 * text label (see render below) — currently LangGraph is the only one
 * that doesn't have a Simple Icons mark.
 */
const ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  C: SiC,
  "C++": SiCplusplus,
  "C#": SiSharp,
  Java: SiOpenjdk,
  Kotlin: SiKotlin,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  "Three.js": SiThreedotjs,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Material UI": SiMui,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Prisma: SiPrisma,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  OpenCV: SiOpencv,
  LangChain: SiLangchain,
  "Hugging Face": SiHuggingface,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Vercel: VercelIcon,
  "VS Code": VscCode,
  Linux: SiLinux,
  Figma: SiFigma,
  "Android Studio": SiAndroidstudio,
};

export function TechStack() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section id="stack" data-section="stack">
      <div className="wrap">
        <SectionHead
          index="006"
          eyebrow="Tools of the trade"
          title={["The stack I'm ", { em: "fluent in." }]}
          meta={`${total} tools · ${skillGroups.length} categories`}
        />

        <div className="tech-groups">
          {skillGroups.map((g, gi) => (
            <div key={g.label} className="tech-group">
              <div className="label">
                <span className="num">0{gi + 1}</span>
                <span>{g.label}</span>
              </div>
              <ul className="chips" aria-label={`${g.label} skills`}>
                {g.items.map((s) => {
                  const Icon = ICONS[s.name];
                  const color = COLORS[s.name];
                  return (
                    <li key={s.name} className="chip" title={s.name}>
                      {Icon ? (
                        <Icon
                          aria-hidden
                          focusable={false}
                          className="chip-icon"
                          style={color ? { color } : undefined}
                        />
                      ) : (
                        <span className="chip-fallback">{s.name}</span>
                      )}
                      <span className="chip-name">{s.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="tech-sentence">
          But tools change. What matters is{" "}
          <em>shipping things that work.</em>
        </p>
      </div>
    </section>
  );
}
