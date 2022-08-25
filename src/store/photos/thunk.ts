import { api } from 'network';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { PHOTOTS_SLICE_ALIAS } from './types';

export const fetchPhotosAction = createAsyncThunk(
  `${PHOTOTS_SLICE_ALIAS}/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await api().get('/photos');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
