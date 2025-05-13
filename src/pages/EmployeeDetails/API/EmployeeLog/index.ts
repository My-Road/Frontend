import { axiosInstance } from "@/config/axios.config";
import {
  EmployeeLogPayload,
  EmployeeLog,
  SearchResponseForEmployeeLog,
} from "../../types";
import { SearchParams } from "@/types";
export const addEmployeeLogAPI = async (payment: EmployeeLogPayload) => {
  const res = await axiosInstance.post(`/api/v1/employeelog`, payment);
  return res.data;
};

export const searchEmployeeLogsAPI = async (
  id: number,
  params?: SearchParams
) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/employeelog/by-employee/${id}`,
    params
  );
  return res.data as SearchResponseForEmployeeLog;
};

export const deleteEmployeeLogAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/employeelog/${id}`);
  return res.data;
};

export const updateEmployeeLogAPI = async (employeeId: EmployeeLogPayload) => {
  const res = await axiosInstance.put(`/api/v1/employeelog`, employeeId);
  return res.data as EmployeeLog;
};
