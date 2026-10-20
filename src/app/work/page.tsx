import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkIndex } from "@/components/sections/WorkIndex";

export const metadata: Metadata = {
  title: "Work",
  description: "Products Ahmad Sajjad has shipped as an engineer, founder, and contractor.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <Suspense
      fallback={
        <main id="main" className="route-stub">
          <div className="wrap">
            <p className="route-stub__eyebrow">Work</p>
            <p>Loading…</p>
          </div>
        </main>
      }
    >
      <WorkIndex />
    </Suspense>
  );
}
