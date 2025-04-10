import { Form, FormikProvider, useFormik } from "formik";
import { Typography, Stack } from "@mui/material";
import PasswordField from "@/components/Fields/PasswordField/PasswordField.tsx";
import { validationSchema } from "../formSchema.ts";
import { ChangePasswordPayload } from "../types.ts";
import { initialValues } from "../constants.ts";
import { Trans } from "react-i18next";
import useChangePasswordAPI from "../hooks/useChangePasswordAPI.ts";
import { LoadingButton } from "@mui/lab";

const ChangePasswordForm: React.FC = () => {
  const { changePassword, isPending } = useChangePasswordAPI();
  const onSubmit = (values: ChangePasswordPayload) => {
    //for now
    console.log("Form Data:", values);
    changePassword(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Stack gap={2}>
          <Typography variant="h5" gutterBottom align="center">
            <Trans i18nKey="Buttons.changePassword">Change Password</Trans>
          </Typography>
          <PasswordField
            name="currentPassword"
            aria-label="Enter your current password"
          />
          <PasswordField
            name="newPassword"
            aria-label="Enter your new password"
          />
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            loading={isPending}
          >
            <Trans i18nKey="Buttons.changePassword">Change Password</Trans>
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default ChangePasswordForm;
