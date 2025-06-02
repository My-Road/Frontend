import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";
import { PaginationProps, SearchParams } from "@/types";
import { Payment, SupplierPaymentPayload } from "../../types";
import { useSearchPayments } from "../../hooks/useSearchPaymentsAPI";
import useDeletePaymentAPI from "../../hooks/useDeletePaymentAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useUpdatePaymentDataAPI from "../../hooks/useUpdatePaymentDataAPI";
import { useSnackBar } from "@/hooks/useSnackbar";
import PaymentFormDialog from "./PaymentFormDialog";
import TextPreviewDialog from "@/components/TextPreviewDialog/TextPreviewDialog";
import { transformPaymentToPayload } from "./util/transformPaymentToPayload";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import DataGridActions from "@/components/DataGridActions/DataGridActions";

interface Props {
  searchParams: SearchParams;
  supplierId: number;
}

export default function PaymentDataGrid({ searchParams, supplierId }: Props) {
  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] =
    useState<SupplierPaymentPayload | null>(null);
  const [noteContent, setNoteContent] = useState<string>("");

  const { data, isLoading } = useSearchPayments(supplierId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });
  const { deletePayment, isPending } = useDeletePaymentAPI();
  const { updatePayment, isPending: isEditing } = useUpdatePaymentDataAPI();

  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

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

  const handleViewNotes = (payment: Payment) => {
    setNoteContent(payment.notes ?? "");
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

  const handleEdit = (payment: SupplierPaymentPayload) => {
    setSelectedPayment({...payment, supplierId});
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: SupplierPaymentPayload,
    helpers: FormikHelpers<SupplierPaymentPayload>
  ) => {
    if (!selectedPayment) return;

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
      <GenericDataGrid<Payment>
        rows={data?.items || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
        height="500px"
      />

      <TextPreviewDialog
        open={noteDialogOpen}
        onClose={() => setNoteDialogOpen(false)}
        content={noteContent}
        title={t("Tables.Headers.Notes")}
      />

      {selectedPayment && (
        <PaymentFormDialog
          open={editDialogOpen}
          handleClose={() => setEditDialogOpen(false)}
          initialValues={selectedPayment}
          onSubmit={handleUpdate}
          isPending={isEditing}
          title={t("PrivatePages.Suppliers.editPayment")}
          formType="edit"
        />
      )}
    </>
  );
}
