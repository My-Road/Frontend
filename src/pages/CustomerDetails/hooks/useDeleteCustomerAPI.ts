import { useMutation } from "@tanstack/react-query";
import { deleteCustomerAPI } from "../API/customer";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";

const useDeleteCustomerAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: deleteCustomer, isPending } = useMutation({
    mutationFn: (id: number) => deleteCustomerAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Customer deleted successfully" });
      navigate("/me/customers");
    },
  });

  return {
    deleteCustomer,
    isPending,
  };
};

export default useDeleteCustomerAPI;
