import React from "react";
import { Typography, Divider, Grid2 as Grid, Box, Paper } from "@mui/material";
import { Order } from "../types";
import { useTranslation } from "react-i18next";

interface InvoiceProps {
  order: Order;
}

const InvoiceContent: React.FC<InvoiceProps> = ({ order }) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid size={{ xs: 12 }} display="flex" alignItems="center">
        <Typography variant="h6" p={1}>
          {t("Invoice.Labels.orderDate")}
        </Typography>
        <Typography variant="body1">
          : {new Date(order.orderDate).toLocaleDateString()}
        </Typography>
      </Grid>
      <Paper elevation={4} sx={{ borderRadius: 3, width: "100%", p: 2, bgcolor: "white" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.customerName")}:
            </Typography>
            <Typography variant="body1">
              {order.customer.customerName}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.address")}:
            </Typography>
            <Typography variant="body1">{order.customer.address}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.recipientName")}:
            </Typography>
            <Typography variant="body1">{order.recipientName}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.recipientPhoneNumber")}:
            </Typography>
            <Typography variant="body1">
              {order.recipientPhoneNumber}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ borderRadius: 3, width: "100%", p: 2, bgcolor: "white" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.quantity")}:
            </Typography>
            <Typography variant="body1">{order.quantity}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.price")}:
            </Typography>
            <Typography variant="body1">{order.price}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.totalDueAmount")}:
            </Typography>
            <Typography variant="body1">{order.totalDueAmount}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Box display="flex" alignItems="center" gap={1} p={1}>
              <Typography variant="body1" color="text.primary">
                {t("Invoice.Labels.orderComplete")}:
              </Typography>
              <Typography
                color={order.isCompleted ? "success.main" : "error.main"}
              >
                {order.isCompleted ? "نعم" : "لا"}
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
        <Typography variant="body1">{order.notes}</Typography>
      </Grid>
      </Paper>
    </>
  );
};

export default InvoiceContent;
