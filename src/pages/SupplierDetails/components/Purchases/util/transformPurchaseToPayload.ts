import { PurchasesPayload } from "@/pages/SupplierDetails/types";
import { Purchase } from "@/types";

export function transformPurchaseToPayload(purchase: Purchase): PurchasesPayload {
    return {
      ...purchase,
      purchasesDate: (purchase.purchasesDate)
    };
  }
  