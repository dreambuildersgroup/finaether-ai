// app/coach/page.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";

export default function AIFinancialCoachPage() {
  const coachMessage = "Good morning, Adolfo! Your cash flow is strong (+$14,820 this week). Two upcoming bills total $2,340 — all covered. AI detected a $1,840 missed deduction in last month’s expenses. Your portfolio is up 4.8% — great job on the VOO allocation.";

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">AI Financial Coach</h1>
            <p className="text-emerald-400">Your personal daily briefing • Powered by xAI</p>
          </div>
          <Button className="gap-2 bg-violet-600 hover:bg-violet-500">
            <Zap className="w-5 h-5" />
            Ask Coach Anything
          </Button>
        </div>

        {/* Daily Briefing Card */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-emerald-500/30 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <span className="text-emerald-400">👋 Good morning, Adolfo!</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-lg leading-relaxed text-zinc-100">{coachMessage}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/50 rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="text-sm text-zinc-400">Cash Flow Health</div>
                    <div className="text-4xl font-bold text-emerald-400">92</div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="text-sm text-zinc-400">Upcoming Alerts</div>
                    <div className="text-4xl font-bold">2 bills • $2,340</div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/50 rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="text-sm text-zinc-400">AI Insight</div>
                    <div className="text-4xl font-bold">$1,840</div>
                    <div className="text-sm text-emerald-400">missed deduction found</div>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full py-8 text-xl bg-gradient-to-r from-violet-500 to-emerald-500 hover:from-violet-600 hover:to-emerald-600"
              onClick={() => alert("🎤 Opening Voice/Video CFO Avatar for deeper conversation...")}
            >
              Talk to Your AI Coach Now
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-zinc-400 text-sm">
          Your AI Financial Coach updates every morning at 7:00 AM • Powered by real-time Plaid data + Autonomous Bookkeeper
        </div>
      </div>
    </div>
  );
}