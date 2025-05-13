import { axiosInstance } from "@/config/axios.config";
import { AddEmployeePayload, SearchResponseForEmployees } from "../types";
import { SearchParams } from "@/types";

export const addEmployeeAPI = async (payload: AddEmployeePayload) => {
  const res = await axiosInstance.post<AddEmployeePayload>(
    "/api/v1/employee",
    payload
  );
  return res.data;
};

export const searchEmployeesAPI = async (
  params: SearchParams
): Promise<SearchResponseForEmployees> => {
  const res = await axiosInstance.post<SearchResponseForEmployees>(
    "/api/v1/employee/search",
    params
  );
  return res.data;
};
export const restoreEmployeeAPI = async (id: number) => {
    const res = await axiosInstance.put(`/api/v1/employee/restore/${id}`);
    return res.data;
  };  
