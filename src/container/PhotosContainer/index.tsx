import { MOBILE_SIZE } from 'constants/common';
import { useWindowSize } from 'customHooks/useWindowSize';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import React, { useEffect } from 'react';
import { getPhotos } from 'store/photos/selectors';
import { fetchPhotosAction } from 'store/photos/thunk';
import ImgComponenet from 'component/ImgComponent';

interface IProps {
  id: number;
}

const PhotosContainer: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const windowSize = useWindowSize();
  const photos = useAppSelector(getPhotos);

  useEffect(() => {
    dispatch(fetchPhotosAction(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {photos.map((item) => {
        if (item.id === id && windowSize.width > MOBILE_SIZE) {
          return <ImgComponenet src={item.thumbnailUrl} key={item.id} />;
        }
        return null;
      })}
    </>
  );
};

export default PhotosContainer;
