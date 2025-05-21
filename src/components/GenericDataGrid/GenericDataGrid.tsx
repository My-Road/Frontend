import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GenericDataGridProps } from "./types";

export default function GenericDataGrid<T>({
  rows,
  columns,
  paginationModel,
  onPaginationChange,
  rowCount,
  loading,
  height = "100%",
}: GenericDataGridProps<T>) {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      maxHeight={height}
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
          params.indexRelativeToCurrentPage % 2 === 0 ? "even-row" : "odd-row"
        }
        sx={{
          border: "none",
          display: "flex",
          flexDirection: "column",
          "& .MuiDataGrid-virtualScroller": {
            flexGrow: 1,
            overflowY: "auto",
          },
          "& .MuiDataGrid-footerContainer": {
            flexShrink: 0,
          },
        }}
      />
    </Box>
  );
}
