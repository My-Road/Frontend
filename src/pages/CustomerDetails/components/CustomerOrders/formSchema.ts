import * as yup from "yup";
import { CustomerOrderPayload } from "../../types";

export const validationSchema: yup.ObjectSchema<CustomerOrderPayload> =
  yup.object({
    recipientName: yup.string().required("Please enter the recipient name"),

    recipientPhoneNumber: yup
      .string()
      .matches(/^\+?\d{10,15}$/, "Phone number must contain numbers only")
      .required("Please enter a valid phone number"),

    quantity: yup
      .number()
      .typeError("Quantity must be an integer")
      .required("Please enter the Quantity")
      .positive("Quantity must more than 0")
      .integer("Quantity must be an integer"),

    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Please enter the Price")
      .positive("Price must more than 0"),

    orderDate: yup.date().required("Please select an order date"),

    notes: yup.string().required("Please enter the notes"),

    customerId: yup.number().required("Customer is required"),

    createdByUserId: yup.number().required("CreatedByUser is required"),
  });
