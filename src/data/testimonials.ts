import type { Testimonial } from "@/types/portfolio";

/**
 * Real client testimonials collected from ahadnawaz.dev/testimonials.
 * Images stored locally in /public/testimonials/. Videos are intentionally
 * not surfaced — text + photo only.
 */
export const testimonials: Testimonial[] = [
  {
    initial: "C",
    name: "CJ Tassone",
    company: "PowerSell",
    quote:
      "You guys are the best! I couldn't have asked for a better team to get my work done. You were incredibly cooperative, helpful, and made the entire process extremely easy. Whenever I needed support, you were always there, ready to help and fix every single issue quickly and effectively. Highly recommended!",
    image: "/testimonials/cj-tassone.png",
  },
  {
    initial: "P",
    name: "Paige Nguyen",
    company: "Wordle MM",
    quote:
      "Thanks team for a fun experience and exceptional communication throughout the project. Consistently transparent, proactive, and always prepared to meet and align. The process was much more efficient than expected.",
    image: "/testimonials/paige-nguyen.png",
  },
  {
    initial: "H",
    name: "Henry Milky Brown",
    company: "BuySell Liberia",
    quote:
      "Team did a super awesome job bringing BuySell Liberia to life. Professional, creative, and truly dedicated to making every detail perfect. The result was beyond what I imagined. 100% recommend him for anyone looking for quality, innovation, and real results.",
    image: "/testimonials/henry-milky-brown.png",
  },
  {
    initial: "R",
    name: "Rao Umer",
    company: "Rao Umer",
    quote:
      "Our software was delivered on time and exceeded every expectation. The co-founders stayed involved throughout the process, ensuring top quality. We couldn't have asked for a better experience.",
  },
];

/**
 * Client logos rendered as the infinite marquee under the testimonials.
 * `src` is relative to /public; `name` becomes the img alt + appears in
 * the title tooltip on hover.
 */
export const clientLogos: {
  name: string;
  src: string;
  /** Set true for wordmarks that are white / very light — gives the
   *  tile a dark background instead of the default white so the logo
   *  stays visible. */
  darkBg?: boolean;
}[] = [
  { name: "PowerSell", src: "/logos/powersell.png", darkBg: true },
  { name: "Okasha", src: "/logos/okasha.png" },
  { name: "SolarMax", src: "/logos/solarMax.png" },
  { name: "EditDeck Pro", src: "/logos/editdeck-pro.png" },
  { name: "BuySell Liberia", src: "/logos/buySell.png" },
  { name: "Power", src: "/logos/power.png" },
  { name: "Chemicals Fort", src: "/logos/chemicals-fort.png" },
  { name: "QuickMark", src: "/logos/quickMark.png" },
  { name: "BuildSpark", src: "/logos/buildSpark.png" },
  { name: "MM Edition", src: "/logos/mm-edition.png" },
];
