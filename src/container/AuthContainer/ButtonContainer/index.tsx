import React from 'react';
import ButtonComponent from 'component/Auth/Button';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { authorization } from 'store/auth/slice';

const ButtonContainer = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authorization());
  };
  return <ButtonComponent handleSubmit={handleSubmit} />;
};

export default ButtonContainer;
