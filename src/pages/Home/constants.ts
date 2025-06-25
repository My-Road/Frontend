import { TFunction } from "i18next";
import type { ChartOptions, TooltipItem } from "chart.js";
import GroupsIcon from "@mui/icons-material/Groups";
import BadgeTwoToneIcon from "@mui/icons-material/BadgeTwoTone";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import { Paper, PaperProps } from "@mui/material";
import { styled } from "@mui/material/styles";
export const ChartOption = (data: number[]) => {
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
            typeof value === "number" ? value.toLocaleString() : "",
          stepSize,
          font: {
            size: 10,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
          },
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
        clamp: true,
        font: {
          weight: "bold" as const,
          size: 10,
        },
        formatter: (value: unknown) =>
          typeof value === "number" ? value.toLocaleString() : "",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: TooltipItem<"bar">) => {
            const y = context.parsed?.y;
            return typeof y === "number" ? y.toLocaleString() : "";
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
};

export const pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context: TooltipItem<'pie'>) => {
          const dataset = context.dataset;
          const data = Array.isArray(dataset.data) ? dataset.data : [];

          const total = data.reduce((sum, val) => {
            const numeric = typeof val === "number" ? val : parseFloat(val as string);
            return sum + (isNaN(numeric) ? 0 : numeric);
          }, 0);

          const rawValue = typeof context.raw === "number" ? context.raw : parseFloat(context.raw as string);
          const value = isNaN(rawValue) ? 0 : rawValue;

          const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : "0.00";

          return `${context.label}: ${value.toLocaleString()} (${percentage}%)`;
        },
      },
    },
  },
};

export const getSummaryData = (t: TFunction) => [
  {
    label: t("Invoice.Labels.Employees"),
    valueKey: "employeeCount",
    icon: BadgeTwoToneIcon,
  },
  {
    label: t("Invoice.Labels.Suppliers"),
    valueKey: "supplierCount",
    icon: InventorySharpIcon,
  },
  {
    label: t("Invoice.Labels.Customers"),
    valueKey: "customerCount",
    icon: GroupsIcon,
  },
  {
    label: t("Invoice.Labels.Profit"),
    valueKey: "profit",
    icon: ShowChartIcon,
  },
  {
    label: t("Invoice.Labels.Income"),
    valueKey: "totalIncomePaid",
    icon: AttachMoneyIcon,
  },
  {
    label: t("Invoice.Labels.Expense"),
    valueKey: "totalExpensePaid",
    icon: MoneyOffIcon,
  },
];

export const commonButtonSx = {
  borderRadius: 3,
  px: 3,
  py: 1.5,
  textTransform: "none",
  boxShadow: 2,
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
  },
  width: {
    xs: "100%",
    sm: "auto",
  },
  gap: 1.5,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: 4,
  },
  "& .MuiButton-endIcon": {
    fontSize: "20px",
  },
};

export const bgColors = [
  "#E3F2FD", // Light blue - Employees
  "#FCE4EC", // Light pink - Suppliers
  "#F1F8E9", // Light green - Customers
  "#FFF8E1", // Soft yellow - Profit
  "#E8F5E9", // Pale mint - Income
  "#FBE9E7", // Peach - Expense
];

export const iconColors = [
  "#1976D2", // Strong blue - Employees
  "#D81B60", // Rose pink - Suppliers
  "#388E3C", // Green - Customers
  "#FFDB58", // Amber - Profit
  "#2E7D32", // Dark green - Income
  "#E53935", // Red - Expense
];
interface StyledCardProps extends PaperProps {
  bgcolor?: string;
}

export const StyledSummaryCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})<StyledCardProps>(({ theme, bgcolor }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius * 3,
  cursor: "default",
  backgroundColor: bgcolor || theme.palette.background.paper, 
}));
