import { Supplier, SearchParams } from "@/types";

export interface AddSupplierPayLoad {
  supplierName: string;
  email?: string | null;
  phoneNumber: string;
  address: string;
}

export interface SearchResponseForSuppliers extends SearchParams {
  items: Supplier[];
  totalCount: number;
}
export interface SearchFormValues {
  supplierName: string;
  status: string;
}