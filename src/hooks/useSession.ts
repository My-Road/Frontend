import { axiosInstance } from "@/config/axios.config";
import { updateUserSession } from "@/features/User";
import { getSession } from "@/lib/session";
import { useAppDispatch } from "@/store";
import { User } from "@/types/user";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useSnackBar } from "./useSnackbar";

const useSession = () => {
  const session = getSession();
  const [state, setState] = useState({
    isLoggedIn: false,
    isUpdatingSession: true,
  });
  const dispatch = useAppDispatch();
  const { showErrorSnackbar } = useSnackBar();
  useEffect(() => {
    if (!session) {
      setState({
        isLoggedIn: false,
        isUpdatingSession: false,
      });
      return;
    }
    try {
      const payload = jwtDecode<User>(session);
      dispatch(updateUserSession(payload));
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${session}`;
      setState({
        isLoggedIn: true,
        isUpdatingSession: false,
      });
    } catch (error: Error | unknown) {
      if (error instanceof Error)
        showErrorSnackbar({
          message: `${error.name}: ${error.message}`,
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    ...state,
  };
};

export default useSession;
