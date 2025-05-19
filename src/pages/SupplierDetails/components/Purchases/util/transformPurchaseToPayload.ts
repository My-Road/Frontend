import { PurchasesPayload, Purchase } from "@/pages/SupplierDetails/types";

export function transformPurchaseToPayload(purchase: Purchase): PurchasesPayload {
    return {
      ...purchase,
      purchasesDate: (purchase.purchasesDate)
    };
  }
  