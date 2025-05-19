import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchPurchasesAPI } from "../API/purchase";
import { SearchParams } from "@/types";

export function useSearchPurchases(supplierId: number, params: SearchParams) {
  return useQuery({
    queryKey: ["purchases", params],
    queryFn: () => searchPurchasesAPI(supplierId, params),
    placeholderData: keepPreviousData,
  });
}
