import appSettingsReducer from "@/features/AppSettings/appSettingsSlice";
import snackbarReducer from "@/features/Snackbar/snackbarSlice";
import userReducer from "@/features/User/userSlice";
import { combineReducers } from "@reduxjs/toolkit";
import confirmationDialogReducer from "@/features/ConfirmationDialog/confirmationDialogSlice";

const RootReducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  appSettings: appSettingsReducer,
  confirmationDialog: confirmationDialogReducer,
});

export default RootReducer;
