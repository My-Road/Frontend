import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";

export const getColumns = (t: TFunction): GridColDef[] => [
  { 
    field: "id", 
    headerName: "ID", 
    flex: 0.5, 
    minWidth: 70 
  },
  {
    field: "customerName",
    headerName: t("Tables.Headers.CustomerName"),
    description: t("customerNameDescription"),
    sortable: false,
    flex: 1.5,
    minWidth: 150,
  },
  {
    field: "email",
    headerName: t("Tables.Headers.Email"),
    flex: 1.5,
    editable: true,
    sortable: false,
    minWidth: 180,
  },
  {
    field: "phoneNumber",
    headerName: t("Tables.Headers.Phone"),
    type: "string",
    flex: 1,
    editable: true,
    minWidth: 130,
  },
  {
    field: "address",
    headerName: t("Tables.Headers.Address"),
    description: t("addressDescription"),
    sortable: false,
    flex: 2,
    minWidth: 200,
  },
];