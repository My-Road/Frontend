import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import { PaginationProps, SearchParams } from "@/types";
import { Payment, CustomerPaymentPayload } from "../../types";
import { useSearchPayments } from "../../hooks/useSearchPaymentsAPI";
import useDeletePaymentAPI from "../../hooks/useDeletePaymentAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useUpdatePaymentDataAPI from "../../hooks/useUpdatePaymentDataAPI";
import { useSnackBar } from "@/hooks/useSnackbar";

import PaymentFormDialog from "./PaymentFormDialog";
import DataGridActions from "../DataGridActions";
import TextPreviewDialog from "@/components/TextPreviewDialog/TextPreviewDialog";

import { transformPaymentToPayload } from "./util/transformPaymentToPayload";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";


// Component Props interface
interface Props {
  searchParams: SearchParams;
  customerId: number;
}

export default function PaymentDataGrid({ searchParams, customerId }: Props) {
  // State variables
  const [paginationModel, setPaginationModel] = useState<PaginationProps>({
    page: 1,
    pageSize: 15,
  });
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] =
    useState<CustomerPaymentPayload | null>(null);
  const [noteContent, setNoteContent] = useState<string>("");

  // API hooks
  const { data, isLoading } = useSearchPayments(customerId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });
  const { deletePayment, isPending } = useDeletePaymentAPI();
  const { updatePayment, isPending: isEditing } = useUpdatePaymentDataAPI();

  // Snackbar & Dialog hooks
  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

  // Translations
  const { t } = useTranslation();

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).paymentDate(),
    getGenericGridColumns(t).amount(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => (
        <DataGridActions<Payment>
          row={params.row}
          onDelete={handleDelete}
          onEdit={(row) => handleEdit(transformPaymentToPayload(row))}
          onViewNotes={handleViewNotes}
        />
      ),
    },
  ];

  // Handlers
  const handleViewNotes = (order: Payment) => {
    setNoteContent(order.notes ?? "");
    setNoteDialogOpen(true);
  };

  const handleDelete = (row: Payment) => {
    showConfirmationDialog({
      message: t("Dialogs.confirmPaymentDelete"),
      onConfirm: () => deletePayment(row.id),
      isPending,
      title: t("Dialogs.Title.deletePayment"),
    });
  };

  const handleEdit = (order: CustomerPaymentPayload) => {
    setSelectedPayment(order);
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: CustomerPaymentPayload,
    helpers: FormikHelpers<CustomerPaymentPayload>
  ) => {
    if (!selectedPayment) return;

    // Check if any data was changed
    const isEqual = JSON.stringify(values) === JSON.stringify(selectedPayment);
    if (isEqual) {
      helpers.setSubmitting(false);
      setEditDialogOpen(false);
      showWarningSnackbar({ message: t("No changes made") });
      return;
    }

    updatePayment(values, {
      onSuccess: () => {
        helpers.resetForm();
        setEditDialogOpen(false);
      },
    });
  };

  return (
    <>
      <Box
        width="100%"
        sx={{
          "& .even-row": { backgroundColor: "#f9f9f9" },
          "& .odd-row": { backgroundColor: "#ffffff" },
        }}
      >
        <GenericDataGrid<Payment>
          rows={data?.items || []}
          columns={gridColumns}
          paginationModel={paginationModel}
          onPaginationChange={setPaginationModel}
          rowCount={data?.totalCount || 0}
          loading={isLoading}
        />
      </Box>

      {/* Text Preview Dialog for Notes */}
      <TextPreviewDialog
        open={noteDialogOpen}
        onClose={() => setNoteDialogOpen(false)}
        content={noteContent}
        title={t("Tables.Headers.Notes")}
      />

      {/* Payment Edit Form Dialog */}
      {selectedPayment && (
        <PaymentFormDialog
          open={editDialogOpen}
          handleClose={() => setEditDialogOpen(false)}
          initialValues={selectedPayment}
          onSubmit={handleUpdate}
          isPending={isEditing}
          title={t("PrivatePages.Customers.editPayment")}
          formType="edit"
        />
      )}
    </>
  );
}
