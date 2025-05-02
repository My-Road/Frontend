import { Customer, SearchParams } from "@/types";

export type CustomerData = Pick<
  Customer,
  "id" | "customerName" | "email" | "phoneNumber" | "address"
>;

export type CustomerPayments = Pick<
  Customer,
  "totalPaidAmount" | "totalDueAmount" | "remainingAmount"
>;

export interface CustomerPaymentPayload {
  amount: number;
  paymentDate: Date;
  notes: string;
  customerId: number;
}

export interface Order {
  id: number;
  orderDate: string; // ISO string format like "2025-05-01T15:12:07.663"
  recipientName: string;
  recipientPhoneNumber: string;
  quantity: number;
  price: number;
  totalDueAmount: number;
  notes?: string;
  customerId: number;
  customer: Customer | null; // Replace `any` with a proper `Customer` interface if available
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}

export interface Payment {
  customerId: number;
  customer: Customer,
  amount: number;
  paymentDate: string;
  notes: string;
  isDeleted: boolean;
  deletedAt: string;
  id: number
}

export interface SearchResponseForOrders {
  items: Order[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface SearchResponseForPayments extends SearchParams {
  items: Payment[];
  totalCount: number
}


export interface CustomerOrderPayload {
  recipientName: string;
  recipientPhoneNumber: string;
  quantity: number;
  price: number;
  orderDate: Date;
  notes: string;
  customerId: number;
  createdByUserId: number;
}
