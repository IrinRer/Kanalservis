import { AxiosError } from 'axios';

export const PHOTOTS_SLICE_ALIAS = 'photos';

export interface IPhotosItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IPhotosReducer {
    photos: Array<IPhotosItem>;
    loading: boolean;
    error: AxiosError | null;
}
