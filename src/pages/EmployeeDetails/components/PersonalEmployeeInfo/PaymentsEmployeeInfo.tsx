import { Divider, Stack, Typography, TextField, Box } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { EmployeePayments } from "../../types";
import { getPaymentStatusMessageAndColor } from "./utils/getPaymentStatusMessageAndColor";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import { StatusChip } from "@/components/StatusChip/StatusChip";

interface Props {
  employeePayment: EmployeePayments;
}

function PaymentsEmployeeInfo({ employeePayment }: Props) {
  const { t } = useTranslation();
  const totalDue = employeePayment.totalDueAmount;
  const remaining = employeePayment.remainingAmount;

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
      <Box display="flex" justifyContent="space-between">
        <Stack gap={2} flexDirection={{ sm: "column", md: "row" }}>
          <TextField
            disabled
            label={t("Textfields.totalDueAmount")}
            value={employeePayment.totalDueAmount}
          />
          <TextField
            disabled
            label={t("Textfields.totalPaidAmount")}
            value={employeePayment.totalPaidAmount}
          />
          <TextField
            disabled
            label={t("Textfields.remainingAmount")}
            value={employeePayment.remainingAmount}
          />
        </Stack>
        <Box alignItems="center" display="flex">
          <StatusChip
            label={statusMessage}
            textColor={textColor}
            bgColor={bgColor}
            fontSize="1rem"
          />
        </Box>
      </Box>
    </>
  );
}
export default PaymentsEmployeeInfo;
