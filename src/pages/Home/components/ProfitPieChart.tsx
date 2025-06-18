import React from "react";
import { Pie } from "react-chartjs-2";
import { Box, Typography, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { t } from "i18next";
import { getProfitPieChartData } from "../utils/getProfitPieChartData";
import { pieChartOptions } from "../constants";
import Loader from "@/components/Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfitPieChart: React.FC = () => {
  const { data, isLoading } = useGetDashboardAPI();

  if (isLoading || !data) return <Loader/>;

  const chartData = getProfitPieChartData(data);
  const isLoss = data.profit < 0;
  return (
    <Paper sx={{ p: 3 }}>
       <Typography variant="h6" color={isLoss ? "error" : "success"}>
        {isLoss ? t("Dialogs.Title.profitvsExpense") : t("Dialogs.Title.profitvsExpense")}
      </Typography>
      <Box
        height={300}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        marginBottom={2}
      >
        <Pie data={chartData} options={pieChartOptions} />
      </Box>
    </Paper>
  );
};

export default ProfitPieChart;