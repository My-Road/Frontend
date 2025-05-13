import { Employee, SearchParams } from "@/types";

export interface AddEmployeePayload {
  employeeName: string;
  phoneNumber: string;
  address: string;
  jobTitle: string;
  startDate: string;
}

export interface SearchResponseForEmployees extends SearchParams {
  items: Employee[];
  totalCount: number;
}
