"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../dashboard/layout";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  tags: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  id: number;
  user_email: string;
  items: OrderItem[];
  total_price: number;
  created_at: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5001/orders/all");
      const result = await response.json();

      if (response.ok && result.success) {
        setOrders(result.orders);
      } else {
        console.error("⚠️ Failed to fetch orders:", result.error);
      }
    } catch (error) {
      console.error("❌ Network or server error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Orders Dashboard</h1>

        {loading ? (
          <p className="text-gray-600">Loading orders...</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Sl No</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">User Email</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Order Items</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Total Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Date</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders.map((order, index) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{order.user_email}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {order.items
                        .map((item) => `${item.product.name} x${item.quantity}`)
                        .join(", ")}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">${order.total_price.toFixed(2)}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{new Date(order.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
