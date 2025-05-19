import { axiosInstance } from "@/config/axios.config";
import { PurchasesPayload, Purchase, SearchResponseForPurchases } from "../../types";
import { SearchParams } from "@/types";

export const addPurchaseAPI = async (payment: PurchasesPayload) => {
  const res = await axiosInstance.post(`/api/v1/purchase`, payment);
  return res.data;
};

export const searchPurchasesAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/purchase/by-supplier/${id}`,
    params
  );
  console.log(params)
  return res.data as SearchResponseForPurchases;
};

export const deletePurchaseAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/purchase/${id}`);
  return res.data;
};

export const updatePurchaseDataAPI = async (Purchases: PurchasesPayload) => {
  const res = await axiosInstance.put(`/api/v1/purchase`, Purchases);
  return res.data as Purchase;
};