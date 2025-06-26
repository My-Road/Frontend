import { Stack, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
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
import PageContainer from "@/containers/PageContainer";
import { useTranslation } from "react-i18next";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const { data: customerData, isLoading, error } = useGetCustomerAPI(customerId || "0");
  const isManager = useAppSelector(isManagerRole);
  const { t } = useTranslation();

  const [tabIndex, setTabIndex] = useState(0);

  if (isLoading) return <Loader />;
  if (error || !customerData) return <Navigate to="/*" />;

  const paymentState = getPaymentState(
    customerData.remainingAmount ?? 0,
    customerData.totalDueAmount ?? 0
  );

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <PageContainer sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalCustomerInfo customerData={customerData} />
        {!isManager && (
          <>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Customer details tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label={t("Tabs.customerOrders")} sx={{ fontSize: 18 }} />
              <Tab label={t("Tabs.customerPayments")} sx={{ fontSize: 18 }} />
            </Tabs>

            <Box role="tabpanel" hidden={tabIndex !== 0} sx={{ pt: 2 }}>
              {tabIndex === 0 && <CustomerOrders customerId={customerData.id} />}
            </Box>

            <Box role="tabpanel" hidden={tabIndex !== 1} sx={{ pt: 2 }}>
              {tabIndex === 1 && (
                <CustomerPayments
                  customerId={customerData.id}
                  paymentState={paymentState}
                />
              )}
            </Box>
          </>
        )}
      </Stack>
    </PageContainer>
  );
};

const CustomerDetailsWithRoute = routeHOC({
  title: "CustomerDetails",
  pageAccessName: "CustomerDetails",
})(CustomerDetails);

export default CustomerDetailsWithRoute;
