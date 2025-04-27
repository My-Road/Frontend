import { axiosInstance } from "@/config/axios.config";
import { resetForgetPasswordPayload} from "../types";

export const resetForgetPasswordAPI = async (payload: resetForgetPasswordPayload) => {
  const res = await axiosInstance.post(
    "/api/v1/identity/reset-forget-password",
    payload
  );
  return res.data;
};
