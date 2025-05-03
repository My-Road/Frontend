import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderDataAPI } from "../API/orders";

const useUpdateOrderDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isPending } = useMutation({
    mutationFn: updateOrderDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Order Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  return {
    updateOrder,
    isPending,
  };
};

export default useUpdateOrderDataAPI;
