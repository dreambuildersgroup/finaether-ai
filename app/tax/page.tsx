// app/tax/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, FileText, Zap, Download, Shield } from "lucide-react";

const mockDeductions = [
  { id: 1, item: "Home Office Setup", amount: 1240, status: "Approved", confidence: 98 },
  { id: 2, item: "Business Meals", amount: 487, status: "Pending Review", confidence: 76 },
  { id: 3, item: "401(k) Contribution", amount: 6500, status: "Maxed", confidence: 100 },
];

export default function TaxCenterPage() {
  const [taxLiability] = useState(12480);
  const [effectiveRate] = useState(22.4);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Tax Center</h1>
            <p className="text-emerald-400">2026 Tax Year • IRS Ready • AI Powered</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Shield className="w-4 h-4" /> Run Audit Guardian
            </Button>
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-500">
              <Download className="w-4 h-4" /> Export to TurboTax
            </Button>
          </div>
        </div>

        {/* Tax Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">ESTIMATED TAX OWED</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">${taxLiability.toLocaleString()}</div>
              <div className="text-emerald-400 text-sm mt-2">↓ $1,240 from last week (AI savings)</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">EFFECTIVE TAX RATE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">{effectiveRate}%</div>
              <Progress value={effectiveRate} className="mt-4 h-3" />
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-emerald-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-zinc-400">DEDUCTIONS FOUND</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold text-white">$8,227</div>
              <div className="text-emerald-400 text-sm mt-2">+3 new AI suggestions today</div>
            </CardContent>
          </Card>
        </div>

        {/* AI Deduction Scanner */}
        <Card className="bg-zinc-900 border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              AI Deduction Scanner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="gap-2 w-full md:w-auto" onClick={() => alert("📸 AI Receipt Scanner activated — drop your receipts here")}>
              <Upload className="w-4 h-4" /> Upload Receipts / Documents
            </Button>
            <p className="text-zinc-400 text-sm mt-4">FinAether AI just scanned your last 47 transactions and found $1,840 in missed deductions.</p>
          </CardContent>
        </Card>

        {/* Deductions Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Potential Deductions • 2026</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">AI Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDeductions.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium">{d.item}</TableCell>
                    <TableCell className="text-right">${d.amount}</TableCell>
                    <TableCell>
                      <Badge variant={d.status === "Approved" ? "default" : "secondary"}>{d.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-emerald-400">{d.confidence}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-zinc-400 text-sm">
          FinAether AI Tax Engine just saved you an estimated $2,847 this year • Ready for e-file
        </div>
      </div>
    </div>
  );
}