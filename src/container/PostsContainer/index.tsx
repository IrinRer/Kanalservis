import React from 'react';
import { useWindowSize } from 'customHooks/useWindowSize';
import { MOBILE_SIZE } from 'constants/common';
import styled from 'styled-components';
import Body from 'component/Posts/Body';
import TitleContainer from './TitleContainer';
import BodyContainer from './BodyContainer';

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

const PostsContainer: React.FC<IProps> = ({ id }) => {
  const windowSize = useWindowSize();

  return (
    <>
      <WrapperTitle>
        <TitleContainer id={id} />
      </WrapperTitle>
      {windowSize.width > MOBILE_SIZE ? (
        <WrapperBody>
          <BodyContainer id={id} />
        </WrapperBody>
      ) : null}
    </>
  );
};

export default PostsContainer;
