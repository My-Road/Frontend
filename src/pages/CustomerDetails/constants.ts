import { CustomerPaymentPayload } from "./types";

export const initialValues : CustomerPaymentPayload  = { 
    amount: 0,
    notes: "",
    paymentDate: new Date(),
    customerId : 0
 }

export const data = {
    items: [
      {
        id: 1,
        paymentDate: "2025-04-25T10:30:00Z",
        amount: 150.5,
        notes: "Monthly subscription",
      },
      {
        id: 2,
        paymentDate: "2025-04-28T12:15:00Z",
        amount: 75,
        notes: "One-time setup fee",
      },
      {
        id: 3,
        paymentDate: "2025-04-29T09:00:00Z",
        amount: 200,
        notes: "Annual renewal",
      },
    ],
    totalCount: 3,
  };
  