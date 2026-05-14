// app/voice/page.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Send, Play } from "lucide-react";

export default function VoiceCFOPage() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [messages, setMessages] = useState([
    { role: "cfo", text: "Good evening, Adolfo. I'm your Voice CFO. What would you like to know about your finances today?" }
  ]);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event: any) => {
        const currentTranscript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join("");
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onerror = () => setIsListening(false);
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Your browser doesn't support voice input. Try Chrome or Edge!");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      if (transcript.trim()) {
        handleVoiceCommand(transcript);
      }
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleVoiceCommand = (command: string) => {
    setMessages(prev => [...prev, { role: "user", text: command }]);
    setTranscript("");

    // Mock Grok-level AI responses (real backend integration comes with schema)
    let response = "Understood. Let me pull that up for you...";
    if (command.toLowerCase().includes("p&l") || command.toLowerCase().includes("profit")) {
      response = "Q2 Profit & Loss: Revenue $87,420 • Expenses $41,290 • Net Profit $46,130 (+18% from last quarter). Want the full breakdown?";
    } else if (command.toLowerCase().includes("tax")) {
      response = "Your projected 2026 tax liability is $12,480. AI found 3 new deductions worth $2,340. Shall I optimize further?";
    } else if (command.toLowerCase().includes("cash flow") || command.toLowerCase().includes("forecast")) {
      response = "90-day cash flow forecast: +$18,400 net inflow. No red flags. Would you like a visual chart?";
    } else if (command.toLowerCase().includes("401k") || command.toLowerCase().includes("retirement")) {
      response = "You’ve contributed $8,200 to your 401(k) so far. Maxing it this year would save you $3,847 in taxes. Ready to simulate?";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "cfo", text: response }]);
    }, 800);
  };

  const sendTextCommand = () => {
    if (transcript.trim()) {
      handleVoiceCommand(transcript);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Voice CFO</h1>
            <p className="text-emerald-400">Talk to your AI Accountant • Always On • xAI Powered</p>
          </div>
          <Button
            onClick={toggleListening}
            className={`gap-3 text-lg px-8 py-6 rounded-3xl transition-all ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-emerald-600 hover:bg-emerald-500"}`}
          >
            {isListening ? (
              <>
                <MicOff className="w-6 h-6" /> Stop Listening
              </>
            ) : (
              <>
                <Mic className="w-6 h-6" /> Speak to CFO
              </>
            )}
          </Button>
        </div>

        {/* Live Transcript */}
        {isListening && (
          <Card className="bg-zinc-900 border-red-500/30 mb-6">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <p className="text-red-400 font-medium">Listening...</p>
              </div>
              <p className="text-2xl text-white mt-4 min-h-[60px]">{transcript || "Speak now..."}</p>
            </CardContent>
          </Card>
        )}

        {/* Chat History */}
        <Card className="bg-zinc-900 border-zinc-800 h-[calc(100vh-320px)] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="w-5 h-5 text-emerald-400" />
              Conversation with Your Voice CFO
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto space-y-6 p-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] p-4 rounded-3xl ${
                  msg.role === "user" 
                    ? "bg-emerald-600 text-white" 
                    : "bg-zinc-800 text-white"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>

          {/* Quick Commands */}
          <div className="border-t border-zinc-800 p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="text-sm" onClick={() => handleVoiceCommand("Show me my Q2 P&L")}>
              Show Q2 P&amp;L
            </Button>
            <Button variant="outline" className="text-sm" onClick={() => handleVoiceCommand("What’s my cash flow forecast")}>
              Cash Flow Forecast
            </Button>
            <Button variant="outline" className="text-sm" onClick={() => handleVoiceCommand("Run tax optimizer")}>
              Run Tax Optimizer
            </Button>
            <Button variant="outline" className="text-sm" onClick={() => handleVoiceCommand("Optimize my 401k")}>
              Optimize 401(k)
            </Button>
          </div>

          {/* Text fallback */}
          <div className="p-4 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Or type your command here..."
              className="flex-1 bg-zinc-950 border border-zinc-700 rounded-2xl px-5 py-3 text-white focus:outline-none"
              onKeyPress={(e) => e.key === "Enter" && sendTextCommand()}
            />
            <Button onClick={sendTextCommand}>
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        <div className="mt-6 text-center text-zinc-400 text-sm">
          Voice CFO is always listening (with your permission) • Powered by real-time Grok intelligence
        </div>
      </div>
    </div>
  );
}