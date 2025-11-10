"use client"

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import DashboardLayout from "./dashboard/layout";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://farm-fresh-kbrt.onrender.com/orders/all");
        const result = await response.json();

        if (response.ok && result.success) {
          // Transform API data into chart-friendly format
          const labels = result.orders.map((order: any) => order.date);
          const quantityData = result.orders.map((order: any) => order.quantity);
          const revenueData = result.orders.map((order: any) => order.revenue);

          const data = {
            labels,
            datasets: [
              {
                label: "Orders Quantity",
                data: quantityData,
                borderColor: "rgba(59, 130, 246, 1)", // Tailwind blue-500
                backgroundColor: "rgba(59, 130, 246, 0.2)",
              },
              {
                label: "Revenue ($)",
                data: revenueData,
                borderColor: "rgba(16, 185, 129, 1)", // Tailwind green-500
                backgroundColor: "rgba(16, 185, 129, 0.2)",
              },
            ],
          };

          setChartData(data);
        } else {
          console.error("⚠️ Failed to fetch orders:", result.error);
        }
      } catch (error) {
        console.error("❌ Network or server error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Orders & Revenue Over Time" },
    },
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      <div className="bg-white p-6 rounded shadow mb-10">
        {loading ? <p>Loading chart...</p> : chartData && <Line data={chartData} options={options} />}
      </div>
    </DashboardLayout>
  );
}
