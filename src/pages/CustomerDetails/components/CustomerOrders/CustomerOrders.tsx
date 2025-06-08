import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
import AddOrderForm from "./AddOrderForm";
import OrdersDataGrid from "./OrdersDataGrid";
import { SearchParams } from "@/types";
import { useState } from "react";
import { Trans } from "react-i18next";
import SearchFormByDate from "@/components/SearchFormByDate/SearchFormByDate";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

interface Props {
  customerId: number;
}

function CustomerOrders({ customerId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isCompleted, -orderDate",
  });
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Box display="flex" alignContent="center">
              <AddShoppingCartOutlinedIcon />
              <Trans i18nKey="PrivatePages.Customers.customerOrders">
                Customer Orders
              </Trans>
            </Box>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddOrderForm customerId={customerId} />
        </Box>
        <SearchFormByDate
          setSearchParams={setSearchParams}
          dateFieldKey="orderDate"
        />
        <OrdersDataGrid customerId={customerId} searchParams={searchParams} />
      </Stack>
    </Paper>
  );
}

export default CustomerOrders;
