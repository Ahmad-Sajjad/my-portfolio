/**
 * Shared content types for the portfolio data layer.
 *
 * Headlines and quotes mix plain text with italic-accent fragments. We
 * model that as an array of `TextSegment`s so consumers render with a
 * tiny helper instead of `dangerouslySetInnerHTML`.
 */

export type TextSegment = string | { em: string } | { strong: string };

export type NavLink = { id: string; label: string };

export type SiteIdentity = {
  name: string;
  monogram: string;
  email: string;
  github: string;
  linkedin: string;
  company: { name: string; url: string };
  location: { city: string; country: string; countryCode: string; tz: string };
  yearsOfExperience: number;
};

export type HeroContent = {
  eyebrow: string;
  headline: TextSegment[];
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  marqueeWords: string[];
};

export type AboutBlock = { label: string; body: TextSegment[] };

export type Principle = { label: string; text: string };

export type AboutContent = {
  eyebrow: string;
  title: TextSegment[];
  meta: string;
  blocks: AboutBlock[];
  principles: Principle[];
  resume: { label: string; href: string };
};

export type Service = {
  name: string;
  /** Short uppercase code shown in the cell header (e.g. "WEB", "iOS"). */
  code: string;
  tag: string;
  description: string;
  includes: string[];
};

export type ProjectCategory = "web" | "mobile" | "ai";

export type ProjectStatus = "active" | "archived";

export type Project = {
  /** Slug, used as React key + as the basename of the screenshot file. */
  id: string;
  name: string;
  year: string;
  role: string;
  /** Short one-liner shown in the editorial row. */
  description: string;
  /** Optional longer copy shown in the read-more modal; falls back to `description`. */
  longDescription?: string;
  /** Path to the hero screenshot under /projects/. Omit for projects with no
   *  screenshot available — the thumb renders a CSS-only placeholder. */
  image?: string;
  /** Live URL, or "#" if the project has no public link. */
  url: string;
  stack: string[];
  /** Optional right-column text shown when there's no live URL (e.g. "App Store"). */
  metric?: string;
  category: ProjectCategory;
  /** Highlighted in the first page of the list. */
  featured?: boolean;
  /** "archived" hides the visit link and shows an archived badge instead. */
  status?: ProjectStatus;
  /** Mobile apps: ["iOS"] / ["iOS", "Android"]. */
  platforms?: string[];
};

export type Testimonial = {
  initial: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  link: string;
};

/** Years tier for tech chips: 1 (dim) … 4 (accent-tinted). */
export type SkillTier = 1 | 2 | 3 | 4;

export type Skill = { name: string;};

export type SkillGroup = { label: string; items: Skill[] };

export type ContactMeta = {
  responseTime: string;
  capacity: string;
};
