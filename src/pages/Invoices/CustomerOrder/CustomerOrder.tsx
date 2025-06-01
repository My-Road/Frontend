import React from "react";
import { Container, Stack } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useGetOrderAPI } from "./hooks/useGetOrderAPI";
import Invoice from "./components/Invoice";
import Loader from "@/components/Loader";

const CustomerOrder: React.FC = () => {
  const { orderId } = useParams();
  const { data, isLoading, error } = useGetOrderAPI(orderId || "0");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const orderData = data!;

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <Invoice order={orderData} />
      </Stack>
    </Container>
  );
};

export default CustomerOrder;
