import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Apr", income: 2000, growth: 10 },
  { month: "May", income: 2500, growth: 12 },
  { month: "Jun", income: 3000, growth: 18 },
  { month: "Jul", income: 2800, growth: 8 },
  { month: "Aug", income: 3500, growth: 15 },
  { month: "Sep", income: 4000, growth: 20 },
];

const IncomeChart = () => {
  return (
    <div>
      <Card className="p-4">
        <CardTitle>Income Trend</CardTitle>
        <p className="text-gray-500">
          Your monthly income and growth for the last 6 months.
        </p>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="#7c3aed"
                tickFormatter={(value) => `$${value}`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#ef4444"
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              <Bar
                yAxisId="left"
                dataKey="income"
                barSize={40}
                fill="#7c3aed"
                radius={[6, 6, 0, 0]}
                name="Income ($)"
              />

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 5 }}
                name="Growth (%)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncomeChart;
