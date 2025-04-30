import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogState } from "./types";

const initialState: DialogState = {
  isOpen: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{
        title: string;
        message: string;
        onConfirm: () => void;
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.onConfirm = action.payload.onConfirm;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.title = undefined;
      state.message = undefined;
      state.onConfirm = undefined;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;