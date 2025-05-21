import { useMutation } from "@tanstack/react-query";
import { deleteSupplierAPI } from "../API/supplier";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";

const useDeleteSupplierAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: deleteSupplier, isPending } = useMutation({
    mutationFn: (id: number) => deleteSupplierAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Supplier deleted successfully" });
      navigate("/me/suppliers");
    },
  });

  return {
    deleteSupplier,
    isPending,
  };
};

export default useDeleteSupplierAPI;
