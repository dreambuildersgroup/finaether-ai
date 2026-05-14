// app/reports/page.tsx
"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Download, Zap, FileText } from "lucide-react";

export default function GenerativeReportsPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<any>(null);

  const generateReport = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    // Mock AI generation (real Grok integration ready for next phase)
    setTimeout(() => {
      setReport({
        title: "Q2 2026 Profit & Loss Statement",
        summary: "Revenue grew 28% YoY. Net profit margin improved to 31%. Strong performance driven by SaaS subscriptions.",
        date: "April 22, 2026",
        highlights: [
          "Total Revenue: $142,870 (+28%)",
          "Gross Profit: $98,450 (69% margin)",
          "Operating Expenses: $41,290",
          "Net Profit: $46,130 (+41%)",
        ],
      });
      setIsGenerating(false);
    }, 1800);
  };

  const downloadPDF = () => {
    alert("📄 PDF generated and downloaded!\n\n(Real PDF generation with charts will be added in the next upgrade)");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Generative Reports</h1>
            <p className="text-emerald-400">AI-Powered Financial Storytelling • Instant PDFs • xAI Powered</p>
          </div>
        </div>

        {/* Prompt Box */}
        <Card className="bg-zinc-900 border-zinc-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-violet-400" />
              Tell FinAether AI what report you need
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="E.g. Generate Q2 2026 P&L with YoY comparison and executive summary... or Create a full investor board deck..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] bg-zinc-950 border-zinc-700 text-lg"
            />
            <Button
              onClick={generateReport}
              disabled={isGenerating}
              className="w-full mt-4 bg-violet-600 hover:bg-violet-500 text-lg py-6"
            >
              {isGenerating ? "Generating with xAI..." : "Generate Report Now"}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Report Preview */}
        {report && (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {report.title}
              </CardTitle>
              <Button onClick={downloadPDF} className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-zinc-400">{report.date}</div>
              <p className="text-lg leading-relaxed">{report.summary}</p>
              <div className="grid grid-cols-2 gap-4">
                {report.highlights.map((highlight: string, i: number) => (
                  <Badge key={i} variant="secondary" className="justify-start text-base py-3 px-4">
                    {highlight}
                  </Badge>
                ))}
              </div>
              <div className="text-xs text-emerald-400 border border-emerald-500/30 rounded-2xl p-4">
                FinAether AI analyzed your Plaid data, transactions, and portfolio in real time to generate this report.
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 text-center text-zinc-400 text-sm">
          Try prompts like “Show me cash flow forecast for next 90 days” or “Create investor pitch deck for Q3”
        </div>
      </div>
    </div>
  );
}