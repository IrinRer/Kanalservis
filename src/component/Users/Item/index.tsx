import React from 'react';
import Posts from 'component/Posts';
import { BLUE_WATER } from 'constants/common';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getUsers } from 'store/users/selectors';
import { IUserItem } from 'store/users/types';
import styled from 'styled-components';
import Photos from 'component/Photos';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { fetchPhotosAction } from 'store/photos/thunk';

const Item = () => {
  const users = useAppSelector(getUsers);
  const dispatch = useAppDispatch();
  const Wrapper = styled.div`
    width: 467px;
    padding: 30px;
    height: 388px;
    border: 5px solid ${BLUE_WATER};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  `;
  const Paragraph = styled.p`
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
  `;
  return (
    <>
      {users.map((item: IUserItem) => {
        // dispatch(fetchPhotosAction(item.id));

       return (
        <Wrapper key={item.name}>
        <Paragraph>Auth: {item.name}</Paragraph>
        <Paragraph>Company: {item.company.name} </Paragraph>
        <Posts id={item.id} />
        <Photos id={item.id}/>
      </Wrapper>
       )
})}
    </>
  );
};

export default Item;
