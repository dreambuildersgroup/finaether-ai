// app/accountant/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Link as LinkIcon, Clock, Eye } from "lucide-react";

export default function AccountantPortalPage() {
  const [linkGenerated, setLinkGenerated] = useState(false);

  const generatePortalLink = () => {
    setLinkGenerated(true);
    alert("🔗 Secure Accountant Portal link generated!\n\nhttps://finaether.com/portal/abc123-xyz789\nValid for 30 days • View + Edit Transactions + Tax Center enabled");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">One-Click Accountant Portal</h1>
            <p className="text-emerald-400">Instant secure access • Full audit trail • xAI Protected</p>
          </div>
          <Button onClick={generatePortalLink} className="gap-2 bg-emerald-600 hover:bg-emerald-500 text-lg px-8 py-6">
            <LinkIcon className="w-5 h-5" />
            Generate Secure Share Link
          </Button>
        </div>

        {linkGenerated && (
          <Card className="bg-emerald-900/20 border-emerald-500 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 text-emerald-400">
                <Shield className="w-6 h-6" />
                <div className="font-medium">Secure Link Ready</div>
              </div>
              <div className="mt-4 font-mono text-sm break-all bg-zinc-900 p-4 rounded-2xl">
                https://finaether.com/portal/abc123-xyz789
              </div>
              <p className="text-xs text-emerald-400 mt-3">Expires in 30 days • Permissions: View + Edit Transactions + Tax Center</p>
            </CardContent>
          </Card>
        )}

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Recent Accountant Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Accountant</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Alex Rivera, CPA</TableCell>
                  <TableCell>Reviewed 2026 Tax Center</TableCell>
                  <TableCell>14 minutes ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Alex Rivera, CPA</TableCell>
                  <TableCell>Added note to Transaction #4782</TableCell>
                  <TableCell>Yesterday</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          One-Click Accountant Portal generated • Your CPA can now work directly inside FinAether AI with full visibility and audit trail
        </div>
      </div>
    </div>
  );
}