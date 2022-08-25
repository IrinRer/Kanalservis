import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Users = () => {
  const Wrapper = styled.div`
    display: flex;
  `;
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};

export default Users;
