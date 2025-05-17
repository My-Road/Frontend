import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchOrdersAPI } from "../API/orders";
import { SearchParams } from "@/types";

export function useSearchOrders(customerId: number, params: SearchParams) {
  return useQuery({
    queryKey: ["orders", params],
    queryFn: () => searchOrdersAPI(customerId, params),
    placeholderData: keepPreviousData,
  });
}
