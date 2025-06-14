import { t } from "i18next";

export const getIncomeExpenseChartData = (data: { totalIncomePaid: number; totalExpensePaid: number }) => ({
  labels: [t("Invoice.Labels.Income"), t("Invoice.Labels.Expense")],
  datasets: [
    {
      label: t("Invoice.Labels.Monthly Overview"),
      data: [data.totalIncomePaid, data.totalExpensePaid],
      backgroundColor: ["#4caf50", "#f44336"],
    },
  ],
});
