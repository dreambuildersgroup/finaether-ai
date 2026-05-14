// app/invoices/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, FileText, Send, Zap, DollarSign } from "lucide-react";

const recentInvoices = [
  { id: 1, client: "Acme Corp", amount: 4250, status: "Sent", date: "Apr 22" },
  { id: 2, client: "TechStart Inc", amount: 1875, status: "Paid", date: "Apr 20" },
];

const recentExpenses = [
  { id: 1, description: "Client dinner - Austin", amount: 142, status: "Matched", deductible: true },
  { id: 2, description: "Software subscription", amount: 49, status: "Matched", deductible: true },
];

export default function SmartInvoiceExpensePage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateInvoice = () => {
    setIsGenerating(true);
    setTimeout(() => {
      alert("📄 Smart Invoice AI generated a professional invoice for $2,850 to Acme Corp.\n\nReady to send with one click!");
      setIsGenerating(false);
    }, 1400);
  };

  const uploadReceipt = () => {
    alert("📸 AI Vision activated!\n\nReceipt scanned and matched to expense.\nCategorized as Meals & Entertainment • Tax-deductible • Added to ledger.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Smart Invoice & Expense AI</h1>
            <p className="text-emerald-400">Auto-generate • AI Receipt Vision • Instant Matching • xAI Powered</p>
          </div>
          <Button onClick={generateInvoice} disabled={isGenerating} className="gap-2 bg-emerald-600 hover:bg-emerald-500 text-lg px-8 py-6">
            <Zap className="w-5 h-5" />
            {isGenerating ? "Generating Invoice..." : "Generate New Invoice"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Invoice Generator */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Smart Invoice Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button onClick={uploadReceipt} variant="outline" className="w-full gap-2 py-6 text-lg">
                <Upload className="w-5 h-5" />
                Upload Receipt → AI Matches & Categorizes
              </Button>
              <div className="text-center text-zinc-400 text-sm">or speak: “Create invoice for Acme Corp for $2,850”</div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Recent Smart Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Client / Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInvoices.map((inv) => (
                    <TableRow key={inv.id}>
                      <TableCell className="font-medium">Invoice</TableCell>
                      <TableCell>{inv.client}</TableCell>
                      <TableCell className="text-right">${inv.amount}</TableCell>
                      <TableCell><Badge>{inv.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                  {recentExpenses.map((exp) => (
                    <TableRow key={exp.id}>
                      <TableCell className="font-medium">Expense</TableCell>
                      <TableCell>{exp.description}</TableCell>
                      <TableCell className="text-right">${exp.amount}</TableCell>
                      <TableCell><Badge variant="secondary">{exp.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Smart Invoice & Expense AI just processed 12 receipts and generated 3 invoices today • All expenses automatically fed into Tax Center and Bookkeeper
        </div>
      </div>
    </div>
  );
}