import { RootState } from 'store';

export const getPhotos = (state: RootState) =>  state.photos.photos;