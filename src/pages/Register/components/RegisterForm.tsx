import TextField from "@/components/Fields/TextField";
import { Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import { Trans } from "react-i18next";
import { RegisterPayLoad } from "../types";
import RoleSelect from "./RoleSelect";
import useRegisterAPI from "../hooks/useRegisterAPI";
import { LoadingButton } from "@mui/lab";

const RegisterForm = () => {
  const { registerUser, isPending, isSuccess } = useRegisterAPI();

  const onSubmit = async (values: RegisterPayLoad, { resetForm }: any) => {
    try {
      await registerUser(values);

      if (isSuccess) {
        resetForm();
      }
      
    } catch (error) {
      console.error("Registration error:", error);
    }
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
          <TextField name="firstName" aria-label="Enter your first name" />
          <TextField name="lastName" aria-label="Enter your last name" />
          <TextField name="phoneNumber" aria-label="Enter your phone number" />
          <RoleSelect name="role" />
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            loading={isPending}
          >
            <Trans i18nKey="Textfields.register">Register</Trans>
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
