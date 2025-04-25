import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../API";

const useRegisterAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: registerAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Registration successful",
      });
    },
  });

  return {
    registerUser,
    isPending,
  };
};

export default useRegisterAPI;
