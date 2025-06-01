import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Trans } from "react-i18next";
import CustomerDataGrid from "./components/CustomerDataGrid";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { SearchParams } from "@/types";
import { useState } from "react";
import OrderSearchForm from "./components/OrderSearchForm";
import routeHOC from "@/routes/HOCs/routeHOC";

const CustomersReports = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS, sorts: "orderDate"
  });
  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={4}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            display="flex"
            alignItems="center"
            gap={2}
          >
            <ReceiptLongIcon fontSize="large" />
            <Trans i18nKey="SideDrawerLinks.Customers">Customers</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <OrderSearchForm
              setSearchParams={setSearchParams}
              name="customerName"
              sortsBy="orderDate"
            />
          </Box>
          <CustomerDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

const CustomersReportsWithRoute = routeHOC({
  title: "EmployeeDetails",
  pageAccessName: "EmployeeDetails",
})(CustomersReports);

export default CustomersReportsWithRoute;