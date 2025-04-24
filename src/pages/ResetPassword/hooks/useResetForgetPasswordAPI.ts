import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { resetForgetPasswordAPI } from "../API";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";
import { useNavigate } from "react-router-dom";

const useResetForgetPasswordAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetForgetPasswordAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Your password has been changed successfully",
      });
      navigate("/")
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
