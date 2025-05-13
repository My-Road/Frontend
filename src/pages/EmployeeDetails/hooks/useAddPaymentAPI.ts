import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddPaymentAPI } from "../API/payments";

const useAddPaymentAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addPayment, isPending } = useMutation({
    mutationFn: AddPaymentAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Payment Added Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  return {
    addPayment,
    isPending,
  };
};

export default useAddPaymentAPI;