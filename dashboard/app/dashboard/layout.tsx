import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-100 p-6 border-r">
        <h2 className="text-xl font-bold mb-4">Admin-Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <Link href="/" className="p-2 hover:bg-gray-200 rounded">Dashboard</Link>
          <Link href="/analytics" className="p-2 hover:bg-gray-200 rounded">Analytics</Link>
          <Link href="/orders" className="p-2 hover:bg-gray-200 rounded">Users Orders</Link>
          <Link href="/products" className="p-2 hover:bg-gray-200 rounded">Product Management</Link>
          
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-10 max-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
