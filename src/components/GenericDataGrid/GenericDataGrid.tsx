import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PaginationProps } from "@/types";

interface GenericDataGridProps<T> {
  rows: T[];
  columns: GridColDef[];
  paginationModel: PaginationProps;
  onPaginationChange: (model: PaginationProps) => void;
  rowCount: number;
  loading: boolean;
}

export default function GenericDataGrid<T>({
  rows,
  columns,
  paginationModel,
  onPaginationChange,
  rowCount,
  loading,
}: GenericDataGridProps<T>) {
  return (
    <Box
      width="100%"
      sx={{
        "& .even-row": { backgroundColor: "#f9f9f9" },
        "& .odd-row": { backgroundColor: "#ffffff" },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationChange}
        pageSizeOptions={[15, 30, 50]}
        loading={loading}
        disableRowSelectionOnClick
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0
            ? "even-row"
            : "odd-row"
        }
      />
    </Box>
  );
}
