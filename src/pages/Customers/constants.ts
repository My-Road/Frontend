import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { AddCustomerPayLoad } from "./types";

export const getColumns = (t: TFunction): GridColDef[] => [
  { 
    field: "id", 
    headerName: "ID", 
    flex: 0.5, 
    minWidth: 70 
  },
  {
    field: "fullName",
    headerName: t("Tables.Headers.CustomerName"),
    description: t("fullNameDescription"),
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


export const rows = [
  {
    id: 1,
    fullName: "Jon Show",
    email: "jon.snow@example.com",
    phoneNumber: "123-456-7890",
    address: "Winterfell, The North",
  },
  {
    id: 2,
    fullName: "Cersei Lannister",
    email: "cersei.lannister@example.com",
    phoneNumber: "234-567-8901",
    address: "King's Landing, Westeros",
  },
  {
    id: 3,
    fullName: "Jaime Lannister",
    email: "jaime.lannister@example.com",
    phoneNumber: "345-678-9012",
    address: "King's Landing, Westeros",
  },
  {
    id: 4,
    fullName: "Arya Stark",
    email: "arya.stark@example.com",
    phoneNumber: "456-789-0123",
    address: "Winterfell, The North",
  },
  {
    id: 5,
    fullName: "Daenerys Targaryen",
    email: "daenerys.targaryen@example.com",
    phoneNumber: "567-890-1234",
    address: "Dragonstone, Westeros",
  },
  {
    id: 6,
    fullName: "Melisandre",
    email: "melisandre@example.com",
    phoneNumber: "678-901-2345",
    address: "Asshai, Essos",
  },
  {
    id: 7,
    fullName: "Ferrara Clifford",
    email: "ferrara.clifford@example.com",
    phoneNumber: "789-012-3456",
    address: "Oldtown, Westeros",
  },
  {
    id: 8,
    fullName: "Rossini Frances",
    email: "rossini.frances@example.com",
    phoneNumber: "890-123-4567",
    address: "Braavos, Essos",
  },
  {
    id: 9,
    fullName: "Harvey Roxie",
    email: "harvey.roxie@example.com",
    phoneNumber: "901-234-5678",
    address: "Pentos, Essos",
  },
];

export const initialValues: AddCustomerPayLoad = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: "",
};
