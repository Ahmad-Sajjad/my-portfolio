import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form handler.
 *
 * Sends an email via Resend (https://resend.com) when `RESEND_API_KEY`
 * is set in the environment. Without it the handler logs to stdout and
 * returns 200 (useful in dev). Production: set both env vars in your
 * deployment environment (Vercel, etc.).
 *
 *   RESEND_API_KEY        — your Resend API key (required for delivery)
 *   CONTACT_TO_EMAIL      — destination address (default: ahmad@reivex.io)
 *   CONTACT_FROM_EMAIL    — sender address (default: onboarding@resend.dev,
 *                            works without domain verification. To use your
 *                            own domain, verify it in Resend then set
 *                            this to e.g. "Ahmad <noreply@reivex.io>").
 */

const TO = process.env.CONTACT_TO_EMAIL ?? "ahmad@reivex.io";
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (
    !body ||
    typeof body !== "object" ||
    !("email" in body) ||
    !("name" in body) ||
    !("message" in body)
  ) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }
  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "empty fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(
      `[contact] RESEND_API_KEY not set — would have emailed ${TO}:\n  from=${email}\n  name=${name}\n  message=${message.slice(0, 200)}`,
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const subject = `New portfolio message from ${name}`;
    const textBody = `From: ${name} <${email}>\n\n${message}\n\n— Sent from your portfolio contact form`;
    const htmlBody = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0c0c0c;">
  <h2 style="font-family:Georgia,serif;font-weight:350;font-size:22px;margin:0 0 18px;">
    New portfolio message
  </h2>
  <p style="margin:0 0 6px;font-size:14px;color:#6b6b69;">
    From <strong style="color:#0c0c0c;">${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;
  </p>
  <div style="margin-top:18px;padding:16px 18px;background:#f4f4f2;border-left:3px solid #ea580c;border-radius:4px;white-space:pre-wrap;font-size:15px;line-height:1.6;">
    ${escapeHtml(message)}
  </div>
  <p style="margin-top:24px;font-size:11px;letter-spacing:0.04em;color:#b0b0ae;">
    Sent from ahmadsajjad.dev contact form · reply to this email to respond
  </p>
</div>`.trim();

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });
    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json(
        { error: "delivery failed" },
        { status: 500 },
      );
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "delivery failed" },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
