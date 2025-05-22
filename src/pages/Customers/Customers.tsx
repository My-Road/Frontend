import { Container, Divider, Paper, Stack, Typography } from "@mui/material";
import AddCustomerForm from "./components/AddCustomerForm";
import CustomerDataGrid from "./components/CustomerDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import SearchFormByName from "@/components/SearchFormByName";
import { Trans } from "react-i18next";
import { Box } from "@mui/material";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import routeHOC from "@/routes/HOCs/routeHOC";

const Customers = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isDeleted",
  });
  return (
    <Container sx={{ my: 5 }}>
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
            <SearchFormByName
              setSearchParams={setSearchParams}
              name="customerName"
              sortsBy="isDeleted"
            />
          </Box>
          <CustomerDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

const CustomersWithRoute = routeHOC({
  title: "Customers",
  pageAccessName: "Customers",
})(Customers);

export default CustomersWithRoute;
