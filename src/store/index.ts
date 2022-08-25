import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './users/slice';
import AuthorizationReducer from './auth/slice';
import PostsReducer from './posts/slice';
import PhotosReducer from './photos/slice';

import { IPhotosReducer } from './photos/types';
import { IPostsReducer } from './posts/types';
import { IAuthSlice } from './auth/types';
import { IUsersReducer } from './users/types';

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    users: UsersReducer,
    posts: PostsReducer,
    photos: PhotosReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  users: IUsersReducer;
  posts: IPostsReducer;
  photos: IPhotosReducer;
};

export type AppDispatch = typeof store.dispatch;
