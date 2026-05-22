import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "powersell",
    name: "PowerSell",
    year: "2024",
    role: "Founding Engineer",
    description:
      "An AI-augmented sales platform — pipelines, automation and analytics for outbound teams. Built end-to-end across web app and backend.",
    url: "https://app.powersell.io/",
    stack: ["Next.js", "TypeScript", "Node", "Postgres", "OpenAI", "Tailwind"],
    metric: "Live · in production",
    live: true,
    category: "web",
  },
  {
    id: "okasha",
    name: "Okasha Smart",
    year: "2024",
    role: "Full-stack",
    description:
      "Smart commerce platform — storefront, dashboard, payments. Modern stack, fast everywhere.",
    url: "https://okashasmart.com/",
    stack: ["Next.js", "Shopify", "Stripe", "Tailwind"],
    metric: "Live store",
    live: true,
    category: "web",
  },
  {
    id: "hbd-mm",
    name: "HBD MM",
    year: "2024",
    role: "iOS Engineer",
    description:
      "A small, lovely iOS app for never forgetting a birthday again.",
    url: "https://apps.apple.com/us/app/hbd-mm/id6759332622",
    stack: ["Swift", "SwiftUI", "CloudKit"],
    metric: "App Store",
    live: true,
    category: "mobile",
  },
  {
    id: "reivex-agents",
    name: "Reivex Agents",
    year: "2025",
    role: "Solo build",
    description:
      "An internal framework for orchestrating LLM agents across long-running workflows.",
    url: "#",
    stack: ["Python", "FastAPI", "LangGraph", "Postgres"],
    metric: "Internal · WIP",
    live: false,
    category: "ai",
  },
  {
    id: "automation",
    name: "Telegraph Bots",
    year: "2023",
    role: "Engineer",
    description:
      "A family of Telegram and WhatsApp bots running real workflows for small businesses.",
    url: "#",
    stack: ["Node", "Telegraf", "Redis"],
    metric: "12k+ msgs/day",
    live: true,
    category: "ai",
  },
  // ─── demo placeholders so pagination is visible. Replace
  // with real projects (rename `id` if you give them custom
  // mocks; otherwise leave `id: "demo"` and they share the
  // generic placeholder screen).
  {
    id: "demo",
    name: "Nova ERP",
    year: "2023",
    role: "Lead Engineer",
    description:
      "Enterprise resource planning suite for mid-market manufacturers — finance, payroll, inventory and reporting in one workspace.",
    url: "#",
    stack: ["Next.js", "Node", "Postgres", "Redis"],
    metric: "15+ companies",
    live: true,
    category: "web",
  },
  {
    id: "demo",
    name: "Pulse Mobile",
    year: "2024",
    role: "iOS Lead",
    description:
      "Health-tracking iOS app with on-device summaries, HealthKit sync and weekly insights — built for a fitness studio chain.",
    url: "#",
    stack: ["Swift", "SwiftUI", "HealthKit"],
    metric: "Beta",
    live: false,
    category: "mobile",
  },
  {
    id: "demo",
    name: "Atlas Vision",
    year: "2024",
    role: "AI Engineer",
    description:
      "Computer-vision pipeline that turns warehouse camera feeds into real-time pick-and-pack telemetry, with anomaly alerts.",
    url: "#",
    stack: ["Python", "OpenCV", "PyTorch", "FastAPI"],
    metric: "Pilot · 3 sites",
    live: true,
    category: "ai",
  },
];
