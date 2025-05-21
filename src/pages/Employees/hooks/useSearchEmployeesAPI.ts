import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { SearchParams } from "@/types";
import { searchEmployeesAPI } from "../API";

export function useSearchEmployees(params: SearchParams) {
  return useQuery({
    queryKey: ["employees", params],
    queryFn: () => searchEmployeesAPI(params),
    placeholderData: keepPreviousData,
  });
}
