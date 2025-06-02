import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchCustomers } from "../hooks/useSearchCustomersAPI";
import { useState } from "react";
import { Customer, PaginationProps, SearchParams } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import CellActionButton from "@/components/CellActionButton";
import useRestCustomerAPI from "../hooks/useResetCustomerAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({
  searchParams,
}: CustomerDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchCustomers({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { restCustomer, isPending } = useRestCustomerAPI();

  const { showConfirmationDialog } = useConfirmationDialog();

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).customerName(),
    getGenericGridColumns(t).email(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => {
        const customer = params.row as Customer;
        const isActive = Boolean(!customer.isDeleted);

        return (
          <CellActionButton
            row={customer}
            isActive={isActive}
            onActiveClick={() => navigate(`/me/customer/${customer.id}`)}
            onInactiveClick={handleRestoreClick}
            isPending={isPending}
          />
        );
      },
    },
  ];

  const handleRestoreClick = (customer: Customer) => {
    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRestore"),
      message: t("Dialogs.confirmCustomerRestore", {
        name: customer.customerName,
      }),
      onConfirm: () => restCustomer(customer.id),
    });
  };

  return (
    <GenericDataGrid<Customer>
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
