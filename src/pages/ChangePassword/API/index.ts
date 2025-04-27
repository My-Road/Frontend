import { axiosInstance } from "@/config/axios.config";
import { ChangePasswordPayload} from "../types";

export const changePasswordAPI = async (payload: ChangePasswordPayload) => {
  const res = await axiosInstance.post(
    "/api/v1/identity/change-password",
    payload
  );
  return res.data;
};