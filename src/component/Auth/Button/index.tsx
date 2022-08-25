import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CREAM_COLOR, CREAM_COLOR_LIGHT } from "../../../constants/common";
import { authorization } from "../../../store/auth/slice";

const ButtonComponent = () => {
  const dispatch = useDispatch();

  const Button = styled.button`
    background-color: ${CREAM_COLOR};
    border-radius: 10px;
    border: none;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    padding: 5px;
    width: 213px;
    margin: auto;
    cursor: pointer;

    &:hover {
      background-color: ${CREAM_COLOR_LIGHT};
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorization());
  };
  return <Button onClick={handleSubmit}>Submit</Button>;
};

export default ButtonComponent;
