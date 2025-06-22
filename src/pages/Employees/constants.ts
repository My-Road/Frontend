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

export const options = [
  { value: "all", label: "all" },
  { value: "youHaveDues", label: "youHaveDues" },
  { value: "paid", label: "paid" },
  { value: "isDeleted", label: "isDeleted" },
  { value: "noRecords", label: "noRecords" },
];