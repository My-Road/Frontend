import { Divider, Stack, Typography, TextField, Box } from "@mui/material";
import { SupplierPayments } from "../../types";
import { Trans, useTranslation } from "react-i18next";
import { getPaymentStatusMessageAndColor } from "./utils/getPaymentStatusMessageAndColor";

interface Props {
  supplierPayments: SupplierPayments;
}

function PaymentsSupplierInfo({ supplierPayments }: Props) {
  const { t } = useTranslation();

  const totalDue = supplierPayments.totalDueAmount;
  const remaining = supplierPayments.remainingAmount;

  const { message: statusMessage, color: statusColor } =
    getPaymentStatusMessageAndColor(totalDue, remaining, t);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        <Trans i18nKey="PrivatePages.Suppliers.financialInformation">
          Financial Information
        </Trans>
        <Divider />
      </Typography>

      <Stack gap={2} flexDirection={{ sm: "column", md: "row" }} alignItems="">
        <TextField
          disabled
          label={t("Textfields.totalDueAmount")}
          value={supplierPayments.totalDueAmount}
          aria-label="enter a valid supplier label"
        />
        <TextField
          disabled
          label={t("Textfields.totalPaidAmount")}
          value={supplierPayments.totalPaidAmount}
          aria-label="enter a valid supplier label"
        />
        <TextField
          disabled
          label={t("Textfields.remainingAmount")}
          value={supplierPayments.remainingAmount}
          aria-label="enter a valid supplier label"
        />
        <Box alignItems="center" display="flex">
          <Typography color={statusColor} variant="h6">
            {statusMessage}
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default PaymentsSupplierInfo;
