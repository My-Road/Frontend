import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { searchEmployeesLogsAPI } from "../API";
import { SearchParams } from "@/types";

export function useSearchEmployeesLogs(params: SearchParams) {
  return useQuery({
    queryKey: ["customersOrders", params],
    queryFn: () => searchEmployeesLogsAPI(params),
    placeholderData: keepPreviousData,
  });
}
