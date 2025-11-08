import DashboardLayout from "../dashboard/layout";
import { SAMPLE_PRODUCTS } from "../products/products_constants";

export default function ProductPage() {
  return (
    <DashboardLayout>
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-6">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SAMPLE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-500 text-sm mb-2">{product.description}</p>
              <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-400">{product.inStock ? "In Stock" : "Out of Stock"}</p>
            </div>
          ))}
        </div>

        {/* Floating Plus Button */}
        <button className="fixed bottom-8 right-8 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-blue-600 transition">
          +
        </button>
      </div>
    </DashboardLayout>
  );
}
