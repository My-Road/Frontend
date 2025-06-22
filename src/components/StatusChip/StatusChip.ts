import { Chip, styled } from "@mui/material";
import { StatusChipProps } from "./types";

export const StatusChip = styled(Chip, {
  name: "StatusChip",
  slot: "Root",
  shouldForwardProp: (prop) => prop !== "bgColor" && prop !== "textColor",
})<StatusChipProps>(({ bgColor, textColor }) => ({
  background: bgColor || "transparent",
  color: textColor || "#000",
  border: "none",
  fontWeight: 600,
  transition: "none",
  "& .MuiChip-label": {
    color: textColor || "#000",
  },
  "&:hover": {
    background: bgColor || "transparent",
  },
}));
