import { AxiosError } from 'axios';

export const POSTS_SLICE_ALIAS = 'posts';

export interface IPostsItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsReducer {
  posts: Array<IPostsItem>;
  loading: boolean;
  error: AxiosError | null;
}
