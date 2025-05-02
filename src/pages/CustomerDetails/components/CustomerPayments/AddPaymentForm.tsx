import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Box,
} from "@mui/material";
import { FormikHelpers, FormikProvider, useFormik, Form } from "formik";

import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import { CustomerPaymentPayload } from "../../types";
import { paymentValidationSchema } from "./formSchema";
import { initialValues } from "./constants";
import useAddPaymentAPI from "../../hooks/useAddPaymentAPI";

interface Props {
  customerId: number;
}

function AddPaymentForm({ customerId }: Props) {
  const [open, setOpen] = useState(false);
  const { addPayment, isPending } = useAddPaymentAPI();
  
  const handleClose = () => setOpen(false);

  const onSubmit = async (
    values: CustomerPaymentPayload,
    { resetForm }: FormikHelpers<CustomerPaymentPayload>
  ) => {
    values = { ...values, customerId, paymentDate: new Date() };
    console.log(values);
    addPayment(values, {
      onSuccess: () => {
        resetForm();
        handleClose();
      },
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema: paymentValidationSchema,
  });

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        <Trans i18nKey="Buttons.addPayment">Add Payment</Trans>
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          <Trans i18nKey="PrivatePages.Customers.addPayment">Add Payment</Trans>
        </DialogTitle>

        <FormikProvider value={formikProps}>
          <Form>
            <DialogContent>
              <Stack gap={2}>
                <TextField name="amount" aria-label="enter a valid amount" />
                <TextField
                  name="notes"
                  aria-label="enter a valid payment date"
                />
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isPending}
              >
                <Trans i18nKey="Buttons.add">Add</Trans>
              </LoadingButton>
              <Button variant="contained" color="error" onClick={handleClose}>
                <Trans i18nKey="Buttons.cancel">Cancel</Trans>
              </Button>
            </DialogActions>
          </Form>
        </FormikProvider>
      </Dialog>
    </Box>
  );
}

export default AddPaymentForm;
