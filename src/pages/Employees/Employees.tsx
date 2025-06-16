import {
  Container,
  Stack,
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EmployeeDataGrid from "./components/EmployeeDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import { Trans } from "react-i18next";
import routeHOC from "@/routes/HOCs/routeHOC";
import EmployeeSearchForm from "./components/EmployeeSearchForm";

const Employees = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "-isActive", 
  });

  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={4}>
        <AddEmployeeForm />
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
            <Trans i18nKey="SideDrawerLinks.Employees">Employees</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <EmployeeSearchForm
              setSearchParams={setSearchParams}
              name="employeeName"
              sortsBy="isDeleted"
            />
          </Box>
          <EmployeeDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

const EmployeesWithRoute = routeHOC({
  title: "Employees",
  pageAccessName: "Employees",
})(Employees);

export default EmployeesWithRoute;