import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import React, { useEffect } from 'react';
import { getPhotos } from 'store/photos/selectors';
import { fetchPhotosAction } from 'store/photos/thunk';
import styled from 'styled-components';

const Img = styled.img`
  width: 150px;
  height: 150px;
`;

interface IProps {
  id: number;
}

const Photos: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(getPhotos);

  useEffect(() => {
    dispatch(fetchPhotosAction(id));
  }, []);

  return (
    <>
      {photos.map((item) => {
        if (item.id === id) {
          return <Img src={item.thumbnailUrl} />;
        }
        return null;
      })}
    </>
  );
};

export default Photos;
