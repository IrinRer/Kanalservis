import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getPosts } from 'store/posts/selectors';
import { IPostsItem } from 'store/posts/types';
import styled from 'styled-components';

interface IProps {
  id: number;
}

const Wrapper = styled.div`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const Title: React.FC<IProps> = ({ id }) => {
  const posts = useAppSelector(getPosts);
  return (
    <Wrapper>
      Title:
      {posts.map((item: IPostsItem) => {
        if (item.userId === id) {
          return <span key={item.title}>{item.title}</span>;
        }
        return null;
      })}
    </Wrapper>
  );
};

export default Title;
