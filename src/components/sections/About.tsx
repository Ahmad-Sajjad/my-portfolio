import Image from "next/image";
import { about } from "@/data/about";
import { renderSegments } from "@/lib/segments";
import { SectionHead } from "./SectionHead";
import { PhotoCorner } from "./PhotoCorner";

export function About() {
  return (
    <section id="about" data-section="about">
      <div className="wrap">
        <SectionHead
          index="002"
          eyebrow={about.eyebrow}
          title={about.title}
          meta={about.meta}
        />
        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <Image
                src="/ahmad.jpg"
                alt="Ahmad Sajjad"
                width={600}
                height={750}
                priority
              />
              <PhotoCorner />
            </div>
          </div>
          <div className="about-text">
            {about.blocks.map((b) => (
              <div key={b.label} className="about-block">
                <div className="label">{b.label}</div>
                <p>{renderSegments(b.body)}</p>
              </div>
            ))}

            <div className="principles">
              {about.principles.map((p) => (
                <div key={p.label} className="item">
                  <span className="k">{p.label}</span>
                  <span className="v">{p.text}</span>
                </div>
              ))}
            </div>

            <a className="resume-link" href={about.resume.href} download>
              {about.resume.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
