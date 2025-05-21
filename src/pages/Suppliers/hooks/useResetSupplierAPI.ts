import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetSupplierAPI } from "../API";

const useRestSupplierAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: restSupplier, isPending } = useMutation({
    mutationFn: resetSupplierAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });

      showSuccessSnackbar({
        message: "Supplier has been successfully restored", 
      });
    },
  });

  return {
    restSupplier,
    isPending,
  };
};

export default useRestSupplierAPI;