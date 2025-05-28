import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ToggleUserStatusButtonProps<T> {
  row: T;
  isActive: boolean;
  onActivate: (row: T) => void;
  onDeactivate: (row: T) => void;
  isPending?: boolean;
  activateLabelKey?: string;
  deactivateLabelKey?: string;
}

export default function ToggleUserStatusButton<T>({
  row,
  isActive,
  onActivate,
  onDeactivate,
  isPending = false,
  activateLabelKey = "Buttons.deactivate",
  deactivateLabelKey = "Buttons.activate",
}: ToggleUserStatusButtonProps<T>) {
  const { t } = useTranslation();

  const handleClick = () => {
    if (isActive) {
      onDeactivate(row); 
    } else {
      onActivate(row); 
    }
  };

  return (
    <Button
      variant="text"
      sx={{ color: !isActive ? "error.main" : "success.main" }} 
      size="small"
      onClick={handleClick}
      disabled={isPending}
    >
      {t(isActive ? deactivateLabelKey : activateLabelKey)}
    </Button>
  );
}

