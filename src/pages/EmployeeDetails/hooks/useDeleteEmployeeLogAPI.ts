import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteEmployeeLogAPI } from "../API/EmployeeLog";
import { useSnackBar } from "@/hooks/useSnackbar";

const useDeleteEmployeeLogAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate:deleteEmployeeLog , isPending } = useMutation({
    mutationFn: (id: number) => deleteEmployeeLogAPI(id),
    onSuccess: () => {
      showSuccessSnackbar({ message: "Employee Log deleted successfully" });
      queryClient.invalidateQueries({ queryKey: ["employeelogs"] });
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  return {
    deleteEmployeeLog,
    isPending,
  };
};

export default useDeleteEmployeeLogAPI;