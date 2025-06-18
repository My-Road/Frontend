import { t } from "i18next";

export const getProfitPieChartData = (data: { profit: number; totalExpensePaid: number }) => {
  const isLoss = data.profit < 0;
  const profitValue = isLoss ? 0 : data.profit;

  return {
    labels: [t("Invoice.Labels.Profit"), t("Invoice.Labels.Expense")],
    datasets: [
      {
        data: [profitValue, data.totalExpensePaid],
        backgroundColor: ["#2ecc71", "#e74c3c"], 
      },
    ],
  };
};