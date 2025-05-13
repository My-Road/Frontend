import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployeeLogAPI } from "../API/EmployeeLog";

const useAddEmployeeLogAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addEmployeeLog, isPending } = useMutation({
    mutationFn: addEmployeeLogAPI,
    onSuccess: () => {
      showSuccessSnackbar({
        message: "Employee Log Added Successfully",
      });
      queryClient.invalidateQueries({queryKey: ["employeelogs"]})
      queryClient.invalidateQueries({ queryKey: ["employee"] });
    }
  });

  return {
    addEmployeeLog,
    isPending,
  };
};

export default useAddEmployeeLogAPI;