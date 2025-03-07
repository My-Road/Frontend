import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = ({ user }: RootState) => user;

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.id !== ""
);

export const selectUserBranchId = createSelector(
  selectUser,
  (user) => user.branchId
);
