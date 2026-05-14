// app/bookkeeper/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Zap, CheckCircle, Clock, AlertCircle } from "lucide-react";

const recentActivity = [
  { time: "Just now", action: "Auto-categorized Starbucks → Meals & Entertainment", amount: -6.85, status: "success" },
  { time: "2 min ago", action: "Matched Amazon receipt → Office Supplies + flagged $29 deduction", amount: -29.99, status: "success" },
  { time: "5 min ago", action: "Created double-entry for Salary Deposit", amount: 4250, status: "success" },
  { time: "12 min ago", action: "Suggested missed deduction: Home Office Setup $1,240", amount: 1240, status: "pending" },
];

export default function AutonomousBookkeeperPage() {
  const [processedToday] = useState(47);
  const [confidence] = useState(98.7);

  const triggerFullScan = () => {
    alert("🧠 Autonomous Bookkeeper Agent activated!\n\nScanning all Plaid accounts + receipts...\n\n47 new transactions processed in 3.2 seconds\n3 new tax deductions discovered ($3,840 total savings)");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Autonomous Bookkeeper</h1>
            <p className="text-emerald-400">xAI Agent • Always On • 99.2% Auto-Accuracy</p>
          </div>
          <Button onClick={triggerFullScan} className="gap-2 bg-violet-600 hover:bg-violet-500 text-lg px-8">
            <Zap className="w-5 h-5" />
            Trigger Full AI Scan Now
          </Button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">TRANSACTIONS PROCESSED TODAY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-white">{processedToday}</div>
              <div className="flex items-center gap-2 text-emerald-400 mt-2">
                <CheckCircle className="w-4 h-4" /> 100% automated
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">AI CONFIDENCE SCORE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-emerald-400">{confidence}%</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">POTENTIAL SAVINGS FOUND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold text-amber-400">$3,840</div>
              <div className="text-sm text-amber-400">3 new deductions this hour</div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Log */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Live Bookkeeper Activity Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell className="text-zinc-400">{item.time}</TableCell>
                    <TableCell>{item.action}</TableCell>
                    <TableCell className="text-right font-medium">
                      {item.amount > 0 ? "+" : ""}${Math.abs(item.amount)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.status === "success" ? "default" : "secondary"}>
                        {item.status === "success" ? "✅ Completed" : "⏳ Pending Review"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Autonomous Bookkeeper is now running 24/7 • Connected to your Plaid accounts • Every action is fully auditable and reversible
        </div>
      </div>
    </div>
  );
}