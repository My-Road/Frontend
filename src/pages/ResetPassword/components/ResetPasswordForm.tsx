import { Form, FormikProvider, useFormik } from "formik";
import { Button, Paper, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PasswordField from "@/components/Fields/PasswordField/PasswordField.tsx";
import { validationSchema } from "../formSchema.ts";
import Logo from "@/assets/images/logo.png";
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
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Grid size={{ xs: 10, sm: 8, md: 4 }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box
            sx={{
              clipPath: "inset(10px 10px 10px 10px)",
              textAlign: "center",
            }}
          >
            <img src={Logo} alt="Logo" width="150px" height="150px" />
          </Box>
          <Typography variant="h5" gutterBottom align="center">
            <Trans i18nKey="Buttons.login">Login</Trans>
          </Typography>
          <Form>
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
          </Form>
        </Paper>
      </Grid>
    </FormikProvider>
  );
};

export default ResetPasswordForm;
