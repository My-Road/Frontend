import { useTranslation } from "react-i18next";
import { useSearchCustomersOrders } from "../hooks/useSearchCustomersOrders";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import { Order } from "@/types";
import { useNavigate } from "react-router-dom";
import { getCustomerOrdersGridColumns } from "./customerOrdersGridColumns";

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

  const { data, isLoading } = useSearchCustomersOrders({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns = getCustomerOrdersGridColumns(t, navigate);

  return (
    <GenericDataGrid<Order>
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
