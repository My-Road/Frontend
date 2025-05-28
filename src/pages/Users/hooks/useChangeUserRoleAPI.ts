import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserRoleAPI } from "../API";
import { Roles } from "@/enums/Roles"; 

export const useChangeUserRoleAPI = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, userRole }: { id: number; userRole: Roles }) =>
      changeUserRoleAPI(id, userRole),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const changeUserRole = (id: number, userRole: Roles) => {
    mutate({ id, userRole });
  };

  return { changeUserRole, isPending };
};





