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

export const options = [
  { value: "all", label: "all" },
  { value: "youHaveDues", label: "youHaveDues" },
  { value: "paid", label: "paid" },
  { value: "isDeleted", label: "isDeleted" },
  { value: "noAction", label: "noAction" },
];
