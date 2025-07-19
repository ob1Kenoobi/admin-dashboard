import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ChartCard } from "./components/ChartCard";
import FilterDropdown from "./components/FilterDropdown";
import ProductTable from "./components/ProductTable";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const [filter, setFilter] = useState({ category: "All", status: "All" });

  return (
    <div className="flex min-h-screen bg-[--color-bg]">
      <Sidebar />

      <main className="flex-1 p-4 space-y-6">
        <Header />
        <DarkModeToggle />

        {/* Filter Controls */}
        <FilterDropdown filter={filter} setFilter={setFilter} />

        {/* Charts */}
        <ChartCard />

        {/* ProductTable (next to be added) */}
        <section className="text-[--color-text]">
          <ProductTable filter={filter} />
        </section>
      </main>
    </div>
  );
}
