import { useQuery } from "@tanstack/react-query";
import { getUserAPI } from "../API";
import { User } from "../types";

export const useGetUserAPI = () => {
  return useQuery<User>({
    queryKey: ["profile-user"],
    queryFn: getUserAPI,
  });
};
