import { useTranslation } from "react-i18next";
import { useSearchPurchases } from "../hooks/useSearchPurchases";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import { Purchase } from "@/types";
import { useNavigate } from "react-router-dom";
import { getPurchasesGridColumns } from "./PurchasesGridColumns";

interface SupplierDataGridProps {
  searchParams: SearchParams;
}

export default function SupplierDataGrid({
  searchParams,
}: SupplierDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchPurchases({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns = getPurchasesGridColumns(t, navigate);

  return (
    <GenericDataGrid<Purchase>
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
