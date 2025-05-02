import { GridColDef } from "@mui/x-data-grid";

export const getColumns = (): GridColDef[] => [
  {
    field: "paymentDate",
    headerName: "Date",
    flex: 1,
    minWidth: 120,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 150,

  },
  {
    field: "notes",
    headerName: "Notes",
    flex: 2,
    minWidth: 150,
  },
];
