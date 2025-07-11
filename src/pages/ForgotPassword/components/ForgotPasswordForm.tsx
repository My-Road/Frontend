import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import TextField from "@/components/Fields/TextField";
import { ResetPasswordPayLoad } from "../types";
import { validationSchema } from "../formSchema";
import { initialValues } from "../constants";
import { Trans } from "react-i18next";
import  useForgetPasswordAPI  from "../hooks/useForgetPasswordAPI";

const ForgetPasswordForm: React.FC = () => {
  const { forgetPassword, isPending } = useForgetPasswordAPI();

  const onSubmit = (values: ResetPasswordPayLoad,  { resetForm }: FormikHelpers<ResetPasswordPayLoad>) => {
    forgetPassword(values, {
      onSuccess: () => {
        resetForm();
      }
    })
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
        <LoadingButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          loading = {isPending}
          disabled={!formik.isValid || !formik.dirty}
        >
          <Trans i18nKey="Buttons.reset">Reset</Trans>
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default ForgetPasswordForm;
