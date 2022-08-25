import Auth from "component/Auth";
import { ROUTES } from "constants/routes";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { getAuth } from "store/auth/selectors";

const AuthPage = () => {
  const isAuth: string = useSelector(getAuth);
  const isAutnInStorage = window.sessionStorage.getItem("auth");

  return (
    <div>
      {isAuth === "yes" || isAutnInStorage === "yes" ? (
        <Navigate to={ROUTES.home.path} />
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default AuthPage;
