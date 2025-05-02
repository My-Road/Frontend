import * as yup from "yup";

export const validationSchema = yup.object({
  recipientName: yup
    .string()
    .required("Please enter the recipient name"),

  recipientPhoneNumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Phone number must contain numbers only")
    .required("Please enter a valid phone number"),

  quantity: yup
    .number()
    .required("Please enter the Quantity")
    .positive("Quantity must more than 0")
    .integer("Quantity must be an integer"),

  price: yup
    .number()
    .required("Please enter the Price")
    .positive("Price must more than 0"),

  notes: yup.string().required("Please enter the notes"),
});
