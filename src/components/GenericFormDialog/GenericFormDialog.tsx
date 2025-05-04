import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Button,
} from "@mui/material";
import {
  FormikProvider,
  useFormik,
  Form,
  FormikHelpers,
  FormikValues,
} from "formik";
import { LoadingButton } from "@mui/lab";
import { Trans } from "react-i18next";
import { ReactNode } from "react";
import * as yup from "yup";

interface GenericFormDialogProps<T extends FormikValues> {
  open: boolean;
  handleClose: () => void;
  initialValues: T;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void;
  isPending: boolean;
  title: string;
  validationSchema: yup.ObjectSchema<T>;
  children: ReactNode;
}

export default function GenericFormDialog<T extends FormikValues>({
  open,
  handleClose,
  initialValues,
  onSubmit,
  isPending,
  title,
  validationSchema,
  children,
}: GenericFormDialogProps<T>) {
  const formik = useFormik<T>({
    initialValues,
    onSubmit,
    validationSchema,
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
            <Stack gap={2}>{children}</Stack>
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
}
