import { Customer } from "@/types";

export interface Order {
  id: number;
  orderDate: string; 
  recipientName: string;
  recipientPhoneNumber: string;
  quantity: number;
  price: number;
  totalDueAmount: number;
  notes: string;
  customerId: number;
  customer: Customer ; 
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}