import { Divider, Stack, Typography, TextField, Box } from "@mui/material";
import { SupplierPayments } from "../../types";
import { Trans, useTranslation } from "react-i18next";
import { getPaymentStatusMessageAndColor } from "./utils/getPaymentStatusMessageAndColor";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { StatusChip } from "@/components/StatusChip/StatusChip";

interface Props {
  supplierPayments: SupplierPayments;
}

function PaymentsSupplierInfo({ supplierPayments }: Props) {
  const { t } = useTranslation();

  const totalDue = supplierPayments.totalDueAmount;
  const remaining = supplierPayments.remainingAmount;

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
      <Box display="flex" justifyContent="space-between" flexDirection={{xs: "column", sm: "row"}} gap={3}>
        <Stack
          gap={2}
          flexDirection={{ sm: "column", md: "row" }}
          alignItems=""
        >
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

export default PaymentsSupplierInfo;
