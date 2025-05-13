import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCustomerAPI } from "../API";

const useAddCustomerAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addCustomer, isPending } = useMutation({
    mutationFn: addCustomerAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });

      showSuccessSnackbar({
        message: "Customer Added Successfully",
      });
    },
  });

  return {
    addCustomer,
    isPending,
  };
};

export default useAddCustomerAPI;
