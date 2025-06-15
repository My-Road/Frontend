import { TFunction } from "i18next";
import { TooltipItem } from "chart.js";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
export const ChartOptions = (data: number[]) => {
  const minValue = 0;
  const maxValue = Math.ceil(Math.max(...data) * 1.1); 
  const stepSize = Math.ceil(maxValue / 5); 

  return {
    scales: {
      y: {
        min: minValue,
        max: maxValue,
        ticks: {
          callback: (value: number | string) =>
            typeof value === "number" ? value.toLocaleString() : value,
          stepSize,
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
};

export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      enabled: true,
    },
  },
};

export const getSummaryData = (t: TFunction) => [
  { label: t("Invoice.Labels.Employees"), valueKey: "employeeCount", icon: BadgeTwoToneIcon },
  { label: t("Invoice.Labels.Suppliers"), valueKey: "supplierCount", icon: InventorySharpIcon },
  { label: t("Invoice.Labels.Customers"), valueKey: "customerCount", icon: GroupsIcon },
  { label: t("Invoice.Labels.Profit"), valueKey: "profit", icon: ShowChartIcon },
  { label: t("Invoice.Labels.Income"), valueKey: "totalIncomePaid", icon: AttachMoneyIcon },
  { label: t("Invoice.Labels.Expense"), valueKey: "totalExpensePaid", icon: MoneyOffIcon },
];

export const commonButtonSx = {
  borderRadius: 3,
  px: 3,
  textTransform: "none",
  boxShadow: 2,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: 4,
  },
};
 export const StyledSummaryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius * 3,
  cursor: "default",
}));