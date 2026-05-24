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
  SiVercel,
  SiLinux,
  SiFigma,
  SiAndroidstudio,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { skillGroups } from "@/data/skills";
import { SectionHead } from "./SectionHead";

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
  Vercel: SiVercel,
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
                  return (
                    <li key={s.name} className="chip" title={s.name}>
                      {Icon ? (
                        <Icon
                          aria-hidden
                          focusable={false}
                          className="chip-icon"
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
