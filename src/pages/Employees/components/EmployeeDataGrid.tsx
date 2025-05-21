import { useState } from "react";
import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSearchEmployees } from "../hooks/useSearchEmployeesAPI";
import useRestoreEmployeeAPI from "../hooks/useRestoreEmployeeAPI";
import { Employee, PaginationProps, SearchParams } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import CellActionButton from "@/components/CellActionButton";

interface EmployeeDataGridProps {
  searchParams: SearchParams;
}

export default function EmployeeDataGrid({
  searchParams,
}: EmployeeDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showConfirmationDialog } = useConfirmationDialog();
  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchEmployees({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { restoreEmployee, isPending } = useRestoreEmployeeAPI();

  const handleRestoreClick = (employee: Employee) => {
    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRestore"),
      message: t("Dialogs.confirmEmployeeRestore", {
        name: employee.employeeName,
      }),
      onConfirm: () => restoreEmployee(employee.id),
    });
  };

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).startDate(),
    getGenericGridColumns(t).employeeName(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
    getGenericGridColumns(t).jobTitle(),
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
  return (
    <Box
      width="100%"
      sx={{
        "& .even-row": { backgroundColor: "#f9f9f9" },
        "& .odd-row": { backgroundColor: "#ffffff" },
      }}
    >
      <GenericDataGrid<Employee>
        rows={data?.items || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
      />
    </Box>
  );
}
