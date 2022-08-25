import { configureStore } from "@reduxjs/toolkit";
import AuthorizationSlice from "./auth/slice";
import UsersSlice from "./users/slice";

export const store = configureStore({
  reducer: {
    auth: AuthorizationSlice,
    users: UsersSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
