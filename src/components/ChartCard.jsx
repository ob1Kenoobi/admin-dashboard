// FILE: src/components/ChartCard.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6000 },
];

const pieData = [
  { name: "Electronics", value: 30 },
  { name: "Clothing", value: 20 },
  { name: "Furniture", value: 25 },
  { name: "Other", value: 25 },
];

const COLORS = ["#FF6A00", "#7C3AED", "#60A5FA", "#FBBF24"];

export function ChartCard() {
  return (
    <div className="grid md:grid-cols-2 gap-4 animate-in fade-in">
      <div className="bg-[--color-card] p-4 rounded-[--radius-xl] shadow">
        <h3 className="text-lg font-semibold mb-2 text-[--color-text]">
          Monthly Revenue
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#FF6A00"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-[--color-card] p-4 rounded-[--radius-xl] shadow">
        <h3 className="text-lg font-semibold mb-2 text-[--color-text]">
          Category Share
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={80} label>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
