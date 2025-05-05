import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";

import { Trans, useTranslation } from "react-i18next";
import { CustomerPaymentPayload } from "../../types";
import { initialValues } from "./constants";
import useAddPaymentAPI from "../../hooks/useAddPaymentAPI";
import PaymentFormDialog from "./PaymentFormDialog";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  customerId: number;
}

function AddPaymentForm({ customerId }: Props) {
  const [open, setOpen] = useState(false);
  const { addPayment, isPending } = useAddPaymentAPI();

  const handleClose = () => setOpen(false);
  const {t} = useTranslation();

  const handleAddPayment = async (
    values: CustomerPaymentPayload,
    { resetForm }: FormikHelpers<CustomerPaymentPayload>
  ) => {
    values = { ...values, notes: values.notes.trim(),customerId, paymentDate: new Date() };
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
        title={t("PrivatePages.Customers.addPayment")}
      />
    </Box>
  );
}

export default AddPaymentForm;
