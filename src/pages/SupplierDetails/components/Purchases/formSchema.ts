import * as yup from "yup";
import { PurchasesPayload } from "../../types";

export const validationSchema: yup.ObjectSchema<PurchasesPayload> =
  yup.object({
    goodsDeliverer: yup.string().required("Please enter the goodsDeliverer name")
    .min(2, "Name must be at least 2 characters")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "Name must contain letters only (Arabic or English)"
    ),

    goodsDelivererPhoneNumber: yup
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
      .integer("Quantity must be an integer")
      .test("no-spaces", "Quantity must not contain spaces", function (_, ctx) {
        const original = ctx.originalValue;
        return typeof original === "string" ? /^\d+$/.test(original) : true;
      }),

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
    purchasesDate: yup
      .string()
      .typeError("Please enter a valid date")
      .required("Please select an purchase date")
      .test("is-valid-date", "Please enter a valid date", (value) => {
        return value ? !isNaN(Date.parse(value)) : false;
      }),

    notes: yup
      .string()
      .trim()
      .min(1, "Please enter the notes")
      .required("Please enter the notes"),

    supplierId: yup.number().required("Supplier is required"),

    createdByUserId: yup.number().required("CreatedByUser is required"),
  });
