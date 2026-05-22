import { skillGroups } from "@/data/skills";
import { SectionHead } from "./SectionHead";

export function TechStack() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);
  return (
    <section id="stack" data-section="stack">
      <div className="wrap">
        <SectionHead
          index="006"
          eyebrow="Tools of the trade"
          title={["The stack I'm ", { em: "fluent in." }]}
          meta={`${total} tools · ${skillGroups.length} categories`}
        />

        <div className="tech-groups">
          {skillGroups.map((g, gi) => (
            <div key={g.label} className="tech-group">
              <div className="label">
                <span className="num">
                  0{gi + 1}
                </span>
                <span>{g.label}</span>
              </div>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s.name} className="chip">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="tech-sentence">
          But tools change. What matters is{" "}
          <em>shipping things that work.</em>
        </p>
      </div>
    </section>
  );
}
