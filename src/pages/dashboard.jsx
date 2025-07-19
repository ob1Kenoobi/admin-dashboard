import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ChartCard } from "@/components/ChartCard";
import ProductTable from "@/components/ProductTable";

export default function DashboardPage() {
  return (
    <div className="flex bg-[--color-bg] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-4 space-y-4">
        <Header />
        {/* Add StatCards, Charts, Tables here */}
        <div className="flex flex-col md:flex-row gap-4">
          <StatCard
            title="Total Sales"
            value="$12,300"
            change="4.2%"
            isPositive
          />
          <StatCard
            title="Orders"
            value="320"
            change="-1.5%"
            isPositive={false}
          />
          <StatCard title="Visitors" value="8,420" change="2.3%" isPositive />
          <StatCard title="Revenue" value="$25,000" change="1.1%" isPositive />
          <ChartCard />
          <ProductTable />
        </div>
      </main>
    </div>
  );
}
