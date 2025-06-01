import React from "react";
import { Container, Stack } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useGetPurchaseAPI } from "./hooks/useGetPurchaseAPI";
import Invoice from "./components/Invoice";
import Loader from "@/components/Loader";
import routeHOC from "@/routes/HOCs/routeHOC";

const PurchaseInvoice: React.FC = () => {
  const { purchaseId } = useParams();
  const { data, isLoading, error } = useGetPurchaseAPI(purchaseId || "0");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const purchasesDate = data!;

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <Invoice purchase={purchasesDate} />
      </Stack>
    </Container>
  );
};

const PurchaseInvoiceWithRoute = routeHOC({
  title: "PurchaseInvoice",
  pageAccessName: "PurchaseInvoice",
})(PurchaseInvoice);

export default PurchaseInvoiceWithRoute;
