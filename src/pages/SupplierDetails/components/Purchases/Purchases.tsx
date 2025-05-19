import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
import AddPurchaseForm from "./AddPurchaseForm";
import PurchasesDataGrid from "./PurchasesDataGrid";
import { SearchParams } from "@/types";
import { useState } from "react";
import { Trans } from "react-i18next";
import SearchFormByDate from "@/components/SearchFormByDate/SearchFormByDate";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";

interface Props {
  supplierId: number;
}

function Purchases({ supplierId }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({...DEFAULT_SEARCH_PARAMS, sorts: "-purchasesDate"});
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Trans i18nKey="PrivatePages.Suppliers.Purchases">
              Purchases
            </Trans>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddPurchaseForm supplierId={supplierId} />
        </Box>
        <SearchFormByDate
          setSearchParams={setSearchParams}
          dateFieldKey="purchasesDate"
        />
        <PurchasesDataGrid supplierId={supplierId} searchParams={searchParams} />
      </Stack>
    </Paper>
  );
}

export default Purchases;
