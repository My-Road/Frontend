import { useState } from "react";
import { Button, Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { Trans, useTranslation } from "react-i18next";
import { SupplierPaymentPayload, PaymentState } from "../../types";
import { initialValues } from "./constants";
import useAddPaymentAPI from "../../hooks/useAddPaymentAPI";
import PaymentFormDialog from "./PaymentFormDialog";
import AddIcon from "@mui/icons-material/Add";
import { useSnackBar } from "@/hooks/useSnackbar";

interface Props {
  supplierId: number;
  paymentState: PaymentState;
}

function AddPaymentForm({ supplierId, paymentState }: Props) {
  const [open, setOpen] = useState(false);
  const { addPayment, isPending } = useAddPaymentAPI();
  const { showWarningSnackbar } = useSnackBar();

  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const handleAddPayment = async (
    values: SupplierPaymentPayload,
    { resetForm }: FormikHelpers<SupplierPaymentPayload>
  ) => {
    values = { ...values, notes: values.notes.trim(), supplierId };
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
        title={t("PrivatePages.Suppliers.addPayment")}
      />
    </Box>
  );
}

export default AddPaymentForm;
