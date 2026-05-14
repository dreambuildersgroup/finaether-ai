"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Apr 1", worth: 460000 },
  { date: "Apr 8", worth: 472000 },
  { date: "Apr 15", worth: 481000 },
  { date: "Apr 22", worth: 487392 },
];

export default function NetWorthChart() {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardHeader>
        <CardTitle>Net Worth Trend • Last 30 Days</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="date" stroke="#a3a3a3" />
            <YAxis stroke="#a3a3a3" />
            <Tooltip />
            <Line type="monotone" dataKey="worth" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}