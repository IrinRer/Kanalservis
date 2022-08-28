import Users from 'component/Users';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import React, { useEffect } from 'react';
import { fetchPostsAction } from 'store/posts/thunk';
import { fetchUsersAction } from 'store/users/thunk';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
    dispatch(fetchPostsAction());
    // eslint-disable-next-line
  }, []);
  return <Users />;
};

export default Home;
