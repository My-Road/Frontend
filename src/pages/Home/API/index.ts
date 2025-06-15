import { axiosInstance } from "@/config/axios.config";
import {DashboardData} from "../types";

export const getDashboardAPI = async () => {
  const res = await axiosInstance.get <DashboardData>("/api/v1/dashboard");
  return res.data;
};