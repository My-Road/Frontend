import { axiosInstance } from "@/config/axios.config";
import { SearchParams } from "@/types";
import { SearchResponseForUsers } from "../types";
export const searchUsersAPI = async (
  params: SearchParams
): Promise<SearchResponseForUsers> => {
  const res = await axiosInstance.post<SearchResponseForUsers>(
    "/api/v1/Users/search",
    params
  );
  return res.data;
};
export const toggleUserStatusAPI = async (id: number): Promise<void> => {
  await axiosInstance.patch(`/api/v1/Users/${id}/toggle-status`);
};
export const changeUserRoleAPI = async (
  id: number,
  role: number
): Promise<void> => {
  await axiosInstance.patch(
    `/api/v1/Users/${id}/role?role=${role}`,
    null,
    {
      params: { role },
    }
  );
};



