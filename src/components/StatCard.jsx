import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-[--color-card] p-4 rounded-[--radius-xl] shadow flex flex-col gap-2 w-full">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[--color-text]">{value}</h3>
        <div
          className={`flex items-center text-sm ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          {change}
        </div>
      </div>
    </div>
  );
}
