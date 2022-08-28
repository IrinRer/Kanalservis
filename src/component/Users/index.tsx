import UsersCardContainer from 'container/UsersCardContainer';
import React from 'react';
import styled from 'styled-components';

const WrapperUsers = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

const Users = () => {
  return (
    <WrapperUsers>
      <UsersCardContainer />
    </WrapperUsers>
  );
};

export default Users;
