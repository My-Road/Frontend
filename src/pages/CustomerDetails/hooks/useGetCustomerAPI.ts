import { useQuery } from "@tanstack/react-query";
import { getCustomerAPI } from "../API/customer";
import { Customer } from "@/types";

export const useGetCustomerAPI = (id: string) => {
  return useQuery<Customer>({
    queryKey: ["customer", id],
    queryFn: () => getCustomerAPI(id),
    enabled: !!id, 
  });
};
