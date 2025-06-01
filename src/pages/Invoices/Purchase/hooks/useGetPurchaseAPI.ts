import { useQuery } from "@tanstack/react-query";
import { Purchase } from "../types";
import { getPurchaseAPI } from "../API";

export const useGetPurchaseAPI = (id: string) => {
  return useQuery<Purchase>({
    queryKey: ["supplier", id],
    queryFn: () => getPurchaseAPI(id),
    enabled: !!id, 
  });
};
