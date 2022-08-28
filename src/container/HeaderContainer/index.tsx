import { CREAM_COLOR, MOBILE_SIZE } from 'constants/common';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { useWindowSize } from 'customHooks/useWindowSize';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as LogoShort } from 'assets/icons/logo_short.svg';
import React from 'react';
import { getLoginAuth } from 'store/auth/selectors';
import styled from 'styled-components';
import Header from 'component/Header';

const WrapperHeader = styled.div`
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

const HeaderContainer = () => {
  const userName: string | undefined = useAppSelector(getLoginAuth);
  const size = useWindowSize();

  return (
    <WrapperHeader color={CREAM_COLOR}>
      {size.width <= MOBILE_SIZE ? <LogoShort /> : <Logo />}
      <WrapperParagraph>
        <Header userName={userName} />
      </WrapperParagraph>
    </WrapperHeader>
  );
};

export default HeaderContainer;
