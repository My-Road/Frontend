import { Box } from "@mui/material";
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

export default function EmployeeLogsDataGrid({ searchParams, employeeId }: Props) {
  const { t } = useTranslation();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(DEFAULT_PAGINATION_PROPS);

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

  const { updateEmployeeLog, isPending: isEditing } = useUpdateEmployeeLogDataAPI();
  const { deleteEmployeeLog, isPending } = useDeleteEmployeeLogAPI();

  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

  const handleDelete = (employeelog: EmployeeLog) => {
    showConfirmationDialog({
      message: t("Dialogs.confirmEmployeeLogDelete"),
      title: t("Dialogs.Title.deleteEmployeeLog"),
      onConfirm: () => deleteEmployeeLog(employeelog.id),
      isPending: isPending || false,
    });
  };

  const handleEdit = (employeelog: EmployeeLogPayload) => {
    setSelectedEmployeeLog(employeelog);
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: EmployeeLogPayload,
    helpers: FormikHelpers<EmployeeLogPayload>
  ) => {
    if (!selectedEmployeeLog) return;

    const noChanges = JSON.stringify(values) === JSON.stringify(selectedEmployeeLog);
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

  const handleViewNotes = (employeelog: EmployeeLog) => {
    setNoteContent(employeelog.notes ?? "");
    setNoteDialogOpen(true);
  };

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).id(),
    getGenericGridColumns(t).date(),
    getGenericGridColumns(t).checkIn(),
    getGenericGridColumns(t).checkOut(),
    getGenericGridColumns(t).hourlyWage(),
    getGenericGridColumns(t).notes(),
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
      <Box
        width="100%"
        sx={{
          "& .even-row": { backgroundColor: "#f9f9f9" },
          "& .odd-row": { backgroundColor: "#ffffff" },
        }}
      >
        <GenericDataGrid<EmployeeLog>
          rows={data?.items || []}
          columns={gridColumns}
          paginationModel={paginationModel}
          onPaginationChange={setPaginationModel}
          rowCount={data?.totalCount || 0}
          loading={isLoading}
        />
      </Box>

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
          formType = "edit"
        />
      )}
    </>
  );
}