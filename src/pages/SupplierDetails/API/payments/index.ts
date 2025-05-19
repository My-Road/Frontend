import { axiosInstance } from "@/config/axios.config";
import { SupplierPaymentPayload, Payment, SearchResponseForPayments } from "../../types";
import { SearchParams } from "@/types";

export const AddPaymentAPI = async (payment: SupplierPaymentPayload) => {
  const res = await axiosInstance.post(`/api/v1/supplier-payments/`, payment);
  return res.data as Payment;
};

export const searchPaymentsAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/supplier-payments/by-supplier/${id}`,
    params
  );
  return res.data as SearchResponseForPayments;
};

export const deletePaymentAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/supplier-payments/${id}`);
  return res.data;
};

export const updatePaymentDataAPI = async (Purchases: SupplierPaymentPayload) => {
  const res = await axiosInstance.put(`/api/v1/supplier-payments`, Purchases);
  return res.data as Payment;
};