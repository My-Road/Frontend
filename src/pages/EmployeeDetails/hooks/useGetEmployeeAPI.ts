import { useQuery } from "@tanstack/react-query";
import { getEmployeeAPI } from "../API/Employee";
import { Employee } from "@/types";

export const useGetEmployeeAPI = (id: string) => {
  return useQuery<Employee>({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeAPI(id),
    enabled: !!id, 
  });
};