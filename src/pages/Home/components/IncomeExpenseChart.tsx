import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  BarController,
  Chart,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { getIncomeExpenseChartData } from "../utils/getIncomeExpenseChartData";
import { ChartOption } from "../constants";
import { t } from "i18next";
import Loader from "@/components/Loader";

// ✅ Register everything needed for bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  BarController
);

const IncomeExpenseChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ Destroy existing chart if it exists
    const existingChart = Chart.getChart(canvas);
    if (existingChart) existingChart.destroy();

    const chartData = getIncomeExpenseChartData(data);
    const dataArray = chartData.datasets[0].data as number[];

    new ChartJS(ctx, {
      type: "bar",
      data: chartData,
      options: ChartOption(dataArray),
      plugins: [ChartDataLabels],
    });
    return () => {
      const chart = Chart.getChart(canvas);
      if (chart) chart.destroy();
    };
  }, [data]);

  if (isLoading || !data) return <Loader />;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" mb={2}>
        {t("Dialogs.Title.Monthly Income & Expense")}
      </Typography>
      <Box sx={{ height: 300 }}>
        <canvas ref={canvasRef} />
      </Box>
    </Paper>
  );
};

export default IncomeExpenseChart;
