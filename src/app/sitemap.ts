import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
  for (const p of projects) {
    if (!p.hasCaseStudy) continue;
    routes.push({
      url: `${SITE_URL}/work/${p.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  return routes;
}
