import { axiosInstance } from "@/config/axios.config";
import { EmployeePaymentPayload, Payment, SearchResponseForPayments } from "../../types";
import { SearchParams } from "@/types";

export const AddPaymentAPI = async (payment: EmployeePaymentPayload) => {
  const res = await axiosInstance.post<Payment>(`/api/v1/employee-payments/`, payment);
  return res.data ;
};

export const searchPaymentsAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/employee-payments/by-employee/${id}`,
    params
  );
  return res.data as SearchResponseForPayments;
};

export const deletePaymentAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/employee-payments/${id}`);
  return res.data;
};

export const updatePaymentDataAPI = async (payload: EmployeePaymentPayload ) => {
  const res = await axiosInstance.put<Payment>(`/api/v1/employee-payments`, payload);
  return res.data ;
};