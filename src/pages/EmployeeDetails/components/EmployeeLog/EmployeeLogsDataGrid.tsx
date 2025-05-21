import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";
import { PaginationProps, SearchParams } from "@/types";
import { EmployeeLogPayload, EmployeeLog } from "../../types";
import { useSearchEmployeeLogs } from "../../hooks/useSearchEmployeeLogs";
import useDeleteEmployeeLogAPI from "../../hooks/useDeleteEmployeeLogAPI";
import useUpdateEmployeeLogDataAPI from "../../hooks/useUpdateEmployeeLogDataAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSnackBar } from "@/hooks/useSnackbar";
import { transformEmployeeLogToPayload } from "./util/transformEmployeeLogToPayload";
import EmployeeLogFormDialog from "./EmployeeLogFormDialog";
import TextPreviewDialog from "@/components/TextPreviewDialog/TextPreviewDialog";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import DataGridActions from "@/components/DataGridActions/DataGridActions";

interface Props {
  searchParams: SearchParams;
  employeeId: number;
}

export default function EmployeeLogsDataGrid({
  searchParams,
  employeeId,
}: Props) {
  const { t } = useTranslation();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedEmployeeLog, setSelectedEmployeeLog] =
    useState<EmployeeLogPayload | null>(null);

  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [noteContent, setNoteContent] = useState<string>("");

  const { data, isLoading } = useSearchEmployeeLogs(employeeId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { updateEmployeeLog, isPending: isEditing } =
    useUpdateEmployeeLogDataAPI();
  const { deleteEmployeeLog, isPending } = useDeleteEmployeeLogAPI();

  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

  const handleDelete = (employeeLog: EmployeeLog) => {
    showConfirmationDialog({
      message: t("Dialogs.confirmEmployeeLogDelete"),
      title: t("Dialogs.Title.deleteEmployeeLog"),
      onConfirm: () => deleteEmployeeLog(employeeLog.id),
      isPending: isPending || false,
    });
  };

  const handleEdit = (employeeLog: EmployeeLogPayload) => {
    setSelectedEmployeeLog(employeeLog);
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: EmployeeLogPayload,
    helpers: FormikHelpers<EmployeeLogPayload>
  ) => {
    if (!selectedEmployeeLog) return;

    const noChanges =
      JSON.stringify(values) === JSON.stringify(selectedEmployeeLog);
    if (noChanges) {
      helpers.setSubmitting(false);
      setEditDialogOpen(false);
      showWarningSnackbar({ message: "No changes made" });
      return;
    }

    updateEmployeeLog(values, {
      onSuccess: () => {
        helpers.resetForm();
        setEditDialogOpen(false);
      },
    });
  };

  const handleViewNotes = (employeeLog: EmployeeLog) => {
    setNoteContent(employeeLog.notes ?? "");
    setNoteDialogOpen(true);
  };

  const gridColumns: GridColDef[] = [
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
          onDelete={handleDelete}
          onEdit={(row) => handleEdit(transformEmployeeLogToPayload(row))}
          onViewNotes={handleViewNotes}
        />
      ),
    },
  ];

  return (
    <>
      <GenericDataGrid<EmployeeLog>
        rows={data?.items || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
        height="550px"
      />

      <TextPreviewDialog
        open={noteDialogOpen}
        onClose={() => setNoteDialogOpen(false)}
        content={noteContent}
        title={t("Tables.Headers.Notes")}
      />

      {selectedEmployeeLog && (
        <EmployeeLogFormDialog
          open={editDialogOpen}
          handleClose={() => setEditDialogOpen(false)}
          initialValues={selectedEmployeeLog}
          onSubmit={handleUpdate}
          isPending={isEditing}
          title={t("PrivatePages.Employees.editEmployeeLog")}
          formType="edit"
        />
      )}
    </>
  );
}
