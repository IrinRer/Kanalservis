import React, { useEffect, useRef } from 'react';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { BLUE_WATER, GRAY } from 'constants/common';
import styled from 'styled-components';
import ButtonComponent from './Button';
import { changeInputLogin, changeInputPassword } from '../../store/auth/slice';
import { getAuth, getLogin, getPassword } from '../../store/auth/selectors';

const Form = styled.form`
  padding: 20px 10px 10px 10px;
  text-align: center;
  color: ${BLUE_WATER};
  width: 440px;
  font-weight: 800;
  margin: 100px auto;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 5px solid #27569c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media ${(props) => props.theme.phone} {
    width: 90%;
    margin: 50px auto;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  font-size: 24px;
  gap: 10px;
  color: black;
  vertical-align: middle;
  @media ${(props) => props.theme.phone} {
    flex-direction: column;
    text-align: left;
  }
`;

const Input = styled.input`
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

const Auth = () => {
  const dispatch = useAppDispatch();
  const refInput = useRef<any>();
  const loginValue: string | undefined = useAppSelector(getLogin);
  const isAuth: string = useAppSelector(getAuth);
  const passwordValue: string | undefined = useAppSelector(getPassword);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  const handleChangeLogin = (e) => {
    dispatch(changeInputLogin(e.target.value));
  };

  const handleChangePassword = (e) => {
    dispatch(changeInputPassword(e.target.value));
  };

  return (
    <Form>
      Autorization
      <Label>
        login
        <Input
          type="email"
          onChange={handleChangeLogin}
          value={loginValue}
          color={isAuth !== 'no' ? BLUE_WATER : 'red'}
          ref={refInput}
        />
      </Label>
      <Label>
        password
        <Input
          type="password"
          onChange={handleChangePassword}
          value={passwordValue}
          color={isAuth !== 'no' ? BLUE_WATER : 'red'}
        />
      </Label>
      <ButtonComponent />
    </Form>
  );
};

export default Auth;
