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
import { ChartProps } from "../../types/chartTypes";

const Chart: React.FC<ChartProps> = ({ data = [], lines }) => {
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
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.key}
              stroke={line.stroke}
              name={line.name}
              activeDot={{ r: 8, stroke: line.stroke, strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
