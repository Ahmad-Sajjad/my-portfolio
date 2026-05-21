import type { Testimonial } from "@/types/portfolio";

/**
 * Placeholders. Replace with real client reviews when collected.
 * Keep the section in the design — Ahmad confirmed he wants it visible.
 */
export const testimonials: Testimonial[] = [
  {
    initial: "F",
    quote:
      "Ahmad shipped what three contractors couldn't. Our sales platform went from a Figma file to revenue in six weeks. He's the rare engineer who treats product like product, not tickets.",
    name: "Farid Ahmed",
    role: "CEO",
    company: "PowerSell",
    link: "https://app.powersell.io/",
  },
  {
    initial: "S",
    quote:
      "We hired him for a Shopify storefront and walked out with an entire commerce stack — fast pages, clean checkout, a back-office that our team can actually use. Calm to work with, fast to ship.",
    name: "Sara Okasha",
    role: "Founder",
    company: "Okasha Smart",
    link: "https://okashasmart.com/",
  },
  {
    initial: "B",
    quote:
      "Built our internal AI agent platform from scratch. Took complicated infra — LangGraph, evals, tracing — and shipped something the rest of the team could ship on top of. That's the bar.",
    name: "Bilal Hassan",
    role: "Engineering Lead",
    company: "Reivex.io",
    link: "#",
  },
];

export const trustedBy = [
  "PowerSell",
  "Okasha.",
  "HBD MM",
  "Reivex",
  "+ 18 more",
];
