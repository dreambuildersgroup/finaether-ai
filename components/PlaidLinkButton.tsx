// components/PlaidLinkButton.tsx
"use client";
import { useCallback, useState } from "react";
import { usePlaidLink, PlaidLinkOnSuccess } from "react-plaid-link";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon } from "lucide-react";

export default function PlaidLinkButton() {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  const createLinkToken = useCallback(async () => {
    const response = await fetch("/api/plaid/create-link-token", { method: "POST" });
    const data = await response.json();
    if (data.link_token) {
      setLinkToken(data.link_token);
    } else {
      alert("❌ Could not get Plaid link token — check your .env.local keys");
    }
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token, metadata) => {
    await fetch("/api/plaid/exchange-public-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ public_token }),
    });
    alert(`✅ SUCCESS! Connected ${metadata.institution?.name || "your bank"}!\n\nLive balances and transactions are now syncing into FinAether AI.`);
  }, []);

  const { open, ready } = usePlaidLink({
    token: linkToken!,
    onSuccess,
    onExit: () => console.log("Plaid Link closed"),
  });

  return (
    <Button
      size="lg"
      variant="outline"
      className="gap-2"
      onClick={() => {
        if (!linkToken) createLinkToken();
        else open();
      }}
      disabled={!ready && !!linkToken}
    >
      <LinkIcon className="w-4 h-4" />
      Connect Bank / Brokerage (Plaid)
    </Button>
  );
}