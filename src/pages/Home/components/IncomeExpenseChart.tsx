import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TooltipItem
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { t } from "i18next";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const IncomeExpenseChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();

  if (isLoading || !data) return null;

  const chartData = {
    labels: [t("Invoice.Labels.Income"), t("Invoice.Labels.Expense")],
    datasets: [
      {
        label: t("Invoice.Labels.Monthly Overview"),
        data: [data.totalIncome, data.totalExpense],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        min: 0,
        max: 500000,
        ticks: {
          callback: (value: number | string) =>
            typeof value === "number" ? value.toLocaleString() : value,
          stepSize: 100000,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      datalabels: {
        color: "#000",
        anchor: "end" as const,
        align: "top" as const,
        font: {
          weight: "bold" as const,
          size: 12,
        },
        formatter: (value: number) => value.toLocaleString(),
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: TooltipItem<"bar">) => {
            return context.parsed.y.toLocaleString();
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        {t("Dialogs.Title.Monthly Income & Expense")}
      </Typography>
      <Box sx={{ height: 300 }}>
        <Bar data={chartData} options={chartOptions} />
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;