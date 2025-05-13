import { Paper, Typography, Stack, Divider, Box } from "@mui/material";

import AddPaymentForm from "./AddPaymentForm";
import PaymentDataGrid from "./PaymentDataGrid";
import { Trans } from "react-i18next";
import { SearchParams } from "@/types";
import { useState } from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

interface Props {
  employeeId: number;
}

function EmployeePayments({ employeeId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>(DEFAULT_SEARCH_PARAMS);
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Trans i18nKey="PrivatePages.Employees.employeePayments">
              Employee Payments
            </Trans>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddPaymentForm employeeId={employeeId} />
        </Box>
        <SearchForm
          setSearchParams={setSearchParams}
          dateFieldKey="paymentDate"
        />
        <PaymentDataGrid searchParams={searchParams} employeeId={employeeId} />
      </Stack>
    </Paper>
  );
}

export default EmployeePayments;