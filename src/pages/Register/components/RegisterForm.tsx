import TextField from "@/components/Fields/TextField";
import { Button, Stack } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { initialValues } from "../constants";
import { validationSchema } from "../formSchema";
import { Trans } from "react-i18next";
import { RegisterPayLoad } from "../types";
import RoleSelect from "./RoleSelect";

const RegisterForm = () => {
  const onSubmit = (values: RegisterPayLoad) => {
    console.log(values);
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

          {/* Use RoleSelect with name */}
          <RoleSelect name="role" />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            <Trans i18nKey="Textfields.register">Register</Trans>
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default RegisterForm;
