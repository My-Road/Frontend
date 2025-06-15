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

export const downloadEmployeesReport = async (params?: SearchParams) => {
  const res = await axiosInstance.post(`/api/v1/report/employeesLogs-report`, params, {
    responseType: "blob",
  });

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "EmployeeLogs_report.pdf");
  document.body.appendChild(link);
  link.click();
  link.remove();
};
