// app/dashboard/page.tsx
"use client";   // ← THIS FIXES THE ERROR

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, TrendingUp, Shield, Zap, Link as LinkIcon } from "lucide-react";
import NetWorthChart from "@/components/NetWorthChart";
import CashFlowForecast from "@/components/CashFlowForecast";
import OracleChat from "@/components/OracleChat";
import PlaidLinkButton from "@/components/PlaidLinkButton";

export default function FinTrackDashboard() {
  const connectPlaid = () => {
    alert("🔌 Plaid Link opening... (full bank login flow coming in next message once you confirm this works)");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">FinAether AI</h1>
            <p className="text-emerald-400 text-lg">US Edition • Good afternoon, Adolfo • April 22, 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Mic className="w-4 h-4" /> Voice CFO
            </Button>
            <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-2xl">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Protected by xAI</span>
            </div>
          </div>
        </div>

        {/* Net Worth Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">TOTAL NET WORTH</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$487,392</div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm mt-2">
                <TrendingUp className="w-4 h-4" /> +$8,291 (+1.7%) today
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">LIQUID ASSETS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">$142,837</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">INVESTMENTS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">$298,450</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">RETIREMENT</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">$46,105</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <CashFlowForecast />
          </div>
          <div className="lg:col-span-5">
            <OracleChat />
          </div>
          <div className="lg:col-span-12">
            <NetWorthChart />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500">+ New Transaction</Button>
          <Button size="lg" variant="outline">Upload Receipt (AI scan)</Button>
          <Button size="lg" variant="outline">Run Tax Optimizer</Button>
  
         {/* REAL PLAID BUTTON */}
          <PlaidLinkButton />

          <Button size="lg" variant="outline">Generate Market Pulse Video</Button>
        </div>
      </div>
    </div>
  );
}