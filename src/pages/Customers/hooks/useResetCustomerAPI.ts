import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetCustomerAPI } from "../API";

const useRestCustomerAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: restCustomer, isPending } = useMutation({
    mutationFn: resetCustomerAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });

      showSuccessSnackbar({
        message: "Customer has been successfully restored", 
      });
    },
  });

  return {
    restCustomer,
    isPending,
  };
};

export default useRestCustomerAPI;