import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getPosts } from 'store/posts/selectors';
import { IPostsItem } from 'store/posts/types';
import styled from 'styled-components';
import TitleComponent from 'component/Posts/Title';

interface IProps {
  id: number;
}

const Wrapper = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const TitleContainer: React.FC<IProps> = ({ id }) => {
  const posts = useAppSelector(getPosts);
  return (
    <Wrapper>
      Title:
      {posts.map((item: IPostsItem) => {
        if (item.userId === id) {
          return <TitleComponent key={item.title} title={item.title} />;
        }
        return null;
      })}
    </Wrapper>
  );
};

export default TitleContainer;
