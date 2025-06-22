import { GridColDef } from "@mui/x-data-grid";
import { Customer } from "@/types";
import { getGenericGridColumns } from "@/constants/gridColumns";
import { StatusChip } from "@/components/StatusChip/StatusChip";
import CellActionButton from "@/components/CellActionButton";

export const getCustomerGridColumns = ({
  t,
  navigate,
  handleRestoreClick,
  isPending,
  isManager,
}: {
  t: (key: string) => string;
  navigate: (path: string) => void;
  handleRestoreClick: (customer: Customer) => void;
  isPending: boolean;
  isManager: boolean;
}): GridColDef[] => {
  const columns: GridColDef[] = [
    getGenericGridColumns(t).customerName(),
    getGenericGridColumns(t).phoneNumber(),
    getGenericGridColumns(t).address(),
  ];

  if (!isManager) {
    columns.push({
      ...getGenericGridColumns(t).status(),
      renderCell: (params) => {
        const customer = params.row as Customer;
        const isDeleted = customer.isDeleted;
        const hasDue = customer.remainingAmount !== 0;
        const completePaid =
          customer.remainingAmount === 0 && customer.totalDueAmount !== 0;

        const getLabel = () => {
          if (isDeleted) return t("Messages.isDeleted");
          if (hasDue) return t("Messages.heHasDues");
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
                : hasDue
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
    });
  }

  columns.push({
    ...getGenericGridColumns(t).actions(),
    renderCell: (params) => {
      const customer = params.row as Customer;
      const isActive = !customer.isDeleted;

      return (
        <CellActionButton
          row={customer}
          isActive={isActive}
          onActiveClick={() => navigate(`/me/customer/${customer.id}`)}
          onInactiveClick={handleRestoreClick}
          isPending={isPending}
        />
      );
    },
  });

  return columns;
};
