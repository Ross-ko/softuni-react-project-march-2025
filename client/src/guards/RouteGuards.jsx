
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";

export const PrivateRoute = () => {
  const { user } = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  const { user } = useContext(UserContext);
  return !user ? <Outlet /> : <Navigate to="/" />;
};
