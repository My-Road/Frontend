import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateEmployeeDataAPI } from "../API/Employee";

const useUpdateEmployeeDataAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: updateEmployee, isPending } = useMutation({
    mutationFn: updateEmployeeDataAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Employee Edited Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    },
  });

  return {
    updateEmployee,
    isPending,
  };
};

export default useUpdateEmployeeDataAPI;