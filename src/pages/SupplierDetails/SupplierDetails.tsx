import { Stack, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import PersonalSupplierInfo from "./components/PersonalSupplierInfo/PersonalSupplierInfo";
import { useGetSupplierAPI } from "./hooks/useGetSupplierAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import SupplierPayments from "./components/SupplierPayments/SupplierPayments";
import Purchases from "./components/Purchases/Purchases";
import { getPaymentState } from "./utils/getPaymentState";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import PageContainer from "@/containers/PageContainer";
import { useTranslation } from "react-i18next";

const SupplierDetails = () => {
  const { supplierId } = useParams();
  const { data: supplierData, isLoading, error } = useGetSupplierAPI(supplierId || "0");
  const { t } = useTranslation();
  const isManager = useAppSelector(isManagerRole);

  const [tabIndex, setTabIndex] = useState(0);

  if (isLoading) return <Loader />;
  if (error || !supplierData) return <Navigate to="/*" />;

  const paymentState = getPaymentState(
    supplierData.remainingAmount ?? 0,
    supplierData.totalDueAmount ?? 0
  );

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <PageContainer sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalSupplierInfo supplierData={supplierData} />
        {!isManager && (
          <>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Supplier details tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label={t("Tabs.SupplierPurchase")} sx={{fontSize: 18}}/>
              <Tab label={t("Tabs.supplierPayments")} sx={{fontSize: 18}} />
            </Tabs>

            <Box role="tabpanel" hidden={tabIndex !== 0}>
              {tabIndex === 0 && <Purchases supplierId={supplierData.id} />}
            </Box>

            <Box role="tabpanel" hidden={tabIndex !== 1}>
              {tabIndex === 1 && (
                <SupplierPayments
                  supplierId={supplierData.id}
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

const SupplierDetailsWithRoute = routeHOC({
  title: "SupplierDetails",
  pageAccessName: "SupplierDetails",
})(SupplierDetails);

export default SupplierDetailsWithRoute;
