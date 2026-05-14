// app/api/plaid/exchange-public-token/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { public_token } = await request.json();

  const clientId = process.env.PLAID_CLIENT_ID;
  const secret = process.env.PLAID_SECRET;

  if (!clientId || !secret) {
    return NextResponse.json({ error: "Missing Plaid keys" }, { status: 400 });
  }

  try {
    const response = await fetch("https://sandbox.plaid.com/item/public_token/exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        secret: secret,
        public_token: public_token,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error_message || "Exchange failed" }, { status: 400 });
    }

    console.log("✅ Plaid Access Token received:", data.access_token);

    return NextResponse.json({ success: true, accessToken: data.access_token });
  } catch (error: any) {
    console.error("Exchange error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}