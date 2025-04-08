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
    onSuccess: ({}) => {
      setTimeout(() =>
        showSuccessSnackbar({
          message: "Check your email to complete resetting your password",
        })
      );
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
