import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePurchaseDataAPI } from "../API/purchase";

const useUpdatePurchaseDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updatePurchase, isPending } = useMutation({
    mutationFn: updatePurchaseDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Purchase Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["purchases"] });
      queryClient.invalidateQueries({ queryKey: ["supplier"] });
    },
  });

  return {
    updatePurchase,
    isPending,
  };
};

export default useUpdatePurchaseDataAPI;
