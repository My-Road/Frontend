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
import { useSelector } from "react-redux";
import {
  selectUser
} from "@/features/User";

import TextField from "@/components/Fields/TextField";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import { CustomerOrderPayload } from "../../types";
import { validationSchema } from "./formSchema";
import { initialValues } from "./constants";
import useAddOrderAPI from "../../hooks/useAddOrderAPI";

interface Props {
  customerId: number;
}

function AddOrderForm({ customerId }: Props) {
  const [open, setOpen] = useState(false);
  const { addOrder, isPending } = useAddOrderAPI();
  const user = useSelector(selectUser);
  const handleClose = () => setOpen(false);
  console.log(user.uid);
    
  const onSubmit = async (
    values: CustomerOrderPayload,
    { resetForm }: FormikHelpers<CustomerOrderPayload>
  ) => {
    values = { ...values, customerId, createdByUserId: Number(user.uid) };
   
    addOrder(values, {
      onSuccess: () => {
        resetForm();
        handleClose();
      },
    });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        <Trans i18nKey="Buttons.addOrder">Add Order</Trans>
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          <Trans i18nKey="PrivatePages.Customers.addOrder">Add Order</Trans>
        </DialogTitle>

        <FormikProvider value={formikProps}>
          <Form>
            <DialogContent>
              <Stack gap={2}>
                <TextField
                  name="recipientName"
                  aria-label="enter a valid recipientName"
                />
                <TextField
                  name="recipientPhoneNumber"
                  aria-label="enter a valid recipientPhoneNumber"
                />
                <TextField
                  name="quantity"
                  aria-label="enter a valid quantity"
                />
                <TextField name="price" aria-label="enter a valid price" />
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

export default AddOrderForm;
