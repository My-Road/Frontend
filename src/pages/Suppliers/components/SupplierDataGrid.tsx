import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchSupplier } from "../hooks/useSearchSupplierAPI";
import { useState } from "react";
import { PaginationProps, SearchParams, Supplier } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import useRestSupplierAPI from "../hooks/useResetSupplierAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import { GetSupplierGridColumns } from "./GetSupplierGridColumns";
import { useAppSelector } from "@/store";
import { isManagerRole } from "@/features/User";

interface supplierDataGridProps {
  searchParams: SearchParams;
}

export default function SupplierDataGrid({
  searchParams,
}: supplierDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isManager = useAppSelector(isManagerRole)

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchSupplier({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const { restSupplier, isPending } = useRestSupplierAPI();

  const { showConfirmationDialog } = useConfirmationDialog();

  const handleRestoreClick = (supplier: Supplier) => {
    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRestore"),
      message: t("Dialogs.confirmSupplierRestore", {
        name: supplier.supplierName,
      }),
      onConfirm: () => restSupplier(supplier.id),
    });
  };

  const gridColumns = GetSupplierGridColumns({
    t,
    navigate,
    handleRestoreClick,
    isPending,
    isManager
  });
  
  return (
    <GenericDataGrid<Supplier>
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
