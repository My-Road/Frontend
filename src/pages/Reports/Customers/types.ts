import { Order, SearchParams } from "@/types";

export interface SearchFormValues {
  customerName: string;
  startDate: string;
  endDate: string;
  address: string;
}

export interface SearchResponseForOrders extends SearchParams{
  items: Order[];
  totalCount: number;
}