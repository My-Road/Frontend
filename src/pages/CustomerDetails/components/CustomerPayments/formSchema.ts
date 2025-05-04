import * as yup from "yup";
import { CustomerPaymentPayload } from "../../types";

export const paymentValidationSchema: yup.ObjectSchema<CustomerPaymentPayload> =
  yup.object({
    amount: yup
      .number()
      .typeError("Amount must be a number")
      .required("Please enter the Amount")
      .positive("Amount must be at least 1"),
    notes: yup
      .string()
      .required("Please enter the notes"),
    paymentDate: yup
      .date()
      .required("Please select a payment date"),
    customerId: yup
      .number()
      .required("Please select a customer"),
  });
