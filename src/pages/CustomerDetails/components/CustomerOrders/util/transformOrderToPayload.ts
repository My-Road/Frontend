import { CustomerOrderPayload, Order } from "@/pages/CustomerDetails/types";

export function transformOrderToPayload(order: Order): CustomerOrderPayload {
    return {
      ...order,
      orderDate: new Date(order.orderDate),
    };
  }
  