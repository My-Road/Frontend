import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchCustomersOrdersAPI } from "../API/";
import { SearchParams } from "@/types";

export function useSearchCustomersOrders(params: SearchParams) {
  return useQuery({
    queryKey: ["customersOrders", params],
    queryFn: () => searchCustomersOrdersAPI(params),
    placeholderData: keepPreviousData,
  });
}
