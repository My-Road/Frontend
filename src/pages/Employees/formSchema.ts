import * as yup from "yup";
import { AddEmployeePayload } from "./types";

export const employeeValidationSchema: yup.ObjectSchema<AddEmployeePayload> = yup.object({
   employeeName: yup
    .string()
    .required("Please enter your full name")
    .min(2, "Full name must be at least 2 characters")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "Name must contain letters only (Arabic or English)"
    ),

  phoneNumber: yup
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(14, "Phone number must be at most 14 characters")
    .matches(/^\+?\d{9,15}$/, "Phone number must contain numbers only")
    .required("Please enter a valid phone number"),

  address: yup
    .string()
    .required("Please enter your address")
    .min(3, "Address must be at least 3 characters"),

  jobTitle: yup
    .string()
    .required("Please enter the job title")
    .min(2, "Job title must be at least 2 characters"),

  startDate: yup
    .string()
    .transform((value, originalValue) =>
      originalValue === "" || originalValue === null ? null : value
    )
    .typeError("Please enter a valid start date")
    .required("Please enter the start date"),
});

export const SearchFormSchema = yup.object().shape({
  employeeName: yup.string(),
  status: yup.string(),
});