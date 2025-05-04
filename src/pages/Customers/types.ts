import { Customer, SearchParams } from "@/types";

export interface AddCustomerPayLoad {
  customerName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface SearchResponseForCustomers extends SearchParams {
  items: Customer[];
  totalCount: number;
}
