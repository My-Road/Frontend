import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSupplierAPI } from "../API";

const useAddSupplierAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addSupplier, isPending } = useMutation({
    mutationFn: addSupplierAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["suppliers"] });

      showSuccessSnackbar({
        message: "Supplier Added Successfully",
      });
    },
  });

  return {
    addSupplier,
    isPending,
  };
};

export default useAddSupplierAPI;
