import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../API";
import { extractErrorMessage } from "@/utils/errorHandling";
import { AxiosBaseError } from "@/types/axios";

const useRegisterAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const { mutateAsync: registerUser, isPending, isSuccess } = useMutation({
    mutationFn: registerAPI,
    onSuccess: () => {
      setTimeout(
        () =>
          showSuccessSnackbar({
            message: "Registration successful",
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
    registerUser,
    isPending,
    isSuccess
  };
};

export default useRegisterAPI;
