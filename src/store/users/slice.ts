import { IPayloadUsers, IUsersReducer, USERS_SLICE_ALIAS } from "./type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { fetchUsersAction } from "./thunk";

const initialState: IUsersReducer = {
  id: "",
  name: "",
  company: "",
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
      { payload }: PayloadAction<IPayloadUsers>
    ) => {
      state.id = payload.id;
      state.name = payload.name;
      state.company = payload.nameCompany;
      state.loading = false;
    },
    [fetchUsersAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>
    ) => {
      state.id = "";
      state.name = "";
      state.company = "";
      state.loading = false;
      state.error = payload;
    },
  },
});

export default UsersSlice.reducer;
