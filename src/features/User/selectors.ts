import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = ({ user }: RootState) => user;

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.uid !== ""
);

export const selectUserRole = createSelector(
  selectUser,
  (user) => user.role
);

export const selectUserEmail = createSelector(selectUser, (user) => user.email);
