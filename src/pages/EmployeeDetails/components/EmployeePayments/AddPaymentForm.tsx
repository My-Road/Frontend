import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { Trans, useTranslation } from "react-i18next";
import { EmployeePaymentPayload, PaymentState } from "../../types";
import { initialValues } from "./constants";
import useAddPaymentAPI from "../../hooks/useAddPaymentAPI";
import PaymentFormDialog from "./PaymentFormDialog";
import AddIcon from "@mui/icons-material/Add";
import { useSnackBar } from "@/hooks/useSnackbar";

interface Props {
  employeeId: number;
  paymentState: PaymentState;
}

function AddPaymentForm({ employeeId, paymentState }: Props) {
  const [open, setOpen] = useState(false);
  const { addPayment, isPending } = useAddPaymentAPI();

  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const { showWarningSnackbar } = useSnackBar();

  const handleAddPayment = async (
    values: EmployeePaymentPayload,
    { resetForm }: FormikHelpers<EmployeePaymentPayload>
  ) => {
    values = { ...values, notes: values.notes.trim(), employeeId };
    console.log(values);
    addPayment(values, {
      onSuccess: () => {
        resetForm();
        handleClose();
      },
    });
  };
  const hasToPaid = paymentState.status;
  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() =>
          hasToPaid
            ? setOpen(true)
            : showWarningSnackbar({ message: paymentState.msg })
        }
      >
        <Trans i18nKey="Buttons.addPayment">Add Payment</Trans>
      </Button>

      <PaymentFormDialog
        open={open}
        handleClose={handleClose}
        initialValues={initialValues}
        onSubmit={handleAddPayment}
        isPending={isPending}
        title={t("PrivatePages.Employees.addPayment")}
      />
    </Box>
  );
}

export default AddPaymentForm;
