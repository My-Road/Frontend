import React, { useRef } from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import {Purchase} from "@/types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePDF/InvoicePDF";
import { getTableDate, getTableHeader } from "../utils/getTableData";
import { useTranslation } from "react-i18next";
import InvoiceContent from "./InvoiceContent";
import { useNavigate } from "react-router-dom";
import ArrowBackButton from "@/components/Buttons/ArrowBackButton/ArrowBackButton";

interface InvoiceProps {
  purchase: Purchase;
}

const Invoice: React.FC<InvoiceProps> = ({ purchase }) => {
  const componentRef = useRef(null);
  const { t } = useTranslation("");
  const navigate = useNavigate();
  const tableData = getTableDate(purchase, t!);
  const tableHeader = getTableHeader(purchase, t!);

  return (
    <Box maxWidth={800} p={4} m="auto">
      <Paper
        elevation={3}
        sx={{ padding: 4, borderRadius: 4 }}
        ref={componentRef}
      >
        <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
          <ArrowBackButton path="/me/reports/purchases"/>
          <Typography variant="h5">
            {t("Invoice.Titles.PurchaseInvoice")}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2} sx={{ my: 3 }}>
          <InvoiceContent purchase={purchase} />
        </Grid>
        <Box
          display="flex"
          alignContent="center"
          justifyContent="space-between"
        >
          <PDFDownloadLink
            document={
              <InvoicePDF
                tableData={tableData}
                tableHeader={tableHeader}
                title="PurchaseInvoice"
              />
            }
            fileName={`فاتورة-${purchase.supplier?.supplierName}.pdf`}
            style={{ textDecoration: "none" }}
          >
            {({ loading }) => (
              <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                {loading ? t("Buttons.loading") : t("Buttons.print")}
              </Button>
            )}
          </PDFDownloadLink>
          <Button onClick={() => navigate(`/me/suppliers/${purchase.supplier?.id}`)}>
            {t("Buttons.supplierDetails")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Invoice;
