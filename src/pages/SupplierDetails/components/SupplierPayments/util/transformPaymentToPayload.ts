import { SupplierPaymentPayload, Payment } from "@/pages/SupplierDetails/types";

export function transformPaymentToPayload(payment: Payment): SupplierPaymentPayload {
    return {
      ...payment,
      paymentDate: payment.paymentDate ,
    };
  }
  