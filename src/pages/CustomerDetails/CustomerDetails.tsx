import { Container, Stack } from "@mui/material";
import PersonalCustomerInfo from "./components/PersonalCustomerInfo/PersonalCustomerInfo";
import { useGetCustomerAPI } from "./hooks/useGetCustomerAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import CustomerPayments from "./components/CustomerPayments/CustomerPayments";
import CustomerOrders from "./components/CustomerOrders/CustomerOrders";
import { getPaymentState } from "./utils/getPaymentState";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const { data, isLoading, error } = useGetCustomerAPI(customerId || "0");
  const isManager = useAppSelector(isManagerRole);

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
        {!isManager && (
          <>
            <CustomerOrders customerId={customerData.id} />
            <CustomerPayments
              customerId={customerData.id}
              paymentState={paymentState}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

const CustomerDetailsWithRoute = routeHOC({
  title: "CustomerDetails",
  pageAccessName: "CustomerDetails",
})(CustomerDetails);

export default CustomerDetailsWithRoute;
