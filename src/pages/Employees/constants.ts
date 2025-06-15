import { AddEmployeePayload, SearchFormValues } from "./types";

export const initialValues: AddEmployeePayload = {
  employeeName: "",
  phoneNumber: "",
  address: "",
  jobTitle: "",
  startDate: "",
};

export const initialSearchValues: SearchFormValues = {
  employeeName: "",
  status: "",
};