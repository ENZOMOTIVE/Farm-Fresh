import DashboardLayout from "../dashboard/layout";

export default function Orders() {
  const orders = [
    {
      id: 1,
      email: "alice@example.com",
      address: "123 Main St, City A",
      item: "Product A",
    },
    {
      id: 2,
      email: "bob@example.com",
      address: "456 Oak Ave, City B",
      item: "Product B",
    },
    {
      id: 3,
      email: "charlie@example.com",
      address: "789 Pine Rd, City C",
      item: "Product C",
    },
    {
      id: 4,
      email: "david@example.com",
      address: "101 Maple St, City D",
      item: "Product D",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Orders</h1>

        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Sl No</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">User Email</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Address</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 uppercase">Order Item</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {orders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.email}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.address}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
