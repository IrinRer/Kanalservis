import React from 'react';
import styled from 'styled-components';
import ExitComponent from './Exit';

interface IProps {
  userName?: string;
  mobile: boolean;
  table: boolean;
}

const Paragraph = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`;

const Header: React.FC<IProps> = ({ userName, mobile, table }) => {
  return (
    <>
      {!table ? <Paragraph>{userName}</Paragraph> : null}
      {!mobile ? <ExitComponent /> : null}
    </>
  );
};

export default Header;
