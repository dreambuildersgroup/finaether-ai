// app/collaborate/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, MessageCircle, CheckCircle } from "lucide-react";

const collaborators = [
  { name: "Adolfo", color: "emerald", cursor: "You" },
  { name: "Maria", color: "violet", cursor: "Editing Transactions" },
  { name: "Alex (Accountant)", color: "amber", cursor: "Reviewing Tax" },
];

export default function RealTimeCollaborativePage() {
  const [liveUsers] = useState(3);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Real-time Collaborative Mode</h1>
            <p className="text-emerald-400">Live editing • @mentions • Approval workflow • xAI Powered</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {collaborators.map((user, i) => (
                <div key={i} className={`w-8 h-8 rounded-2xl bg-${user.color}-500 flex items-center justify-center text-xs ring-2 ring-zinc-900`}>
                  {user.name[0]}
                </div>
              ))}
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-400">3 users online</Badge>
          </div>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Live Shared Ledger • Real-time updates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Edited by</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Apr 22</TableCell>
                  <TableCell>Starbucks Coffee</TableCell>
                  <TableCell className="text-right text-red-400">-$6.85</TableCell>
                  <TableCell>Maria (just now)</TableCell>
                  <TableCell><Badge className="bg-emerald-500/20 text-emerald-400">Approved</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Apr 22</TableCell>
                  <TableCell>Client Invoice #4782</TableCell>
                  <TableCell className="text-right text-emerald-400">+$2,850</TableCell>
                  <TableCell>Alex (editing live)</TableCell>
                  <TableCell><Badge variant="secondary">Pending Review</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Real-time Collaborative Mode is active • Everyone sees changes instantly • Full audit trail & @mention notifications enabled
        </div>
      </div>
    </div>
  );
}