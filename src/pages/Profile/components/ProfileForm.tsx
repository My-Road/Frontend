import { FC } from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values) => {
        const hasChanged =
          JSON.stringify(values) !== JSON.stringify(initialValues);

        if (!hasChanged) {
          showWarningSnackbar({
            message: t("No changes made"),
          });
          onCancel();
          return;
        }

        // إزالة القيم غير المطلوبة من القيم المُرسلة
        const {...payload } = values;

        showConfirmationDialog({
          title: t("Dialogs.Title.editUser"),
          message: t("Dialogs.confirmUserEdit"),
          onConfirm: () => onSubmit(payload),
          isPending: isSubmitting,
        });
      }}
    >
      <Form>
        <Box mb={2}>
          <TextField
            fullWidth
            name="id"
            disabled
            label={t("Tables.Headers.userId")}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            name="role"
            disabled
            label={t("Tables.Headers.Role")}
            value={Roles[initialValues.role]}
          />
        </Box>

        <Box mb={2}>
          <TextField fullWidth name="firstName" />
        </Box>

        <Box mb={2}>
          <TextField fullWidth name="lastName" />
        </Box>

        <Box mb={2}>
          <TextField fullWidth name="email" />
        </Box>

        <Box mb={2}>
          <TextField fullWidth name="phoneNumber" />
        </Box>

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
    </Formik>
  );
};

export default ProfileForm;

