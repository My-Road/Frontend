import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { Trans } from "react-i18next";
import SupplierDataGrid from "./components/SupplierDataGrid";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { SearchParams } from "@/types";
import { useState } from "react";
import PurchaseSearchForm from "./components/PurchaseSearchForm";
import routeHOC from "@/routes/HOCs/routeHOC";
import PageContainer from "@/containers/PageContainer";

const PurchasesReports = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS, sorts: "purchasesDate"
  });
  return (
    <PageContainer>
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
            <Trans i18nKey="PrivatePages.Reports.suppliersReports">Suppliers Reports</Trans>
          </Typography>
          <Divider />
          <Box mb={4}>
            <PurchaseSearchForm
              setSearchParams={setSearchParams}
              name="supplierName"
              sortsBy="purchasesDate"
            />
          </Box>
          <SupplierDataGrid searchParams={searchParams} />
        </Paper>
      </Stack>
    </PageContainer>
  );
};

const PurchasesReportsWithRoute = routeHOC({
  title: "PurchasesReport",
  pageAccessName: "PurchasesReport",
})(PurchasesReports);

export default PurchasesReportsWithRoute;