import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";

export const getColumns = (t: TFunction): GridColDef[] => [

  {
    field: "recipientName",
    headerName: t("Tables.Headers.RecipientName"),
    flex: 1,
    minWidth: 150,

  },
  {
    field: "recipientPhoneNumber",
    headerName: t("Tables.Headers.Phone"),
    flex: 2,
    minWidth: 150,
  },
  {
    field: "quantity",
    headerName: t("Tables.Headers.Quantity"),
    flex: 2,
    minWidth: 150,
  },
  {
    field: "price",
    headerName: t("Tables.Headers.Price"),
    flex: 2,
    minWidth: 150,
  },
  {
    field: "totalDueAmount",
    headerName: t("Tables.Headers.TotalDueAmount"),
    flex: 2,
    minWidth: 150,
  },
  {
    field: "notes",
    headerName: t("Tables.Headers.Notes"),
    flex: 2,
    minWidth: 150,
  },
];
