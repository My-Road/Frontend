import { ReactNode } from "react";
import { AnySchema } from "yup";
import { SearchParams } from "@/types";

export interface GenericSearchFormProps<T> {
  initialValues: T;
  validationSchema: AnySchema;
  onSubmit: (values: T) => Promise<void> | void;
  renderFields: () => ReactNode;
  setSearchParams?: (params: SearchParams) => void;
  sortsBy?: string;
}
