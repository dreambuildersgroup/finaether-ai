// app/tax-filing/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Zap, Download, Shield, AlertTriangle } from "lucide-react";

export default function PredictiveTaxFilingPage() {
  const [taxLiability] = useState(12480);
  const [auditRisk] = useState(4);
  const [isFiling, setIsFiling] = useState(false);

  const runPredictiveFiling = () => {
    setIsFiling(true);
    setTimeout(() => {
      alert("🚀 Predictive Tax Filing Agent activated!\n\nForm 1040 + Schedule C + Schedule D auto-filled\nAudit risk: 4% (very low)\nRecommended e-file savings: $2,847\nReady to submit to IRS?");
      setIsFiling(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Predictive Tax Filing Agent</h1>
            <p className="text-emerald-400">xAI-Powered • IRS Ready • Auto e-File</p>
          </div>
          <Button onClick={runPredictiveFiling} disabled={isFiling} className="gap-2 bg-violet-600 hover:bg-violet-500 text-lg px-8 py-6">
            <Zap className="w-5 h-5" />
            {isFiling ? "Running AI Filing Agent..." : "Run Predictive Filing"}
          </Button>
        </div>

        {/* Tax Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">PREDICTED TAX OWED</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">${taxLiability.toLocaleString()}</div>
              <div className="text-emerald-400 text-sm mt-2">↓ $2,340 from AI optimizations</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">AUDIT RISK</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-emerald-400">{auditRisk}%</div>
              <Progress value={auditRisk} className="mt-4 h-3" />
              <div className="text-xs text-emerald-400 mt-2">Very Low – AI cleared all red flags</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">FORMS READY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Badge className="bg-emerald-500/20 text-emerald-400">1040</Badge>
                <Badge className="bg-emerald-500/20 text-emerald-400">Schedule C</Badge>
                <Badge className="bg-emerald-500/20 text-emerald-400">Schedule D</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">NEXT E-FILE DEADLINE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">Apr 15</div>
              <div className="text-sm text-amber-400 mt-2">14 days remaining</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent AI Actions */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Predictive Tax Agent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Action</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Auto-filled 401(k) deduction</TableCell>
                  <TableCell className="text-emerald-400">-$3,847 tax savings</TableCell>
                  <TableCell>99%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Flagged potential wash sale on BTC</TableCell>
                  <TableCell className="text-amber-400">Risk neutralized</TableCell>
                  <TableCell>96%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Discovered missed home office deduction</TableCell>
                  <TableCell className="text-emerald-400">+$1,240</TableCell>
                  <TableCell>94%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Predictive Tax Filing Agent analyzed 184 transactions and Plaid data in real time • Ready for IRS e-file in one click
        </div>
      </div>
    </div>
  );
}