import { axiosInstance } from "@/config/axios.config";
import { EmployeeData } from "../../types";
import { Employee } from "@/types";

export const getEmployeeAPI = async (id: string) => {
  const res = await axiosInstance.get<Employee>(`/api/v1/employee/${id}`);
  return res.data;
};

export const updateEmployeeDataAPI = async (employeeData: EmployeeData) => {
  const res = await axiosInstance.put<Employee>(`/api/v1/employee`, employeeData);
  return res.data ;
};

export const deleteEmployeeAPI = async (id: number) => {
  const res = await axiosInstance.delete<Employee>(`api/v1/employee/${id}`);
  return res.data;
};
