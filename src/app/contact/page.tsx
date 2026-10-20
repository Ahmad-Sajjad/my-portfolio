import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Email, LinkedIn, GitHub.`,
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
