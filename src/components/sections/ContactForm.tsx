"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please fill in name, email, and message.");
      return;
    }

    setStatus("submitting");
    setMessage("Sending…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json: unknown = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(
          typeof json === "object" && json && "error" in json
            ? `Something went wrong (${String((json as { error: unknown }).error)}). You can email ahmad@reivex.io directly.`
            : "Something went wrong. You can email ahmad@reivex.io directly.",
        );
        return;
      }
      setStatus("success");
      setMessage(
        "Thanks — your message is on its way. I usually reply within a day or two.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Couldn't reach the server. You can email ahmad@reivex.io directly.",
      );
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="website">Website (leave blank)</label>
        <input
          type="text"
          name="website"
          id="website"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="contact-fields-row">
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            disabled={status === "submitting"}
          />
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          disabled={status === "submitting"}
        />
      </div>

      <div className="contact-actions">
        <button
          type="submit"
          className="contact-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
        </button>
      </div>

      <p
        className="contact-status"
        data-state={status}
        aria-live="polite"
        role="status"
      >
        {message}
      </p>
    </form>
  );
}
