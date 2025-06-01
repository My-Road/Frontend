import { axiosInstance } from "@/config/axios.config";
import {Purchase} from "../types";

export const getPurchaseAPI = async (id: string) => {
  const res = await axiosInstance.get(`/api/v1/purchases/${id}`);
  return res.data as Purchase;
};