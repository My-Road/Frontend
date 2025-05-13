import { useMutation } from "@tanstack/react-query";
import { deleteEmployeeAPI } from "../API/Employee";
import { useSnackBar } from "@/hooks/useSnackbar";
import { useNavigate } from "react-router-dom";

const useDeleteEmployeeAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const { mutate: deleteEmployee, isPending } = useMutation({
    mutationFn: (id: number) => deleteEmployeeAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Employee deleted successfully" });
      navigate("/me/employees");
    },
  });

  return {
    deleteEmployee,
    isPending,
  };
};

export default useDeleteEmployeeAPI;