import { axiosInstance } from "@/config/axios.config";
import { LoginPayload, loginResponse } from "./types";

export const loginAPI = async (payload: LoginPayload) => {
  try {
    const res = await axiosInstance.post<loginResponse>(
      "/api/v1/identity/login",
      payload
    );
    return res.data;
  } catch (error: any) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error;
  }
};
