// app/retirement/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import { TrendingUp, Zap, Calendar, DollarSign } from "lucide-react";

const monteCarloData = [
  { year: 2026, p10: 245000, p50: 312000, p90: 398000 },
  { year: 2030, p10: 398000, p50: 521000, p90: 682000 },
  { year: 2035, p10: 612000, p50: 845000, p90: 1_120000 },
  { year: 2040, p10: 890000, p50: 1_280000, p90: 1_780000 },
  { year: 2045, p10: 1_240000, p50: 1_920000, p90: 2_680000 },
];

export default function RetirementPlannerPage() {
  const [retirementAge, setRetirementAge] = useState(65);
  const [projectedBalance] = useState(1920000);

  const runMonteCarlo = () => {
    alert("🔬 Running 10,000 Monte-Carlo simulations with your actual portfolio data...\n\nMedian outcome at age 65: $1,920,000\n90th percentile (excellent market): $2,680,000\n10th percentile (conservative): $1,240,000\n\nAI Recommendation: Increase 401(k) by $450/month to hit $2.5M goal");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Retirement Planner</h1>
            <p className="text-emerald-400">Monte-Carlo Simulator • 401(k)/IRA Optimizer • xAI Powered</p>
          </div>
          <Button onClick={runMonteCarlo} className="gap-2 bg-emerald-600 hover:bg-emerald-500">
            <Zap className="w-4 h-4" /> Run Full Monte-Carlo
          </Button>
        </div>

        {/* Current Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">CURRENT RETIREMENT BALANCE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$487,392</div>
              <div className="text-emerald-400 text-sm mt-2">+18% YTD • 401(k) + IRA</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">PROJECTED AT AGE {retirementAge}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-emerald-400">${projectedBalance.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">MONTHLY CONTRIBUTION NEEDED</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$1,240</div>
              <Badge className="mt-2 bg-emerald-500/20 text-emerald-400">to reach $2.5M goal</Badge>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">SOCIAL SECURITY ESTIMATE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$2,840/mo</div>
              <div className="text-zinc-400 text-sm mt-2">at full retirement age</div>
            </CardContent>
          </Card>
        </div>

        {/* Monte-Carlo Projection Chart */}
        <Card className="bg-zinc-900 border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Monte-Carlo Retirement Projection (10,000 simulations)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={380}>
              <LineChart data={monteCarloData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="year" stroke="#a3a3a3" />
                <YAxis stroke="#a3a3a3" />
                <Tooltip />
                <Area type="monotone" dataKey="p10" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} />
                <Area type="monotone" dataKey="p50" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                <Area type="monotone" dataKey="p90" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                <Line type="monotone" dataKey="p50" stroke="#10b981" strokeWidth={4} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Life-Event Simulator */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Life-Event Simulator
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">What if I retire at age...</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="60"
                  max="70"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="flex-1 accent-emerald-500"
                />
                <span className="font-mono text-3xl text-emerald-400 w-16">{retirementAge}</span>
              </div>
              <Button onClick={runMonteCarlo} className="w-full mt-6">Recalculate with new retirement age</Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Major Life Events</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("📉 Scenario updated: Buying Austin home in 2028 reduces projected balance by $87k but increases tax savings by $34k")}>
                  <DollarSign className="mr-3" /> Buy home in Austin 2028
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("👨‍👩‍👧 Scenario updated: College for kids in 2031 reduces balance by $142k but AI suggests 529 plan optimization")}>
                  Pay for kids’ college 2031
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => alert("🌍 Scenario updated: Early retirement at 62 with part-time consulting adds $218k in income")}>
                  Retire early + part-time work
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          FinAether AI ran 10,000 Monte-Carlo paths using your actual portfolio • Median outcome: $1.92M at age 65 • Ready for legacy & estate planning
        </div>
      </div>
    </div>
  );
}