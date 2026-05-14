// app/assets/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Home, Car, Gem, Wallet, Zap, Search, Shield } from "lucide-react";

const assets = [
  { id: 1, name: "Austin Condo - 78701", type: "Real Estate", value: 425000, depreciation: "2.5%/yr", status: "Appreciating", lastUpdated: "Today" },
  { id: 2, name: "Tesla Model Y", type: "Vehicle", value: 38500, depreciation: "18%/yr", status: "Stable", lastUpdated: "Apr 18" },
  { id: 3, name: "2024 Rolex Submariner", type: "Collectible", value: 14200, depreciation: "0%", status: "Appreciating", lastUpdated: "Today" },
  { id: 4, name: "Bitcoin Wallet (0.85 BTC)", type: "Crypto/NFT", value: 45000, depreciation: "N/A", status: "Volatile", lastUpdated: "Live" },
  { id: 5, name: "Vintage Gibson Les Paul", type: "Collectible", value: 8200, depreciation: "0%", status: "Stable", lastUpdated: "Apr 15" },
];

export default function AssetsVaultPage() {
  const [totalAssets] = useState(535900);

  const runLostAssetFinder = () => {
    alert("🔍 FinAether AI Lost Asset Finder activated!\n\nScanned 3 years of transactions...\n\nFound 2 forgotten items:\n• Old 2019 MacBook Pro (est. value $1,200)\n• 12 shares of AAPL from 2021 (est. value $6,840)\nWould you like to add them to the vault?");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Assets & Vault</h1>
            <p className="text-emerald-400">Physical + Digital + Alternative • AI Valuation • US Edition</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2" onClick={runLostAssetFinder}>
              <Search className="w-4 h-4" /> Lost Asset Finder
            </Button>
            <Button className="gap-2 bg-emerald-600 hover:bg-emerald-500">
              <Shield className="w-4 h-4" /> Sync Wallets & Titles
            </Button>
          </div>
        </div>

        {/* Total Assets Snapshot */}
        <Card className="bg-zinc-900 border-emerald-500/30 mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-zinc-400">TOTAL ASSETS IN VAULT</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-6xl font-bold text-white">${totalAssets.toLocaleString()}</div>
            <div className="text-emerald-400 text-lg mt-2">+ $18,400 this month • AI valuation updated live</div>
          </CardContent>
        </Card>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm"><Home className="w-4 h-4" /> Real Estate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$425,000</div>
              <Badge className="mt-2 bg-emerald-500/20 text-emerald-400">+3.2% this quarter</Badge>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm"><Car className="w-4 h-4" /> Vehicles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$38,500</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm"><Gem className="w-4 h-4" /> Collectibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$22,400</div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm"><Wallet className="w-4 h-4" /> Crypto / NFTs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$45,000</div>
              <Badge variant="secondary">Live blockchain</Badge>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm">Other</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$5,000</div>
            </CardContent>
          </Card>
        </div>

        {/* Asset Register Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Asset Register & Depreciation Scheduler</span>
              <Button variant="outline" className="gap-2">
                <Zap className="w-4 h-4" /> AI Insurance Optimizer
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Current Value</TableHead>
                  <TableHead>Depreciation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-medium">{asset.name}</TableCell>
                    <TableCell>{asset.type}</TableCell>
                    <TableCell className="text-right font-medium">${asset.value.toLocaleString()}</TableCell>
                    <TableCell className="text-zinc-400">{asset.depreciation}</TableCell>
                    <TableCell>
                      <Badge variant={asset.status === "Appreciating" ? "default" : "secondary"}>{asset.status}</Badge>
                    </TableCell>
                    <TableCell className="text-zinc-400">{asset.lastUpdated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          FinAether AI Vault just valued your entire asset base in real time • Lost Asset Finder found $8,040 in forgotten value
        </div>
      </div>
    </div>
  );
}