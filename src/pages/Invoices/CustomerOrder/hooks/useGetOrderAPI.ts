import { useQuery } from "@tanstack/react-query";
import { Order } from "../types";
import { getOrderAPI } from "../API";

export const useGetOrderAPI = (id: string) => {
  return useQuery<Order>({
    queryKey: ["customer", id],
    queryFn: () => getOrderAPI(id),
    enabled: !!id, 
  });
};
