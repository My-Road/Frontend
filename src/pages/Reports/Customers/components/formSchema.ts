import * as yup from "yup";

export const validationSchema = yup.object().shape({
  startDate: yup.date().typeError("Invalid start date"),
  endDate: yup
    .date()
    .min(yup.ref("startDate"), "End date cannot be before start date"),
  customerName: yup.string(),
  address: yup.string(),
});
