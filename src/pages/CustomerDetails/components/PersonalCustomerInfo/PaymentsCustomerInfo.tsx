import { Divider, Stack, Typography, TextField, Box } from "@mui/material";
import { CustomerPayments } from "../../types";
import { Trans, useTranslation } from "react-i18next";

interface Props {
  customerPayments: CustomerPayments;
}

function PaymentsCustomerInfo({ customerPayments }: Props) {
  const { t } = useTranslation();

  const totalDue = Number(customerPayments.totalDueAmount);
  const remaining = Number(customerPayments.remainingAmount);

  let statusMessage = "";
  let statusColor: "text.primary" | "error" | "success.main" = "text.primary";

  if (totalDue === 0) {
    statusMessage = t("Messages.noPurchases");
  } else if (remaining > 0) {
    statusMessage = t("Messages.heHasDues");
    statusColor = "error";
  } else {
    statusMessage = t("Messages.paid");
    statusColor = "success.main";
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        <Trans i18nKey="PrivatePages.Customers.financialInformation">
          Financial Information
        </Trans>
        <Divider />
      </Typography>

      <Stack
        gap={2}
        flexDirection={{ sm: "column", md: "row" }}
        alignItems=""
      >
        <TextField
          disabled
          label={t("Textfields.totalDueAmount")}
          value={customerPayments.totalDueAmount}
          aria-label="enter a valid customer label"
        />
        <TextField
          disabled
          label={t("Textfields.totalPaidAmount")}
          value={customerPayments.totalPaidAmount}
          aria-label="enter a valid customer label"
        />
        <TextField
          disabled
          label={t("Textfields.remainingAmount")}
          value={customerPayments.remainingAmount}
          aria-label="enter a valid customer label"
        />
        <Box alignItems="center" display="flex">
        <Typography color={statusColor} variant="h6">{statusMessage}</Typography>
        </Box>
      </Stack>
    </>
  );
}

export default PaymentsCustomerInfo;
