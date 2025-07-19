import {
  LayoutDashboard,
  ShoppingBag,
  BarChart2,
  Moon,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between h-screen w-64 bg-[--color-card] p-4 shadow rounded-[--radius-xl]">
      {/* Top nav */}
      <div className="flex flex-col gap-4">
        <div className="text-xl font-bold text-[--color-primary] mb-6">
          Mart Admin
        </div>

        <NavItem
          icon={<LayoutDashboard className="w-5 h-5" />}
          label="Dashboard"
          active
        />
        <NavItem icon={<ShoppingBag className="w-5 h-5" />} label="Products" />
        <NavItem icon={<BarChart2 className="w-5 h-5" />} label="Analytics" />
      </div>

      {/* Bottom actions */}
      <div className="flex flex-col gap-4">
        <NavItem icon={<Moon className="w-5 h-5" />} label="Dark Mode" />
        <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
        active
          ? "bg-[--color-primary]/10 text-[--color-primary] font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
