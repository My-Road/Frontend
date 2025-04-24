import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { Typography, Stack } from "@mui/material";
import PasswordField from "@/components/Fields/PasswordField/PasswordField.tsx";
import { validationSchema } from "../formSchema.ts";
import { resetForgetPasswordPayload } from "../types.ts";
import { initialValues } from "../constants.ts";
import { Trans } from "react-i18next";
import useResetForgetPasswordAPI from "../hooks/useResetForgetPasswordAPI.ts";
import { LoadingButton } from "@mui/lab";

const ResetPasswordForm: React.FC = () => {
  const { resetPassword, isPending } = useResetForgetPasswordAPI();

  const url = new URL(location.href);
  const rawToken = url.search.split("token=")[1]?.split("&")[0] ?? "";
  const token = decodeURIComponent(rawToken);
  const userIdParam = url.searchParams.get("userId");
  const userId = userIdParam ? Number(userIdParam) : 0;

  const onSubmit = (
    values: resetForgetPasswordPayload,
    { resetForm }: FormikHelpers<resetForgetPasswordPayload>
  ) => {
    const payload = { ...values, token, userId };
    resetPassword(payload, {
      onSuccess: () => {
        resetForm();
      },
    });
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
          <PasswordField name="newPassword" aria-label="Enter your password" />
          <PasswordField
            name="confirmNewPassword"
            aria-label="Confirm your password"
          />
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            loading={isPending}
          >
            <Trans i18nKey="Buttons.changePassword">Change Password</Trans>
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default ResetPasswordForm;
