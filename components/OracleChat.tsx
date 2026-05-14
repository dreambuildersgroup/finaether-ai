"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function OracleChat() {
  const [messages, setMessages] = useState([{ role: "ai", text: "Hi Adolfo! What would you like to know about your finances today?" }]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");
    // Mock AI response (real Grok AI comes in next phase)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: "Based on your current data, maxing your 401(k) this year could save you $3,847 in taxes. Want the full Monte-Carlo simulation?" }]);
    }, 800);
  };

  return (
    <Card className="bg-zinc-900 border-zinc-800 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>FinTrack Oracle</span>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">xAI Powered</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto space-y-4 mb-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-emerald-600" : "bg-zinc-800"}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask anything... e.g. What if I invest $10k in VOO?"
            className="bg-zinc-950 border-zinc-700"
          />
          <Button onClick={sendMessage}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}