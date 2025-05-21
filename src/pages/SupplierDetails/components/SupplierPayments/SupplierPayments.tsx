import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
import AddPaymentForm from "./AddPaymentForm";
import PaymentDataGrid from "./PaymentDataGrid";
import { Trans } from "react-i18next";
import { SearchParams } from "@/types";
import { useState } from "react";
import SearchFormByDate from "@/components/SearchFormByDate/SearchFormByDate";
import { DEFAULT_SEARCH_PARAMS } from "@/constants";
import { PaymentState } from "../../types";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

interface Props {
  supplierId: number;
  paymentState: PaymentState;
}

function SupplierPayments({ supplierId, paymentState }: Props) {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ...DEFAULT_SEARCH_PARAMS,
    sorts: "-paymentDate",
  });
  return (
    <Paper>
      <Stack p={4} gap={4}>
        <Box>
          <Typography variant="h5">
            <Box display="flex" alignContent="center">
              <PaymentOutlinedIcon />
              <Trans i18nKey="PrivatePages.Suppliers.supplierPayments">
                Supplier Payments
              </Trans>
            </Box>
          </Typography>
          <Divider />
        </Box>
        <Box mb={3}>
          <AddPaymentForm supplierId={supplierId} paymentState={paymentState} />
        </Box>
        <SearchFormByDate
          setSearchParams={setSearchParams}
          dateFieldKey="paymentDate"
        />
        <PaymentDataGrid searchParams={searchParams} supplierId={supplierId} />
      </Stack>
    </Paper>
  );
}

export default SupplierPayments;
