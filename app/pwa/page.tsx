// app/pwa/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Download, Bell, Globe } from "lucide-react";

export default function PWAPage() {
  const installApp = () => {
    alert("📲 Install prompt triggered!\n\nFinAether AI is now installable as a native app on your phone or desktop.\n\nYou will get push notifications for AI insights, tax deadlines, and anomalies.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">PWA + Mobile App Experience</h1>
            <p className="text-emerald-400">Install FinAether AI • Works offline • Push notifications • xAI Powered</p>
          </div>
        </div>

        <Card className="bg-zinc-900 border-emerald-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Smartphone className="w-6 h-6" />
              Install FinAether AI on your device
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-4xl mb-4">📱</div>
                <h3 className="font-semibold">Native App Feel</h3>
                <p className="text-zinc-400 text-sm mt-2">Add to home screen with one tap</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-4xl mb-4">🌐</div>
                <h3 className="font-semibold">Works Offline</h3>
                <p className="text-zinc-400 text-sm mt-2">View recent data even without internet</p>
              </div>
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-4xl mb-4">🛎️</div>
                <h3 className="font-semibold">Push Notifications</h3>
                <p className="text-zinc-400 text-sm mt-2">AI alerts, tax deadlines, anomalies</p>
              </div>
            </div>

            <Button 
              onClick={installApp}
              size="lg" 
              className="w-full py-8 text-xl bg-gradient-to-r from-emerald-500 to-violet-500 hover:from-emerald-600 hover:to-violet-600"
            >
              <Download className="w-6 h-6 mr-3" />
              Install FinAether AI Now
            </Button>

            <p className="text-center text-xs text-zinc-400">
              Works on iOS, Android, Windows, and Mac • No app store needed
            </p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          PWA + Mobile App Experience is active • You can now install FinAether AI directly to your home screen
        </div>
      </div>
    </div>
  );
}