import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Please enter the first name")
    .min(2, "First name must be at least 2 characters")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "First name must contain letters only (Arabic or English)"
    ),

  lastName: yup
    .string()
    .required("Please enter the last name")
    .min(2, "Last name must be at least 2 characters")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "Last name must contain letters only (Arabic or English)"
    ),

  phoneNumber: yup
    .string()
    .required("Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 characters")
    .max(14, "Phone number must be at most 14 characters")
    .matches(/^\+?\d{9,15}$/, "Phone number must contain numbers only"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email")
    .nullable()
    .notRequired(),
});
