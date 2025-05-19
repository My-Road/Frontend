import { axiosInstance } from "@/config/axios.config";
import { SupplierData } from "../../types";
import { Supplier } from "@/types";

export const getSupplierAPI = async (id: string) => {
  const res = await axiosInstance.get(`/api/v1/supplier/${id}`);
  return res.data as Supplier;
};

export const updateSupplierDataAPI = async (SupplierData: SupplierData) => {
  const res = await axiosInstance.put(`/api/v1/supplier`, SupplierData);
  return res.data as Supplier;
};

export const deleteSupplierAPI = async (id: number) => {
  const res = await axiosInstance.delete(`api/v1/supplier/${id}`);
  return res.data as Supplier;
};
