import { Form, FormikProvider, useFormik } from "formik";
import { Button, Typography, Stack } from "@mui/material";
import PasswordField from "@/components/Fields/PasswordField/PasswordField.tsx";
import { validationSchema } from "../formSchema.ts";
import { ConfirmPasswordPayLoad } from "../types.ts";
import { initialValues } from "../constants.ts";
import { Trans } from "react-i18next";

const ResetPasswordForm: React.FC = () => {
  const onSubmit = (values: ConfirmPasswordPayLoad) => {
    //for now
    console.log("Form Data:", values);
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
          <PasswordField name="password" aria-label="Enter your password" />
          <PasswordField
            name="confirmPassword"
            aria-label="Confirm your password"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            <Trans i18nKey="Buttons.changePassword">Change Password</Trans>
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default ResetPasswordForm;
