import React from "react";
import { Typography, Divider, Grid2 as Grid, Box, Paper } from "@mui/material";
import { EmployeeLog } from "@/types";
import { useTranslation } from "react-i18next";

interface InvoiceProps {
  employeeLog: EmployeeLog;
}

const InvoiceContent: React.FC<InvoiceProps> = ({ employeeLog }) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid size={{ xs: 12 }} display="flex" alignItems="center">
        <Typography variant="h6" p={1}>
          {t("Invoice.Labels.logDate")}
        </Typography>
        <Typography variant="body1">
          : {new Date(employeeLog.date).toLocaleDateString()}
        </Typography>
      </Grid>
      <Paper elevation={4} sx={{ borderRadius: 3, width: "100%", p: 2, bgcolor: "white" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.employeeName")}:
            </Typography>
            <Typography variant="body1">
              {employeeLog.employee?.employeeName}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.address")}:
            </Typography>
            <Typography variant="body1">{employeeLog.employee?.address}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.checkIn")}:
            </Typography>
            <Typography variant="body1">{employeeLog.checkIn}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.checkOut")}:
            </Typography>
            <Typography variant="body1">
              {employeeLog.checkOut}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ borderRadius: 3, width: "100%", p: 2, bgcolor: "white" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.hourlyWage")}:
            </Typography>
            <Typography variant="body1">{employeeLog.hourlyWage}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.totalHours")}:
            </Typography>
            <Typography variant="body1">{employeeLog.totalHours}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.dailyWage")}:
            </Typography>
            <Typography variant="body1">{employeeLog.dailyWage}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Box display="flex" alignItems="center" gap={1} p={1}>
              <Typography variant="body1" color="text.primary">
                {t("Invoice.Labels.employeeLogComplete")}:
              </Typography>
              <Typography
                color={employeeLog.isCompleted ? "success.main" : "error.main"}
              >
                {employeeLog.isCompleted ? "نعم" : "لا"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{width: "100%", p: 3, my: 2, borderRadius: 3, bgcolor: "white"}} elevation={3}>
      <Grid size={{ xs: 12 }} display="flex" alignItems="center">
        <Typography variant="subtitle1" p={1}>
          {t("Invoice.Labels.notes")}:
        </Typography>
        <Typography variant="body1">{employeeLog.notes}</Typography>
      </Grid>
      </Paper>
    </>
  );
};

export default InvoiceContent;
