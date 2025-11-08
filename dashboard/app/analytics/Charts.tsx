// app/analytics/Charts.tsx
"use client"; // Client Component, can use useRef, useState, etc.

import { Line } from "react-chartjs-2";
import { useRef } from "react";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Charts() {
  const chartRef = useRef(null);

  const profitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Profit",
        data: [1200, 1900, 3000, 2500, 4000, 4500],
        borderColor: "rgba(16, 185, 129, 1)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      },
    ],
  };

  return <Line ref={chartRef} data={profitData} />;
}
