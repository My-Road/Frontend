import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
import AddEmployeeLogForm from "./AddEmployeeLogForm";
import EmployeeLogsDataGrid from "./EmployeeLogsDataGrid";
import { SearchParams } from "@/types";
import { useState } from "react";
import { Trans } from "react-i18next";
import SearchFormByDate from "@/components/SearchFormByDate/SearchFormByDate";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

interface Props {
  employeeId: number;
}

function EmployeeLog({ employeeId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isCompleted, -date",
  });
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Box display="flex" alignContent="center">
              <FactCheckOutlinedIcon />
              <Trans i18nKey="PrivatePages.Employees.EmployeeLogs">
                Employee Log
              </Trans>
            </Box>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddEmployeeLogForm employeeId={employeeId} />
        </Box>
        <SearchFormByDate
          setSearchParams={setSearchParams}
          dateFieldKey="date"
        />
        <EmployeeLogsDataGrid
          employeeId={employeeId}
          searchParams={searchParams}
        />
      </Stack>
    </Paper>
  );
}

export default EmployeeLog;
