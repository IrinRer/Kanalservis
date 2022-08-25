import React from 'react';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import styled from 'styled-components';
import { CREAM_COLOR, MOBILE_SIZE, TABLE_SIZE } from '../../constants/common';
import { useWindowSize } from '../../customHooks/useWindowSize';
import { getLoginAuth } from '../../store/auth/selectors';
import ExitComponent from './Exit';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as LogoShort } from '../../assets/icons/logo_short.svg';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  font-weight: 700;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background-color: ${(props) => props.color || 'none'};

  svg {
    cursor: pointer;
  }
`;

const WrapperParagraph = styled.div`
  display: flex;
  align-items: center;
`;

const Paragraph = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin-right: 30px;
`; 

const Header = () => {
  const userName: string | undefined = useAppSelector(getLoginAuth);

  const size = useWindowSize();

  return (
    <Wrapper color={CREAM_COLOR}>
      {size.width <= MOBILE_SIZE ? <LogoShort /> : <Logo />}
      <WrapperParagraph>
        {size.width > TABLE_SIZE ? <Paragraph>{userName}</Paragraph> : null}
        {userName ? <ExitComponent /> : null}
      </WrapperParagraph>
    </Wrapper>
  );
};

export default Header;
