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
        <div className="svc-grid">
          {services.map((s, i) => (
            <div key={s.name} className="svc-card">
              <div className="top">
                <span className="num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pill">{s.timeline}</span>
              </div>
              <div className="name">{s.name}</div>
              <p className="tag">{s.tag}</p>
              <ul>
                {s.includes.slice(0, 4).map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <div className="foot">
                <span className="time">
                  {s.description.split(".")[0].split(" ").slice(0, 5).join(" ")}…
                </span>
                <span className="price">{s.from}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
