import { axiosInstance } from "@/config/axios.config";
import { User , UpdateUserPayload } from "../types";

export const getUserAPI = async (): Promise<User> => {
  const res = await axiosInstance.get<User>(`/api/v1/Users`);
  return res.data;
};

export const updateUserAPI = async (
    userData: UpdateUserPayload
  ): Promise<User> => {
    const res = await axiosInstance.put<User>(
      `/api/v1/Users`,
      userData
    );
    return res.data;
  };
