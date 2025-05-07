import { CustomerPaymentPayload } from "./types";

export const initialValues : CustomerPaymentPayload  = { 
    amount: 0,
    notes: "",
    paymentDate: new Date(),
    customerId : 0
 }
