// app/analytics/page.tsx
import DashboardLayout from "../dashboard/layout";
import Charts from "./Charts";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>

      <div className="bg-white p-6 rounded shadow mb-10">
        <h2 className="text-lg font-semibold mb-4">Profit Chart</h2>
        <Charts />
      </div>
    </DashboardLayout>
  );
}
