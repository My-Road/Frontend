import { FC } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { UpdateUserPayload } from "../types";
import { ObjectSchema } from "yup";
import { Roles } from "@/enums/Roles";
import TextField from "@/components/Fields/TextField";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";

type FormValues = UpdateUserPayload & {
  id: number;
  role: number;
};

interface ProfileFormProps {
  validationSchema: ObjectSchema<UpdateUserPayload>;
  initialValues: FormValues;
  onSubmit: (values: UpdateUserPayload) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}

const ProfileForm: FC<ProfileFormProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  isSubmitting,
  onCancel,
}) => {
  const { t } = useTranslation();
  const { showWarningSnackbar } = useSnackBar();
  const { showConfirmationDialog } = useConfirmationDialog();

  const formikProps = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const hasChanged =
        JSON.stringify(values) !== JSON.stringify(initialValues);

      if (!hasChanged) {
        showWarningSnackbar({
          message: t("No changes made"),
        });
        onCancel();
        return;
      }

      const { ...payload } = values;

      showConfirmationDialog({
        title: t("Dialogs.Title.editUser"),
        message: t("Dialogs.confirmUserEdit"),
        onConfirm: () => onSubmit(payload),
        isPending: isSubmitting,
      });
    },
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack gap={2}>
          <TextField
            fullWidth
            name="id"
            disabled
            label={t("Tables.Headers.userId")}
          />
          <TextField
            fullWidth
            name="role"
            disabled
            label={t("Tables.Headers.Role")}
            value={Roles[initialValues.role]}
          />
          <TextField fullWidth name="email" disabled />

          <TextField fullWidth name="firstName" />
          <TextField fullWidth name="lastName" />
          <TextField fullWidth name="phoneNumber" />
        </Stack>

        <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {t("Buttons.save")}
          </Button>
          <Button variant="outlined" color="inherit" onClick={onCancel}>
            {t("Buttons.cancel")}
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default ProfileForm;
