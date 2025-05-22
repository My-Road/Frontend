import { Container, Stack } from "@mui/material";
import PersonalSupplierInfo from "./components/PersonalSupplierInfo/PersonalSupplierInfo";
import { useGetSupplierAPI } from "./hooks/useGetSupplierAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import SupplierPayments from "./components/SupplierPayments/SupplierPayments";
import CustomerOrders from "./components/Purchases/Purchases";
import { getPaymentState } from "./utils/getPaymentState";
import routeHOC from "@/routes/HOCs/routeHOC";

const SupplierDetails = () => {
  const { supplierId } = useParams();
  const { data, isLoading, error } = useGetSupplierAPI(supplierId || "0");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const supplierData = data!;
  const paymentState = getPaymentState(
    supplierData?.remainingAmount ?? 0,
    supplierData?.totalDueAmount ?? 0
  );

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalSupplierInfo supplierData={supplierData} />
        <CustomerOrders supplierId={supplierData.id} />
        <SupplierPayments
          supplierId={supplierData.id}
          paymentState={paymentState}
        />
      </Stack>
    </Container>
  );
};

const SupplierDetailsWithRoute = routeHOC({
  title: "SupplierDetails",
  pageAccessName: "SupplierDetails",
})(SupplierDetails);

export default SupplierDetailsWithRoute;
