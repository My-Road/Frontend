import { Supplier, SearchParams, Purchase } from "@/types";

export type SupplierData = Pick<
Supplier,
  "id" | "supplierName" | "email" | "phoneNumber" | "address"
>;

export type SupplierPayments = Pick<
Supplier,
  "totalPaidAmount" | "totalDueAmount" | "remainingAmount"
>;

export interface SupplierPaymentPayload {
  amount: number;
  paymentDate: string;
  notes: string;
  supplierId: number;
}

export interface PurchasesPayload {
  goodsDeliverer: string;
  goodsDelivererPhoneNumber: string;
  quantity: number;
  price: number;
  purchasesDate: string;
  notes: string;
  supplierId: number;
  createdByUserId: number;
}

export interface Payment {
  supplierId: number;
  supplier: Supplier,
  amount: number;
  paymentDate: string;
  notes: string;
  isDeleted: boolean;
  deletedAt: string;
  id: number
}

export interface SearchResponseForPurchases extends SearchParams{
  items: Purchase[];
  totalCount: number;
}

export interface SearchResponseForPayments extends SearchParams {
  items: Payment[];
  totalCount: number
}

export type PaymentState = {
  status: boolean;
  msg: string;
};
