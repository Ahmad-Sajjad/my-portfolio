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
    founder: { "@type": "Person", name: site.name, "@id": `${SITE_URL}/#ahmad-sajjad` },
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
    </>
  );
}
