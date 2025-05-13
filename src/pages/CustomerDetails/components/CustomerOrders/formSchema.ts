import * as yup from "yup";
import { CustomerOrderPayload } from "../../types";

export const validationSchema: yup.ObjectSchema<CustomerOrderPayload> =
  yup.object({
    recipientName: yup.string().required("Please enter the recipient name"),

    recipientPhoneNumber: yup
      .string()
      .min(10, "Phone number must be at least 10 characters")
      .max(14, "Phone number must be at most 14 characters")
      .matches(/^\+?\d{9,15}$/, "Phone number must contain numbers only")
      .required("Please enter a valid phone number"),

    quantity: yup
      .number()
      .typeError("Quantity must be an integer")
      .required("Please enter the Quantity")
      .positive("Quantity must be more than 0")
      .test("no-spaces", "Quantity must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string" ? /^\d+$/.test(original) : true;
      })
      .integer("Quantity must be an integer"),

    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Please enter the Price")
      .positive("Price must be more than 0")
      .test("no-spaces", "Price must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string"
          ? /^\d+(\.\d{1,2})?$/.test(original)
          : true;
      }),
    orderDate: yup
      .string()
      .typeError("Please enter a valid date")
      .required("Please select an order date")
      .test("is-valid-date", "Please enter a valid date", (value) => {
        return value ? !isNaN(Date.parse(value)) : false;
      }),

    notes: yup
      .string()
      .trim()
      .min(1, "Please enter the notes")
      .required("Please enter the notes"),

    customerId: yup.number().required("Customer is required"),

    createdByUserId: yup.number().required("CreatedByUser is required"),
  });
