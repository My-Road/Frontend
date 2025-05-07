import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePaymentAPI } from "../API/payments";
import { useSnackBar } from "@/hooks/useSnackbar";

const useDeletePaymentAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: deletePayment, isPending } = useMutation({
    mutationFn: (id: number) => deletePaymentAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Payment deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });

  return {
    deletePayment,
    isPending,
  };
};

export default useDeletePaymentAPI;
