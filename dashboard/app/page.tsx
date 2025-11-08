"use client"

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

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  // Sample chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Signups",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgba(59, 130, 246, 1)", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "User Signups Over Time" },
    },
  };



  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded shadow mb-10">
        <Line data={data} options={options} />
      </div>

      
    </DashboardLayout>
  );
}
