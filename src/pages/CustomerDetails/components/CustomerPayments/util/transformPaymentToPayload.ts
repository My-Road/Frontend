import { CustomerPaymentPayload, Payment } from "@/pages/CustomerDetails/types";

export function transformPaymentToPayload(payment: Payment): CustomerPaymentPayload {
    return {
      ...payment,
      paymentDate: payment.paymentDate ,
    };
  }
  