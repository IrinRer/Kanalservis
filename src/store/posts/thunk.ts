import { api } from 'network';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { POSTS_SLICE_ALIAS } from './types';

export const fetchPostsAction = createAsyncThunk(
  `${POSTS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/posts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
