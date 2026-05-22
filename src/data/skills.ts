import type { SkillGroup } from "@/types/portfolio";

/**
 * Six groups, ~40 chips total. Mirrors Ahmad's logo grid:
 * Languages / Frontend / Backend / Databases / AI · ML / Tools.
 */
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "C#" },
      { name: "Java" },
      { name: "Kotlin" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Three.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Material UI" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express" },
      { name: "FastAPI" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Prisma" },
    ],
  },
  {
    label: "AI · ML",
    items: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "scikit-learn" },
      { name: "OpenCV" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Hugging Face" }
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "VS Code" },
      { name: "Linux" },
      { name: "Figma" },
      { name: "Android Studio" },
    ],
  },
];
