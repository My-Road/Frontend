import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserAPI } from "../API";
import { UpdateUserPayload } from "../types";

const useUpdateUserAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: (data: UpdateUserPayload) => updateUserAPI(data),
    onSuccess: () => {
      showSuccessSnackbar({
        message: "User profile updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["profile-user"] });
    },
  });

  return {
    updateUser,
    isPending,
  };
};

export default useUpdateUserAPI;

