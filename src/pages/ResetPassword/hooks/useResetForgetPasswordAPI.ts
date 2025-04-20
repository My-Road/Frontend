import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { resetForgetPasswordAPI } from "../API";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

const useResetForgetPasswordAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetForgetPasswordAPI,
    onSuccess: () => {
      setTimeout(
        () =>
          showSuccessSnackbar({
            message: "Login successful",
          }),
        1000
      );
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    resetPassword,
    isPending,
  };
};

export default useResetForgetPasswordAPI;
