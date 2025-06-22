import { axiosInstance, setRedirectOn401 } from "@/config/axios.config";
import { login } from "@/features/User";
import { useSnackBar } from "@/hooks/useSnackbar";
import { setSession } from "@/lib/session";
import { useAppDispatch } from "@/store";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";

const useLoginAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  setRedirectOn401(false);

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ token }) => {
      setTimeout(
        () =>
          showSuccessSnackbar({
            message: "Login successful",
          }),
        1000
      );

      setSession(token);
      const payload = jwtDecode<User>(token);

      dispatch(login(payload));

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      navigate("/me");
      setRedirectOn401(true);
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;
