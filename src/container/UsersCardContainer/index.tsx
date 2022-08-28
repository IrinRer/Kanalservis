import React from 'react';
import { BLUE_WATER } from 'constants/common';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getUsers } from 'store/users/selectors';
import { IUserItem } from 'store/users/types';
import styled from 'styled-components';
import PhotosContainer from 'container/PhotosContainer';
import PostsContainer from 'container/PostsContainer';

const Wrapper = styled.div`
  width: 467px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 5px solid ${BLUE_WATER};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media ${(props) => props.theme.tablet} {
    width: 40%;
  }
`;
const Paragraph = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 30px;
`;

const WrapperParagraph = styled.div`
  @media ${(props) => props.theme.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const UsersCardContainer = () => {
  const users = useAppSelector(getUsers);

  return (
    <>
      {users.map((item: IUserItem) => {
        return (
          <Wrapper key={item.name}>
            <WrapperParagraph>
              <PhotosContainer id={item.id} />
              <Paragraph>Auth: {item.name}</Paragraph>
              <Paragraph>Company: {item.company.name} </Paragraph>
            </WrapperParagraph>
            <PostsContainer id={item.id} />
          </Wrapper>
        );
      })}
    </>
  );
};

export default UsersCardContainer;
