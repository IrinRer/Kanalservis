import { GRAY } from 'constants/common';
import React, { useEffect, useRef } from 'react';
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
  type: string;
}

const InputComponent: React.FC<IProps> = ({
  value,
  handleChange,
  color,
  type,
}) => {
  const refInput = useRef<any>();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <InputStyle
      type={type}
      onChange={handleChange}
      value={value}
      color={color}
      ref={refInput}
    />
  );
};

export default InputComponent;
