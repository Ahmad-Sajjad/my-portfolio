import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * V1 stub: validates and logs to stdout. Swap in Resend / Formspree /
 * Firebase Functions / etc. by editing the body of this handler — the
 * client-side form already POSTs JSON to /api/contact and handles the
 * three states (submitting / sent / error).
 */
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

  // Replace with real delivery (Resend / SES / etc.)
  console.log(
    `[contact] ${new Date().toISOString()} from=${email} name=${name} message=${message.slice(0, 200)}`,
  );

  return NextResponse.json({ ok: true });
}
