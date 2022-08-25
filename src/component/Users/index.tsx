import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;
`;

const Users = () => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};

export default Users;
