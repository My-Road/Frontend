import PasswordField from "@/components/Fields/PasswordField";
import TextField from "@/components/Fields/TextField";
import LoginIcon from "@mui/icons-material/Login";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { LoginPayload } from "../../API/types";
import { initialValues } from "../../constants";
import { validationSchema } from "../../formSchema";
import useLoginAPI from "../../hooks/useLoginAPI";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { loginUser, isPending } = useLoginAPI();

  const onSubmit = (values: LoginPayload) => {
    loginUser({ ...values });
  };

  const formikProps = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <FormikProvider value={formikProps}>
      <Form>
        <Stack gap={2}>
          <TextField name="email" aria-label="Enter your email" />
          <PasswordField name="password" aria-label="Enter your password" />
          <Link to="/forgot-password" style={{ textDecoration: "none", color: "#1976d2" }}>
              <Trans i18nKey="Buttons.forgetPassword">Forget your password?</Trans>
          </Link>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            loadingIndicator={<CircularProgress color="inherit" size={20} />}
            endIcon={<LoginIcon />}
            loading={isPending}
            disabled={!formikProps.isValid || !formikProps.dirty}
          >
            <Trans i18nKey="Buttons.login">Login</Trans>
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
