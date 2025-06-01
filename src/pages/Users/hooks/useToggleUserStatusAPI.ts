import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleUserStatusAPI } from "../API";
import { useSnackBar } from "@/hooks/useSnackbar";

type ToggleUserStatusInput = {
  id: number;
  isCurrentlyActive: boolean;
};

export const useToggleUserStatusAPI = () => {
  const queryClient = useQueryClient();
  const { showSuccessSnackbar } = useSnackBar();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id }: ToggleUserStatusInput) => toggleUserStatusAPI(id),
    onSuccess: (_, variables) => {
      showSuccessSnackbar({
        message: variables.isCurrentlyActive
        ? "User deactivated successfully"
        : "User activated successfully",
        });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  return {
    toggleUserStatus: (id: number, isCurrentlyActive: boolean) =>
      mutate({ id, isCurrentlyActive }),
    isPending,
  };
};