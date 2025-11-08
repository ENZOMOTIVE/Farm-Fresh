import DashboardLayout from "./dashboard/layout";

export default function HomePage() {
  return (
    <div>
      <DashboardLayout>
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <p className="mt-4 text-gray-600">
        Welcome to your dashboard! Select a section from the sidebar.
      </p>
      </DashboardLayout>
    </div>
  );
}
