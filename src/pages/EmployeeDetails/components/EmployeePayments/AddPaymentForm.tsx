import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";

import { Trans, useTranslation } from "react-i18next";
import { EmployeePaymentPayload } from "../../types";
import { initialValues } from "./constants";
import useAddPaymentAPI from "../../hooks/useAddPaymentAPI";
import PaymentFormDialog from "./PaymentFormDialog";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  employeeId: number;
}

function AddPaymentForm({ employeeId }: Props) {
  const [open, setOpen] = useState(false);
  const { addPayment, isPending } = useAddPaymentAPI();

  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

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

  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={() => setOpen(true)}
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
