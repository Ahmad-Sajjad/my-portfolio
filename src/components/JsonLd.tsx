import { site } from "@/data/site";
import { SITE_URL } from "@/lib/siteUrl";

/**
 * Server-rendered JSON-LD for Person + ProfilePage schemas.
 * Helps search engines understand who this page is about and
 * surfaces rich results / knowledge-panel entries.
 */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: SITE_URL,
    email: `mailto:${site.email}`,
    image: `${SITE_URL}/ahmad.jpg`,
    jobTitle: "Full Stack & AI Engineer",
    worksFor: { "@type": "Organization", name: site.company.name, url: site.company.url },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.country,
    },
    sameAs: [site.github, site.linkedin, site.company.url],
    knowsAbout: [
      "Full Stack Engineering",
      "AI Engineering",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "iOS Development",
      "Shopify",
      "WordPress",
    ],
  };
  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2026-05-21",
    mainEntity: person,
    url: SITE_URL,
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
    </>
  );
}
