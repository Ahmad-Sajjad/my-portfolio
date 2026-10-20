import Link from "next/link";
import { site } from "@/data/site";

/**
 * Home → Closing. Final invitation to make contact. Real channels only.
 */
export function ClosingCta() {
  return (
    <section className="section home-close" aria-labelledby="closing">
      <div className="wrap home-close__inner">
        <h2 id="closing" className="home-close__title">
          Have a product worth building?
        </h2>
        <p className="home-close__body">
          I&rsquo;m open to full-stack engineering and founding roles,
          contract product builds, and conversations about getting software
          shipped. The best place to start is email.
        </p>
        <div className="home-close__actions">
          <a href={`mailto:${site.email}`} className="home-close__email">
            {site.email}
          </a>
          <Link href="/contact" className="btn-text">
            See all channels
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
