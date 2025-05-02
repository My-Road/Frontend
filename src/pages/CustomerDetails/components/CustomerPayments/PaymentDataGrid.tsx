import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getColumns } from "./util/getColumns";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";

import { Trans, useTranslation } from "react-i18next";
import { useSearchPayments } from "../../hooks/useSearchPaymentsAPI";
import { Payment } from "../../types";
import { formatDate } from "../../utils/formatDate";
import useDeletePaymentAPI from "../../hooks/useDeletePaymentAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";

interface Props {
  searchParams: SearchParams;
  customerId: number;
}

export default function PaymentDataGrid({ searchParams, customerId }: Props) {
  const [paginationModel, setPaginationModel] = useState<PaginationProps>({
    page: 1,
    pageSize: 15,
  });

  const { data, isLoading, isError } = useSearchPayments(customerId, {
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });
  const { showConfirmationDialog } = useConfirmationDialog();

  const { deletePayment, isPending } = useDeletePaymentAPI();
  const { t } = useTranslation();

  const gridColumns: GridColDef[] = [
    {
      field: "paymentDate",
      headerName: t("Tables.Headers.Date"),
      flex: 1,
      minWidth: 120,
      renderCell: (params) => formatDate(params.row.paymentDate),
    },
    ...getColumns(t),
    {
      field: "actions",
      headerName: t("Tables.Headers.Actions"),
      flex: 1,
      minWidth: 100,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleView(params.row)}
        >
          <Trans i18nKey="Buttons.delete">Delete</Trans>
        </Button>
      ),
    },
  ];
  if (isError) return <div>Something went wrong while fetching customers.</div>;

  const handleView = (row: Payment) => {
    console.log(row.id);
    showConfirmationDialog({
      isOpen: true,
      message: t("Dialogs.confirmPaymentDelete"),
      onConfirm: () => deletePayment(row.id),
      isPending: isPending || false,
      title: t("Dialogs.Title.deletePayment"),
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
        <DataGrid
          rows={data?.items || []}
          columns={gridColumns}
          rowCount={data?.totalCount || 0}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          pageSizeOptions={[15, 30, 50]}
          loading={isLoading}
          disableRowSelectionOnClick
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
          }
        />
      </Box>
      {/* <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent dividers>
            <Typography>
              <strong>Amount:</strong> ${selectedRow?.amount.toFixed(2)}
            </Typography>
            <Typography sx={{ mt: 1 }}>
              <strong>Notes:</strong> {selectedRow?.notes}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog> */}
    </>
  );
}
