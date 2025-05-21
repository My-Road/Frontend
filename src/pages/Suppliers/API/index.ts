import { axiosInstance } from "@/config/axios.config";
import { AddSupplierPayLoad, SearchResponseForSuppliers } from "../types";
import { SearchParams } from "@/types";

export const addSupplierAPI = async (payload: AddSupplierPayLoad) => {
  const res = await axiosInstance.post<AddSupplierPayLoad>(
    "/api/v1/suppliers",
    payload
  );
  return res.data;
};

export const searchSuppliersAPI = async (
  params: SearchParams
): Promise<SearchResponseForSuppliers> => {
  const res = await axiosInstance.post<SearchResponseForSuppliers>(
    "/api/v1/suppliers/search",
    params
  );
  return res.data;
};

export const resetSupplierAPI = async (id: number) =>{
  const res = await axiosInstance.put(`/api/v1/suppliers/restore/${id}`)
  return res.data;
}
