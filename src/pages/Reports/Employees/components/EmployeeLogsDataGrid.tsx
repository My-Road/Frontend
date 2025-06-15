import { Trans, useTranslation } from "react-i18next";
import { useSearchEmployeesLogs } from "../hooks/useSearchEmployeesLogs";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import { EmployeeLog } from "@/types";
import { useNavigate } from "react-router-dom";
import { getEmployeeLogsGridColumns } from "./getEmployeeLogsGridColumns";
import { downloadEmployeesReport } from "../API";
import { Stack } from "@mui/material";
import { useSnackBar } from "@/hooks/useSnackbar";
import { LoadingButton } from "@mui/lab";

interface EmployeeLogsDataGridProps {
  searchParams: SearchParams;
}

export default function EmployeeLogsDataGrid({
  searchParams,
}: EmployeeLogsDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { showErrorSnackbar } = useSnackBar();
  const [isDownload, setIsDownload] = useState(false);

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchEmployeesLogs({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const handleDownload = async () => {
    try {
      setIsDownload(true)
      await downloadEmployeesReport({
        ...searchParams,
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      });
      setIsDownload(false)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      showErrorSnackbar({ message: "Failed to download report" });
    }
    setIsDownload(false)
  };

  const gridColumns = getEmployeeLogsGridColumns(t, navigate);
  const isThereData = (data?.items?.length ?? 0) > 0;

  return (
    <>
      {isThereData && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <LoadingButton
            loading={isDownload}
            variant="contained"
            color="secondary"
            onClick={handleDownload}
          >
            <Trans i18nKey="Buttons.print">Print</Trans>
          </LoadingButton>
        </Stack>
      )}
      <GenericDataGrid<EmployeeLog>
        rows={data?.items || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
        height="500px"
      />
    </>
  );
}
