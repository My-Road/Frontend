import { useTranslation } from "react-i18next";
import { useSearchEmployeesLogs } from "../hooks/useSearchEmployeesLogs";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import { EmployeeLog } from "@/types";
import { useNavigate } from "react-router-dom";
import { getEmployeeLogsGridColumns } from "./getEmployeeLogsGridColumns";

interface EmployeeLogsDataGridProps {
  searchParams: SearchParams;
}

export default function EmployeeLogsDataGrid({
  searchParams,
}: EmployeeLogsDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchEmployeesLogs({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns = getEmployeeLogsGridColumns(t, navigate);

  return (
    <GenericDataGrid<EmployeeLog>
      rows={data?.items || []}
      columns={gridColumns}
      paginationModel={paginationModel}
      onPaginationChange={setPaginationModel}
      rowCount={data?.totalCount || 0}
      loading={isLoading}
      height="500px"
    />
  );
}
