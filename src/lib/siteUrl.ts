/**
 * Canonical site URL — used by metadata, sitemap, robots, and JSON-LD.
 * Override per-environment via `NEXT_PUBLIC_SITE_URL`.
 */
export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmadsajjad.dev";
