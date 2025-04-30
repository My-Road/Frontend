import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getColumns } from "./utils/getColumns";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchCustomers } from "../hooks/useSearchCustomersAPI";
import { useState } from "react";
import { PaginationProps, SearchParams } from "@/types";

interface CustomerDataGridProps {
  searchParams: SearchParams;
}

export default function CustomerDataGrid({ searchParams }: CustomerDataGridProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [paginationModel, setPaginationModel] = useState<PaginationProps>({
    page: 1, 
    pageSize: 15,
  });

  const { data, isLoading, isError } = useSearchCustomers({
    ...searchParams,
    page: paginationModel.page + 1,
    pageSize: paginationModel.pageSize,
  });

  const gridColumns: GridColDef[] = [
    ...getColumns(t),
    {
      field: "details",
      headerName: t("Tables.Headers.details"),
      width: 150,
      sortable: false,
      editable: false,
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

 
  if (isError) return <div>Something went wrong while fetching customers.</div>;

  const filterIsDelete = data?.items.filter((customer) => !customer.isDeleted)

  return (
    <Box width="100%" sx={{
      "& .even-row": { backgroundColor: "#f9f9f9" },
      "& .odd-row": { backgroundColor: "#ffffff" },
    }}>
      <DataGrid
        rows={filterIsDelete || []}
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
  );
}
