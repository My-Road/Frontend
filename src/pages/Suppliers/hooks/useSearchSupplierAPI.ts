import { useQuery } from "@tanstack/react-query";
import { SearchParams } from "@/types";
import { searchCustomersAPI } from "../API";

export function useSearchSupplier(params: SearchParams) {
  return useQuery({
    queryKey: ["customers", params],
    queryFn: () => searchCustomersAPI(params),
  });
}
