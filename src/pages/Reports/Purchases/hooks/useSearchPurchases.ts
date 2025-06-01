import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchPurchasesAPI } from "../API";
import { SearchParams } from "@/types";

export function useSearchPurchases(params: SearchParams) {
  return useQuery({
    queryKey: ["customersOrders", params],
    queryFn: () => searchPurchasesAPI(params),
    placeholderData: keepPreviousData,
  });
}
