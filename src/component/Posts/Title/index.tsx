import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getPosts } from 'store/posts/selectors';
import { IPostsItem } from 'store/posts/types';

interface IProps {
  id: number;
}
const Title: React.FC<IProps> = ({ id }) => {
  const posts = useAppSelector(getPosts);
  return (
    <div>
      {' '}
      Title:
      {posts.map((item: IPostsItem) => {
        if (item.userId === id) {
          return <span>{item.title}</span>;
        }
        return null;
      })}
    </div>
  );
};

export default Title;
