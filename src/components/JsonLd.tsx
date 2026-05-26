import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { SITE_URL } from "@/lib/siteUrl";

/**
 * Server-rendered JSON-LD for the portfolio. Multiple top-level schemas
 * are emitted as separate <script> tags so a single bad node is rejected
 * in isolation by validators rather than poisoning the whole graph.
 *
 * Person + ProfilePage are the primary "who" signals. Organization +
 * WebSite back them with brand + site-name hints. ItemList of CreativeWork
 * surfaces the project catalogue for rich snippets. OfferCatalog describes
 * the freelancing services. Review nodes back the testimonials (without
 * fabricated ratings — see note).
 */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#ahmad-sajjad`,
    name: site.name,
    givenName: "Ahmad",
    familyName: "Sajjad",
    url: SITE_URL,
    email: `mailto:${site.email}`,
    image: `${SITE_URL}/ahmad.jpg`,
    jobTitle: "Full Stack & AI Engineer",
    description:
      "Full-stack software engineer, founder of Reivex Technologies and co-founder of Binary Brains. 3+ years shipping production-grade web, mobile, and AI-powered products from Lahore, Pakistan.",
    nationality: "Pakistani",
    worksFor: { "@type": "Organization", name: site.company.name, url: site.company.url },
    // Both Reivex and Binary Brains — schema.org has no separate
    // `co-founder` relationship, `founder` covers both.
    founder: [
      { "@type": "Organization", name: site.company.name, url: site.company.url },
      { "@type": "Organization", name: "Binary Brains" },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Engineering and Technology, Lahore",
      url: "https://uet.edu.pk/",
    },
    award: ["Winner — CodeRush 2026 Hackathon"],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: "Punjab",
      addressCountry: site.location.country,
    },
    sameAs: [site.github, site.linkedin, site.company.url],
    // Mirrors the actual skills.ts grid so AI agents see the full surface
    // of expertise, with AI-specific patterns (RAG, agents, LLMs) called
    // out explicitly — those are the queries Reivex prospects search for.
    knowsAbout: [
      "Full-stack engineering",
      "AI engineering",
      "Large language models",
      "AI agents",
      "Retrieval-augmented generation",
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "Supabase",
      "Prisma",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "iOS development",
      "Swift",
      "Shopify",
      "WordPress",
      "Docker",
      "Vercel",
    ],
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    // Full ISO 8601 with time + UTC offset — Google's ProfilePage schema
    // rejects bare YYYY-MM-DD with "Invalid datetime value for dateCreated".
    dateCreated: "2026-05-21T00:00:00+00:00",
    mainEntity: person,
    url: SITE_URL,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.company.url}/#organization`,
    name: site.company.name,
    url: site.company.url,
    description:
      "Software studio shipping web, mobile, enterprise, and AI-powered products for startups and enterprises.",
    // Reivex is genuinely co-founded — the Organization fact (true for
    // anyone querying "who founded Reivex") lists both founders, Ahmad
    // first via his @id anchor. Schema.org's `founder` accepts an array;
    // there's no separate `co-founder` edge.
    //
    // Person.description above intentionally does NOT mention Ahad —
    // that node powers "who is Ahmad Sajjad" answers and should stay
    // Ahmad-centric. The two schemas don't contradict: Ahmad is a
    // founder of Reivex (true), and Reivex was founded by Ahmad and
    // Ahad (also true).
    founder: [
      { "@type": "Person", name: site.name, "@id": `${SITE_URL}/#ahmad-sajjad` },
      { "@type": "Person", name: "Muhammad Ahad Nawaz" },
    ],
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: "Punjab",
      addressCountry: site.location.country,
    },
    sameAs: [site.github, site.linkedin],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} — Portfolio`,
    url: SITE_URL,
    inLanguage: "en",
    author: { "@type": "Person", name: site.name },
  };

  const projectsList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected Work",
    itemListOrder: "https://schema.org/ItemListOrderManual",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.name,
        description: p.description,
        url: p.url !== "#" ? p.url : `${SITE_URL}/#work`,
        ...(p.image && { image: `${SITE_URL}${p.image}` }),
        dateCreated: p.year,
        creator: { "@type": "Person", name: site.name },
        keywords: p.stack.join(", "),
      },
    })),
  };

  const serviceCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Engineering Services",
    provider: { "@type": "Person", name: site.name },
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        category: s.code,
      },
    })),
  };

  // Review schema removed 2026-05-24: Google's Review snippet spec rejects
  // a Person as `itemReviewed` ("Invalid object type for field
  // 'itemReviewed'"). Person-on-Person reviews aren't a supported pattern
  // and the markup wasn't helping ranking anyway — the testimonials still
  // render as plain HTML in the Testimonials section.

  // FAQ schema — AI assistants (ChatGPT Search, Perplexity, Gemini)
  // pull `acceptedAnswer.text` verbatim when responding to matching
  // queries. Each Q is phrased like the actual search a stranger would
  // type ("Who is Ahmad Sajjad?") so the answer surfaces on those
  // exact queries. Keep each answer 1-3 sentences — long answers
  // get truncated.
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Ahmad Sajjad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad is a full-stack and AI software engineer based in Lahore, Pakistan. He is the founder of Reivex Technologies and co-founder of Binary Brains, with 3+ years of experience shipping production-grade web, mobile, and AI-powered products end-to-end.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Ahmad Sajjad based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad is based in Lahore, Punjab, Pakistan. He works remotely with international clients and runs Reivex Technologies from there.",
        },
      },
      {
        "@type": "Question",
        name: "What does Ahmad Sajjad do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad designs and ships production-grade web, mobile, and AI-powered products end-to-end. He works across React, Next.js, TypeScript, Node.js, FastAPI, PostgreSQL, LangChain, and the modern AI stack — from initial scoping through architecture, build, and shipping.",
        },
      },
      {
        "@type": "Question",
        name: "What is Reivex Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reivex Technologies is a software studio co-founded by Ahmad Sajjad and Muhammad Ahad Nawaz. The studio ships web, mobile, enterprise, and AI-powered products for startups and businesses internationally.",
        },
      },
      {
        "@type": "Question",
        name: "What projects has Ahmad Sajjad built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad's selected work includes PowerSell (a gamified real-estate lead platform), India Rare (a conversion-focused e-commerce storefront), Okasha Smart (a Shopify storefront for smart-home products), HBD MM (an iOS lifestyle app), and SweeTreats (a cross-platform food and drink app). Full case studies are on ahmadsajjad.dev.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Ahmad Sajjad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can reach Ahmad Sajjad by email at ${site.email}, on GitHub at ${site.github}, or on LinkedIn at ${site.linkedin}. Typical response time is 1-2 hours during Lahore working hours.`,
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Ahmad Sajjad use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad works across TypeScript, JavaScript, Python, Swift, Kotlin; React, Next.js, React Native, Tailwind; Node.js, NestJS, FastAPI; PostgreSQL, MongoDB, Redis, Supabase; TensorFlow, PyTorch, LangChain, LangGraph, Hugging Face. He builds on Vercel, AWS, Docker, and Firebase.",
        },
      },
      {
        "@type": "Question",
        name: "What is Ahmad Sajjad's experience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ahmad Sajjad has 3+ years of production engineering experience. He is a UET Lahore Computer Science alumnus, won the CodeRush 2026 Hackathon, and has shipped products including gamified platforms for international clients, ERP and HR suites running in 15+ companies, and AI-driven automation at scale.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify on a constant object — no injection risk.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalog) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
