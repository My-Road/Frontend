import { Divider, Paper, Stack, Typography } from "@mui/material";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerDataGrid from "./components/CustomerDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { Trans } from "react-i18next";
import { Box } from "@mui/material";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import routeHOC from "@/routes/HOCs/routeHOC";
import CustomerSearchForm from "./components/CustomerSearchForm";
import PageContainer from "@/containers/PageContainer";

const Customers = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isDeleted",
  });
  return (
    <PageContainer>
      <Stack gap={4}>
        <AddCustomerForm />
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            display="flex"
            alignItems="center"
            gap={1}
          >
            <GroupsTwoToneIcon fontSize="large" />
            <Trans i18nKey="SideDrawerLinks.Customers">Employees</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <CustomerSearchForm
              setSearchParams={setSearchParams}
              name="customerName"
              sortsBy="isDeleted"
            />
          </Box>
          <CustomerDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </PageContainer>
  );
};

const CustomersWithRoute = routeHOC({
  title: "Customers",
  pageAccessName: "Customers",
})(Customers);

export default CustomersWithRoute;
