import { GridColDef } from "@mui/x-data-grid";
import { TFunction } from "i18next";
import { getGenericGridColumns } from "@/constants/gridColumns";
import CellActionButton from "@/components/CellActionButton";
import { Order } from "@/types";
import { NavigateFunction } from "react-router-dom";

export const getCustomerOrdersGridColumns = (
  t: TFunction,
  navigate: NavigateFunction
): GridColDef[] => [
  getGenericGridColumns(t).orderDate(),
  {
    ...getGenericGridColumns(t).customerName(),
    renderCell: (params) => {
      const order = params.row as Order;
      return order.customer.customerName;
    },
  },
  {
    ...getGenericGridColumns(t).address(),
    renderCell: (params) => {
      const order = params.row as Order;
      return order.customer.address;
    },
  },
  getGenericGridColumns(t).quantity(),
  getGenericGridColumns(t).price(),
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const order = params.row as Order;
      const isActive = Boolean(!order.isDeleted);

      return (
        <CellActionButton
          row={order}
          isActive={isActive}
          onActiveClick={() =>
            navigate(`/me/reports/customer-orders/${order.id}`)
          }
          onInactiveClick={() => null}
          isPending={false}
        />
      );
    },
  },
];
