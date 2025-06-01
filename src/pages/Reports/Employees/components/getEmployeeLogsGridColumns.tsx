import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { getGenericGridColumns } from "@/constants/gridColumns";
import CellActionButton from "@/components/CellActionButton";
import { EmployeeLog } from "@/types";
import { NavigateFunction } from "react-router-dom";

export const getEmployeeLogsGridColumns = (
  t: TFunction,
  navigate: NavigateFunction
): GridColDef[] => [
  getGenericGridColumns(t).date(),
  {
    ...getGenericGridColumns(t).employeeName(),
    renderCell: (params) => {
      const logs = params.row as EmployeeLog;
      return logs.employee?.employeeName;
    },
  },
  {
    ...getGenericGridColumns(t).address(),
    renderCell: (params) => {
      const logs = params.row as EmployeeLog;
      return logs.employee?.address;
    },
  },
  getGenericGridColumns(t).hourlyWage(),
  getGenericGridColumns(t).totalHours(),
  getGenericGridColumns(t).dailyWage(),
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const logs = params.row as EmployeeLog;
      const isActive = Boolean(!logs.isDeleted);

      return (
        <CellActionButton
          row={logs}
          isActive={isActive}
          onActiveClick={() => navigate(`/me/reports/employee-logs/${logs.id}`)}
          onInactiveClick={() => null}
          isPending={false}
        />
      );
    },
  },
];
