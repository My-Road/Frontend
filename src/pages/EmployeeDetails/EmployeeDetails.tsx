import { Stack, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import PersonalEmployeeInfo from "./components/PersonalEmployeeInfo/PersonalEmployeeInfo";
import { useGetEmployeeAPI } from "./hooks/useGetEmployeeAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import EmployeeLog from "./components/EmployeeLog/EmployeeLogs";
import EmployeePayments from "./components/EmployeePayments/EmployeePayments";
import { getPaymentState } from "./utils/getPaymentState";
import routeHOC from "@/routes/HOCs/routeHOC";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";
import PageContainer from "@/containers/PageContainer";
import { useTranslation } from "react-i18next";

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const { data: employeeData, isLoading, error } = useGetEmployeeAPI(employeeId || "0");
  const isManager = useAppSelector(isManagerRole);
  const { t } = useTranslation();

  const [tabIndex, setTabIndex] = useState(0);

  if (isLoading) return <Loader />;
  if (error || !employeeData) return <Navigate to="/*" />;

  const paymentState = getPaymentState(
    employeeData.remainingAmount ?? 0,
    employeeData.totalDueAmount ?? 0
  );

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  return (
    <PageContainer sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalEmployeeInfo employeeData={employeeData} />
        {!isManager && (
          <>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Employee details tabs"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label={t("Tabs.employeeLogs")} sx={{ fontSize: 18 }} />
              <Tab label={t("Tabs.employeePayments")} sx={{ fontSize: 18 }} />
            </Tabs>

            <Box role="tabpanel" hidden={tabIndex !== 0} sx={{ pt: 2 }}>
              {tabIndex === 0 && <EmployeeLog employeeId={employeeData.id} />}
            </Box>

            <Box role="tabpanel" hidden={tabIndex !== 1} sx={{ pt: 2 }}>
              {tabIndex === 1 && (
                <EmployeePayments
                  employeeId={employeeData.id}
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

const EmployeeDetailsWithRoute = routeHOC({
  title: "EmployeeDetails",
  pageAccessName: "EmployeeDetails",
})(EmployeeDetails);

export default EmployeeDetailsWithRoute;
