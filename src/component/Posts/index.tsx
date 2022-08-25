import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Body from './Body';

interface IProps {
  id: number;
}

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Posts: React.FC<IProps> = ({ id }) => {
  return (
    <>
      <WrapperTitle>
        <Title id={id} />
      </WrapperTitle>
      <WrapperBody>
        <Body id={id} />
      </WrapperBody>
    </>
  );
};

export default Posts;
