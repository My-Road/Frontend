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
    updateUserSession: (state, action: PayloadAction<User>) => {
      state = { ...action.payload };
      return state;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      Object.assign(state, action.payload);
    },
    logout: (state) => {
      state = initialState;
      clearSession();
      return state;
    },
  },
});

export const { login, updateUserSession, updateUser, logout } = userSlice.actions;

export default userSlice.reducer;

