import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSupplierDataAPI } from "../API/supplier";

const useUpdateSupplierDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateSupplier, isPending } = useMutation({
    mutationFn: updateSupplierDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Supplier Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["supplier"] });
    },
  });

  return {
    updateSupplier,
    isPending,
  };
};

export default useUpdateSupplierDataAPI;
