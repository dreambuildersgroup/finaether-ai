// app/avatar/page.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play } from "lucide-react";

export default function VoiceVideoCFOAvatarPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [messages, setMessages] = useState([
    { role: "cfo", text: "Hello Adolfo. I'm your Voice/Video CFO Avatar. How can I help you today?" }
  ]);
  const videoRef = useRef<HTMLDivElement>(null);

  // Simple breathing animation for the avatar
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        videoRef.current.style.transform = "scale(1.03)";
        setTimeout(() => {
          if (videoRef.current) videoRef.current.style.transform = "scale(1)";
        }, 300);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleListening = () => {
    // Reuse the same voice logic from previous Voice CFO
    setIsListening(!isListening);
    if (!isListening) {
      setTranscript("Listening...");
      // Mock voice input
      setTimeout(() => {
        const mockCommand = "Show me my Q2 profit and loss";
        setTranscript(mockCommand);
        handleVoiceCommand(mockCommand);
      }, 1500);
    }
  };

  const handleVoiceCommand = (command: string) => {
    setMessages(prev => [...prev, { role: "user", text: command }]);
    setTimeout(() => {
      let response = "Understood. Pulling your latest numbers...";
      if (command.toLowerCase().includes("p&l") || command.toLowerCase().includes("profit")) {
        response = "Q2 Profit & Loss: Revenue $142,870 • Expenses $81,740 • Net Profit $61,130. Margin improved 9%. Want the full visual breakdown?";
      }
      setMessages(prev => [...prev, { role: "cfo", text: response }]);
      setTranscript("");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Voice/Video CFO Avatar</h1>
            <p className="text-emerald-400">Your AI CFO is now visually present • Real-time conversation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Video Avatar */}
          <div className="lg:col-span-7">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                  Live CFO Avatar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div
                  ref={videoRef}
                  className="aspect-video bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center relative overflow-hidden border-b border-zinc-800"
                >
                  {/* Animated Avatar Placeholder */}
                  <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-violet-500 to-emerald-500 flex items-center justify-center text-8xl shadow-2xl transition-transform duration-700">
                    👔
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-6 py-2 rounded-3xl flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                    CFO Avatar is speaking...
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Voice Controls + Chat */}
          <div className="lg:col-span-5">
            <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col">
              <CardHeader>
                <CardTitle>Conversation with Your Video CFO</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-auto space-y-6 mb-6">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] p-4 rounded-3xl ${msg.role === "user" ? "bg-emerald-600" : "bg-zinc-800"}`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={toggleListening}
                  className={`w-full py-8 text-xl transition-all ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-emerald-600 hover:bg-emerald-500"}`}
                >
                  {isListening ? (
                    <>
                      <MicOff className="w-6 h-6 mr-3" /> Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="w-6 h-6 mr-3" /> Speak to Your Video CFO
                    </>
                  )}
                </Button>

                {transcript && (
                  <div className="mt-4 p-4 bg-zinc-950 border border-zinc-700 rounded-2xl text-center">
                    {transcript}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Your Video CFO Avatar is now visually present • Powered by real-time xAI intelligence • Ready for boardroom-level conversations
        </div>
      </div>
    </div>
  );
}