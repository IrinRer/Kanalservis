import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetAuthorization } from "store/auth/slice";
import { ReactComponent as Exit } from "../../../icons/exit.svg";

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
