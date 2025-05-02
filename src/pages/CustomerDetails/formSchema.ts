import * as yup from "yup";

export const validationSchema = yup.object({
  customerName: yup
    .string()
    .required("Please enter your full name")
    .min(2, "Full name must be at least 2 characters"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),

  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Phone number must contain numbers only")
    .required("Please enter a valid phone number"),

  address: yup
    .string()
    .required("Please enter your address")
    .min(3, "Address must be at least 3 characters"),
});

export const paymentValidationSchema = yup.object({
  amount: yup
    .number()
    .required("Please enter the Amount")
    .positive("Amount must be at least 1"),
  notes: yup.string().required("Please enter the notes"),
});
