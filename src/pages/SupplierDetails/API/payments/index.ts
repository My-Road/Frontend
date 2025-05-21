import { axiosInstance } from "@/config/axios.config";
import {
  SupplierPaymentPayload,
  Payment,
  SearchResponseForPayments,
} from "../../types";
import { SearchParams } from "@/types";

export const AddPaymentAPI = async (payment: SupplierPaymentPayload) => {
  const res = await axiosInstance.post<Payment>(
    `/api/v1/supplier-payments/`,
    payment
  );
  return res.data;
};

export const searchPaymentsAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchResponseForPayments>(
    `/api/v1/supplier-payments/supplier/${id}`,
    params
  );
  return res.data;
};

export const deletePaymentAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/supplier-payments/${id}`);
  return res.data;
};

export const updatePaymentDataAPI = async (
  Purchases: SupplierPaymentPayload
) => {
  const res = await axiosInstance.put<Payment>(
    `/api/v1/supplier-payments`,
    Purchases
  );
  return res.data;
};
