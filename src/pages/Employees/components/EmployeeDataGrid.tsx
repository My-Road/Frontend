import { useState } from "react";
import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSearchEmployees } from "../hooks/useSearchEmployeesAPI";
import useRestoreEmployeeAPI from "../hooks/useRestoreEmployeeAPI";
import { Employee, PaginationProps, SearchParams } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";

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

  const sortedEmployees = [...(data?.items || [])].sort((a, b) => {
    const statusA = Boolean(a.status);
    const statusB = Boolean(b.status);

    if (!statusA && statusB) return 1;
    if (statusA && !statusB) return -1;
    return a.id - b.id;
  });

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
    getGenericGridColumns(t).id(),
    getGenericGridColumns(t).employeeName(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
    getGenericGridColumns(t).jobTitle(),
    getGenericGridColumns(t).startDate(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => {
        const employee = params.row as Employee;

        const isActive = Boolean(employee.status);
        const label = isActive
          ? t("Buttons.viewDetails")
          : t("Buttons.restoreEmployee");
        const handleClick = () => {
          if (isActive) {
            navigate(`/me/employees/${employee.id}`);
          } else {
            handleRestoreClick(employee);
          }
        };

        return (
          <Button
            variant={"text"}
            sx={{
              color: isActive ? "info.main" : "warning.main",
            }}
            size="small"
            onClick={handleClick}
            disabled={!isActive && isPending}
          >
            {label}
          </Button>
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
        rows={sortedEmployees || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
      />
    </Box>
  );
}
