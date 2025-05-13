import { EmployeePaymentPayload, Payment } from "@/pages/EmployeeDetails/types";

export function transformPaymentToPayload(payment: Payment): EmployeePaymentPayload {
    return {
      ...payment,
      paymentDate: payment.paymentDate,
    };
  }
  