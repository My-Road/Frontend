import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { changePasswordAPI } from "../API";
import { useNavigate } from "react-router-dom";

const useChangePasswordAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: changePasswordAPI,
    onSuccess: ({}) => {
      showSuccessSnackbar({
        message: "Your password has been changed successfully",
      });
      navigate("/me");
    },
  });

  return {
    changePassword,
    isPending,
  };
};

export default useChangePasswordAPI;
