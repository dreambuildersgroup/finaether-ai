// app/investing/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TrendingUp, Zap, Play, Calendar, Shield } from "lucide-react";

const portfolioData = [
  { name: "VOO (S&P 500)", value: 148000, color: "#10b981" },
  { name: "QQQ (Tech)", value: 92000, color: "#3b82f6" },
  { name: "BTC", value: 45000, color: "#f59e0b" },
  { name: "AAPL", value: 28000, color: "#ec4899" },
  { name: "Cash", value: 12000, color: "#6b7280" },
];

const holdings = [
  { symbol: "VOO", shares: 312, price: 474.85, value: 148000, return: 18.4 },
  { symbol: "QQQ", shares: 178, price: 516.92, value: 92000, return: 24.7 },
  { symbol: "BTC", shares: 0.85, price: 52941, value: 45000, return: -3.2 },
];

export default function InvestingHubPage() {
  const [selectedPeriod] = useState("1Y");

  const runBacktest = () => {
    alert("🚀 Back-testing engine running...\n\n2022 Bear Market Simulation:\nYour portfolio would have lost only -11.3% vs S&P 500 -24.7%\nAI Recommendation: Increase VOO allocation by 8%");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Investing Hub</h1>
            <p className="text-emerald-400">Robo-Advisor • Real-Time US Markets • xAI Powered</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2" onClick={() => alert("📡 Live market data synced from Polygon + Alpaca")}>
              <Shield className="w-4 h-4" /> Sync Markets
            </Button>
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-500">
              <Zap className="w-4 h-4" /> Run Robo-Advisor
            </Button>
          </div>
        </div>

        {/* Portfolio Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">TOTAL PORTFOLIO VALUE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$325,000</div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm mt-2">
                <TrendingUp className="w-4 h-4" /> +$14,820 (+4.8%) today
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">YTD RETURN</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-emerald-400">+22.7%</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">AI RISK SCORE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-amber-400">Moderate</div>
              <Badge className="mt-4 bg-amber-500/20 text-amber-400">Balanced 60/40</Badge>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">NEXT DIVIDEND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$1,240</div>
              <div className="text-zinc-400 text-sm mt-2">in 11 days (VOO + AAPL)</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Allocation Chart */}
          <div className="lg:col-span-5">
            <Card className="bg-zinc-900 border-zinc-800 h-full">
              <CardHeader>
                <CardTitle>Portfolio Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <Pie
                      data={portfolioData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={130}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {portfolioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Holdings Table */}
          <div className="lg:col-span-7">
            <Card className="bg-zinc-900 border-zinc-800 h-full">
              <CardHeader>
                <CardTitle>Current Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead className="text-right">Shares</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                      <TableHead className="text-right">Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {holdings.map((h) => (
                      <TableRow key={h.symbol}>
                        <TableCell className="font-medium">{h.symbol}</TableCell>
                        <TableCell className="text-right">{h.shares}</TableCell>
                        <TableCell className="text-right">${h.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">${h.value.toLocaleString()}</TableCell>
                        <TableCell className={`text-right ${h.return > 0 ? "text-emerald-400" : "text-red-400"}`}>
                          {h.return > 0 ? "+" : ""}{h.return}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Robo-Advisor & Back-Testing */}
          <div className="lg:col-span-12">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>xAI Robo-Advisor + Back-Testing Engine</span>
                  <Button variant="outline" onClick={runBacktest}>
                    <Calendar className="w-4 h-4 mr-2" /> Run Backtest
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Robo Suggestions */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">AI Portfolio Recommendations</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-zinc-950 rounded-xl">
                      <div>
                        <span className="font-medium">Increase VOO to 45%</span>
                        <p className="text-sm text-zinc-400">Expected 12-month return: +14.8% • Risk-adjusted</p>
                      </div>
                      <Badge className="bg-emerald-500/20 text-emerald-400">High Conviction</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-zinc-950 rounded-xl">
                      <div>
                        <span className="font-medium">Add 5% QQQM</span>
                        <p className="text-sm text-zinc-400">Tech sector momentum + AI boom exposure</p>
                      </div>
                      <Badge variant="secondary">Medium</Badge>
                    </div>
                  </div>
                </div>

                {/* Market Pulse */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-red-400" />
                    Market Pulse — AI Video Briefing
                  </h3>
                  <Button
                    className="w-full h-28 bg-gradient-to-r from-violet-500 to-emerald-500 text-white text-xl font-medium hover:from-violet-600 hover:to-emerald-600"
                    onClick={() => alert("🎥 Generating 60-second Market Pulse video for your portfolio...\n\nToday’s AI briefing: Fed rate cut probability 68% → VOO up 2.1% expected tomorrow")}
                  >
                    ▶ Generate Today’s 60-Second Market Pulse
                  </Button>
                  <p className="text-xs text-zinc-400 text-center mt-3">Tailored to your exact holdings • Powered by Grok + real-time data</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          FinAether AI Investing Hub just optimized your portfolio for 2026 tax efficiency • Back-tested against 2008, 2020 & 2022 crashes
        </div>
      </div>
    </div>
  );
}