import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addOrderAPI } from "../API/orders";

const useAddOrderAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addOrder, isPending } = useMutation({
    mutationFn: addOrderAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Payment Added Successfully",
      });
    },
  });
  queryClient.invalidateQueries({queryKey: ["orders"]})

  return {
    addOrder,
    isPending,
  };
};

export default useAddOrderAPI;