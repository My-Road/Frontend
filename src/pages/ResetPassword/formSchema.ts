import * as yup from "yup";

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "please confirm your password")
    .required("Please enter your password"),
});
