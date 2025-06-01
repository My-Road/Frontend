import React, { useRef } from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import { Order } from "../types";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "@/components/InvoicePDF/InvoicePDF";
import { getTableDate, getTableHeader } from "../utils/getTableData";
import { useTranslation } from "react-i18next";
import InvoiceContent from "./InvoiceContent";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

interface InvoiceProps {
  order: Order;
}

const Invoice: React.FC<InvoiceProps> = ({ order }) => {
  const componentRef = useRef(null);
  const { t } = useTranslation("");
  const navigate = useNavigate();
  const tableData = getTableDate(order, t!);
  const tableHeader = getTableHeader(order, t!);

  return (
    <Box maxWidth={800} p={4} m="auto">
      <Paper
        elevation={3}
        sx={{ padding: 4, borderRadius: 4 }}
        ref={componentRef}
      >
        <Box display="flex" alignItems="center" gap={1} sx={{ mb: 2 }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5">
            {t("Invoice.Titles.OrderInvoice")}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2} sx={{ my: 3 }}>
          <InvoiceContent order={order} />
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
                title="OrderInvoice"
              />
            }
            fileName={`فاتورة-${order.customer.customerName}.pdf`}
            style={{ textDecoration: "none" }}
          >
            {({ loading }) => (
              <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                {loading ? t("Buttons.loading") : t("Buttons.print")}
              </Button>
            )}
          </PDFDownloadLink>
          <Button onClick={() => navigate(`/me/customer/${order.customer.id}`)}>
            {t("Buttons.customerDetails")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Invoice;
