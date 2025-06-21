import { AddCustomerPayLoad, SearchFormValues } from "./types";

export const initialValues: AddCustomerPayLoad = {
  customerName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

export const initialSearchValues: SearchFormValues = {
  customerName: "",
  status: "",
};

export const options = [
  { value: "all", label: "all" },
  { value: "hasDue", label: "hasDue" },
  { value: "paid", label: "paid" },
  { value: "isDeleted", label: "isDeleted" },
  { value: "noAction", label: "noAction" },
];
