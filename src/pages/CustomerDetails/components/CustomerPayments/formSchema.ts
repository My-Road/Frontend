import * as yup from "yup";

export const paymentValidationSchema = yup.object({
  amount: yup
    .number()
    .required("Please enter the Amount")
    .positive("Amount must be at least 1"),
  notes: yup.string().required("Please enter the notes"),
});