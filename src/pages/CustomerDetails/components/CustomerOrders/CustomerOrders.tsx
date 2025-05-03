import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid"

import AddOrderForm from "./AddOrderForm";
import OrdersDataGrid from "./OrdersDataGrid";
import { SearchParams } from "@/types";
import { useState } from "react";
import { Trans } from "react-i18next";
import SearchForm from "@/components/SearchForm/SearchForm";

interface Props {
  customerId: number;
}

function CustomerOrders({ customerId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    page: 1,
    pageSize: 15,
    filters: "",
  });
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
