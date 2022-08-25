import { api } from "network";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { USERS_SLICE_ALIAS } from "./type";

export const fetchUsersAction = createAsyncThunk(
  `${USERS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get("/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
