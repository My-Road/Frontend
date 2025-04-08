import { axiosInstance } from "@/config/axios.config";
import { ForgotPasswordPayload} from "./types";

export const forgetPasswordAPI = async (payload: ForgotPasswordPayload) => {
  const res = await axiosInstance.post(
    "/api/v1/identity/forget-password",
    payload
  );
  return res.data;
};
