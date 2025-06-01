import { EmployeeLog, SearchParams } from "@/types";

export interface SearchFormValues {
  employeeName: string;
  startDate: string;
  endDate: string;
  address: string;
}

export interface SearchResponseForLogs extends SearchParams{
  items: EmployeeLog[];
  totalCount: number;
}