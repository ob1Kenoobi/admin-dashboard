// FILE: src/components/ProductTable.jsx
import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";
import ProductRow from "./ProductRow";
import { Button } from "@/components/ui/button";

export default function ProductTable({ filter }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter((p) => {
    const matchCat =
      filter.category === "All" || p.category?.name === filter.category;
    return matchCat;
  });

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleEdit = (product) => {
    setEditing(product);
    setShowModal(true);
  };

  return (
    <div className="bg-[--color-card] p-4 rounded-[--radius-xl] shadow animate-in fade-in">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <Button onClick={() => setShowModal(true)}>+ Add Product</Button>
      </div>
      {loading ? (
        <p className="text-sm">Loading...</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Category</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <ProductRow
                key={p.id}
                product={p}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-4 rounded shadow max-w-md w-full">
            <h2 className="text-lg font-semibold mb-2">
              {editing ? "Edit Product" : "Add Product"}
            </h2>
            <input
              className="w-full border p-2 mb-2 rounded text-black"
              defaultValue={editing?.title || ""}
              placeholder="Product Name"
            />
            <input
              className="w-full border p-2 mb-2 rounded text-black"
              type="number"
              defaultValue={editing?.price || ""}
              placeholder="Price"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowModal(false)}>
                {editing ? "Update" : "Create"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
