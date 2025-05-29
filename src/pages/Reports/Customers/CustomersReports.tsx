import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Trans } from "react-i18next";
import CustomerDataGrid from "./components/CustomerDataGrid";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { SearchParams } from "@/types";
import { useState } from "react";
import SearchFormByName from "./components/SearchForm";

const CustomersReports = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
  });
  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={4}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            display="flex"
            alignItems="center"
            gap={1}
          >
            <ReceiptLongIcon fontSize="large" />
            <Trans i18nKey="SideDrawerLinks.Customers">Employees</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
          <SearchFormByName
            setSearchParams={setSearchParams}
            name="recipientName"
            sortsBy=""
          />
        </Box>
          <CustomerDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

export default CustomersReports;
