import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { forgetPasswordAPI } from "../API";

const useForgetPasswordAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();

  const { mutate: forgetPassword, isPending } = useMutation({
    mutationFn: forgetPasswordAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Please check your email",
      });
    },
  });

  return {
    forgetPassword,
    isPending,
  };
};

export default useForgetPasswordAPI;
