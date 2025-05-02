import {
    closeDialog,
    openDialog,
    setDialogPending,
    selectDialogState,
  } from "@/features/ConfirmationDialog";
import { DialogState } from "@/features/ConfirmationDialog/types";
  import { useAppDispatch, useAppSelector } from "@/store";
  
  export const useConfirmationDialog = () => {
    const dispatch = useAppDispatch();
    const dialogState = useAppSelector(selectDialogState);
  
    const showConfirmationDialog = (options: DialogState) => {
      dispatch(openDialog(options));
    };
  
    const hideConfirmationDialog = () => {
      dispatch(closeDialog());
    };
  
    const setPending = (pending: boolean) => {
      dispatch(setDialogPending(pending));
    };
  
    return {
      ...dialogState,
      showConfirmationDialog,
      hideConfirmationDialog,
      setPending,
    };
  };
  