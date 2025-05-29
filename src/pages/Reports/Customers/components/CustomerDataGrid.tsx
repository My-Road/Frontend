import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useSearchCustomersOrders } from "../hooks/useSearchCustomersOrders";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";

import { Order } from "../types";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({
  searchParams,
}: CustomerDataGridProps) {
  const { t } = useTranslation();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchCustomersOrders({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).customerId(),
    getGenericGridColumns(t).orderDate(),
    getGenericGridColumns(t).recipientName(),
    getGenericGridColumns(t).recipientPhoneNumber(),
    getGenericGridColumns(t).quantity(),
    getGenericGridColumns(t).price(),
  ];

  return (
    <GenericDataGrid<Order>
      rows={data?.items || []}
      columns={gridColumns}
      paginationModel={paginationModel}
      onPaginationChange={setPaginationModel}
      rowCount={data?.totalCount || 0}
      loading={isLoading}
    />
  );
}
