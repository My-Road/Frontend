import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePurchaseAPI } from "../API/purchase";
import { useSnackBar } from "@/hooks/useSnackbar";

const useDeletePurchaseAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deletePurchase, isPending } = useMutation({
    mutationFn: (id: number) => deletePurchaseAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Purchase deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
      queryClient.invalidateQueries({ queryKey: ["supplier"] });
    },
  });

  return {
    deletePurchase,
    isPending,
  };
};

export default useDeletePurchaseAPI;
