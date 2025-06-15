import { t } from "i18next";

export const getProfitPieChartData = (data: { profit: number; totalExpensePaid: number }) => ({
  labels: [t("Invoice.Labels.Profit"), t("Invoice.Labels.Expense")],
  datasets: [
    {
      data: [data.profit, data.totalExpensePaid],
      backgroundColor: ["#2ecc71", "#e74c3c"],
    },
  ],
});