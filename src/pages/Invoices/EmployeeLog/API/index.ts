import { axiosInstance } from "@/config/axios.config";
import { EmployeeLog } from "@/types";

export const getLogsAPI = async (id: string) => {
  const res = await axiosInstance.get<EmployeeLog>(`/api/v1/employeelog/${id}`);
  return res.data;
};