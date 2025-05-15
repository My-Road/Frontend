import { Container, Stack } from "@mui/material";
import PersonalCustomerInfo from "./components/PersonalCustomerInfo/PersonalCustomerInfo";
import { useGetCustomerAPI } from "./hooks/useGetCustomerAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import CustomerPayments from "./components/CustomerPayments/CustomerPayments";
import CustomerOrders from "./components/CustomerOrders/CustomerOrders";
import { getPaymentState } from "./utils/getPaymentState";

function CustomerDetails() {
  const { customerId } = useParams();
  const { data, isLoading, error } = useGetCustomerAPI(customerId || "0");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const customerData = data!;
  const paymentState = getPaymentState(
    customerData?.remainingAmount ?? 0,
    customerData?.totalDueAmount ?? 0
  );

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalCustomerInfo customerData={customerData} />
        <CustomerOrders customerId={customerData.id} />
        <CustomerPayments
          customerId={customerData.id}
          paymentState={paymentState}
        />
      </Stack>
    </Container>
  );
}

export default CustomerDetails;
