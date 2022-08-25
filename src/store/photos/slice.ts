import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { fetchPhotosAction } from './thunk';
import { PHOTOTS_SLICE_ALIAS, IPhotosItem, IPhotosReducer } from './types';

const initialState: IPhotosReducer = {
  photos: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: PHOTOTS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPhotosAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPhotosAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<IPhotosItem>,
    ) => {
      state.photos.push(payload);
      state.loading = false;
    },
    [fetchPhotosAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.photos = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
