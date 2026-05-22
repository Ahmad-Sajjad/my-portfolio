import type { ProjectCategory, ProjectMockId } from "@/types/portfolio";

type Props = {
  id: ProjectMockId;
  /** Used by the generic "demo" mock to label itself. */
  name?: string;
  /** Used by the generic "demo" mock to pick a visual variant. */
  category?: ProjectCategory;
};

/** Hand-drawn CSS+SVG mock screens, one per project id. */
export function ProjectMock({ id, name, category }: Props) {
  switch (id) {
    case "powersell":
      return (
        <div className="mock-screen mock-powersell">
          <div className="mock-grid-bg" />
          <div className="badge">PowerSell · Dashboard</div>
          <div className="topbar">
            <div className="pill acc">Q4 Pipeline</div>
            <div className="pill">Leads · 1,284</div>
            <div className="pill">Won · 312</div>
            <div style={{ flex: 1 }} />
            <div className="pill">+24% mo/m</div>
          </div>
          <div className="chart">
            <div className="title">Revenue · last 90 days</div>
            <div className="num">$284,920</div>
            <svg viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="ps-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 L20,42 L40,46 L60,32 L80,38 L100,28 L120,30 L140,22 L160,26 L180,16 L200,20 L220,14 L240,18 L260,10 L280,14 L300,6 L300,60 L0,60 Z"
                fill="url(#ps-grad)"
              />
              <path
                d="M0,50 L20,42 L40,46 L60,32 L80,38 L100,28 L120,30 L140,22 L160,26 L180,16 L200,20 L220,14 L240,18 L260,10 L280,14 L300,6"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="v">62%</div>
              <div className="l">close rate</div>
            </div>
            <div className="stat">
              <div className="v">$3.2k</div>
              <div className="l">avg deal</div>
            </div>
            <div className="stat">
              <div className="v">8.4h</div>
              <div className="l">avg cycle</div>
            </div>
          </div>
        </div>
      );

    case "okasha":
      return (
        <div className="mock-screen mock-okasha">
          <div className="mock-grid-bg" style={{ opacity: 0.25 }} />
          <div className="badge">Okasha · Storefront</div>
          <div className="head">
            <div className="logo">Okasha.</div>
            <div className="menu">
              <span>shop</span>
              <span>journal</span>
              <span>about</span>
              <span>cart · 2</span>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="img" />
              <div className="ttl">Vessel No. 04</div>
              <div className="px">PKR 12,400</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{
                  background:
                    "linear-gradient(140deg, var(--accent-warm), var(--accent))",
                }}
              />
              <div className="ttl">Linen Tote</div>
              <div className="px">PKR 6,200</div>
            </div>
            <div className="card">
              <div
                className="img"
                style={{
                  background:
                    "linear-gradient(140deg, var(--border-strong), var(--accent-warm))",
                }}
              />
              <div className="ttl">Ceramic Set</div>
              <div className="px">PKR 18,900</div>
            </div>
          </div>
        </div>
      );

    case "hbd-mm":
      return (
        <div className="mock-screen mock-hbd">
          <div className="mock-grid-bg" style={{ opacity: 0.2 }} />
          <div className="badge">HBD MM · iOS</div>
          <div className="phone">
            <div className="notch" />
            <div className="day">Tomorrow · Mar 14</div>
            <div className="cake" />
            <div className="name">Aisha Khan</div>
            <div className="age">turns 27 · sister</div>
            <div className="list">
              <div className="item">in 3 days — Bilal · 31</div>
              <div className="item">in 8 days — Mama · 56</div>
              <div className="item">in 21 days — Hassan · 12</div>
            </div>
          </div>
        </div>
      );

    case "reivex-agents": {
      const nodes: { l: string; c: string }[] = [
        { l: "router", c: "var(--accent)" },
        { l: "retrieve", c: "var(--text-dim)" },
        { l: "tools", c: "var(--text-dim)" },
        { l: "respond", c: "var(--accent-warm)" },
      ];
      return (
        <div className="mock-screen mock-agents">
          <div className="mock-grid-bg" style={{ opacity: 0.35 }} />
          <div className="badge">Reivex · Agent Graph</div>
          <div className="nodes">
            {nodes.map((n, i) => (
              <div
                key={n.l}
                className="node"
                style={{ borderTopColor: n.c }}
              >
                {n.l}
                <div className="sub">node · 0{i + 1}</div>
              </div>
            ))}
          </div>
          <div className="trace">↳ run_id · 9f1c · 12 steps · 4.2s</div>
        </div>
      );
    }

    case "automation": {
      const msgs: { role: "user" | "bot"; from: string; t: string }[] = [
        { role: "user", from: "→ user", t: "track order #4821" },
        { role: "bot", from: "← bot", t: "out for delivery · est. 18m" },
        { role: "user", from: "→ user", t: "reschedule for tomorrow" },
        { role: "bot", from: "← bot", t: "rescheduled · 10–12 AM" },
      ];
      return (
        <div className="mock-screen mock-bot">
          <div className="mock-grid-bg" style={{ opacity: 0.3 }} />
          <div className="badge">Telegraph · Live</div>
          <div className="msgs">
            {msgs.map((m, i) => (
              <div key={i} className={`row ${m.role}`}>
                <span className="from">{m.from}</span>
                <span className="t">{m.t}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "demo": {
      // Generic placeholder used by demo projects. The bar widths
      // give a different rhythm per category so the three demos
      // don't look identical at a glance.
      const widths: Record<ProjectCategory, number[]> = {
        web: [82, 56, 70, 38, 64],
        mobile: [44, 60, 36, 70, 48],
        ai: [70, 48, 84, 32, 60],
      };
      const bars = widths[category ?? "web"];
      return (
        <div className="mock-screen mock-demo" data-category={category}>
          <div className="mock-grid-bg" />
          <div className="badge">{name ?? "Demo"}</div>
          <div className="demo-stack">
            {bars.map((w, i) => (
              <div
                key={i}
                className={`bar ${i === 3 ? "accent" : ""}`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}
