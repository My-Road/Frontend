import { Divider, Stack, Typography, TextField } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
{/*import { getSalaryStatusMessageAndColor } from "./utils/getPaymentStatusMessageAndColor";*/}
import { EmployeePayments } from "../../types";

interface Props {
 employeePayment : EmployeePayments
}

function PaymentsEmployeeInfo({
    employeePayment
}: Props) {
  const { t } = useTranslation();

 {/*} const { message: statusMessage, color: statusColor } =
  getSalaryStatusMessageAndColor(totalDueAmount, remainingAmount, t);*/}
 console.log (employeePayment.totalPaidAmount)
  return (
    <>
      <Typography variant="h5" gutterBottom>
        <Trans i18nKey="PrivatePages.Customers.financialInformation">
          Financial Information
        </Trans>
        <Divider />
      </Typography>

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
      {/*  <Box alignItems="center" display="flex">
          <Typography color={statusColor} variant="h6">
            {statusMessage}
          </Typography>
        </Box>*/}
      </Stack>
    </>
  );
}

export default PaymentsEmployeeInfo;

