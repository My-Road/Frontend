import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchSupplier } from "../hooks/useSearchSupplierAPI";
import { useState } from "react";
import { PaginationProps, SearchParams, Supplier } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import CellActionButton from "@/components/CellActionButton";
import useRestSupplierAPI from "../hooks/useResetSupplierAPI";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";

interface supplierDataGridProps {
  searchParams: SearchParams;
}

export default function SupplierDataGrid({
  searchParams,
}: supplierDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).supplierName(),
    getGenericGridColumns(t).email(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => {
        const supplier = params.row as Supplier;
        const isActive = Boolean(!supplier.isDeleted);

        return (
          <CellActionButton
            row={supplier}
            isActive={isActive}
            onActiveClick={() => navigate(`/me/supplier/${supplier.id}`)}
            onInactiveClick={handleRestoreClick}
            isPending={isPending}
          />
        );
      },
    },
  ];

  const handleRestoreClick = (supplier: Supplier) => {
    showConfirmationDialog({
      title: t("Dialogs.Title.confirmRestore"),
      message: t("Dialogs.confirmSupplierRestore", {
        name: supplier.supplierName,
      }),
      onConfirm: () => restSupplier(supplier.id),
    });
  };

  return (
    <GenericDataGrid<Supplier>
      rows={data?.items || []}
      columns={gridColumns}
      paginationModel={paginationModel}
      onPaginationChange={setPaginationModel}
      rowCount={data?.totalCount || 0}
      loading={isLoading}
    />
  );
}
