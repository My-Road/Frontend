import { axiosInstance } from "@/config/axios.config";
import {
  PurchasesPayload,
  SearchResponseForPurchases,
} from "../../types";
import { Purchase, SearchParams } from "@/types";

export const addPurchaseAPI = async (payment: PurchasesPayload) => {
  const res = await axiosInstance.post<PurchasesPayload>(`/api/v1/purchases`, payment);
  return res.data;
};

export const searchPurchasesAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchResponseForPurchases>(
    `/api/v1/purchases/by-supplier/${id}`,
    params
  );
  return res.data;
};

export const deletePurchaseAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/purchases/${id}`);
  return res.data;
};

export const updatePurchaseDataAPI = async (Purchases: PurchasesPayload) => {
  const res = await axiosInstance.put<Purchase>(`/api/v1/purchases`, Purchases);
  return res.data;
};
