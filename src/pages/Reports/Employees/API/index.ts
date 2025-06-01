import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForLogs } from "../types";

export const searchEmployeesLogsAPI = async ( params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/employeelog/search`,
    params
  );
  return res.data as SearchResponseForLogs;
};