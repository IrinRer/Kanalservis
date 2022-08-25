import { BLUE_WATER } from 'constants/common';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import React from 'react';
import { getUsers } from 'store/users/selectors';
import { IUserItem } from 'store/users/type';
import styled from 'styled-components';

const Item = () => {
  const users = useAppSelector(getUsers);
  const Wrapper = styled.div`
    width: 467px;
    padding: 30px;
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
      {users.map((item: IUserItem) => (
        <Wrapper>
          <Paragraph>Auth: {item.name}</Paragraph>
          <Paragraph>Company: {item.company.name} </Paragraph>
        </Wrapper>
      ))}
    </>
  );
};

export default Item;
