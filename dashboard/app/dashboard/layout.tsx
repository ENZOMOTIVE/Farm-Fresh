// dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-6 border-r">
        Sidebar here
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
