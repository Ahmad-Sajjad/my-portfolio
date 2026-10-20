import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a full-stack engineer and co-founder of ${site.company.name}, based in ${site.location.city}, ${site.location.country}.`,
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
