import { axiosInstance } from "@/config/axios.config";
import { login } from "@/features/User";
import { useSnackBar } from "@/hooks/useSnackbar";
import {  setSession } from "@/lib/session";
import { useAppDispatch } from "@/store";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../API";
import { errorHandler } from "../utils/errorHandler";
import { AxiosError } from "axios";

const useLoginAPI = () => {
  const { showSuccessSnackbar, showErrorSnackbar } = useSnackBar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: ({ token }) => {
      setTimeout(
        () =>
          showSuccessSnackbar({
            message: "Login successful",
            autoHideDuration: 1000,
          }),
        1000
      );

      setSession(token);
      const payload = jwtDecode<User>(token);
      
      dispatch(login(payload));

      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `MyRoad__${token}`;

      navigate("/me");
    },
    onError: (error: AxiosError) => {
      errorHandler(error, showErrorSnackbar)
    },
  });

  return {
    loginUser,
    isPending,
  };
};

export default useLoginAPI;
