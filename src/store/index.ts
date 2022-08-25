import { configureStore } from "@reduxjs/toolkit";
import AuthorizationReducer from "./auth/slice";
import UsersReducer from "./users/slice";

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    users: UsersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
