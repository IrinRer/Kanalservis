import React from "react";
import { useAppSelector } from "customHooks/redux/useAppSelector";
import styled from "styled-components";
import { CREAM_COLOR, MOBILE_SIZE } from "../../constants/common";
import { useWindowSize } from "../../customHooks";
import { getLoginAuth } from "../../store/auth/selectors";
import ExitComponent from "./Exit";
import { ReactComponent as Logo } from "../../icons/logo.svg";
import { ReactComponent as LogoShort } from "../../icons/logo_short.svg";

const Header = () => {
  const userName: string = useAppSelector(getLoginAuth);
  const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    width: 100%;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: ${(props) => props.color || "none"};

    svg {
      cursor: pointer;
    }
  `;

  const size = useWindowSize();

  return (
    <Wrapper color={CREAM_COLOR}>
      {size.width <= MOBILE_SIZE ? <LogoShort /> : <Logo />}
      <Wrapper>
        <p>{userName}</p>
        {userName ? <ExitComponent /> : null}
      </Wrapper>
    </Wrapper>
  );
};

export default Header;
