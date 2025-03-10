import * as yup from "yup";

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Both passwords must be identical")
    .required("Please enter your password"),
});
