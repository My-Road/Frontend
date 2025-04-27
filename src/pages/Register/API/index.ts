import { axiosInstance } from "@/config/axios.config";
import { RegisterPayLoad} from "../types";

export const registerAPI = async (payload: RegisterPayLoad) => {
  const res = await axiosInstance.post(
    "/api/v1/identity/register",
    payload
  );
  return res.data;
};