import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddSupplierForm from "./components/AddSupplierForm";
import SupplierDataGrid from "./components/SupplierDataGrid";
import { useState } from "react";
import { SearchParams } from "@/types";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { Trans } from "react-i18next";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import routeHOC from "@/routes/HOCs/routeHOC";
import SupplierSearchForm from "./components/SupplierSearchForm";
import PageContainer from "@/containers/PageContainer";
const Suppliers = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "isDeleted",
  });
  return (
    <PageContainer sx={{ my: 5 }}>
      <Stack gap={4}>
        <AddSupplierForm />
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
            <Trans i18nKey="SideDrawerLinks.Suppliers">Suppliers</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <SupplierSearchForm
              setSearchParams={setSearchParams}
              name="supplierName"
              sortsBy="isDeleted"
            />
          </Box>
          <SupplierDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </PageContainer>
  );
};

const SuppliersWithRoute = routeHOC({
  title: "Suppliers",
  pageAccessName: "Suppliers",
})(Suppliers);

export default SuppliersWithRoute;