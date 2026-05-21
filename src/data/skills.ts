import type { SkillGroup } from "@/types/portfolio";

/**
 * Three groups, ~24 chips total. `years` is a 1–4 tier that drives
 * styling (tier-4 is accent-tinted, tier-1 is dimmed).
 */
export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", years: 4 },
      { name: "Next.js", years: 3 },
      { name: "TypeScript", years: 4 },
      { name: "Tailwind", years: 3 },
      { name: "React Native", years: 2 },
      { name: "SwiftUI", years: 1 },
      { name: "Framer Motion", years: 2 },
    ],
  },
  {
    label: "Backend & Infra",
    items: [
      { name: "Node", years: 4 },
      { name: "Python", years: 3 },
      { name: "FastAPI", years: 2 },
      { name: "Postgres", years: 3 },
      { name: "MongoDB", years: 2 },
      { name: "Redis", years: 2 },
      { name: "AWS", years: 2 },
      { name: "Docker", years: 2 },
      { name: "Vercel", years: 3 },
      { name: "Supabase", years: 2 },
    ],
  },
  {
    label: "AI · Commerce · CMS",
    items: [
      { name: "OpenAI", years: 2 },
      { name: "LangChain", years: 1 },
      { name: "LangGraph", years: 1 },
      { name: "Hugging Face", years: 1 },
      { name: "Shopify", years: 3 },
      { name: "WordPress", years: 3 },
      { name: "WooCommerce", years: 2 },
    ],
  },
];
