import { NextResponse } from "next/server";

type NewsletterPayload = {
  email?: string;
  name?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (payload.email ?? "").trim().toLowerCase();
  const name = (payload.name ?? "").trim();
  const source = (payload.source ?? "website").trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const endpoint = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json(
      { error: "Newsletter integration is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: name || undefined,
        source,
        subscribedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Subscription service rejected the request." },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json({ error: "Unable to reach subscription service." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
