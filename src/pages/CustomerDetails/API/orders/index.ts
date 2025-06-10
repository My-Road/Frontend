import { axiosInstance } from "@/config/axios.config";
import { CustomerOrderPayload, SearchResponseForOrders } from "../../types";
import { Order, SearchParams } from "@/types";


export const addOrderAPI = async (payment: CustomerOrderPayload) => {
  const res = await axiosInstance.post(`/api/v1/order/`, payment);
  return res.data;
};

export const searchOrdersAPI = async (id: number, params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/order/by-customer/${id}`,
    params
  );
  return res.data as SearchResponseForOrders;
};

export const deleteOrderAPI = async (id: number) => {
  const res = await axiosInstance.delete(`/api/v1/order/${id}`);
  return res.data;
};

export const updateOrderDataAPI = async (customerOrder: CustomerOrderPayload) => {
  const res = await axiosInstance.put<Order>(`/api/v1/order`, customerOrder);
  return res.data
};