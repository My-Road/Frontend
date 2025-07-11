import * as yup from "yup";
import { EmployeePaymentPayload } from "../../types";

export const paymentValidationSchema: yup.ObjectSchema<EmployeePaymentPayload> =
  yup.object({
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .required("Please enter the Amount")
      .positive("Amount must be at least 1")
      .test("no-spaces", "Amount must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string"
          ? /^\d+(\.\d{1,2})?$/.test(original)
          : true;
      }),
    notes: yup
      .string()
      .trim()
      .min(1, "Please enter the notes")
      .required("Please enter the notes"),
    paymentDate: yup
      .string()
      .typeError("Please enter a valid date")
      .required("Please select an payment date")
      .test("is-valid-date", "Please enter a valid date", (value) => {
        return value ? !isNaN(Date.parse(value)) : false;
      }),
    employeeId: yup.number().required("Please select a employee"),
  });
