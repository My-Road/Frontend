import { clearSession } from "@/lib/session";
import { User } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  uid: "",
  userName: "",
  phone: "",
  email: "",
  fullName: "",
  userRole: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    updateUserSession: (_state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    logout: (state) => {
      state = initialState;
      clearSession();
      return state;
    },
  },
});

export const { login, updateUserSession, logout } = userSlice.actions;

export default userSlice.reducer;
