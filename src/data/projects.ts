import type { Project } from "@/types/portfolio";

/**
 * Source: Reivex.io work page scrape (May 2026).
 * Order: 5 featured (mix of web + mobile), then other case studies,
 * other apps, other websites, archived at the end.
 *
 * To swap which projects are featured, move them to the top of the
 * array and set `featured: true`. PAGE_SIZE in Projects.tsx is 5, so
 * the first 5 entries fill the first pagination page exactly.
 */
export const projects: Project[] = [
  // ─── FEATURED (5) ───────────────────────────────────────
  {
    id: "powersell",
    name: "PowerSell",
    year: "2024",
    role: "Founding Engineer",
    description:
      "Gamified real-estate lead platform with role-based dashboards, real-time pipelines and conversion analytics.",
    longDescription:
      "Multi-role SaaS for setter–closer teams: dedicated dashboards per role, real-time lead pipelines, automation rules, training modules, and leaderboard mechanics. Unified disconnected workflows, reduced lead loss, and made team accountability legible.",
    image: "/projects/powersell.png",
    url: "https://app.powersell.io",
    stack: ["Next.js", "TypeScript", "Node", "PostgreSQL", "WebSockets"],
    metric: "Live · in production",
    category: "web",
    featured: true,
  },
  {
    id: "sweetreats",
    name: "SweeTreats",
    year: "2024",
    role: "Mobile Developer",
    description:
      "Cross-platform food and drink app — browse, order, and manage selections from a native iOS and Android experience.",
    longDescription:
      "React Native app shipped to the App Store and Google Play for a food & beverage brand. Native-feeling navigation, push notifications, ordering flow, and a back-office that syncs with the SweeTreats Dashboard web app.",
    image: "/projects/sweetreats.png",
    url: "#",
    stack: ["React Native", "TypeScript", "Firebase"],
    metric: "iOS · Android",
    category: "mobile",
    featured: true,
    platforms: ["iOS", "Android"],
  },
  {
    id: "okasha-smart",
    name: "Okasha Smart Shopify",
    year: "2024",
    role: "E-Commerce Architect",
    description:
      "Custom Shopify storefront for IoT and smart-home products — clear hierarchy, product-first UX, scalable catalog.",
    longDescription:
      "Designed and built a custom Shopify theme for a smart-home brand spanning multiple product categories. Structured collections, responsive layouts, conversion-focused product pages, and integrated apps so the non-technical team can run catalog and content operations day to day.",
    image: "/projects/okasha-smart.png",
    url: "https://okashasmart.com",
    stack: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
    metric: "Live store",
    category: "web",
    featured: true,
  },
  {
    id: "hbd-mm",
    name: "HBD MM",
    year: "2024",
    role: "iOS Engineer",
    description:
      "Lifestyle + game iOS app combining everyday tracking with light gaming mechanics for engagement.",
    longDescription:
      "Native iOS app shipped to the App Store. Mixes lifestyle utility (birthday tracking) with a small game loop for daily engagement; uses CloudKit for sync and notifications for reminders.",
    image: "/projects/hbd-mm.png",
    url: "https://apps.apple.com/us/app/hbd-mm/id6759332622",
    stack: ["Swift", "SwiftUI", "CloudKit"],
    metric: "App Store",
    category: "mobile",
    featured: true,
    platforms: ["iOS"],
  },
  {
    id: "india-rare",
    name: "India Rare",
    year: "2024",
    role: "Product Engineer",
    description:
      "Conversion-focused e-commerce storefront for a direct-to-consumer catalog, responsive across devices.",
    longDescription:
      "Built and shipped an e-commerce storefront with scalable catalog management, a fast responsive buying flow, and conversion-optimized product pages. Ships products direct online to customers.",
    image: "/projects/india-rare.png",
    url: "https://indiarare.com",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    metric: "Live store",
    category: "web",
    featured: true,
  },

  // ─── OTHER CASE STUDIES (4) ─────────────────────────────
  {
    id: "editdeck-pro",
    name: "EditDeck Pro",
    year: "2024",
    role: "Founding Engineer",
    description:
      "AI SaaS for music and creative-visual generation — multi-model orchestration, integrated editor, subscriptions.",
    longDescription:
      "Production AI SaaS spanning marketing, app, and editor surfaces. Generates and edits music-ready visuals and video with multi-model AI orchestration, FFmpeg-powered post-editing, Stripe subscriptions, and asset management for advanced tiers. Reduced creative turnaround from hours to minutes.",
    image: "/projects/editdeck-pro.png",
    url: "https://editdeckpro.com",
    stack: ["Next.js", "Node", "PostgreSQL", "Stripe", "FFmpeg", "OpenAI"],
    metric: "Live SaaS",
    category: "ai",
  },
  {
    id: "solarmax",
    name: "SolarMax",
    year: "2024",
    role: "E-Commerce Architect",
    description:
      "Shopify storefront for solar energy products — clear hierarchy, trust-building UX, scalable collections.",
    longDescription:
      "Custom Shopify store for a solar energy brand. Structured residential and commercial collections so non-technical buyers can compare technical products, with responsive design and conversion-focused product pages.",
    image: "/projects/solarmax.png",
    url: "https://solarmax.pk",
    stack: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
    metric: "Live store",
    category: "web",
  },
  {
    id: "upvc-cloud",
    name: "UPVC Cloud",
    year: "2024",
    role: "Full-Stack Engineer",
    description:
      "Windows & doors manufacturing ERP — design-to-quotation workflows, production tracking, multi-tenant.",
    longDescription:
      "Cloud ERP for UPVC window and door manufacturers covering the full design-to-delivery loop: visual configurator, quotation, production tracking, inventory, and admin reporting. Used across multiple manufacturing companies.",
    image: "/projects/upvc-cloud.png",
    url: "https://bss.upvc.cloud",
    stack: ["Angular", "Node", "TypeScript", "PostgreSQL"],
    metric: "Multi-tenant",
    category: "web",
  },
  {
    id: "idrak",
    name: "IDRAK",
    year: "2024",
    role: "Full-Stack Engineer",
    description:
      "Academic operating system for schools — student lifecycle, attendance, fees, results, parent portal.",
    longDescription:
      "Cloud SIS platform running the full student lifecycle for K-12 institutes and universities. Covers admissions, attendance, fees, grading, results, and parent communication, with a companion mobile app for staff and guardians.",
    image: "/projects/idrak.png",
    url: "https://idrak.pk",
    stack: ["Angular", "Node", "TypeScript", "PostgreSQL", "NativeScript"],
    metric: "Live SIS",
    category: "web",
  },

  // ─── OTHER APP (1) ──────────────────────────────────────
  {
    id: "okasha-smart-app",
    name: "Okasha Smart App",
    year: "2024",
    role: "Mobile Developer",
    description:
      "Cross-platform IoT control app for managing connected smart-home devices from iOS and Android.",
    longDescription:
      "Companion app for the Okasha Smart product range. React Native client paired with Firebase for device pairing, real-time state, and push notifications; works across iOS and Android with a unified interface.",
    image: "/projects/okasha-smart-app.png",
    url: "#",
    stack: ["React Native", "TypeScript", "Firebase"],
    metric: "iOS · Android",
    category: "mobile",
    platforms: ["iOS", "Android"],
  },

  // ─── OTHER WEBSITES (13) ────────────────────────────────
  {
    id: "mac-n-sales",
    name: "Mac N Sales",
    year: "2024",
    role: "Engineer",
    description:
      "Sales platform for managing team operations, lead pipelines, and client engagement in one workspace.",
    image: "/projects/mac-n-sales.png",
    url: "https://macnsales.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "chemicals-fort",
    name: "Chemicals Fort",
    year: "2024",
    role: "Engineer",
    description:
      "B2B industrial marketplace for chemical distribution, procurement, and customer inquiry workflows.",
    image: "/projects/chemicals-fort.png",
    url: "https://chemicalsfort.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "royal-planet",
    name: "Royal Planet Tourism",
    year: "2024",
    role: "Engineer",
    description:
      "Travel & tourism booking site for a UAE-based operator — destinations, packages, inquiry flows.",
    image: "/projects/royal-planet.png",
    url: "https://royalplanettourism.ae",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "stake",
    name: "Stake",
    year: "2024",
    role: "Engineer",
    description:
      "Fintech platform marketing site — investor onboarding flows, content modules, and product showcase.",
    image: "/projects/stake.png",
    url: "https://getstake.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "power-highway",
    name: "Power Highway",
    year: "2024",
    role: "Engineer",
    description:
      "Energy sector marketing site for a power distribution / EV charging operator.",
    image: "/projects/power-highway.png",
    url: "https://powerhighway.net",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "seoul-luma",
    name: "Seoul Luma",
    year: "2024",
    role: "Engineer",
    description:
      "Hospitality booking site for a Korean boutique brand — rooms, venues, story-led visual design.",
    image: "/projects/seoul-luma.png",
    url: "https://seoul-luma.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "rao-umer",
    name: "Rao Umer",
    year: "2024",
    role: "Engineer",
    description:
      "Personal brand and portfolio site for a real-estate professional — content-heavy, SEO-tuned.",
    image: "/projects/rao-umer.png",
    url: "https://raoumer.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "ulwa-architects",
    name: "Ulwa Architects",
    year: "2024",
    role: "Engineer",
    description:
      "Architecture studio portfolio — project gallery, services, and editorial-style content layout.",
    image: "/projects/ulwa-architects.jpg",
    url: "https://ulwaarchitects.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "sweetreats-dashboard",
    name: "SweeTreats Dashboard",
    year: "2024",
    role: "Engineer",
    description:
      "Admin dashboard for the SweeTreats business — order ops, inventory, customer management.",
    image: "/projects/sweetreats-dashboard.png",
    url: "https://dashboard.sweetreats.com",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Internal",
    category: "web",
  },
  {
    id: "power-highway-portal",
    name: "Power Highway Portal",
    year: "2024",
    role: "Engineer",
    description:
      "Internal employee portal for Power Highway — operational tooling and team workflows.",
    image: "/projects/power-highway-portal.png",
    url: "https://power-highway-portal.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Internal portal",
    category: "web",
  },
  {
    id: "unique-glass",
    name: "Unique Glass",
    year: "2024",
    role: "Engineer",
    description:
      "Manufacturing showcase for a glass products company — product lines, inquiry capture, dealer info.",
    image: "/projects/unique-glass.png",
    url: "https://unique-glass.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },
  {
    id: "mashpack",
    name: "Mashpack",
    year: "2024",
    role: "Engineer",
    description:
      "Packaging-design and procurement site for manufacturers — capabilities, gallery, quote inquiry.",
    image: "/projects/mashpack.png",
    url: "https://mashpack.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    metric: "Live",
    category: "web",
  },

  // ─── ARCHIVED (1) ───────────────────────────────────────
  {
    id: "buy-sell-liberia",
    name: "Buy Sell Liberia",
    year: "2023",
    role: "Engineer",
    description:
      "Pan-African classifieds marketplace for buying and selling goods locally.",
    image: "/projects/buy-sell-liberia.webp",
    url: "#",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "web",
    status: "archived",
  },
];
