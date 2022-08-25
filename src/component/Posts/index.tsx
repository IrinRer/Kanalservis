import React from 'react';
import { useWindowSize } from 'customHooks/useWindowSize';
import { MOBILE_SIZE } from 'constants/common';
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
  const windowSize = useWindowSize();

  return (
    <>
      <WrapperTitle>
        <Title id={id} />
      </WrapperTitle>
      {windowSize.width > MOBILE_SIZE ? (
        <WrapperBody>
          <Body id={id} />
        </WrapperBody>
      ) : null}
    </>
  );
};

export default Posts;
