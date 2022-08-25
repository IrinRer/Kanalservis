import { AUTHORIZATION_SLICE_ALIAS, IAuthSlice } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOGIN, PASSWORD } from "../../constants/common";

const initialState: IAuthSlice = {
  auth: "",
  login: LOGIN,
  password: PASSWORD,
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
