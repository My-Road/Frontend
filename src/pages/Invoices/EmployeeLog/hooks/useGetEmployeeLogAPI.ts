import { useQuery } from "@tanstack/react-query";
import { EmployeeLog } from "@/types";
import { getLogsAPI } from "../API";

export const useGetEmployeeLogAPI = (id: string) => {
  return useQuery<EmployeeLog>({
    queryKey: ["customer", id],
    queryFn: () => getLogsAPI(id),
    enabled: !!id, 
  });
};
