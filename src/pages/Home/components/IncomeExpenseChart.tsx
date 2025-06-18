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
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { getIncomeExpenseChartData } from "../utils/getIncomeExpenseChartData";
import { ChartOption } from "../constants";
import { t } from "i18next";
import Loader from "@/components/Loader";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const IncomeExpenseChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();

  if (isLoading || !data) return <Loader/>;

  const chartData = getIncomeExpenseChartData(data);
  const dataArray = chartData.datasets[0].data as number[];
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        {t("Dialogs.Title.Monthly Income & Expense")}
      </Typography>
      <Box sx={{ height: 300 }}>
        <Bar data={chartData} options={ChartOption(dataArray)} />
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;