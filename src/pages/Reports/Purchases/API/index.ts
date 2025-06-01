import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForPurchases } from "@/pages/Reports/Purchases/types";

export const searchPurchasesAPI = async ( params?: SearchParams) => {
  const res = await axiosInstance.post<SearchParams>(
    `/api/v1/purchases/search`,
    params
  );
  return res.data as SearchResponseForPurchases;
};