import { GridColDef } from "@mui/x-data-grid";
import { Employee } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import { StatusChip } from "@/components/StatusChip/StatusChip";
import CellActionButton from "@/components/CellActionButton";

export const GetEmployeesGridColumns = ({
  t,
  navigate,
  handleRestoreClick,
  isPending,
}: {
  t: (key: string) => string;
  navigate: (path: string) => void;
  handleRestoreClick: (employee: Employee) => void;
  isPending: boolean;
}): GridColDef[] => [
  getGenericGridColumns(t).startDate(),
  getGenericGridColumns(t).employeeName(),
  getGenericGridColumns(t).phoneNumber(),
  getGenericGridColumns(t).address(),
  {
    ...getGenericGridColumns(t).status(),
    renderCell: (params) => {
      const employee = params.row as Employee;
      const isDeleted = employee.isActive;
      const youHaveDues = employee.remainingAmount !== 0;
      const completePaid =
        employee.remainingAmount === 0 && employee.totalDueAmount !== 0;

      const getLabel = () => {
        if (!isDeleted) return t("Messages.isDeleted");
        if (youHaveDues) return t("Messages.youHaveDues");
        if (completePaid) return t("Messages.paid");
        return t("Messages.noRecords");
      };

      return (
        <StatusChip
          size="small"
          label={getLabel()}
          bgColor={
            !isDeleted
              ? "#F7B538"
              : youHaveDues
              ? "#f44336"
              : completePaid
              ? "#2e7d32"
              : "#9e9e9e"
          }
          textColor="#fff"
          sx={{ minWidth: "70px" }}
        />
      );
    },
  },
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const employee = params.row as Employee;
      const isActive = Boolean(employee.isActive);

      return (
        <CellActionButton
          row={employee}
          isActive={isActive}
          onActiveClick={() => navigate(`/me/employees/${employee.id}`)}
          onInactiveClick={handleRestoreClick}
          isPending={isPending}
        />
      );
    },
  },
];
