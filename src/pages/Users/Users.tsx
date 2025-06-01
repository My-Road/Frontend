import {
  Container,
  Stack,
  Box,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useState } from "react";
import SearchFormByUsers from "@/components/‏‏SearchFormByUsers";
import UsersDataGrid from "./components/UsersDataGrid";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import { Trans } from "react-i18next";
import routeHOC from "@/routes/HOCs/routeHOC";

const Users = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "-isActive",
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
            <GroupsTwoToneIcon fontSize="large" />
            <Trans i18nKey="SideDrawerLinks.Users">Users</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <SearchFormByUsers
              setSearchParams={setSearchParams}
              name="firstName" 
              sortsBy="-isActive"
            />
          </Box>
          <UsersDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </Container>
  );
};

const UsersWithRoute = routeHOC({
  title: "Users",
  pageAccessName: "Users",
})(Users);

export default UsersWithRoute;   


