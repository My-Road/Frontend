import * as yup from "yup";

export const validationSchema = yup.object().shape({
  customerName: yup.string().required("Customer name is required"),
});