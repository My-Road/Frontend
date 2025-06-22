import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchCustomers } from "../hooks/useSearchCustomersAPI";
import { useState } from "react";
import { Customer, PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import useRestCustomerAPI from "../hooks/useResetCustomerAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { getCustomerGridColumns } from "./GetCustomerGridColumns";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({
  searchParams,
}: CustomerDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isManager = useAppSelector(isManagerRole);

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

  const handleRestoreClick = (customer: Customer) => {
    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRestore"),
      message: t("Dialogs.confirmCustomerRestore", {
        name: customer.customerName,
      }),
      onConfirm: () => restCustomer(customer.id),
    });
  };

  const gridColumns = getCustomerGridColumns({
    t,
    navigate,
    handleRestoreClick,
    isPending,
    isManager
  });

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
