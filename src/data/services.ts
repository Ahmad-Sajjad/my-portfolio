import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    name: "Web Development",
    code: "WEB",
    tag: "Modern web apps React, Next.js, TypeScript",
    description:
      "Production-grade frontends and full-stack web apps. Performance, accessibility and animation as defaults.",
    includes: [
      "Next.js / React",
      "Design systems",
      "Performance & SEO",
      "API integration",
    ],
  },
  {
    name: "Mobile Applications",
    code: "iOS · ANDROID",
    tag: "iOS, Android & cross-platform",
    description:
      "Native-feeling mobile apps that ship to the App Store. From MVP to production scale.",
    includes: [
      "React Native",
      "Push & payments",
      "App Store ship",
    ],
  },
  {
    name: "AI & Machine Learning",
    code: "AI · ML",
    tag: "LLM apps, agents, integrations",
    description:
      "Take models out of the demo and into product RAG, agents, evals, and the boring infra around them.",
    includes: [
      "LLM features",
      "Agents & tools",
      "RAG pipelines",
      "Evals & traces",
    ],
  },
  {
    name: "Backend & APIs",
    code: "API",
    tag: "Scalable infrastructure Node, Python, Postgres",
    description:
      "REST and event-driven services designed to be debuggable at 2am, six months later.",
    includes: [
      "Node / FastAPI",
      "Postgres / Redis",
      "Auth & billing",
      "AWS / Vercel",
    ],
  },
  {
    name: "Automation & Bots",
    code: "BOTS",
    tag: "Workflows, scrapers, custom bots",
    description:
      "Quiet software that runs in the background and earns its keep — bots, scrapers, internal tools.",
    includes: [
      "Workflow automation",
      "Telegram / WhatsApp",
      "Browser scrapers",
      "Internal panels",
    ],
  },
  {
    name: "Commerce & CMS",
    code: "CMS · SHOP",
    tag: "Shopify, WordPress, custom storefronts",
    description:
      "From a Shopify theme that actually performs, to fully custom storefronts and back-office CRMs.",
    includes: [
      "Shopify themes",
      "WordPress / Woo",
      "Headless storefronts",
      "Custom CRMs",
    ],
  },
];
