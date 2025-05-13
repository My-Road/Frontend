import { CustomerOrderPayload, Order } from "@/pages/CustomerDetails/types";

export function transformOrderToPayload(order: Order): CustomerOrderPayload {
    return {
      ...order,
      orderDate: (order.orderDate)
    };
  }
  