import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "website",
      "annualRevenue",
      "privacyAccepted",
    ]

    for (const key of requiredFields) {
      const value = body?.[key]
      if (!value) {
        return NextResponse.json(
          { ok: false, error: `Missing field: ${key}` },
          { status: 400 }
        )
      }
    }

    // Placeholder handler: replace with your CRM/email integration.
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}
