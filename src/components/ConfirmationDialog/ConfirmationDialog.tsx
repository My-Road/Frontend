import { useAppDispatch, useAppSelector } from "@/store";
import { closeDialog, selectDialogState } from "@/features/ConfirmationDialog";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  Box,
  IconButton,
  Fade,
} from "@mui/material";
import { Trans } from "react-i18next";
import { LoadingButton } from "@mui/lab";
import { WarningAmberRounded, Close } from "@mui/icons-material";

const ConfirmationDialog = () => {
  const dispatch = useAppDispatch();
  const { isOpen, title, message, isPending, onConfirm } =
    useAppSelector(selectDialogState);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    dispatch(closeDialog());
  };

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      TransitionComponent={Fade}
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      {title && message && (
        <>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 12, top: 12, color: "grey.500" }}
          >
            <Close />
          </IconButton>
          <DialogTitle>
            <Box textAlign="center">
              <WarningAmberRounded
                color="warning"
                sx={{ fontSize: 48, mb: 1 }}
              />
              <Typography variant="h5" fontWeight="bold">
                {title}
              </Typography>
            </Box>
          </DialogTitle>

          <DialogContent>
            <Typography
              variant="body1"
              fontSize="1.1rem"
              textAlign="center"
              color="text.secondary"
            >
              {message}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", my: 2 }}>
            <LoadingButton
              onClick={handleConfirm}
              color="warning"
              variant="contained"
              size="large"
              loading={isPending}
              sx={{ borderRadius: 2, px: 4 }}
            >
              <Trans i18nKey="Buttons.confirm">Confirm</Trans>
            </LoadingButton>
            <Button
              onClick={handleClose}
              color="error"
              variant="contained"
              size="large"
              sx={{ borderRadius: 2, px: 4 }}
            >
              <Trans i18nKey="Buttons.cancel">Cancel</Trans>
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ConfirmationDialog;
