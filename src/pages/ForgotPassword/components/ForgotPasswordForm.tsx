import { Form, FormikProvider, useFormik } from "formik";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextField from "@/components/Fields/TextField";
import { ResetPasswordPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import { initialValues } from "../constants";
import { Trans } from "react-i18next";

const ForgetPasswordForm: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = (values: ResetPasswordPayLoad) => {
    //for now
    console.log("Form Data:", values);
    navigate(`/reset-password`);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextField name="email" aria-label="enter a valid email" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          <Trans i18nKey="Buttons.reset">Reset</Trans>
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default ForgetPasswordForm;