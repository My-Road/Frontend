import { FormikHelpers, FormikValues } from "formik";
import { ReactNode } from "react";
import * as yup from "yup";

export type CollapsibleFormProps<T extends FormikValues> = {
  title: string;
  initialValues: T;
  validationSchema: yup.ObjectSchema<T>;
  onSubmit: (values: T, helpers: FormikHelpers<T>) => void;
  isPending?: boolean;
  children: ReactNode;
};
