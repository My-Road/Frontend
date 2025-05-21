import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchPaymentsAPI } from "../API/payments";
import { SearchParams } from "@/types";

export function useSearchPayments(supplierId: number, params: SearchParams) {
  return useQuery({
    queryKey: ["payments", params],
    queryFn: () => searchPaymentsAPI(supplierId, params),
    placeholderData:keepPreviousData,
  });
}
