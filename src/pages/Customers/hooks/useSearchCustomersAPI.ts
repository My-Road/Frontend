import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { SearchParams } from "@/types";
import { searchCustomersAPI } from "../API";

export function useSearchCustomers(params: SearchParams) {
  return useQuery({
    queryKey: ["customers", params],
    queryFn: () => searchCustomersAPI(params),
    placeholderData: keepPreviousData,
  });
}
