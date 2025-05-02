import * as yup from "yup";

export const validationSchema = yup.object().shape({
  startDate: yup.date()
    .required("Start payment date is required")
    .typeError("Invalid start date"),
});
