import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { t } from "i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfitPieChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();

  if (isLoading || !data) return null;

  const chartData = {
    labels: [t("Invoice.Labels.Profit"), t("Invoice.Labels.Expense")],
    datasets: [
      {
        data: [data.profit, data.totalExpense],
        backgroundColor: ["#2ecc71", "#e74c3c"],
      },
    ],
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6">{t("Dialogs.Title.profitvsExpense")}</Typography>
      <Box sx={{ height: 300 }}>
        <Pie data={chartData} />
      </Box>
    </Paper>
  );
};

export default ProfitPieChart;