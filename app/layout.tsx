// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinAether AI",
  description: "Quicken + QuickBooks + xAI = Your full-fledged accounting & wealth command center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
      <Sidebar />
      <main className="ml-64 min-h-screen bg-zinc-950 text-white">
      {children}
      </main>
      </body>
    </html>
  );
}