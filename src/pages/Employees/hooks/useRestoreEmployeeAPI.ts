import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { restoreEmployeeAPI } from "../API";

const useRestoreEmployeeAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: restoreEmployee, isPending } = useMutation({
    mutationFn: restoreEmployeeAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });

      showSuccessSnackbar({
        message: "Employee has been successfully restored", 
      });
    },
  });

  return {
    restoreEmployee,
    isPending,
  };
};

export default useRestoreEmployeeAPI;

