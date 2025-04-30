import { Customer } from "@/types";

export interface AddCustomerPayLoad {
  customerName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface SearchResponse {
  items: Customer[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
