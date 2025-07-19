import { Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[--color-card] px-4 py-3 shadow rounded-[--radius-xl]">
      {/* Left side: Mobile menu icon or page title */}
      <div className="flex items-center gap-2">
        <button className="md:hidden text-[--color-text]">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-[--color-text] hidden md:block">
          Dashboard
        </h1>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-[--color-text]" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://i.pravatar.cc/100" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
