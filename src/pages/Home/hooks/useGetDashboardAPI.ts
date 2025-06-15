import { useQuery } from "@tanstack/react-query";
import { getDashboardAPI } from "../API";
import { DashboardData } from "../types";

export const useGetDashboardAPI = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: getDashboardAPI,
  });
};
