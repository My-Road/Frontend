import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { SearchParams } from "../types";
import {SearchResponseForUsers} from '../types';
import { axiosInstance } from "@/config/axios.config";

export const useSearchUsersAPI = (params: SearchParams) => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: async (): Promise<SearchResponseForUsers> => {
      const { data } = await axiosInstance.post("/api/v1/Users/search", params); 
      return data;
    },
    placeholderData: keepPreviousData,
  });
};

