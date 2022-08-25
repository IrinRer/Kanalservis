import Users from "component/Users";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersAction } from "store/users/thunk";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  })
  return <Users/>;
};

export default Home;
