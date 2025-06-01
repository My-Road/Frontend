import { Purchase, SearchParams } from "@/types";

export interface SearchFormValues {
  supplierName: string;
  startDate: string;
  endDate: string;
  address: string;
}

export interface SearchResponseForPurchases extends SearchParams{
  items: Purchase[];
  totalCount: number;
}