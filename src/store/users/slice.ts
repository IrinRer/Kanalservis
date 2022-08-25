import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { fetchUsersAction } from "./thunk";
import { IPayloadUsers, IUsersReducer, USERS_SLICE_ALIAS } from "./type";

const initialState: IUsersReducer = {
  users: {},
  loading: false,
  error: null,
};

export const UsersSlice = createSlice({
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
      { payload }: PayloadAction<Array<IPayloadUsers>>
    ) => {
      state.users = payload;
      state.loading = false;
    },
    [fetchUsersAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>
    ) => {
      state.users = {
        id: "",
        name: "",
        company: "",
      };
      state.loading = false;
      state.error = payload;
    },
  },
});

export default UsersSlice.reducer;
