// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, List, FileText, TrendingUp, Mic, Wallet, Users, Zap, BarChart3, Shield, Settings, Smartphone } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Transactions", href: "/transactions", icon: List },
  { name: "Tax Center", href: "/tax", icon: FileText },
  { name: "Investing Hub", href: "/investing", icon: TrendingUp },
  { name: "Voice CFO", href: "/voice", icon: Mic },
  { name: "Assets & Vault", href: "/assets", icon: Wallet },
  { name: "Family Vault", href: "/family-vault", icon: Users },
  { name: "Crypto Tax Lots", href: "/crypto-tax-lots", icon: Wallet },
  { name: "Retirement Planner", href: "/retirement", icon: TrendingUp },
  { name: "Autonomous Bookkeeper", href: "/bookkeeper", icon: Zap },
  { name: "Generative Reports", href: "/reports", icon: BarChart3 },
  { name: "Predictive Tax Filing", href: "/tax-filing", icon: FileText },
  { name: "Smart Invoice & Expense AI", href: "/invoices", icon: FileText },
  { name: "Multi-Entity Consolidator", href: "/consolidator", icon: Users },
  { name: "Voice/Video CFO Avatar", href: "/avatar", icon: Mic },
  { name: "Real-time Collaborative", href: "/collaborate", icon: Users },
  { name: "Accountant Portal", href: "/accountant", icon: Shield },
  { name: "PWA + Mobile App", href: "/pwa", icon: Smartphone },
  { name: "AI Financial Coach", href: "/coach", icon: Zap },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Card className="bg-zinc-900 border-zinc-800 w-64 flex flex-col fixed left-0 top-0 bottom-0 pt-6 overflow-hidden">
      {/* Header */}
      <div className="px-6 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-white">FinAether AI</h1>
        <p className="text-emerald-400 text-sm">US Edition • xAI Powered</p>
      </div>

      {/* Scrollable Navigation - Smaller & Cleaner Font */}
      <div className="flex-1 px-3 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 mb-1 h-10 text-sm font-medium truncate ${
                  isActive ? "bg-emerald-600 text-white" : "hover:bg-zinc-800"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800 mt-auto">
        <Button variant="outline" className="w-full gap-2 text-sm">
          <Settings className="w-4 h-4" />
          Settings
        </Button>
      </div>
    </Card>
  );
}