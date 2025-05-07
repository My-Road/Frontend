import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  content: string|undefined;
}

export default function TextPreviewDialog({ open, onClose, title = "Details", content }: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1" whiteSpace="pre-wrap">
          {content}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
