import { Chip, styled } from "@mui/material";
import { StatusChipProps } from "./types";

export const StatusChip = styled(Chip, {
  name: "StatusChip",
  slot: "Root",
  shouldForwardProp: (prop) =>
    prop !== "bgColor" && prop !== "textColor" && prop !== "fontSize",
})<StatusChipProps>(({ bgColor, textColor, fontSize }) => ({
  background: bgColor || "transparent",
  color: textColor || "#000",
  fontWeight: 600,
  fontSize: fontSize || "0.875rem",
  border: "none",
  transition: "none",
  "& .MuiChip-label": {
    color: textColor || "#000",
    fontSize: fontSize || "0.875rem",
  },
  "&:hover": {
    background: bgColor || "transparent",
  },
}));
