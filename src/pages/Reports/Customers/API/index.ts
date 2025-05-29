import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForOrders } from "../types";

export const searchCustomersOrdersAPI = async ( params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/order/search`,
    params
  );
  return res.data as SearchResponseForOrders;
};