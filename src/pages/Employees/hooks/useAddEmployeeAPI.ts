import { useSnackBar } from "@/hooks/useSnackbar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployeeAPI } from "../API";

const useAddEmployeeAPI = () => {
  const { showSuccessSnackbar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate: addEmployee, isPending } = useMutation({
    mutationFn: addEmployeeAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });

      showSuccessSnackbar({
        message: "Employee added successfully",
      });
    },
  });
  return {
    addEmployee,
    isPending,
  };
};

export default useAddEmployeeAPI;
