import { Paper, Grid, Typography } from "@mui/material";
import { useGetDashboardAPI } from "../hooks/useGetDashboardAPI";
import { useTranslation } from "react-i18next";

const SummarySection = () => {
  const { data, isLoading } = useGetDashboardAPI();
  const { t } = useTranslation();

  if (isLoading || !data) {
    return null;
  }

  const summaryData = [
    { label: t("Invoice.Labels.Employees"), value: data.employeeCount },
    { label: t("Invoice.Labels.Suppliers"), value: data.supplierCount },
    { label: t("Invoice.Labels.Customers"), value: data.customerCount },
    { label: t("Invoice.Labels.Profit"), value: data.profit },
    { label: t("Invoice.Labels.Income"), value: data.totalIncome },
    { label: t("Invoice.Labels.Expense"), value: data.totalExpense },
  ];

  return (
    <Grid container spacing={2}>
      {summaryData.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1">{item.label}</Typography>
            <Typography variant="h6">{item.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummarySection;