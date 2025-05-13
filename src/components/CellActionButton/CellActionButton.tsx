import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface CellActionButtonProps<T> {
  row: T;
  isActive: boolean;
  onActiveClick: (row: T) => void;
  onInactiveClick: (row: T) => void;
  isPending?: boolean;
  activeLabelKey?: string;
  inactiveLabelKey?: string;
}

export default function CellActionButton<T>({
  row,
  isActive,
  onActiveClick,
  onInactiveClick,
  isPending = false,
  activeLabelKey = "Buttons.viewDetails",
  inactiveLabelKey = "Buttons.restoreEmployee",
}: CellActionButtonProps<T>) {
  const { t } = useTranslation();

  const handleClick = () => {
    if (isActive) {
      onActiveClick(row);
    } else {
      onInactiveClick(row);
    }
  };

  return (
    <Button
      variant="text"
      sx={{ color: isActive ? "info.main" : "warning.main" }}
      size="small"
      onClick={handleClick}
      disabled={!isActive && isPending}
    >
      {t(isActive ? activeLabelKey : inactiveLabelKey)}
    </Button>
  );
}
