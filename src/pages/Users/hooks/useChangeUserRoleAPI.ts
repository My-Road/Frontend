import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserRoleAPI } from "../API";
import { Roles } from "@/enums/Roles";
import { useSnackBar } from "@/hooks/useSnackbar";

type ChangeUserRoleInput = {
  id: number;
  role: Roles;
};

export const useChangeUserRoleAPI = () => {
  const queryClient = useQueryClient();
  const { showSuccessSnackbar } = useSnackBar();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, role }: ChangeUserRoleInput) =>
      changeUserRoleAPI(id, role),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Role updated successfully" }); // ✅
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    changeUserRole: (id: number, role: Roles) => mutate({ id, role }),
    isPending,
  };
};
