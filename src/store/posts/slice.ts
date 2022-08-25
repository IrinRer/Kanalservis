import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IPostsItem, POSTS_SLICE_ALIAS } from './types';
import { fetchPostsAction } from './thunk';

const initialState: any = {
  posts: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: POSTS_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostsAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPostsAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<Array<IPostsItem>>,
    ) => {
      state.posts = payload.filter(
        (item: IPostsItem, i: number) =>
          payload.findIndex((a: IPostsItem) => a.userId === item.userId) === i,
      );
      state.loading = false;
    },
    [fetchPostsAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.posts = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default usersSlice.reducer;
