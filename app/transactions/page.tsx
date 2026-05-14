// app/transactions/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, Zap, Shield, Plus } from "lucide-react";

const mockTransactions = [
  { id: 1, date: "2026-04-22", description: "Starbucks Coffee", category: "Meals & Entertainment", amount: -6.85, account: "Chase Checking", type: "debit", taxDeductible: false },
  { id: 2, date: "2026-04-21", description: "Salary Deposit - Acme Corp", category: "Income", amount: 4250.00, account: "Chase Checking", type: "credit", taxDeductible: false },
  { id: 3, date: "2026-04-20", description: "Amazon - Laptop Stand", category: "Office Supplies", amount: -29.99, account: "Amex Business", type: "debit", taxDeductible: true },
  { id: 4, date: "2026-04-19", description: "Uber to Airport", category: "Travel", amount: -42.50, account: "Chase Checking", type: "debit", taxDeductible: true },
];

export default function TransactionsPage() {
  const [transactions] = useState(mockTransactions);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) =>
    t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Transactions</h1>
            <p className="text-emerald-400">Double-Entry Ledger • AI Powered • 184 entries this month</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2" onClick={() => alert("🔄 Plaid Sync started — 3 new transactions imported")}>
              <Shield className="w-4 h-4" /> Sync Banks (Plaid)
            </Button>
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-500">
              <Plus className="w-4 h-4" /> New Transaction
            </Button>
          </div>
        </div>

        {/* Controls */}
        <Card className="bg-zinc-900 border-zinc-800 mb-6">
          <CardHeader>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                <Input
                  placeholder="Search transactions or descriptions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-zinc-950 border-zinc-700"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Upload className="w-4 h-4" /> AI Receipt Scan
              </Button>
              <Button variant="outline" className="gap-2">
                <Zap className="w-4 h-4" /> Auto-Categorize All
              </Button>
              <Button variant="outline" className="gap-2 text-amber-400">
                <Shield className="w-4 h-4" /> Run Fraud Guardian
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Double-Entry Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Double-Entry Ledger</span>
              <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400">AI Suggested Categories</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Debit</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Tax?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-medium">{t.date}</TableCell>
                    <TableCell>{t.description}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{t.category}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-red-400">
                      {t.type === "debit" ? `$${Math.abs(t.amount).toFixed(2)}` : "-"}
                    </TableCell>
                    <TableCell className="text-right text-emerald-400">
                      {t.type === "credit" ? `$${t.amount.toFixed(2)}` : "-"}
                    </TableCell>
                    <TableCell>{t.account}</TableCell>
                    <TableCell>
                      {t.taxDeductible ? (
                        <Badge className="bg-green-500/20 text-green-400">Yes</Badge>
                      ) : (
                        <Badge variant="secondary">No</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-zinc-400 text-sm">
          FinAether AI just categorized 3 transactions automatically • Next IRS export ready in 2 clicks
        </div>
      </div>
    </div>
  );
}