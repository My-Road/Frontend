import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPurchaseAPI } from "../API/purchase";

const useAddPurchaseAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addPurchase, isPending } = useMutation({
    mutationFn: addPurchaseAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Purchase Added Successfully",
      });
      queryClient.invalidateQueries({queryKey: ["purchases"]})
      queryClient.invalidateQueries({ queryKey: ["supplier"] });
    }
  });

  return {
    addPurchase,
    isPending,
  };
};

export default useAddPurchaseAPI;