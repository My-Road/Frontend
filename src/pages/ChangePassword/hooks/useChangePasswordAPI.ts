import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { changePasswordAPI } from "../API";
import { AxiosError } from "axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";
import { useNavigate } from "react-router-dom";

const useChangePasswordAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: changePasswordAPI,
    onSuccess: ({}) => {
      showSuccessSnackbar({
        message: "Your password has been changed successfully",
      });
      navigate("/me")
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
