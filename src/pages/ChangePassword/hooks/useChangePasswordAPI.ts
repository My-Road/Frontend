import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { changePasswordAPI } from "../API";
import { AxiosError } from "axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

const useChangePasswordAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: changePasswordAPI,
    onSuccess: ({}) => {
      setTimeout(() =>
        showSuccessSnackbar({
          message: "Your password has been changed successfully",
        })
      );
    },
    onError: (error: AxiosError) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    changePassword,
    isPending,
  };
};

export default useChangePasswordAPI;