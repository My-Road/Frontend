import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { getGenericGridColumns } from "@/constants/gridColumns";
import CellActionButton from "@/components/CellActionButton";
import { Purchase } from "@/types";
import { NavigateFunction } from "react-router-dom";

export const getPurchasesGridColumns = (
  t: TFunction,
  navigate: NavigateFunction
): GridColDef[] => [
  getGenericGridColumns(t).purchasesDate(),
  {
    ...getGenericGridColumns(t).supplierName(),
    renderCell: (params) => {
      const purchase = params.row as Purchase;
      return purchase.supplier?.supplierName;
    },
  },
  {
    ...getGenericGridColumns(t).address(),
    renderCell: (params) => {
      const purchase = params.row as Purchase;
      return purchase.supplier?.address;
    },
  },
  getGenericGridColumns(t).quantity(),
  getGenericGridColumns(t).price(),
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const purchase = params.row as Purchase;
      const isActive = Boolean(!purchase.isDeleted);

      return (
        <CellActionButton
          row={purchase}
          isActive={isActive}
          onActiveClick={() =>
            navigate(`/me/reports/purchases/${purchase.id}`)
          }
          onInactiveClick={() => null}
          isPending={false}
        />
      );
    },
  },
];
