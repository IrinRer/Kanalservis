import { configureStore } from '@reduxjs/toolkit';
import { IPostsReducer } from './posts/types';
import AuthorizationReducer from './auth/slice';
import PostsReducer from './posts/slice';
import { IAuthSlice } from './auth/types';
import UsersReducer from './users/slice';
import { IUsersReducer } from './users/type';

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    users: UsersReducer,
    posts: PostsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  users: IUsersReducer;
  posts: IPostsReducer;
};

export type AppDispatch = typeof store.dispatch;
