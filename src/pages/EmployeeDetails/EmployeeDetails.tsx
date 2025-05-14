import { Container, Stack } from "@mui/material";
import PersonalEmployeeInfo from "./components/PersonalEmployeeInfo/PersonalEmployeeInfo";
import { useGetEmployeeAPI } from "./hooks/useGetEmployeeAPI";
import { Navigate, useParams } from "react-router-dom";
import Loader from "@/components/Loader";
import EmployeeLog from "./components/EmployeeLog/EmployeeLogs";
import EmployeePayments from "./components/EmployeePayments/EmployeePayments";
import { getPaymentState } from "./utils/getPaymentState";

function EmployeeDetails() {
  const { employeeId } = useParams();
  const { data, isLoading, error } = useGetEmployeeAPI(employeeId || "0");

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
        <EmployeeLog employeeId={employeeData.id} />
        <EmployeePayments employeeId={employeeData.id} paymentState={paymentState} />

      </Stack>
    </Container>
  );
}

export default EmployeeDetails;
