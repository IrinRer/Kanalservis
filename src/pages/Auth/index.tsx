import { ROUTES } from 'constants/routes';
import AuthContainer from 'container/AuthContainer';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getAuth } from 'store/auth/selectors';

const AuthPage = () => {
  const isAuth: string = useSelector(getAuth);

  return (
    <>
      {isAuth === 'yes' ? (
        <Navigate to={ROUTES.home.path} />
      ) : (
        <AuthContainer />
      )}
    </>
  );
};

export default AuthPage;
