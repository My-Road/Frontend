import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormikHelpers } from "formik";

import { PaginationProps, SearchParams } from "@/types";
import { CustomerOrderPayload, Order } from "../../types";

import { useSearchOrders } from "../../hooks/useSearchOrders";
import useDeleteOrderAPI from "../../hooks/useDeleteOrderAPI";
import useUpdateOrderDataAPI from "../../hooks/useUpdateOrderDataAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { useSnackBar } from "@/hooks/useSnackbar";

import { transformOrderToPayload } from "./util/transformOrderToPayload";

import OrderFormDialog from "./OrderFormDialog";
import DataGridActions from "../DataGridActions";
import TextPreviewDialog from "@/components/TextPreviewDialog/TextPreviewDialog";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";

interface Props {
  searchParams: SearchParams;
  customerId: number;
}

export default function OrdersDataGrid({ searchParams, customerId }: Props) {
  const { t } = useTranslation();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>({
    page: 1,
    pageSize: 15,
  });

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] =
    useState<CustomerOrderPayload | null>(null);

  const [noteDialogOpen, setNoteDialogOpen] = useState(false);
  const [noteContent, setNoteContent] = useState<string>("");

  const { data, isLoading } = useSearchOrders(customerId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { updateOrder, isPending: isEditing } = useUpdateOrderDataAPI();
  const { deleteOrder, isPending } = useDeleteOrderAPI();

  const { showConfirmationDialog } = useConfirmationDialog();
  const { showWarningSnackbar } = useSnackBar();

  const handleDelete = (order: Order) => {
    showConfirmationDialog({
      message: t("Dialogs.confirmOrderDelete"),
      title: t("Dialogs.Title.deleteOrder"),
      onConfirm: () => deleteOrder(order.id),
      isPending: isPending || false,
    });
  };

  const handleEdit = (order: CustomerOrderPayload) => {
    setSelectedOrder(order);
    setEditDialogOpen(true);
  };

  const handleUpdate = (
    values: CustomerOrderPayload,
    helpers: FormikHelpers<CustomerOrderPayload>
  ) => {
    if (!selectedOrder) return;

    const noChanges = JSON.stringify(values) === JSON.stringify(selectedOrder);
    if (noChanges) {
      helpers.setSubmitting(false);
      setEditDialogOpen(false);
      showWarningSnackbar({ message: "No changes made" });
      return;
    }

    updateOrder(values, {
      onSuccess: () => {
        helpers.resetForm();
        setEditDialogOpen(false);
      },
    });
  };

  const handleViewNotes = (order: Order) => {
    setNoteContent(order.notes ?? "");
    setNoteDialogOpen(true);
  };

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).orderDate(),
    getGenericGridColumns(t).recipientName(),
    getGenericGridColumns(t).recipientPhoneNumber(),
    getGenericGridColumns(t).quantity(),
    getGenericGridColumns(t).price(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => (
        <DataGridActions<Order>
          row={params.row}
          onDelete={handleDelete}
          onEdit={(row) => handleEdit(transformOrderToPayload(row))}
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
        <GenericDataGrid<Order>
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

      {selectedOrder && (
        <OrderFormDialog
          open={editDialogOpen}
          handleClose={() => setEditDialogOpen(false)}
          initialValues={selectedOrder}
          onSubmit={handleUpdate}
          isPending={isEditing}
          title={t("PrivatePages.Customers.editOrder")}
          formType = "edit"
        />
      )}
    </>
  );
}
