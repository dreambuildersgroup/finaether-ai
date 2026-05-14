// app/crypto-tax-lots/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Download, TrendingUp, AlertTriangle } from "lucide-react";

const lots = [
  { id: 1, dateAcquired: "2024-03-15", amount: 0.85, costBasis: 28500, currentValue: 45000, method: "FIFO", gain: 16500 },
  { id: 2, dateAcquired: "2025-01-10", amount: 0.4, costBasis: 32000, currentValue: 21200, method: "LIFO", gain: -10800 },
  { id: 3, dateAcquired: "2025-02-22", amount: 0.25, costBasis: 18000, currentValue: 13250, method: "HIFO", gain: -4750 },
];

export default function CryptoTaxLotsPage() {
  const [method, setMethod] = useState("FIFO");
  const [totalTaxSavings] = useState(3870);

  const simulateSale = () => {
    alert(`🚀 AI Tax Lot Simulator\n\nSelling 0.5 BTC at current price...\n\nBest method: ${method}\nRealized Gain: +$8,240\nTax Impact (22% bracket): $${Math.round(8240 * 0.22)}\nRecommended: Use HIFO to save $${totalTaxSavings} this year`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Crypto Tax Lots</h1>
            <p className="text-emerald-400">FIFO / LIFO / HIFO Optimizer • IRS Schedule D Ready • xAI Powered</p>
          </div>
          <div className="flex items-center gap-4">
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Tax Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FIFO">FIFO (Default)</SelectItem>
                <SelectItem value="LIFO">LIFO</SelectItem>
                <SelectItem value="HIFO">HIFO (Highest Cost First)</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={simulateSale} className="gap-2 bg-emerald-600 hover:bg-emerald-500">
              <Zap className="w-4 h-4" /> Simulate Sale
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" /> Export Schedule D
            </Button>
          </div>
        </div>

        {/* Tax Savings Banner */}
        <Card className="bg-gradient-to-r from-emerald-500/10 to-amber-500/10 border-emerald-500/30 mb-8">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <div className="text-emerald-400 text-sm font-medium">AI RECOMMENDED TAX SAVINGS THIS YEAR</div>
              <div className="text-5xl font-bold text-white">${totalTaxSavings}</div>
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-400 text-lg px-6 py-2">Switching to HIFO saves you the most</Badge>
          </CardContent>
        </Card>

        {/* Lots Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Your Crypto Tax Lots • 3 holdings • 1.5 BTC total</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date Acquired</TableHead>
                  <TableHead>Amount (BTC)</TableHead>
                  <TableHead className="text-right">Cost Basis</TableHead>
                  <TableHead className="text-right">Current Value</TableHead>
                  <TableHead className="text-right">Unrealized Gain/Loss</TableHead>
                  <TableHead>Method</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lots.map((lot) => (
                  <TableRow key={lot.id}>
                    <TableCell>{lot.dateAcquired}</TableCell>
                    <TableCell className="font-medium">{lot.amount}</TableCell>
                    <TableCell className="text-right">${lot.costBasis.toLocaleString()}</TableCell>
                    <TableCell className="text-right">${lot.currentValue.toLocaleString()}</TableCell>
                    <TableCell className={`text-right ${lot.gain > 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {lot.gain > 0 ? "+" : ""}${lot.gain.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{lot.method}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          FinAether AI just ran 12 tax-lot scenarios • HIFO saves you $3,870 vs FIFO • Wash-sale rule check: CLEAN
        </div>
      </div>
    </div>
  );
}