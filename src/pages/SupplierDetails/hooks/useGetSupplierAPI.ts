import { useQuery } from "@tanstack/react-query";
import { getSupplierAPI } from "../API/supplier";
import { Supplier } from "@/types";

export const useGetSupplierAPI = (id: string) => {
  return useQuery<Supplier>({
    queryKey: ["supplier", id],
    queryFn: () => getSupplierAPI(id),
    enabled: !!id, 
  });
};
