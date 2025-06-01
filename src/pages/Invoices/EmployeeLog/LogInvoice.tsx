import React from "react";
import { Container, Stack } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { useGetEmployeeLogAPI } from "./hooks/useGetEmployeeLogAPI";
import Invoice from "./components/Invoice";
import Loader from "@/components/Loader";
import routeHOC from "@/routes/HOCs/routeHOC";

const LogInvoice: React.FC = () => {
  const { employeeId } = useParams();
  const { data, isLoading, error } = useGetEmployeeLogAPI(employeeId || "0");

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Navigate to="/*" />;
  }

  const logData = data!;

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={5}>
        <Invoice employeeLog={logData} />
      </Stack>
    </Container>
  );
};

const EmployeeInvoiceWithRoute = routeHOC({
  title: "EmployeeInvoice",
  pageAccessName: "EmployeeInvoice",
})(LogInvoice);

export default EmployeeInvoiceWithRoute;
