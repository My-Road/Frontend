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
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { SearchParams } from "@/types";
import { useState } from "react";
import routeHOC from "@/routes/HOCs/routeHOC";
import LogsSearchForm from "./components/LogsSearchForm";
import EmployeeLogsDataGrid from "./components/EmployeeLogsDataGrid";

const EmployeesReports = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "-date",
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
            <Trans i18nKey="PrivatePages.Reports.employeesReports">Employees Reports</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <LogsSearchForm
              setSearchParams={setSearchParams}
              name="customerName"
              sortsBy="date"
            />
          </Box>
          <EmployeeLogsDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

const EmployeesReportsWithRoute = routeHOC({
  title: "EmployeeReport",
  pageAccessName: "EmployeeReport",
})(EmployeesReports);

export default EmployeesReportsWithRoute;
