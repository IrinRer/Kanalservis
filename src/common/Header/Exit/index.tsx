import React from "react";
import { ReactComponent as Exit } from "../../../icons/exit.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetAuthorization } from "store/auth/slice";

const Button = styled.button`
  border: none;
  background: none;
  }
`;
const ExitComponent = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(resetAuthorization());
  };

  return (
    <Button onClick={handleClick}>
      <Exit />
    </Button>
  );
};

export default ExitComponent;
