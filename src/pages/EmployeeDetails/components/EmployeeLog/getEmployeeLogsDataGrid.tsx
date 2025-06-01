// employeeLogGridColumns.ts
import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { getGenericGridColumns } from "@/constants/gridColumns";
import { EmployeeLog, EmployeeLogPayload } from "../../types";
import DataGridActions from "@/components/DataGridActions/DataGridActions";
import { transformEmployeeLogToPayload } from "./util/transformEmployeeLogToPayload";

interface GetEmployeeLogColumnsParams {
  t: TFunction;
  onDelete: (employeeLog: EmployeeLog) => void;
  onEdit: (employeeLog: EmployeeLogPayload) => void;
  onViewNotes: (employeeLog: EmployeeLog) => void;
}

export const getEmployeeLogGridColumns = ({
  t,
  onDelete,
  onEdit,
  onViewNotes,
}: GetEmployeeLogColumnsParams): GridColDef[] => [
  getGenericGridColumns(t).date(),
  getGenericGridColumns(t).checkIn(),
  getGenericGridColumns(t).checkOut(),
  getGenericGridColumns(t).hourlyWage(),
  getGenericGridColumns(t).totalHours(),
  getGenericGridColumns(t).dailyWage(),
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => (
      <DataGridActions<EmployeeLog>
        row={params.row}
        onDelete={onDelete}
        onEdit={(row) => onEdit(transformEmployeeLogToPayload(row))}
        onViewNotes={onViewNotes}
      />
    ),
  },
];
