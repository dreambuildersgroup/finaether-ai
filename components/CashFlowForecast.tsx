"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "May", inflow: 12400, outflow: 8900 },
  { month: "Jun", inflow: 13800, outflow: 9200 },
  { month: "Jul", inflow: 11200, outflow: 10500 },
];

export default function CashFlowForecast() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle>90-Day Cash Flow Forecast (AI Powered)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="month" stroke="#a3a3a3" />
            <YAxis stroke="#a3a3a3" />
            <Tooltip />
            <Bar dataKey="inflow" fill="#10b981" name="Inflow" />
            <Bar dataKey="outflow" fill="#ef4444" name="Outflow" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}