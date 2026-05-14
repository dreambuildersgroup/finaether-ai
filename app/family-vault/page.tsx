// app/family-vault/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Plus, Shield, Activity, Mail } from "lucide-react";

const familyMembers = [
  { id: 1, name: "Adolfo (You)", role: "Owner", access: "Full Admin", lastActive: "Just now" },
  { id: 2, name: "Maria Rivera", role: "Spouse", access: "Edit Transactions", lastActive: "2 hours ago" },
  { id: 3, name: "Alex Rivera", role: "Accountant", access: "Tax Access Only", lastActive: "Yesterday" },
];

export default function FamilyVaultPage() {
  const [totalFamilyNetWorth] = useState(842300);

  const inviteMember = () => {
    alert("📧 Invite sent! Maria Rivera has been invited to join the Family Vault with Edit access.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Family Vault</h1>
            <p className="text-emerald-400">Shared Access • Granular Permissions • xAI Protected</p>
          </div>
          <Button onClick={inviteMember} className="gap-2 bg-emerald-600 hover:bg-emerald-500">
            <Plus className="w-4 h-4" /> Invite Family Member
          </Button>
        </div>

        {/* Family Net Worth */}
        <Card className="bg-zinc-900 border-emerald-500/30 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-400">FAMILY TOTAL NET WORTH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold text-white">${totalFamilyNetWorth.toLocaleString()}</div>
            <div className="text-emerald-400 text-lg mt-2">+ $27,400 this month • Shared across 3 members</div>
          </CardContent>
        </Card>

        {/* Members Table */}
        <Card className="bg-zinc-900 border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Vault Members & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Access Level</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {familyMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <Badge variant={member.access === "Full Admin" ? "default" : "secondary"}>
                        {member.access}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-zinc-400">{member.lastActive}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Shield className="w-3 h-3" /> Manage
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Activity Log */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Vault Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Maria Rivera updated a transaction</span>
                </div>
                <span className="text-zinc-400">11 minutes ago</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>Alex Rivera viewed 2026 Tax Center</span>
                </div>
                <span className="text-zinc-400">Yesterday</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-violet-400" />
                  <span>New member invitation accepted</span>
                </div>
                <span className="text-zinc-400">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Family Vault is fully encrypted • xAI monitors every access • Ready for estate planning & legacy sharing
        </div>
      </div>
    </div>
  );
}