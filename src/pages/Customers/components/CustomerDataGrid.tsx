import Box from "@mui/material/Box";
import { GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchCustomers } from "../hooks/useSearchCustomersAPI";
import { useState } from "react";
import { Customer, PaginationProps, SearchParams } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import GenericDataGrid from "@/components/GenericDataGrid";
import { DEFAULT_PAGINATION_PROPS } from "@/constants";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({
  searchParams,
}: CustomerDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>(DEFAULT_PAGINATION_PROPS);

  const { data, isLoading } = useSearchCustomers({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns: GridColDef[] = [
    getGenericGridColumns(t).id(),
    getGenericGridColumns(t).customerName(),
    getGenericGridColumns(t).email(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
    {
      ...getGenericGridColumns(t).actions(),
      renderCell: (params) => (
        <Button
          variant="text"
          color="info"
          size="small"
          onClick={() => {
            if (params.row.id) {
              navigate(`/me/customer/${params.row.id}`);
            }
          }}
        >
          {t("Buttons.viewDetails")}
        </Button>
      ),
    },
  ];

  //for now because there is issue from BE returned all customers deleted or not
  const filterIsDelete = data?.items.filter((customer) => !customer.isDeleted);

  return (
    <Box
      width="100%"
      sx={{
        "& .even-row": { backgroundColor: "#f9f9f9" },
        "& .odd-row": { backgroundColor: "#ffffff" },
      }}
    >
      <GenericDataGrid<Customer>
        rows={filterIsDelete || []}
        columns={gridColumns}
        paginationModel={paginationModel}
        onPaginationChange={setPaginationModel}
        rowCount={data?.totalCount || 0}
        loading={isLoading}
      />
    </Box>
  );
}
