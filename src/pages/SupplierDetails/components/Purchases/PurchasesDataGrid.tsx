import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import { PaginationProps, SearchParams } from "@/types";
import { PurchasesPayload, Purchase } from "../../types";

import { useSearchPurchases } from "../../hooks/useSearchPurchases";
import useDeletePurchaseAPI from "../../hooks/useDeletePurchaseAPI";
import useUpdatePurchaseDataAPI from "../../hooks/useUpdatePurchaseDataAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSnackBar } from "@/hooks/useSnackbar";

import { transformPurchaseToPayload } from "./util/transformPurchaseToPayload";

import PurchaseFormDialog from "./PurchaseFormDialog";
import TextPreviewDialog from "@/components/TextPreviewDialog/TextPreviewDialog";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import DataGridActions from "@/components/DataGridActions/DataGridActions";

interface Props {
  searchParams: SearchParams;
  supplierId: number;
}

export default function PurchasesDataGrid({ searchParams, supplierId }: Props) {
  const { t } = useTranslation();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedPurchase, setSelectedPurchase] =
    useState<PurchasesPayload | null>(null);

  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [noteContent, setNoteContent] = useState<string>("");

  const { data, isLoading } = useSearchPurchases(supplierId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { updatePurchase, isPending: isEditing } = useUpdatePurchaseDataAPI();
  const { deletePurchase, isPending } = useDeletePurchaseAPI();

  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

  const handleDelete = (purchase: Purchase) => {
    showConfirmationDialog({
      message: t("Dialogs.confirmPurchaseDelete"),
      title: t("Dialogs.Title.deletePurchase"),
      onConfirm: () => deletePurchase(purchase.id),
      isPending: isPending || false,
    });
  };

  const handleEdit = (purchase: PurchasesPayload) => {
    setSelectedPurchase(purchase);
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: PurchasesPayload,
    helpers: FormikHelpers<PurchasesPayload>
  ) => {
    if (!selectedPurchase) return;

    const noChanges = JSON.stringify(values) === JSON.stringify(selectedPurchase);
    if (noChanges) {
      helpers.setSubmitting(false);
      setEditDialogOpen(false);
      showWarningSnackbar({ message: "No changes made" });
      return;
    }

    updatePurchase(values, {
      onSuccess: () => {
        helpers.resetForm();
        setEditDialogOpen(false);
      },
    });
  };

  const handleViewNotes = (purchase: Purchase) => {
    setNoteContent(purchase.notes ?? "");
    setNoteDialogOpen(true);
  };

  const gridColumns: GridColDef<Purchase>[] = [
    getGenericGridColumns(t).purchasesDate(),
    getGenericGridColumns(t).goodsDeliverer(),
    getGenericGridColumns(t).goodsDelivererPhoneNumber(),
    getGenericGridColumns(t).quantity(),
    getGenericGridColumns(t).price(),
    {
      ...getGenericGridColumns(t).duePrice(),
      renderCell: (params: { row: Purchase }) => {
        const quantity = params.row.quantity ?? 0;
        const price = params.row.price ?? 0;
        return quantity * price;
      },
    },
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => (
        <DataGridActions<Purchase>
          row={params.row}
          onDelete={handleDelete}
          onEdit={(row) => handleEdit(transformPurchaseToPayload(row))}
          onViewNotes={handleViewNotes}
        />
      ),
    },
  ];

  return (
    <>
      <GenericDataGrid<Purchase>
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

      {selectedPurchase && (
        <PurchaseFormDialog
          open={editDialogOpen}
          handleClose={() => setEditDialogOpen(false)}
          initialValues={selectedPurchase}
          onSubmit={handleUpdate}
          isPending={isEditing}
          title={t("PrivatePages.Suppliers.editPurchase")}
          formType="edit"
        />
      )}
    </>
  );
}
