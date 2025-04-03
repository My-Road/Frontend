import { AxiosError } from "axios";

export const errorHandler = (
    error: AxiosError,
    showErrorSnackbar: (params: { message: string; autoHideDuration: number }) => void
) => {

    if (error?.response?.status === 401) {
        showErrorSnackbar({
            message: "Invalid Credentials",
            autoHideDuration: 1000,
        });
    }
};
