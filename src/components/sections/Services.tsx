import { services } from "@/data/services";
import { SectionHead } from "./SectionHead";

export function Services() {
  return (
    <section id="services" data-section="services">
      <div className="wrap">
        <SectionHead
          index="003"
          eyebrow="Services"
          title={["A small menu, ", { em: "taken seriously." }]}
          meta={`${String(services.length).padStart(2, "0")} offerings`}
        />
        <div className="svc-list">
          {services.map((s, i) => (
            <div key={s.name} className="svc-entry">
              <div className="head">
                <span className="num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="code">{s.code}</span>
              </div>
              <div className="name">{s.name}</div>
              <p className="tag">{s.tag}</p>
              <div className="items">
                {s.includes.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
