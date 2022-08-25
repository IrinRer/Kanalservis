import Auth from "component/Auth";
import React, { ReactElement} from "react";
import { useSelector } from "react-redux";
import { getAuth } from "store/auth/selectors";

interface IRouteProps {
  children: ReactElement;
}

const PrivateRoute: React.FC<IRouteProps> = ({ children: Component }) => {
  const isAuth = useSelector(getAuth);

  return <>{isAuth === "yes" ? Component : <Auth/>}</>;
};

export default PrivateRoute;
