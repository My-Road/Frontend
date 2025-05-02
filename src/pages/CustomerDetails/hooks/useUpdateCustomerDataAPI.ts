import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomerDataAPI } from "../API/customer";

const useUpdateCustomerDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateCustomer, isPending } = useMutation({
    mutationFn: updateCustomerDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Customer Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });

  return {
    updateCustomer,
    isPending,
  };
};

export default useUpdateCustomerDataAPI;
