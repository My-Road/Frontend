import { axiosInstance } from "@/config/axios.config";
import { CustomerData } from "../../types";
import { Customer } from "@/types";

export const getCustomerAPI = async (id: string) => {
  const res = await axiosInstance.get(`/api/v1/customer/${id}`);
  return res.data as Customer;
};

export const updateCustomerDataAPI = async (customerData: CustomerData) => {
  const res = await axiosInstance.put(`/api/v1/customer`, customerData);
  return res.data as Customer;
};

export const deleteCustomerAPI = async (id: number) => {
  const res = await axiosInstance.delete(`api/v1/customer/${id}`);
  return res.data as Customer;
};
