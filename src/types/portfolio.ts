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
  tag: string;
  description: string;
  includes: string[];
  timeline: string;
  from: string;
};

export type ProjectMockId =
  | "powersell"
  | "okasha"
  | "hbd-mm"
  | "reivex-agents"
  | "automation";

export type ProjectCategory = "web" | "mobile" | "ai";

export type Project = {
  id: ProjectMockId;
  name: string;
  year: string;
  role: string;
  description: string;
  url: string;
  stack: string[];
  metric: string;
  live: boolean;
  category: ProjectCategory;
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

export type Skill = { name: string; years: SkillTier };

export type SkillGroup = { label: string; items: Skill[] };

export type ContactMeta = {
  responseTime: string;
  capacity: string;
};
