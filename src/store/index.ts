import { configureStore } from "@reduxjs/toolkit";
import AuthorizationSlice from "./auth/slice";

export const store = configureStore({
  reducer: {
    auth: AuthorizationSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});
