import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { forgetPasswordAPI } from "../API";
import { AxiosError } from "axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

const useForgetPasswordAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();

  const { mutate: forgetPassword, isPending } = useMutation({
    mutationFn: forgetPasswordAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Please check your email",
      });
    },
    onError: (error: AxiosError) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    forgetPassword,
    isPending,
  };
};

export default useForgetPasswordAPI;
