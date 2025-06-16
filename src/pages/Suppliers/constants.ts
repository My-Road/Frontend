import { AddSupplierPayLoad , SearchFormValues } from "./types";

export const initialValues: AddSupplierPayLoad = {
  supplierName: "",
  email: "",
  phoneNumber: "",
  address: "",
};
export const initialSearchValues: SearchFormValues = {
  supplierName: "",
  status: "",
};