import type { AboutContent } from "@/types/portfolio";

export const about: AboutContent = {
  eyebrow: "About",
  title: ["A short note about ", { em: "how I work." }],
  meta: "3 yrs · 24+ ships",
  blocks: [
    {
      label: "01. Background",
      text: "I started building products three years ago and haven't stopped.",
      dim: "Today I run Reivex.io — a small studio shipping production-grade software across web, mobile, enterprise systems and AI.",
    },
    {
      label: "02. Approach",
      text: 'Most "engineering" is decisions.',
      dim: "I work in tight loops with founders and teams — translating fuzzy goals into shipped code, holding the bar on performance, reliability and UX without drowning the timeline.",
    },
    {
      label: "03. Lately",
      text: "Building AI-powered tools at Reivex, contributing across the stack on three live products,",
      dim: "and looking for one or two more interesting problems to take from zero to one this year.",
    },
  ],
  photoCaption: "Portrait · Lahore · 2026",
  principles: [
    {
      label: "01. Ship",
      text: "Move on what matters; sweat the parts that compound.",
    },
    {
      label: "02. Craft",
      text: "Treat the boring infrastructure as the product itself.",
    },
    {
      label: "03. Trust",
      text: "Tight loops with founders. No over-engineering, no theatre.",
    },
  ],
  resume: { label: "resume.pdf — 84 kb", href: "/resume.pdf" },
};
