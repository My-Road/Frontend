import { CustomerOrderPayload } from "@/pages/CustomerDetails/types";
import { Order } from "@/types";

export function transformOrderToPayload(order: Order): CustomerOrderPayload {
    return {
      ...order,
      orderDate: (order.orderDate)
    };
  }
  