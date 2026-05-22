"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { contactMeta } from "@/data/contactMeta";
import { useLahoreTime } from "@/hooks/useLahoreTime";

type FormState = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const { time, day } = useLahoreTime();
  const [showForm, setShowForm] = useState(false);
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <section className="contact" id="contact" data-section="contact">
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          007 · Contact
        </div>
        <div className="contact-grid">
          <div>
            <h2>
              Let&apos;s build something <em>good.</em>
            </h2>
            <a className="email-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <br />
            <button
              type="button"
              className="toggle"
              onClick={() => setShowForm((s) => !s)}
              aria-expanded={showForm}
            >
              {showForm ? "— or just email me" : "+ or send a message"}
            </button>
            <div className={`contact-form ${showForm ? "open" : ""}`}>
              <form className="inner" onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Your name" required />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tell me about the project — what, when, anything you've got."
                  required
                />
                <button type="submit" disabled={state === "submitting"}>
                  {state === "submitting"
                    ? "sending…"
                    : state === "sent"
                      ? "sent ✓"
                      : state === "error"
                        ? "retry →"
                        : "send →"}
                </button>
                {state === "sent" && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--text-dim)",
                      marginTop: 4,
                    }}
                  >
                    Thanks — I&apos;ll reply within a day.
                  </p>
                )}
                {state === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      marginTop: 4,
                    }}
                  >
                    Something broke. Try{" "}
                    <a
                      href={`mailto:${site.email}`}
                      style={{ color: "inherit" }}
                    >
                      emailing directly
                    </a>
                    .
                  </p>
                )}
              </form>
            </div>
          </div>
          <div className="contact-aside">
            <div className="socials">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>github</span>
                <span className="arrow">↗</span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>linkedin</span>
                <span className="arrow">↗</span>
              </a>
              <a
                href={site.company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{site.company.name.toLowerCase()}</span>
                <span className="arrow">↗</span>
              </a>
              <a href={`mailto:${site.email}`}>
                <span>email</span>
                <span className="arrow">↗</span>
              </a>
            </div>
            <div className="small">
              <span className="k">Local time</span>
              {time} · {day} · {site.location.city} PKT
            </div>
            <div className="small">
              <span className="k">Response time</span>
              {contactMeta.responseTime}
            </div>
            </div>
          </div>
        </div>
    </section>
  );
}
