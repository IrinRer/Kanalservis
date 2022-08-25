import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Users = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 20px;
  `;
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};

export default Users;
