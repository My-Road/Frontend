import React from "react";
import { Typography, Divider, Grid2 as Grid, Box, Paper } from "@mui/material";
import { Purchase } from "@/types";
import { useTranslation } from "react-i18next";

interface InvoiceProps {
  purchase: Purchase;
}

const InvoiceContent: React.FC<InvoiceProps> = ({ purchase }) => {
  const { t } = useTranslation();

  return (
    <>
      <Grid size={{ xs: 12 }} display="flex" alignItems="center">
        <Typography variant="h6" p={1}>
          {t("Invoice.Labels.purchasesDate")}
        </Typography>
        <Typography variant="body1">
          : {new Date(purchase.purchasesDate).toLocaleDateString()}
        </Typography>
      </Grid>
      <Paper elevation={4} sx={{ borderRadius: 3, width: "100%", p: 2, bgcolor: "white" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.supplierName")}:
            </Typography>
            <Typography variant="body1">
              {purchase.supplier?.supplierName}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.address")}:
            </Typography>
            <Typography variant="body1">{purchase.supplier?.address}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.goodsDeliverer")}:
            </Typography>
            <Typography variant="body1">{purchase.goodsDeliverer}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.goodsDelivererPhoneNumber")}:
            </Typography>
            <Typography variant="body1">
              {purchase.goodsDelivererPhoneNumber}
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
            <Typography variant="body1">{purchase.quantity}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.price")}:
            </Typography>
            <Typography variant="body1">{purchase.price}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Typography variant="subtitle1" p={1}>
              {t("Invoice.Labels.totalDueAmount")}:
            </Typography>
            <Typography variant="body1">{purchase.totalDueAmount}</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} display="flex" alignItems="center">
            <Divider sx={{ mt: 3, mb: 2 }} />
            <Box display="flex" alignItems="center" gap={1} p={1}>
              <Typography variant="body1" color="text.primary">
                {t("Invoice.Labels.purchaseComplete")}:
              </Typography>
              <Typography
                color={purchase.isCompleted ? "success.main" : "error.main"}
              >
                {purchase.isCompleted ? "نعم" : "لا"}
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
        <Typography variant="body1">{purchase.notes}</Typography>
      </Grid>
      </Paper>
    </>
  );
};

export default InvoiceContent;
