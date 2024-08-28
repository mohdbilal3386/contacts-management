import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart: React.FC = () => {
  const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
    { name: "Jul", value: 3490 },
  ];
  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            stroke="#ccc"
            tick={{ fill: "#ccc" }}
            tickLine={{ stroke: "#444", strokeWidth: 1 }}
            axisLine={{ stroke: "#444", strokeWidth: 1 }}
          />
          <YAxis
            stroke="#ccc"
            tick={{ fill: "#ccc" }}
            tickLine={{ stroke: "#444", strokeWidth: 1 }}
            axisLine={{ stroke: "#444", strokeWidth: 1 }}
          />
          <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
          <Legend wrapperStyle={{ color: "#ccc" }} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4a90e2"
            dot={{ stroke: "#fff", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
