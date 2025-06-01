import { axiosInstance } from "@/config/axios.config";
import { Order } from "../types";

export const getOrderAPI = async (id: string) => {
  const res = await axiosInstance.get(`/api/v1/order/${id}`);
  return res.data as Order;
};