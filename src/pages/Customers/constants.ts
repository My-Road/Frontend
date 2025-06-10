import { AddCustomerPayLoad, SearchFormValues } from "./types";

export const initialValues: AddCustomerPayLoad = {
  customerName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

export const initialSearchValues: SearchFormValues = {
  customerName: "",
  status: ""
}