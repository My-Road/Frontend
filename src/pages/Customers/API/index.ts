import { axiosInstance } from "@/config/axios.config";
import { AddCustomerPayLoad, SearchParams, SearchResponse } from "../types";

export const addCustomerAPI = async (payload: AddCustomerPayLoad) => {
  const res = await axiosInstance.post<AddCustomerPayLoad>(
    "/api/v1/customer",
    payload
  );
  return res.data;
};

export const searchCustomersAPI = async (
  params: SearchParams
): Promise<SearchResponse> => {
  const res = await axiosInstance.post<SearchResponse>(
    "/api/v1/customer/search",
    params
  );
  return res.data;
};
