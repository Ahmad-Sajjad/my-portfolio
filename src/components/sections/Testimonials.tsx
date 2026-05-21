"use client";

import { useEffect, useState } from "react";
import { testimonials, trustedBy } from "@/data/testimonials";
import { SectionHead } from "./SectionHead";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLElement &&
        ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      )
        return;
      if (e.key === "ArrowRight")
        setI((x) => (x + 1) % testimonials.length);
      if (e.key === "ArrowLeft")
        setI((x) => (x - 1 + testimonials.length) % testimonials.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="words" data-section="words">
      <div className="wrap">
        <SectionHead
          index="005"
          eyebrow="In their words"
          title={["What people I've worked with ", { em: "say." }]}
          meta={`${String(i + 1).padStart(2, "0")} / ${String(
            testimonials.length,
          ).padStart(2, "0")}`}
        />
        <div className="testi-wrap">
          <div className="testi-avatar" aria-hidden>
            {t.initial}
          </div>
          <div className="testi-body">
            <p className="testi-quote">{t.quote}</p>
            <div className="testi-attr">
              <span className="name">{t.name}</span>
              <span className="sep">·</span>
              <span>
                {t.role}, {t.company}
              </span>
              <span className="sep">·</span>
              <a
                href={t.link}
                target={t.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  t.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                verify ↗
              </a>
            </div>
          </div>
        </div>
        <div className="testi-controls">
          <div className="testi-dots">
            {testimonials.map((_, k) => (
              <button
                key={k}
                type="button"
                className={`dot ${k === i ? "active" : ""}`}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                aria-current={k === i}
              />
            ))}
          </div>
          <div className="testi-nav">
            <button
              type="button"
              onClick={() =>
                setI((x) => (x - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setI((x) => (x + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="logo-strip">
          <span className="label">trusted by</span>
          {trustedBy.map((name, k) => (
            <span
              key={k}
              style={
                name.startsWith("+")
                  ? { fontFamily: "var(--font-mono)", fontSize: 14 }
                  : name.endsWith(".")
                    ? { fontStyle: "italic" }
                    : undefined
              }
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
