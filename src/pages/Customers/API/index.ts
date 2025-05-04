import { axiosInstance } from "@/config/axios.config";
import { AddCustomerPayLoad, SearchResponseForCustomers } from "../types";
import { SearchParams } from "@/types";

export const addCustomerAPI = async (payload: AddCustomerPayLoad) => {
  const res = await axiosInstance.post<AddCustomerPayLoad>(
    "/api/v1/customer",
    payload
  );
  return res.data;
};

export const searchCustomersAPI = async (
  params: SearchParams
): Promise<SearchResponseForCustomers> => {
  const res = await axiosInstance.post<SearchResponseForCustomers>(
    "/api/v1/customer/search",
    params
  );
  return res.data;
};
