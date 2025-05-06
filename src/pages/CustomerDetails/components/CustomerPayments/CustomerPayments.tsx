import { Paper, Typography, Stack, Divider, Box } from "@mui/material";

import AddPaymentForm from "./AddPaymentForm";
import PaymentDataGrid from "./PaymentDataGrid";
import { Trans } from "react-i18next";
import { SearchParams } from "@/types";
import { useState } from "react";
import SearchForm from "@/components/SearchForm/SearchForm";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

interface Props {
  customerId: number;
}

function CustomerPayments({ customerId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>(DEFAULT_SEARCH_PARAMS);
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Trans i18nKey="PrivatePages.Customers.customerPayments">
              Customer Payments
            </Trans>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddPaymentForm customerId={customerId} />
        </Box>
        <SearchForm
          setSearchParams={setSearchParams}
          dateFieldKey="paymentDate"
        />
        <PaymentDataGrid searchParams={searchParams} customerId={customerId} />
      </Stack>
    </Paper>
  );
}

export default CustomerPayments;
