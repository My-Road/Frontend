import * as yup from "yup";
import { CustomerPaymentPayload } from "../../types";

export const paymentValidationSchema: yup.ObjectSchema<CustomerPaymentPayload> =
  yup.object({
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .required("Please enter the Amount")
      .test("no-spaces", "Amount must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string" ? /^\d+$/.test(original) : true;
      })
      .positive("Amount must be at least 1")
      .integer("Amount must be an integer"),
    notes: yup
      .string()
      .trim()
      .min(1, "Please enter the notes")
      .required("Please enter the notes"),
    paymentDate: yup
      .date()
      .typeError("Please enter a valid date")
      .required("Please select an payment date")
      .test(
        "is-valid-date",
        "Please enter a complete and valid date",
        (value) => {
          return value instanceof Date && !isNaN(value.getTime());
        }
      ),
    customerId: yup.number().required("Please select a customer"),
  });
