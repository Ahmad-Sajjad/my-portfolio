"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials, clientLogos } from "@/data/testimonials";
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

        <div className="testi-stage">
          <button
            type="button"
            className="testi-side-nav prev"
            onClick={() =>
              setI((x) => (x - 1 + testimonials.length) % testimonials.length)
            }
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Card remounts on each i change so the entrance animation
              plays — smooth fade-up between testimonials. */}
          <article className="testi-card" key={i}>
            <div className="testi-card-aside">
              <div
                className={`testi-photo ${t.image ? "has-photo" : ""}`}
              >
                {t.image ? (
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 1024px) 120px, 200px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                ) : (
                  <span aria-hidden>{t.initial}</span>
                )}
              </div>
              <div className="testi-aside-meta">
                <div className="testi-name">{t.name}</div>
                <div className="testi-company">{t.company}</div>
              </div>
            </div>

            <div className="testi-card-body">
              <span className="testi-mark" aria-hidden>
                &ldquo;
              </span>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-card-foot">
                <span className="testi-index">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>

          <button
            type="button"
            className="testi-side-nav next"
            onClick={() => setI((x) => (x + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            →
          </button>
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
        </div>

        <div className="logo-strip">
          <span className="logo-strip-label">trusted by</span>
          <div className="logo-strip-wrap" aria-hidden>
            <div className="logo-strip-track">
              {/* Duplicate the list so the translateX -50% loop is seamless. */}
              {[...clientLogos, ...clientLogos].map((l, k) => (
                <div
                  key={k}
                  className="logo-tile"
                  data-dark={l.darkBg ? "true" : undefined}
                  title={l.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="logo"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
