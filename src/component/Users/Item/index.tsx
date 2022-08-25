import { useAppSelector } from "customHooks/redux/useAppSelector";
import React from "react";
import { getUsers } from "store/users/selectors";
import styled from "styled-components";

const Item = () => {
  const users = useAppSelector(getUsers);
  console.log(users);
  return <p>данные</p>;
};

export default Item;
