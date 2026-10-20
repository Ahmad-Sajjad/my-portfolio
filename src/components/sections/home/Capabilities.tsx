import Link from "next/link";

type Capability = {
  title: string;
  body: string;
  examples: { label: string; href: string }[];
};

/**
 * Home → Capabilities. The four kinds of engineering work I do, each
 * grounded in a real shipped project. Deliberately not phrased as an
 * agency services menu.
 */
const CAPABILITIES: Capability[] = [
  {
    title: "Full-stack web",
    body:
      "End-to-end web products: data model, API, interface, deployment. Comfortable in Next.js, TypeScript, Node and relational databases.",
    examples: [
      { label: "PowerSell", href: "/work/powersell" },
      { label: "UPVC Cloud", href: "/work/upvc-cloud" },
      { label: "IDRAK", href: "/work/idrak" },
    ],
  },
  {
    title: "Mobile apps",
    body:
      "Native and cross-platform mobile shipped to the App Store and Google Play, including state, offline, auth and push.",
    examples: [
      { label: "SweetTreats", href: "/work/sweetreats" },
      { label: "HBD MM", href: "/work/hbd-mm" },
      { label: "Okasha Smart App", href: "/work/okasha-smart-app" },
    ],
  },
  {
    title: "Backend & integrations",
    body:
      "APIs, data pipelines, payments, auth, third-party integrations. Built for the long tail: observability, retries, idempotency.",
    examples: [
      { label: "EditDeck Pro", href: "/work/editdeck-pro" },
      { label: "UPVC Cloud", href: "/work/upvc-cloud" },
    ],
  },
  {
    title: "AI & automation",
    body:
      "LLM orchestration, media generation, workflow automation. Interested in shipping AI features that are reliable and measurable, not just impressive demos.",
    examples: [{ label: "EditDeck Pro", href: "/work/editdeck-pro" }],
  },
];

export function Capabilities() {
  return (
    <section className="section home-caps" aria-labelledby="capabilities">
      <div className="wrap">
        <div className="home-caps__head">
          <p className="eyebrow">What I work on</p>
          <h2 id="capabilities" className="home-caps__title">
            Four kinds of work, grounded in real projects.
          </h2>
        </div>

        <ul className="home-caps__grid">
          {CAPABILITIES.map((c) => (
            <li key={c.title} className="home-caps__item">
              <h3 className="home-caps__item-title">{c.title}</h3>
              <p className="home-caps__item-body">{c.body}</p>
              <ul className="home-caps__examples">
                {c.examples.map((ex) => (
                  <li key={ex.href}>
                    <Link href={ex.href}>{ex.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
