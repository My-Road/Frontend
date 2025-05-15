import * as yup from "yup";

export const validationSchema = yup.object().shape({
  startDate: yup
    .date()
    .required("Start date is required")
    .typeError("Invalid start date"),
  endDate: yup
    .date()
    .min(yup.ref('startDate'), 'End date cannot be before start date'),
});
