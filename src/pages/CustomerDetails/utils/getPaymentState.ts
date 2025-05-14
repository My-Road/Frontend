import { PaymentState } from "../types";

export const getPaymentState = (
  remainingAmount: number,
  totalDueAmount: number
): PaymentState => {
  if (remainingAmount === 0 && totalDueAmount > 0) {
    return {
      msg: "Payment cannot be made because the amount has been paid in full.",
      status: false,
    };
  }
  if (remainingAmount === 0 && totalDueAmount === 0) {
    return {
      msg: "You can't make a payment because there are no orders.",
      status: false,
    };
  }
  return {
    msg: "",
    status: true,
  };
};

