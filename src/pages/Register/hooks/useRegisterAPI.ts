import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../API";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

const useRegisterAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Registration successful",
      });
    },
    onError: (error) => {
      const errorMessage = extractErrorMessage(error as AxiosBaseError);
      showErrorSnackbar({ message: errorMessage });
    },
  });

  return {
    registerUser,
    isPending,
  };
};

export default useRegisterAPI;
