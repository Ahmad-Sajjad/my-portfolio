import type { AboutContent } from "@/types/portfolio";

export const about: AboutContent = {
  eyebrow: "About",
  title: ["A short note about ", { em: "how I work." }],
  meta: "3 yrs · selected work",
  blocks: [
    {
      label: "01. Background",
      body: [
        {
          strong:
            "I've been building production systems for three years and haven't stopped.",
        },
        " Today I co-lead ",
        { strong: "Reivex Technologies" },
        " with my co-founder ",
        { strong: "Muhammad Ahad Nawaz" },
        " — a studio that ships web, mobile, enterprise, and AI-powered products that real teams depend on daily.",
      ],
    },
    {
      label: "02. Approach",
      body: [
        { strong: 'Most building is really scoping.' },
        " I take ideas from first conversation to shipped product clarifying requirements, designing architecture, writing code, and hitting the deadline. The work is maintainable by whoever comes after me.",
      ],
    },
    {
      label: "03. Track Record",
      body: [
        "Gamified platforms for international clients. ",
        { strong: "A country's first online marketplace." },
        " ERP and HR suites running in 15+ companies. AI-driven automation at scale. I've owned scope, team, and delivery not just the code.",
      ],
    },
    {
      label: "04. Lately",
      body: [
        "Currently shipping AI-powered products at Reivex across the full stack. Selectively taking on founding-engineer roles, technical leadership, and focused builds from zero to one.",
      ],
    },
  ],
  principles: [
    {
      label: "01. Scope",
      text: "Fuzzy goals become shipped products. Clarity first, code second.",
    },
    {
      label: "02. Ship",
      text: "Production-grade or not at all. Infrastructure is the product.",
    },
    {
      label: "03. Own it",
      text: "I scope, lead, build, and stand behind the work. No handoffs.",
    },
  ],
  resume: { label: "resume.pdf — 279 kb", href: "/resume.pdf" },
};
