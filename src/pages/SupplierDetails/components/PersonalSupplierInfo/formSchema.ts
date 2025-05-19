import * as yup from "yup";

export const validationSchema = yup.object({
  supplierName: yup
    .string()
    .required("Please enter your full name")
    .min(2, "Full name must be at least 2 characters").min(2, "Name must be at least 2 characters")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "Name must contain letters only (Arabic or English)"),

    email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email")
    .nullable()
    .notRequired(),

  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Phone number must contain numbers only")
    .required("Please enter a valid phone number"),

  address: yup
    .string()
    .required("Please enter your address")
    .min(3, "Address must be at least 3 characters"),
});

