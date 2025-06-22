import { GridColDef } from "@mui/x-data-grid";
import { Supplier } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import { StatusChip } from "@/components/StatusChip/StatusChip";
import CellActionButton from "@/components/CellActionButton";

export const GetSupplierGridColumns = ({
  t,
  navigate,
  handleRestoreClick,
  isPending,
}: {
  t: (key: string) => string;
  navigate: (path: string) => void;
  handleRestoreClick: (supplier: Supplier) => void;
  isPending: boolean;
}): GridColDef[] => [
  getGenericGridColumns(t).supplierName(),
  getGenericGridColumns(t).email(),
  getGenericGridColumns(t).phoneNumber(),
  {
    ...getGenericGridColumns(t).status(),
    renderCell: (params) => {
      const supplier = params.row as Supplier;
      const isDeleted = supplier.isDeleted;
      const youHaveDues = supplier.remainingAmount !== 0;
      const completePaid =
        supplier.remainingAmount === 0 && supplier.totalDueAmount !== 0;

      const getLabel = () => {
        if (isDeleted) return t("Messages.isDeleted");
        if (youHaveDues) return t("Messages.youHaveDues");
        if (completePaid) return t("Messages.paid");
        return t("Messages.noAction");
      };

      return (
        <StatusChip
          size="small"
          label={getLabel()}
          bgColor={
            isDeleted
              ? "#F7B538"
              : youHaveDues
              ? "#f44336"
              : completePaid
              ? "#2e7d32"
              : "#9e9e9e"
          }
          textColor="#fff"
          sx={{ minWidth: "70px" }}
        />
      );
    },
  },
  {
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const supplier = params.row as Supplier;
      const isActive = Boolean(!supplier.isDeleted);

      return (
        <CellActionButton
          row={supplier}
          isActive={isActive}
          onActiveClick={() => navigate(`/me/suppliers/${supplier.id}`)}
          onInactiveClick={handleRestoreClick}
          isPending={isPending}
        />
      );
    },
  },
];
