import * as yup from "yup";

export const validationSchema = yup.object().shape({
    employeeName : yup.string().required("Employee name is required"),
});