import { Box, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NotesIcon from "@mui/icons-material/Notes";
import { useTranslation } from "react-i18next";

export interface DataGridActionsProps<T> {
  row: T;
  onDelete?: (row: T) => void;
  onEdit?: (row: T) => void;
  onViewNotes?: (row: T) => void;
}

export default function DataGridActions<T>({
  row,
  onDelete,
  onEdit,
  onViewNotes,
}: DataGridActionsProps<T>) {
  const {t} = useTranslation();

  return (
    <Box display="flex" justifyContent="center" gap={1} width="100%">
      {onDelete && (
        <Tooltip title={t("Buttons.delete")} arrow>
          <IconButton
            color="error"
            onClick={() => onDelete(row)}
            sx={{ minWidth: 40, flex: 1 }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
      {onEdit && (
        <Tooltip title={t("Buttons.edit")} arrow>
          <IconButton
            color="warning"
            onClick={() => onEdit(row)}
            sx={{ minWidth: 40, flex: 1 }}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      )}
      {onViewNotes && (
        <Tooltip title={t("Buttons.notes")} arrow>
          <IconButton
            color="default"
            onClick={() => onViewNotes(row)}
            sx={{ minWidth: 40, flex: 1 }}
          >
            <NotesIcon />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
