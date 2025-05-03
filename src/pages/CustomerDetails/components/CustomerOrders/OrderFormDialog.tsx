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
import { Trans, useTranslation } from "react-i18next";
import { CustomerOrderPayload } from "../../types";
import { validationSchema } from "./formSchema";

interface Props {
  open: boolean;
  handleClose: () => void;
  initialValues: CustomerOrderPayload;
  onSubmit: (
    values: CustomerOrderPayload,
    helpers: FormikHelpers<CustomerOrderPayload>
  ) => void;
  isPending: boolean;
  title: string;
}

const OrderFormDialog = ({
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
    validationSchema,
    enableReinitialize: true,
  });
  const { t } = useTranslation();

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
        {t(title)}
      </DialogTitle>
      <FormikProvider value={formik}>
        <Form>
          <DialogContent>
            <Stack gap={2}>
              <TextField
                name="recipientName"
                aria-label="enter a vaild recipient name"
              />
              <TextField
                name="recipientPhoneNumber"
                aria-label="enter a valid phone number"
              />
              <TextField name="quantity" aria-label="enter a valid quantity" />
              <TextField name="price" aria-label="enter a valid price" />
              <TextField
                name="notes"
                multiline
                rows={4}
                aria-label="enter a valid notes"
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isPending}
            >
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

export default OrderFormDialog;
