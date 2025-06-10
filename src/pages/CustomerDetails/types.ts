import { Customer, Order, SearchParams } from "@/types";

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
  paymentDate: string;
  notes: string;
  customerId: number;
}

export interface CustomerOrderPayload {
  recipientName: string;
  recipientPhoneNumber: string;
  quantity: number;
  price: number;
  orderDate: string;
  notes: string;
  customerId: number;
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

export interface SearchResponseForOrders extends SearchParams{
  items: Order[];
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
