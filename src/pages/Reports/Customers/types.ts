import { Customer, SearchParams } from "@/types";

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
  customer: Customer | null; 
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}

export interface SearchResponseForOrders extends SearchParams{
  items: Order[];
  totalCount: number;
}