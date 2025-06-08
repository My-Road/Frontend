import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = ({ user }: RootState) => user;

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.uid !== ""
);

export const selectUserRole = createSelector(
  selectUser,
  (user) => user.userRole
);

export const isManagerRole = createSelector(selectUser, (user) => user.userRole==="Manager")

export const selectUserEmail = createSelector(selectUser, (user) => user.email);

export const selectUserPhone = createSelector(selectUser, (user) => user.phone);
