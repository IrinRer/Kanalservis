import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getPosts } from 'store/posts/selectors';
import { IPostsItem } from 'store/posts/types';
import styled from 'styled-components';

interface IProps {
  id: number;
}

const Paragraph = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
`;

const BodyContainer: React.FC<IProps> = ({ id }) => {
  const posts = useAppSelector(getPosts);
  return (
    <Paragraph key={id}>
      {posts.map((item: IPostsItem) => {
        if (item.userId === id) {
          return item.body;
        }
        return null;
      })}
    </Paragraph>
  );
};

export default BodyContainer;
