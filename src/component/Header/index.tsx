import { MOBILE_SIZE, TABLE_SIZE } from 'constants/common';
import { useWindowSize } from 'customHooks/useWindowSize';
import React from 'react';
import styled from 'styled-components';
import ExitComponent from './Exit';

interface IProps {
  userName?: string;
}

const Paragraph = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`;

const Header: React.FC<IProps> = ({ userName }) => {
  const size = useWindowSize();

  return (
    <>
      {size.width > TABLE_SIZE ? <Paragraph>{userName}</Paragraph> : null}
      {size.width > MOBILE_SIZE ? <ExitComponent /> : null}
    </>
  );
};

export default Header;
