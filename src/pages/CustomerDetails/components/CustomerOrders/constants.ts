import { CustomerOrderPayload } from "../../types";

export const initialValues : CustomerOrderPayload = {
    createdByUserId: -1,
    customerId: -1,
    notes: "",
    orderDate : new Date(),
    price: 0,
    quantity: 0,
    recipientName: "",
    recipientPhoneNumber: "",
}