import { useQuery } from "@tanstack/react-query";
import { SearchParams } from "@/types";
import { searchSuppliersAPI } from "../API";

export function useSearchSupplier(params: SearchParams) {
  return useQuery({
    queryKey: ["suppliers", params],
    queryFn: () => searchSuppliersAPI(params),
  });
}
