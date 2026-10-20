import Link from "next/link";
import { site } from "@/data/site";

/**
 * Home → Experience preview. One short paragraph about the current
 * engagement, then a link into the full About page.
 */
export function ExperiencePreview() {
  return (
    <section className="section home-exp" aria-labelledby="experience">
      <div className="wrap home-exp__grid">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 id="experience" className="home-exp__title">
            Currently building at Reivex.
          </h2>
        </div>
        <div className="home-exp__body">
          <p>
            I co-founded{" "}
            <a href={site.company.url} target="_blank" rel="noopener noreferrer">
              {site.company.name}
            </a>{" "}
            and serve as its COO. I split my time between shipping client
            products end-to-end and setting up the engineering practices the
            team runs on: scoping, delivery, code review, release.
          </p>
          <p>
            Before Reivex I studied Computer Science at UET Lahore and worked
            on production software across a mix of web, mobile and enterprise
            projects. The{" "}
            <Link href="/about">About page</Link> has the longer version.
          </p>
        </div>
      </div>
    </section>
  );
}
