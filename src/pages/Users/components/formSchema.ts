import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string(),
  LastName: yup.string(),
  email: yup.string().email(),
});
