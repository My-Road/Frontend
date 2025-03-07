import { useSnackBar } from "@/hooks/useSnackbar";
import { AxiosBaseError } from "@/types/axios";
import { extractErrorMessage } from "@/utils/errorHandling";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";

const MyRoadQueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  const { showErrorSnackbar } = useSnackBar();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const errorMessage = extractErrorMessage(error as AxiosBaseError);
        showErrorSnackbar({ message: errorMessage });
      },
    }),
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 60 * 60 * 1000, // 1 hour
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default MyRoadQueryClientProvider;
