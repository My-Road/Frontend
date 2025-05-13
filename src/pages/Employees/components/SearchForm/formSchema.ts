import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fullName : yup.string().required("Employee name is required"),
});