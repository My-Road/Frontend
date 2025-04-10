import * as yup from "yup";

export const validationSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Please enter your current password"),

  newPassword: yup
    .string()
    .required("Please enter your new password")
    .min(8, "New password must be at least 8 characters")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[0-9]/, "New password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>_\-\\[\];'`~+=/]/,
      "New password must contain at least one special character"
    ),
});
