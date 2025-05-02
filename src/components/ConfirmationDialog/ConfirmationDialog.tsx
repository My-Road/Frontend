// components/ConfirmationDialog.tsx
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
} from "@mui/material";
import { Trans } from "react-i18next";
import { LoadingButton } from "@mui/lab";

const ConfirmationDialog = () => {
  const dispatch = useAppDispatch();
  const { isOpen, title, message, isPending,onConfirm } =
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
      sx={{ padding: "1rem" }}
      fullWidth
    >
      {title && message && (
        <>
          <DialogTitle>
            <Box>
              <Typography variant="h5" fontWeight="bold" textAlign="center">
                {title}
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box>
              <Typography variant="h5" fontWeight="500">
                {message}
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              width="100%"
              gap={2}
            >
              <LoadingButton
                onClick={handleConfirm}
                color="primary"
                variant="contained"
                autoFocus
                loading={isPending}
              >
                <Trans i18nKey="Buttons.confirm">confirm</Trans>
              </LoadingButton>
              <Button onClick={handleClose} color="error" variant="contained">
                <Trans i18nKey="Buttons.cancel">Cancel</Trans>
              </Button>
            </Box>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ConfirmationDialog;
