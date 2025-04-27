import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { resetForgetPasswordAPI } from "../API";
import { useNavigate } from "react-router-dom";

const useResetForgetPasswordAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetForgetPasswordAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Your password has been changed successfully",
      });
      navigate("/");
    },
  });

  return {
    resetPassword,
    isPending,
  };
};

export default useResetForgetPasswordAPI;
