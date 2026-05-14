// app/api/plaid/create-link-token/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const clientId = process.env.PLAID_CLIENT_ID;
  const secret = process.env.PLAID_SECRET;

  if (!clientId || !secret) {
    return NextResponse.json(
      { error: "Missing Plaid keys in .env.local" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://sandbox.plaid.com/link/token/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        secret: secret,
        user: { client_user_id: "user-123" },
        client_name: "FinTrack US",
        products: ["auth", "transactions", "investments"],
        country_codes: ["US"],
        language: "en",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Plaid error:", data);
      return NextResponse.json({ error: data.error_message || "Plaid API error" }, { status: 400 });
    }

    return NextResponse.json({ link_token: data.link_token });
  } catch (error: any) {
    console.error("Create link token error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}