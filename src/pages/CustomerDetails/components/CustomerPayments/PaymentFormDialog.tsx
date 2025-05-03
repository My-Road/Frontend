import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Stack,
    Button,
  } from "@mui/material";
  import { FormikProvider, useFormik, Form, FormikHelpers } from "formik";
  import TextField from "@/components/Fields/TextField";
  import { LoadingButton } from "@mui/lab";
  import { Trans } from "react-i18next";
  import { CustomerPaymentPayload } from "../../types";
  import { paymentValidationSchema } from "./formSchema";
  
  interface Props {
    open: boolean;
    handleClose: () => void;
    initialValues: CustomerPaymentPayload;
    onSubmit: (
      values: CustomerPaymentPayload,
      helpers: FormikHelpers<CustomerPaymentPayload>
    ) => void;
    isPending: boolean;
    title: string;
  }
  
  const PaymentFormDialog = ({
    open,
    handleClose,
    initialValues,
    onSubmit,
    isPending,
    title,
  }: Props) => {
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema: paymentValidationSchema,
      enableReinitialize: true,
    });
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
          {title}
        </DialogTitle>
        <FormikProvider value={formik}>
          <Form>
            <DialogContent>
              <Stack gap={2}>
                <TextField name="amount" aria-label="Enter a valid amount" /> 
                <TextField name="notes" aria-label="Enter a valid notes" />
              </Stack>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <LoadingButton type="submit" variant="contained" loading={isPending}>
                <Trans i18nKey="Buttons.save">Save</Trans>
              </LoadingButton>
              <Button variant="contained" color="error" onClick={handleClose}>
                <Trans i18nKey="Buttons.cancel">Cancel</Trans>
              </Button>
            </DialogActions>
          </Form>
        </FormikProvider>
      </Dialog>
    );
  };
  
  export default PaymentFormDialog;
  