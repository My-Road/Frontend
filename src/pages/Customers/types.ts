import { Customer, SearchParams } from "@/types";

export interface AddCustomerPayLoad {
  customerName: string;
  email?: string | null;
  phoneNumber: string;
  address: string;
}

export interface SearchResponseForCustomers extends SearchParams {
  items: Customer[];
  totalCount: number;
}

export interface SearchFormValues {
  customerName: string;
  status: string;
}