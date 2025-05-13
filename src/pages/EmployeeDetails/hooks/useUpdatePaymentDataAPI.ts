import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePaymentDataAPI } from "../API/payments";

const useUpdatePaymentDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updatePayment, isPending } = useMutation({
    mutationFn: updatePaymentDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Payment Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  return {
    updatePayment,
    isPending,
  };
};

export default useUpdatePaymentDataAPI;