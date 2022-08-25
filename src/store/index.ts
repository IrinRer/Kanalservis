import { configureStore } from "@reduxjs/toolkit";
import AuthorizationReducer from "./auth/slice";
import { IAuthSlice } from "./auth/types";
import UsersReducer from "./users/slice";
import { IUsersReducer } from "./users/type";

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    users: UsersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = {
  auth: IAuthSlice,
  users: IUsersReducer
};

export type AppDispatch = typeof store.dispatch;
