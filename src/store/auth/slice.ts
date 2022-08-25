import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLoginFromEnv, getPasswordFromEnv } from "helpers/common";
import { AUTHORIZATION_SLICE_ALIAS, IAuthSlice } from "./types";

const initialState: IAuthSlice = {
  auth: "",
  login: getLoginFromEnv(),
  password: getPasswordFromEnv(),
  inputLogin: undefined,
  inputPassword: undefined,
};

export const authorizationSlice = createSlice({
  name: AUTHORIZATION_SLICE_ALIAS,
  initialState,
  reducers: {
    authorization: (state) => {
      if (
        state.inputLogin === state.login &&
        state.inputPassword === state.password
      ) {
        state.auth = "yes";
      } else {
        state.auth = "no";
      }
    },
    changeInputLogin: (state, action: PayloadAction<string>) => {
      state.inputLogin = action.payload;
    },
    changeInputPassword: (state, action: PayloadAction<string>) => {
      state.inputPassword = action.payload;
    },
    resetAuthorization: (state) => {
      state.auth = initialState.auth;
      state.inputLogin = initialState.inputLogin;
      state.inputPassword = initialState.inputLogin;
    },
  },
});

export const {
  authorization,
  resetAuthorization,
  changeInputLogin,
  changeInputPassword,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
