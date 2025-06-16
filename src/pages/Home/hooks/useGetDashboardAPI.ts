import { useQuery } from "@tanstack/react-query";
import { getDashboardAPI } from "../API";
import { DashboardData } from "../types";
import { useAppSelector } from "@/store";
import { selectUser } from "@/features/User";

export const useGetDashboardAPI = () => {
  const user = useAppSelector(selectUser);
  return useQuery<DashboardData>({
    queryKey: ["dashboard-data", user.uid],
    queryFn: () => getDashboardAPI(),
    enabled: !!user.uid,
  });
};
