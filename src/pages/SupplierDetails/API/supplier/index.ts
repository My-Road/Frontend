import { axiosInstance } from "@/config/axios.config";
import { SupplierData } from "../../types";
import { Supplier } from "@/types";

export const getSupplierAPI = async (id: string) => {
  const res = await axiosInstance.get<Supplier>(`/api/v1/suppliers/${id}`);
  return res.data;
};

export const updateSupplierDataAPI = async (SupplierData: SupplierData) => {
  const res = await axiosInstance.put<Supplier>(`/api/v1/suppliers`, SupplierData);
  return res.data;
};

export const deleteSupplierAPI = async (id: number) => {
  const res = await axiosInstance.delete<Supplier>(`api/v1/suppliers/${id}`);
  return res.data;
};
