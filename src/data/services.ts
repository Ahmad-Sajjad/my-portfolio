import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    name: "Web Development",
    tag: "Modern web apps — React, Next.js, TypeScript",
    description:
      "Production-grade frontends and full-stack web apps. Performance, accessibility and animation as defaults.",
    includes: [
      "Next.js / React apps",
      "Design system implementation",
      "Performance & SEO audits",
      "API integration",
    ],
    timeline: "2–8 weeks",
    from: "From $4k",
  },
  {
    name: "Mobile Applications",
    tag: "iOS, Android & cross-platform",
    description:
      "Native-feeling mobile apps that ship to the App Store. From MVP to production scale.",
    includes: [
      "React Native / Swift",
      "Push, payments, auth",
      "App Store submission",
      "Backend & sync",
    ],
    timeline: "6–12 weeks",
    from: "From $8k",
  },
  {
    name: "AI & Machine Learning",
    tag: "LLM apps, agents, integrations",
    description:
      "Take models out of the demo and into product — RAG, agents, evals, and the boring infra around them.",
    includes: [
      "LLM-powered features",
      "Custom agents & tools",
      "RAG pipelines",
      "Evals & observability",
    ],
    timeline: "3–10 weeks",
    from: "From $6k",
  },
  {
    name: "Backend & APIs",
    tag: "Scalable infrastructure — Node, Python, Postgres",
    description:
      "REST and event-driven services designed to be debuggable at 2am, six months later.",
    includes: [
      "Node / FastAPI services",
      "Postgres, Redis, queues",
      "Auth, billing, webhooks",
      "Deploy to AWS / Vercel",
    ],
    timeline: "2–6 weeks",
    from: "From $3.5k",
  },
  {
    name: "Automation & Bots",
    tag: "Workflows, scrapers, custom bots",
    description:
      "Quiet software that runs in the background and earns its keep — bots, scrapers, internal tools.",
    includes: [
      "Workflow automation",
      "Telegram / WhatsApp bots",
      "Browser & data scrapers",
      "Internal admin panels",
    ],
    timeline: "1–4 weeks",
    from: "From $2k",
  },
  {
    name: "Commerce & CMS",
    tag: "Shopify, WordPress, custom storefronts",
    description:
      "From a Shopify theme that actually performs, to fully custom storefronts and back-office CRMs.",
    includes: [
      "Shopify theme dev",
      "WordPress / WooCommerce",
      "Headless storefronts",
      "Custom CRMs",
    ],
    timeline: "2–6 weeks",
    from: "From $3k",
  },
];
