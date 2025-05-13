import { useQuery } from "@tanstack/react-query";
import { searchEmployeeLogsAPI } from "../API/EmployeeLog";
import { SearchParams } from "@/types";

export function useSearchEmployeeLogs(employeeId: number, params: SearchParams) {
  return useQuery({
    queryKey: ["employeelogs", params],
    queryFn: () => searchEmployeeLogsAPI(employeeId, params),
  });
}
