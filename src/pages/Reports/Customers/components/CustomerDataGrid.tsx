import { useTranslation } from "react-i18next";
import { useSearchCustomersOrders } from "../hooks/useSearchCustomersOrders";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";
import { Order } from "@/types";
import { useNavigate } from "react-router-dom";
import { getCustomerOrdersGridColumns } from "./customerOrdersGridColumns";
import { Stack } from "@mui/material";
import { downloadCustomerReport } from "../API";
import { useSnackBar } from "@/hooks/useSnackbar";
import PrintPDFButton from "@/components/Buttons/PrintPDFButton/PrintPDFButton";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({
  searchParams,
}: CustomerDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isDownload, setIsDownload] = useState(false);
  const { showErrorSnackbar } = useSnackBar();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(
    DEFAULT_PAGINATION_PROPS
  );

  const { data, isLoading } = useSearchCustomersOrders({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const handleDownload = async () => {
    try {
      setIsDownload(true);
      await downloadCustomerReport({
        ...searchParams,
        page: paginationModel.page + 1,
        pageSize: paginationModel.pageSize,
      });
      setIsDownload(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      showErrorSnackbar({ message: "Failed to download report" });
    }
    setIsDownload(false);
  };

  const gridColumns = getCustomerOrdersGridColumns(t, navigate);
  const isThereData = (data?.items?.length ?? 0) > 0;

  return (
    <>
      {isThereData && (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <PrintPDFButton onPrint={handleDownload} isLoading={isDownload} />
        </Stack>
      )}

      <GenericDataGrid<Order>
        rows={data?.items || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
        height="500px"
      />
    </>
  );
}
