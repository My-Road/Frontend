import { Container, Stack } from "@mui/material";
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

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const { data, isLoading, error } = useGetEmployeeAPI(employeeId || "0");
  const isManager = useAppSelector(isManagerRole);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const employeeData = data!;
  const paymentState = getPaymentState(
    employeeData?.remainingAmount ?? 0,
    employeeData?.totalDueAmount ?? 0
  );
  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <PersonalEmployeeInfo employeeData={employeeData} />
        {!isManager && (
          <>
            <EmployeeLog employeeId={employeeData.id} />
            <EmployeePayments
              employeeId={employeeData.id}
              paymentState={paymentState}
            />
          </>
        )}
      </Stack>
    </Container>
  );
};

const EmployeeDetailsWithRoute = routeHOC({
  title: "EmployeeDetails",
  pageAccessName: "EmployeeDetails",
})(EmployeeDetails);

export default EmployeeDetailsWithRoute;
