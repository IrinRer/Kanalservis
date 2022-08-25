import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getPosts } from 'store/posts/selectors';
import { IPostsItem } from 'store/posts/types';

interface IProps {
  id: number;
}
const Body: React.FC<IProps> = ({ id }) => {
  const posts = useAppSelector(getPosts);
  return (
    <>
      {posts.map((item: IPostsItem) => {
        if (item.userId === id) {
          return <p>{item.body}</p>;
        }
        return null;
      })}
    </>
  );
};

export default Body;
