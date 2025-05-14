import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid"

import AddOrderForm from "./AddOrderForm";
import OrdersDataGrid from "./OrdersDataGrid";
import { SearchParams } from "@/types";
import { useState } from "react";
import { Trans } from "react-i18next";
import SearchForm from "@/components/SearchForm/SearchForm";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

interface Props {
  customerId: number;
}

function CustomerOrders({ customerId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({...DEFAULT_SEARCH_PARAMS, sorts: "-orderDate"});
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Trans i18nKey="PrivatePages.Customers.customerOrders">
              Customer Orders
            </Trans>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddOrderForm customerId={customerId} />
        </Box>
        <SearchForm
          setSearchParams={setSearchParams}
          dateFieldKey="orderDate"
        />
        <OrdersDataGrid customerId={customerId} searchParams={searchParams} />
      </Stack>
    </Paper>
  );
}

export default CustomerOrders;
