"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import { hero } from "@/data/hero";
import { useLahoreTime } from "@/hooks/useLahoreTime";
import { renderSegments } from "@/lib/segments";

export function Hero() {
  const { time, day } = useLahoreTime();
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 80;
      ty = (e.clientY / window.innerHeight - 0.5) * 50;
    };

    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      if (orbRef.current) {
        orbRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="hero" id="top" data-section="hero">
      <div className="orb" ref={orbRef} aria-hidden />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>{renderSegments(hero.headline)}</h1>
            <p className="sub">{hero.sub}</p>
            <div className="ctas">
              <a className="primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <span className="arr" aria-hidden>
                  →
                </span>
              </a>
              <a className="secondary" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <div className="meta-row">
              <span className="k">Based in</span>
              <span className="v">
                {site.location.city}, · PKT
              </span>
            </div>
            <div className="meta-row">
              <span className="k">Local time</span>
              <span className="v">
                {time}{" "}
                <span style={{ color: "var(--text-faint)" }}>{day}</span>
              </span>
            </div>
            <div className="meta-row">
              <span className="k">Experience</span>
              <span className="v">
                {site.yearsOfExperience}+ years · production
              </span>
            </div>
            <div className="meta-row">
              <span className="k">Currently</span>
              <span className="v">Founder, {site.company.name}</span>
            </div>
            <div className="meta-row">
              <span className="k">Focus</span>
              <span className="v">Full-stack · AI engineering</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
