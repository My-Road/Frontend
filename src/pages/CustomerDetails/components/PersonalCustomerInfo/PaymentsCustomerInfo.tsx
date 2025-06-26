import { Divider, Stack, Typography, TextField, Box } from "@mui/material";
import { CustomerPayments } from "../../types";
import { Trans, useTranslation } from "react-i18next";
import { getPaymentStatusMessageAndColor } from "./utils/getPaymentStatusMessageAndColor";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { StatusChip } from "@/components/StatusChip/StatusChip";

interface Props {
  customerPayments: CustomerPayments;
}

function PaymentsCustomerInfo({ customerPayments }: Props) {
  const { t } = useTranslation();

  const totalDue = customerPayments.totalDueAmount;
  const remaining = customerPayments.remainingAmount;

  const {
    message: statusMessage,
    bgColor,
    textColor,
  } = getPaymentStatusMessageAndColor(totalDue, remaining, t);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        <Box display="flex" alignContent="center">
          <SellOutlinedIcon />
          <Trans i18nKey="PrivatePages.Suppliers.financialInformation">
            Financial Information
          </Trans>
        </Box>
        <Divider />
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={3}
      >
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
        </Stack>
        <Box alignItems="center" display="flex">
          <StatusChip
            label={statusMessage}
            bgColor={bgColor}
            textColor={textColor}
            fontSize="1rem"
          />
        </Box>
      </Box>
    </>
  );
}

export default PaymentsCustomerInfo;
