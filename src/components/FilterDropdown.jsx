// FILE: src/components/FilterDropdown.jsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const categories = ["All", "Electronics", "Furniture", "Clothes", "Shoes"];
const statuses = ["All", "Active", "Inactive"];

export default function FilterDropdown({ filter, setFilter }) {
  return (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {filter.category || "Filter by Category"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {categories.map((cat) => (
            <DropdownMenuItem
              key={cat}
              onClick={() => setFilter((f) => ({ ...f, category: cat }))}
            >
              {cat}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {filter.status || "Filter by Status"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {statuses.map((status) => (
            <DropdownMenuItem
              key={status}
              onClick={() => setFilter((f) => ({ ...f, status }))}
            >
              {status}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
