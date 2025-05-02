import { axiosInstance } from "@/config/axios.config";
import { CustomerPaymentPayload, SearchResponseForPayments } from "../../types";
import { Customer, SearchParams } from "@/types";

export const AddPaymentAPI = async (payment: CustomerPaymentPayload) => {
  const res = await axiosInstance.post(`/api/v1/customer-payment/`, payment);
  return res.data as Customer;
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
