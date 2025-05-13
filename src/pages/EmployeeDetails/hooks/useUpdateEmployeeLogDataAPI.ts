import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeeLogAPI } from "../API/EmployeeLog";

const useUpdatEmployeeLogDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateEmployeeLog, isPending } = useMutation({
    mutationFn: updateEmployeeLogAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Employee Log Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["employeelogs"] });
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  return {
    updateEmployeeLog,
    isPending,
  };
};

export default useUpdatEmployeeLogDataAPI;