import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";

export const getColumns = (t:TFunction): GridColDef[] => [
  {
    field: "amount",
    headerName: t("Tables.Headers.Amount"),
    flex: 1,
    minWidth: 150,

  },
  {
    field: "notes",
    headerName: t("Tables.Headers.Notes"),
    flex: 2,
    minWidth: 150,
  },
];
