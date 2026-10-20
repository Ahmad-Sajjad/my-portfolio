import { site } from "@/data/site";
import { ContactForm } from "@/components/sections/ContactForm";

/**
 * /contact. Real channels on the left, simple form on the right.
 * No fabricated response-time promise, no fake confirmations.
 */
export function ContactPage() {
  return (
    <main id="main" className="contact">
      <div className="wrap">
        <header className="contact__head">
          <p className="eyebrow">Contact</p>
          <h1 className="contact__title">Get in touch</h1>
          <p className="contact__intro">
            I&rsquo;m open to full-stack engineering roles, founding-engineer
            spots, and contract product builds. If you have an idea you&rsquo;re
            trying to get off the ground, or an existing product you want help
            shipping, send a note.
          </p>
        </header>

        <div className="contact__grid">
          <aside className="contact__channels">
            <ul className="contact__list">
              <li>
                <span className="contact__k">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <span className="contact__k">LinkedIn</span>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/ahmadsajjadofficial
                </a>
              </li>
              <li>
                <span className="contact__k">GitHub</span>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  github.com/Ahmad-Sajjad
                </a>
              </li>
              <li>
                <span className="contact__k">Reivex</span>
                <a href={site.company.url} target="_blank" rel="noopener noreferrer">
                  reivex.io
                </a>
              </li>
              <li>
                <span className="contact__k">Based in</span>
                <span>
                  {site.location.city}, {site.location.country}
                </span>
              </li>
            </ul>

            <div className="contact__note">
              <p className="contact__note-label">What happens next</p>
              <ol>
                <li>I usually reply within a day or two.</li>
                <li>If it&rsquo;s a fit, we jump on a short call to scope it.</li>
                <li>I send a written proposal with timeline and price.</li>
              </ol>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
