import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

const Error: React.FC<IProps> = ({ text }) => {
  return (
    <Row>
      <p>{text}</p>
    </Row>
  );
};

export default Error;
