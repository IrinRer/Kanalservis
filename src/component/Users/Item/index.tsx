import React from "react";
import { useSelector } from "react-redux";
import { getUsers } from "store/users/selectors";
import styled from "styled-components";

const Item = () => {
  const users = useSelector(getUsers);
  console.log(users);
  return <p>данные</p>;
};

export default Item;
