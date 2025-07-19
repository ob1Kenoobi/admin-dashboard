export default function ProductRow({
  product,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-2">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="h-10 w-10 object-cover rounded"
        />
      </td>
      <td className="p-2">{product.title}</td>
      <td className="p-2">{product.category?.name}</td>
      <td className="p-2">${product.price}</td>
      <td className="p-2">
        <button
          onClick={() => onToggleStatus(product.id)}
          className="text-xs px-2 py-1 bg-green-200 rounded"
        >
          {product.status || "Active"}
        </button>
      </td>
      <td className="p-2">
        <button
          onClick={() => onEdit(product)}
          className="text-blue-600 hover:underline mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
