import { Supplier } from "@/types";

export interface Purchase {
  id: number;
  purchasesDate: string; 
  goodsDeliverer: string;
  goodsDelivererPhoneNumber: string;
  quantity: number;
  price: number;
  totalDueAmount: number;
  notes: string;
  supplierId: number;
  supplier: Supplier | null; 
  isDeleted: boolean;
  deletedAt: string | null;
  isCompleted: boolean;
  createdByUserId: number;
}