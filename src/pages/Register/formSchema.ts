import * as yup from "yup";
import { Roles } from "@/enums/Roles";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must be at most 20 characters")
    .required("Please enter your first name"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must be at most 20 characters")
    .required("Please enter your last name"),
  phoneNumber: yup
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(14, "Phone number must be at most 14 characters")
    .matches(/^\+?\d{9,15}$/, "Phone number must contain numbers only")
    .required("Please enter a valid phone number"),
  role: yup
    .number()
    .oneOf(
      Object.values(Roles).filter((v) => typeof v === "number") as number[],
      "Invalid role"
    )
    .required("Role is required"),
});
