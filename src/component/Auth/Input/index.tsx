import { GRAY } from 'constants/common';
import React, { useRef } from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  border: 4px solid black;
  border-color: ${(props) => props.color};
  border-radius: 10px;
  padding: 3px;
  font-weight: 800;
  background-color: ${GRAY};
  font-size: 24px;
  @media ${(props) => props.theme.phone} {
    width: 100%;
  }

  &:focus {
    outline: none;
  }
`;

interface IProps {
  value?: string;
  handleChange: (e: any) => void;
  color: string;
}

const InputComponent: React.FC<IProps> = ({ value, handleChange, color }) => {
  const refInput = useRef<any>();
  return (
    <InputStyle
      type="password"
      onChange={handleChange}
      value={value}
      color={color}
      ref={refInput}
    />
  );
};

export default InputComponent;
