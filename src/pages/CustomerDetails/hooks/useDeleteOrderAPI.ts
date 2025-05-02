import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrderAPI } from "../API/orders";
import { useSnackBar } from "@/hooks/useSnackbar";

const useDeleteOrderAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deleteOrder, isPending } = useMutation({
    mutationFn: (id: number) => deleteOrderAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Order deleted successfully" });
    },
  });
  queryClient.invalidateQueries({queryKey: ["orders"]})
  queryClient.invalidateQueries({queryKey: ["customer"]})

  return {
    deleteOrder,
    isPending,
  };
};

export default useDeleteOrderAPI;
