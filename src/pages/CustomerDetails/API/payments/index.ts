import { axiosInstance } from "@/config/axios.config";
import { CustomerPaymentPayload, Payment, SearchResponseForPayments } from "../../types";
import { SearchParams } from "@/types";

export const AddPaymentAPI = async (payment: CustomerPaymentPayload) => {
  const res = await axiosInstance.post(`/api/v1/customer-payment/`, payment);
  return res.data as Payment;
};

export const searchPaymentsAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/customer-payment/by-customer/${id}`,
    params
  );
  return res.data as SearchResponseForPayments;
};

export const deletePaymentAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/customer-payment/${id}`);
  return res.data;
};

export const updatePaymentDataAPI = async (customerOrder: CustomerPaymentPayload) => {
  const res = await axiosInstance.put(`/api/v1/customer-payment`, customerOrder);
  return res.data as Payment;
};