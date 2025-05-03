import { CustomerPaymentPayload, Payment } from "@/pages/CustomerDetails/types";

export function transformPaymentToPayload(order: Payment): CustomerPaymentPayload {
    return {
      ...order,
      paymentDate: new Date(order.paymentDate),
    };
  }
  