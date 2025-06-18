import React, { useEffect, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
  Chart,
} from "chart.js";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { getProfitPieChartData } from "../utils/getProfitPieChartData";
import { pieChartOptions } from "../constants";
import { t } from "i18next";
import Loader from "@/components/Loader";

// ✅ Register all required components including PieController
ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const ProfitPieChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!data || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ Destroy any existing chart on this canvas
    const existingChart = Chart.getChart(canvas);
    if (existingChart) existingChart.destroy();

    const chartData = getProfitPieChartData(data);

    new ChartJS(ctx, {
      type: "pie",
      data: chartData,
      options: pieChartOptions,
    });

    return () => {
      const chart = Chart.getChart(canvas);
      if (chart) chart.destroy();
    };
  }, [data]);

  if (isLoading || !data) return <Loader />;

  const isLoss = data.profit < 0;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" color={isLoss ? "error" : "success"}>
        {t("Dialogs.Title.profitvsExpense")}
      </Typography>
      <Box
        height={300}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={2}
      >
        <canvas ref={canvasRef} />
      </Box>
    </Paper>
  );
};

export default ProfitPieChart;