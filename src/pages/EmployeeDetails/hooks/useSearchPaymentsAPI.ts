import { useQuery } from "@tanstack/react-query";
import { searchPaymentsAPI } from "../API/payments";
import { SearchParams } from "@/types";

export function useSearchPayments(employeeId: number, params: SearchParams) {
  return useQuery({
    queryKey: ["payments", params],
    queryFn: () => searchPaymentsAPI(employeeId, params),
  });
}
