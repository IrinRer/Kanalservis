import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { fetchUsersAction } from "./thunk";
import {  IUserItem, IUsersReducer, USERS_SLICE_ALIAS } from "./types";

const initialState: IUsersReducer = {
  users: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: USERS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsersAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsersAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<IUserItem>>
    ) => {
      state.users = payload;
      state.loading = false;
    },
    [fetchUsersAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>
    ) => {
      state.users = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
